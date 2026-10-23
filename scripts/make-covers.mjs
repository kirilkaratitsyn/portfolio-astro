// Blog covers: type only (big headline plus chips on a flat colour), 1200x630, one per article and language.
// Same look as the Upwork project covers; the colour follows the article's topic.
//   public/og/blog/<locale>/<slug>.jpg
// A new article needs an entry in COVERS below, then: node scripts/make-covers.mjs && node scripts/make-og-thumbs.mjs
// Articles without an entry keep the `image` from their frontmatter (see getPosts in src/lib/content.ts).
// Needs Google Chrome and puppeteer-core (npm i -g puppeteer-core); Vercel does not run it, the JPGs are committed.
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const require = createRequire(import.meta.url);
const puppeteer = require(process.env.PUPPETEER_CORE ?? '/Users/kirilkaratitsyn/.npm-global/lib/node_modules/puppeteer-core');
const ROOT = new URL('..', import.meta.url).pathname;
const FONTS = path.join(ROOT, 'public/fonts');
const OUT = path.join(ROOT, 'public/og/blog');

const TOPIC = {
  build: { bg: '#5b8fe0', fg: '#fff', chipBg: '#fff', chipFg: '#0E1018' },
  migration: { bg: '#0F766E', fg: '#fff', chipBg: '#fff', chipFg: '#0E1018' },
  speed: { bg: '#FF6B1A', fg: '#fff', chipBg: '#fff', chipFg: '#0E1018' },
  redesign: { bg: '#6D28D9', fg: '#fff', chipBg: '#fff', chipFg: '#0E1018' },
  support: { bg: '#0E1018', fg: '#fff', chipBg: '#5b8fe0', chipFg: '#fff' },
};

