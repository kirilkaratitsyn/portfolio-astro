// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import sitemap from '@astrojs/sitemap';

// The blog list stays out of the sitemap while there are no articles (views/BlogListView.astro marks it noindex).
const hasPosts = fs.existsSync('./src/content/blog/en') && fs.readdirSync('./src/content/blog/en').some((f) => f.endsWith('.md'));

// Articles get their real date (updatedAt, else publishedAt) as lastmod; other pages get none rather than the build date.
const articleDates = new Map();
for (const locale of ['en', 'de', 'uk']) {
  const dir = `./src/content/blog/${locale}`;
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.md'))) {
    const frontmatter = fs.readFileSync(`${dir}/${file}`, 'utf8').split('\n---')[0];
    const date = (/^updatedAt:\s*["']?([\d-]+)/m.exec(frontmatter) ?? /^publishedAt:\s*["']?([\d-]+)/m.exec(frontmatter))?.[1];
    const prefix = locale === 'en' ? '' : `/${locale}`;
    if (date) articleDates.set(`https://www.karatitsyn.com${prefix}/blog/${file.slice(0, -3)}`, date);
  }
}

export default defineConfig({
  site: 'https://www.karatitsyn.com',
  trailingSlash: 'never',
  build: {
    // /projects/nimfa -> projects/nimfa.html, served without the extension (vercel.json cleanUrls)
    format: 'file',
    // The stylesheet goes into each page: no request that holds back the first paint (it is ~12 KB gzipped).
    inlineStylesheets: 'always',
  },
  integrations: [
    sitemap({
      // Not the 404 page, nor the legal pages (kept out of search: they carry a home address).
      filter: (page) =>
        !page.includes('/404') && !/\/(legal-notice|privacy|impressum|datenschutz)$/.test(page) && (hasPosts || !/\/blog$/.test(page)),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de', uk: 'uk' },
      },
      serialize: (item) => {
        const date = articleDates.get(item.url);
        return date ? { ...item, lastmod: date } : item;
      },
    }),
  ],
});
