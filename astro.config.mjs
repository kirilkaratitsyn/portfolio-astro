// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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
      filter: (page) => !page.includes('/404') && !/\/(legal-notice|privacy|impressum|datenschutz)$/.test(page),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de', uk: 'uk' },
      },
    }),
  ],
});