// slug -> topic and, per language, the headline ("|" breaks the line) and up to three chips.
const COVERS = {
  'shopify-b2b-wholesale': {
    topic: 'build',
    en: { h: 'Shopify B2B', chips: ['Trade prices', 'Quick Order', 'Rules'] },
    de: { h: 'Shopify B2B', chips: ['Händlerpreise', 'Schnellbestellung', 'Regeln'] },
    uk: { h: 'Shopify B2B', chips: ['Оптові ціни', 'Швидке замовлення', 'Правила'] },
  },
  'shopify-shop-erstellen-lassen-kosten': {
    topic: 'build',
    en: { h: 'Having a Shopify|store built', chips: ['Fixed price', 'Briefing'] },
    de: { h: 'Shopify-Shop|erstellen lassen', chips: ['Festpreis', 'Briefing'] },
    uk: { h: 'Створення|магазину Shopify', chips: ['Фіксована ціна', 'Бриф'] },
  },
  'woocommerce-to-shopify': {
    topic: 'migration',
    en: { h: 'WooCommerce|→ Shopify', chips: ['Redirects', 'Orders', 'SEO'] },
    de: { h: 'WooCommerce|→ Shopify', chips: ['Weiterleitungen', 'Bestellungen', 'SEO'] },
    uk: { h: 'WooCommerce|→ Shopify', chips: ['Редиректи', 'Замовлення', 'SEO'] },
  },
  'shopify-migration-weiterleitungen': {
    topic: 'migration',
    en: { h: 'Redirects|after the move', chips: ['301', 'SEO', 'CSV'] },
    de: { h: 'Weiterleitungen|nach dem Umzug', chips: ['301', 'SEO', 'CSV'] },
    uk: { h: 'Редиректи|після переїзду', chips: ['301', 'SEO', 'CSV'] },
  },
  'wix-zu-shopify-umzug': {
    topic: 'migration',
    en: { h: 'Wix|→ Shopify', chips: ['Products', 'Domain', 'Redirects'] },
    de: { h: 'Wix|→ Shopify', chips: ['Produkte', 'Domain', 'Weiterleitungen'] },
    uk: { h: 'Wix|→ Shopify', chips: ['Товари', 'Домен', 'Редиректи'] },
  },
  'shopware-magento-zu-shopify': {
    topic: 'migration',
    en: { h: 'Shopware · Magento|→ Shopify', chips: ['Data', 'Passwords', 'Redirects'] },
    de: { h: 'Shopware · Magento|→ Shopify', chips: ['Daten', 'Passwörter', 'Weiterleitungen'] },
    uk: { h: 'Shopware · Magento|→ Shopify', chips: ['Дані', 'Паролі', 'Редиректи'] },
  },
  'woocommerce-sicherheit-plugin-updates': {
    topic: 'migration',
    en: { h: 'WooCommerce|security', chips: ['Updates', 'Plugins'] },
    de: { h: 'WooCommerce-|Sicherheit', chips: ['Updates', 'Plugins'] },
    uk: { h: 'Безпека|WooCommerce', chips: ['Оновлення', 'Плагіни'] },
  },
  'slow-shopify-store': {
    topic: 'speed',
    en: { h: 'Slow Shopify|store?', chips: ['Apps', 'Theme', 'Images'] },
    de: { h: 'Shopify-Shop|langsam?', chips: ['Apps', 'Theme', 'Bilder'] },
    uk: { h: 'Повільний|магазин Shopify?', chips: ['Додатки', 'Тема', 'Зображення'] },
  },
  'shopify-shop-bei-google-nicht-gefunden': {
    topic: 'speed',
    en: { h: 'Not found|on Google', chips: ['Indexing', 'Sitemap', 'Search Console'] },
    de: { h: 'Bei Google|nicht gefunden', chips: ['Indexierung', 'Sitemap', 'Search Console'] },
    uk: { h: 'Немає|в Google', chips: ['Індексація', 'Sitemap', 'Search Console'] },
  },
  'shopify-shop-optimieren-lassen': {
    topic: 'speed',
    en: { h: 'Store|optimization', chips: ['Goal', 'Baseline', 'Access'] },
    de: { h: 'Shop|optimieren lassen', chips: ['Ziel', 'Messung', 'Zugang'] },
    uk: { h: 'Оптимізація|магазину', chips: ['Ціль', 'Вимірювання', 'Доступ'] },
  },
  'shopify-theme-customization': {
    topic: 'redesign',
    en: { h: 'Theme|customization', chips: ['Editor', 'Code'] },
    de: { h: 'Theme|anpassen', chips: ['Editor', 'Code'] },
    uk: { h: 'Налаштування|теми', chips: ['Редактор', 'Код'] },
  },
  'shopify-help': {
    topic: 'support',
    en: { h: 'Shopify help', chips: ['Help Center', 'Developer'] },
    de: { h: 'Shopify-Hilfe', chips: ['Help Center', 'Entwickler'] },
    uk: { h: 'Допомога|з Shopify', chips: ['Help Center', 'Розробник'] },
  },
  'shopify-freelancer-oder-agentur': {
    topic: 'support',
    en: { h: 'Freelancer|or agency?', chips: ['Freelancer', 'Agency'] },
    de: { h: 'Freelancer|oder Agentur?', chips: ['Freelancer', 'Agentur'] },
    uk: { h: 'Фрілансер|чи агенція?', chips: ['Фрілансер', 'Агенція'] },
  },
  'shopify-wartung-betreuung': {
    topic: 'support',
    en: { h: 'Shopify|maintenance', chips: ['Theme', 'Apps', 'Access'] },
    de: { h: 'Shopify-|Wartung', chips: ['Theme', 'Apps', 'Zugänge'] },
    uk: { h: 'Супровід|Shopify', chips: ['Тема', 'Додатки', 'Доступи'] },
  },
  'shopify-zahlungsarten-deutschland': {
    topic: 'build',
    en: { h: 'Shopify|payment methods', chips: ['Shopify Payments', 'PayPal', 'Klarna'] },
    de: { h: 'Shopify-|Zahlungsarten', chips: ['Shopify Payments', 'PayPal', 'Klarna'] },
    uk: { h: 'Способи|оплати Shopify', chips: ['Shopify Payments', 'PayPal', 'Klarna'] },
  },
  'shopify-produkte-importieren-csv': {
    topic: 'migration',
    en: { h: 'Shopify|product import', chips: ['CSV', 'Backup', 'Variants'] },
    de: { h: 'Shopify-|Produktimport', chips: ['CSV', 'Sicherung', 'Varianten'] },
    uk: { h: 'Імпорт товарів|у Shopify', chips: ['CSV', 'Копія', 'Варіанти'] },
  },
  'shopify-cookie-banner-datenschutz': {
    topic: 'build',
    en: { h: 'Shopify|cookie banner', chips: ['Privacy', 'Consent', 'Pixels'] },
    de: { h: 'Shopify-|Cookie-Banner', chips: ['Datenschutz', 'Einwilligung', 'Pixel'] },
    uk: { h: 'Cookie-банер|у Shopify', chips: ['Конфіденційність', 'Згода', 'Пікселі'] },
  },
  'shopify-versand-einrichten': {
    topic: 'build',
    en: { h: 'Shopify|shipping', chips: ['Zones', 'Rates', 'Profiles'] },
    de: { h: 'Shopify-|Versand', chips: ['Zonen', 'Raten', 'Profile'] },
    uk: { h: 'Доставка|в Shopify', chips: ['Зони', 'Тарифи', 'Профілі'] },
  },
};

