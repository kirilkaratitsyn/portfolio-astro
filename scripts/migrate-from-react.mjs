// One-off migration: reads the translation object from the old React SPA
// (portfolio-react/src/i18n.ts) and writes Astro content files.
//
// Usage: node scripts/migrate-from-react.mjs ../portfolio-react/src/i18n.ts

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { stringify } from 'yaml';

const sourcePath = process.argv[2];
if (!sourcePath) {
  console.error('Pass the path to portfolio-react/src/i18n.ts');
  process.exit(1);
}

const source = fs.readFileSync(sourcePath, 'utf8');
const start = source.indexOf('const resources = ');
const end = source.indexOf('\ni18n\n');
if (start === -1 || end === -1) throw new Error('Could not find resources object');

const resources = vm.runInNewContext(
  `(${source.slice(start + 'const resources = '.length, end).trim().replace(/;$/, '')})`
);

const LOCALES = ['en', 'de', 'uk'];

// Order and pinning rules copied from src/hooks/useCaseStudies.ts and useWorks.ts.
const CASE_STUDY_ORDER = ['bazar-bizar', 'elanora-skin', 'petaljet', 'nimfa', 'indian-affairs', 'silk-tallow'];
const PINNED_PROJECTS = ['ReviewCore', 'MarinePatches', 'White Canvas Earth', 'Lineargent', 'Peter Bijoux', 'M-Oceans'];

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const write = (relative, content) => {
  const file = path.join(root, relative);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};
const frontmatter = (data, body = '') => `---\n${stringify(data, { lineWidth: 0 })}---\n${body ? `\n${body}\n` : ''}`;
const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

// 1. UI strings (everything except the lists that become content collections).
for (const locale of LOCALES) {
  const t = structuredClone(resources[locale].translation);
  delete t.caseStudies.items;
  delete t.works.projects;
  delete t.blog.posts;
  delete t.testimonials; // placeholder reviews with invented names, never rendered
  write(`src/i18n/${locale}.json`, `${JSON.stringify(t, null, 2)}\n`);
}

// 2. Case studies: one Markdown file per locale.
for (const locale of LOCALES) {
  for (const item of resources[locale].translation.caseStudies.items) {
    const { id, slug, ...rest } = item;
    const data = { order: CASE_STUDY_ORDER.indexOf(slug) + 1, ...rest };
    write(`src/content/projects/${locale}/${slug}.md`, frontmatter(data));
  }
}

// 3. Project catalog: one YAML file, descriptions per locale.
const enProjects = resources.en.translation.works.projects;
const sorted = [...enProjects.keys()].sort((a, b) => {
  const pa = enProjects[a];
  const pb = enProjects[b];
  const pinA = PINNED_PROJECTS.indexOf(pa.title);
  const pinB = PINNED_PROJECTS.indexOf(pb.title);
  if (pinA !== -1 || pinB !== -1) {
    return (pinA === -1 ? Infinity : pinA) - (pinB === -1 ? Infinity : pinB);
  }
  if (pa.caseStudySlug && pb.caseStudySlug) {
    return CASE_STUDY_ORDER.indexOf(pa.caseStudySlug) - CASE_STUDY_ORDER.indexOf(pb.caseStudySlug);
  }
  if (Boolean(pa.caseStudySlug) === Boolean(pb.caseStudySlug)) return a - b;
  return pa.caseStudySlug ? -1 : 1;
});

const works = sorted.map((index, position) => {
  const project = enProjects[index];
  const entry = {
    id: slugify(project.title),
    order: position + 1,
    title: project.title,
    url: project.url,
    image: project.image,
  };
  if (project.caseStudySlug) entry.caseStudySlug = project.caseStudySlug;
  entry.tech = Object.fromEntries(
    LOCALES.map((locale) => [locale, resources[locale].translation.works.projects[index].tech])
  );
  return entry;
});
write('src/content/works.yaml', stringify(works, { lineWidth: 0 }));

// 4. Blog posts: one Markdown file per locale, paragraphs become the body.
// `date` stays the localized display string; `publishedAt` is used for sorting.
const publishedAt = Object.fromEntries(
  resources.en.translation.blog.posts.map((post) => {
    const parsed = new Date(`${post.date} 12:00 UTC`);
    return [post.slug, parsed.toISOString().slice(0, 10)];
  })
);
for (const locale of LOCALES) {
  for (const post of resources[locale].translation.blog.posts) {
    const { id, slug, content, ...rest } = post;
    const data = { publishedAt: publishedAt[slug], ...rest };
    write(`src/content/blog/${locale}/${slug}.md`, frontmatter(data, content.join('\n\n')));
  }
}

console.log(
  `Migrated ${LOCALES.length} locales, ${resources.en.translation.caseStudies.items.length} case studies, ` +
    `${works.length} projects, ${resources.en.translation.blog.posts.length} posts.`
);
