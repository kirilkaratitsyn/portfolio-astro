import { localizePath, type Locale, type UI } from '../i18n';
import { getCaseStudies, getLocalPages, getPosts, getWorks } from './content';
import { getServiceRows } from './services';

export type SearchKind = 'project' | 'service' | 'article' | 'page';

/** One entry of the site search, short keys on purpose: k kind, t title, d text, g tags, u address, s shown before anything is typed. */
export interface SearchItem {
  k: SearchKind;
  t: string;
  d: string;
  g: string;
  u: string;
  s?: 1;
}

/** What the search looks through for one language: pages, services, case studies and articles. Built at build time, no tracking. */
export async function getSearchIndex(locale: Locale, t: UI): Promise<SearchItem[]> {
  const to = (path: string) => localizePath(locale, path);
  const [cases, posts, works, locals] = await Promise.all([getCaseStudies(locale), getPosts(locale), getWorks(locale), getLocalPages(locale)]);
  const rows = await getServiceRows(locale, t, works);

  const pages: SearchItem[] = [
    { k: 'page', t: t.header.works, d: '', g: '', u: to('/projects'), s: 1 },
    { k: 'page', t: t.header.services, d: t.servicesIndex.seoDescription, g: '', u: to('/services'), s: 1 },
    ...(posts.length ? [{ k: 'page' as const, t: t.header.blog, d: t.blog.subtitle, g: '', u: to('/blog'), s: 1 as const }] : []),
    { k: 'page', t: t.faq.title, d: '', g: '', u: to('/#faq'), s: 1 },
    { k: 'page', t: t.header.contact, d: '', g: '', u: to('/#contact'), s: 1 },
  ];
  const services: SearchItem[] = [
    ...rows.map((row) => ({ k: 'service' as const, t: row.title, d: row.description, g: row.tags.join(' '), u: row.page ? to(`/services/${row.page.slug}`) : row.href })),
    ...locals.map((page) => ({ k: 'service' as const, t: page.title, d: page.description, g: page.area?.nearby.join(' ') ?? '', u: to(`/services/${page.slug}`) })),
  ];
  const projects: SearchItem[] = cases.map((c) => ({ k: 'project', t: c.title, d: c.summary, g: c.tags.join(' '), u: to(`/projects/${c.slug}`) }));
  const articles: SearchItem[] = posts.map((p, index) => ({ k: 'article', t: p.title, d: p.excerpt, g: (p.tags ?? []).join(' '), u: to(`/blog/${p.slug}`), ...(index < 3 ? { s: 1 as const } : {}) }));

  return [...pages, ...services, ...projects, ...articles];
}