const html = (topic, { h, chips }) => {
  const c = TOPIC[topic];
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Onest;src:url('file://${FONTS}/Onest-Bold.woff2');font-weight:700}
@font-face{font-family:Head;src:url('file://${FONTS}/e-UkraineHead-Bold.woff2');font-weight:700}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;overflow:hidden;position:relative;background:${c.bg};color:${c.fg};font-family:Onest,sans-serif}
h1{position:absolute;left:72px;top:74px;width:1056px;font:700 112px/1.02 Head,Onest,sans-serif;letter-spacing:-.01em}
h1 span{display:block;white-space:nowrap;width:max-content}
.chips{position:absolute;left:72px;bottom:64px;display:flex;gap:20px;white-space:nowrap}
.chip{background:${c.chipBg};color:${c.chipFg};border-radius:999px;padding:22px 40px;font:700 40px/1 Onest,sans-serif}
</style></head><body><h1>${h.split('|').map((l) => `<span>${l}</span>`).join('')}</h1>
<div class="chips">${chips.map((x) => `<div class="chip">${x}</div>`).join('')}</div></body></html>`;
};

const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--allow-file-access-from-files'] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
const tmp = path.join(ROOT, 'public/og/blog/_cover.html');
fs.mkdirSync(OUT, { recursive: true });
const only = process.argv[2]; // optional: one slug
let count = 0;
const problems = [];
for (const [slug, cover] of Object.entries(COVERS)) {
  if (only && only !== slug) continue;
  for (const locale of ['en', 'de', 'uk']) {
    fs.writeFileSync(tmp, html(cover.topic, cover[locale]));
    await page.goto('file://' + tmp, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    // Shrink the headline until the widest line fits and it ends above the chips.
    const fit = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      const chips = document.querySelector('.chips');
      let size = 112;
      const over = () => [...h1.children].some((s) => s.getBoundingClientRect().width > 1056) || h1.getBoundingClientRect().bottom > chips.getBoundingClientRect().top - 36;
      while (over() && size > 56) {
        size -= 4;
        h1.style.fontSize = size + 'px';
      }
      const right = () => Math.max(...[...chips.children].map((c) => c.getBoundingClientRect().right));
      let chipSize = 40;
      while (right() > 1128 && chipSize > 28) {
        chipSize -= 2;
        for (const c of chips.children) {
          c.style.fontSize = chipSize + 'px';
          c.style.padding = `${Math.round(chipSize * 0.55)}px ${Math.round(chipSize)}px`;
        }
      }
      return { size, over: over(), chipRight: right() };
    });
    if (fit.over || fit.chipRight > 1128) problems.push(`${locale}/${slug}: does not fit (font ${fit.size}px, chips end ${Math.round(fit.chipRight)}px)`);
    const dir = path.join(OUT, locale);
    fs.mkdirSync(dir, { recursive: true });
    await page.screenshot({ path: path.join(dir, `${slug}.jpg`), type: 'jpeg', quality: 90 });
    count += 1;
    console.log(`${locale}/${slug}.jpg  ${fit.size}px`);
  }
}
fs.unlinkSync(tmp);
await browser.close();
console.log(`${count} covers in public/og/blog`);
if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
