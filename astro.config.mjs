// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.karatitsyn.com',
  trailingSlash: 'never',
  build: {
    // /projects/nimfa -> projects/nimfa.html, served without the extension (vercel.json cleanUrls)
    format: 'file',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', de: 'de', uk: 'uk' },
      },
    }),
  ],
});
