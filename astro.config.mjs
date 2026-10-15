// @ts-check
import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import sitemap from '@astrojs/sitemap';

// The blog list stays out of the sitemap while there are no articles (views/BlogListView.astro marks it noindex).
const hasPosts = fs.existsSync('./src/content/blog/en') && fs.readdirSync('./src/content/blog/en').some((f) => f.endsWith('.md'));

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
    }),
  ],
});
