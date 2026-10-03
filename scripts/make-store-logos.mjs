// The stores' own logos for the globe tooltips (sections/Globe.astro, scripts/stage.ts): each live store is opened in
// headless Chrome and the logo in its header is captured as it looks there (on the header's own background), then
// saved as a small WebP in public/source/store-logos/. Pop-ups are hidden for the capture, never answered. Logos drawn
// over a hero photo, and stores that will not open in a headless browser, use the logo file itself on a plain plate
// instead (SOURCE). Usage (needs network): node scripts/make-store-logos.mjs [store-id ...]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const sharp = require('sharp');

const root = new URL('..', import.meta.url).pathname;
const out = path.join(root, 'public/source/store-logos');
fs.mkdirSync(out, { recursive: true });
const only = process.argv.slice(2);
const works = fs
  .readFileSync(path.join(root, 'src/content/works.yaml'), 'utf8')
  .split(/\n(?=- id: )/)
  .map((b) => ({ id: b.match(/- id: (\S+)/)?.[1], url: b.match(/\n {2}url: (\S+)/)?.[1], country: b.match(/\n {2}country: (\S+)/)?.[1], archived: /\n {2}archived: true/.test(b) }))
  .filter((w) => w.id && w.url && w.country && !w.archived && (!only.length || only.includes(w.id)));

/** Stores whose logo is taken from its file; an optional page to read it from. */
const SOURCE = { 'peter-bijoux': {}, 'white-canvas-earth': {}, lineargent: {}, 'crafts-cove-marine': {} };
/** Pages to capture instead of the homepage (a splash page without a header). */
const PAGE = { 'bazar-bizar': 'https://www.bazarbizar.be/de/pages/home' };
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36';

/** The logo file from the page's HTML, trimmed, on a white plate (dark logo) or with no plate (light logo, dark tooltip). */
async function fromSource(w) {
  const html = await (await fetch(w.url, { headers: { 'user-agent': UA } })).text();
  const img =
    html.match(/<img[^>]+class="[^"]*(?:header__logo-image|header-logo__image|header__heading-logo)[^"]*"[^>]*>/i)?.[0] ??
    html.match(/<a[^>]+href="\/"[^>]*>[\s\S]{0,800}?(<img[^>]+>)/i)?.[1];
  const src = img?.match(/\bsrc="([^"]+)"/)?.[1]?.replace(/&amp;/g, '&');
  if (!src) throw new Error('no logo image in the HTML');
  const url = new URL(src, w.url);
  url.searchParams.set('width', '600');
  url.searchParams.delete('height');
  const file = Buffer.from(await (await fetch(url, { headers: { 'user-agent': UA } })).arrayBuffer());
  const logo = await sharp(file, { density: 300 }).trim().resize({ height: 64, withoutEnlargement: true }).png().toBuffer();
  const { data, info } = await sharp(logo).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let sum = 0;
  let n = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    sum += 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    n++;
  }
  const light = n && sum / n > 150;
  const pad = Math.round(info.height * 0.3);
  await sharp(logo)
    .extend({ top: pad, bottom: pad, left: pad, right: pad, background: light ? { r: 0, g: 0, b: 0, alpha: 0 } : { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten(light ? false : { background: '#ffffff' })
    .resize({ height: 96 })
    .webp({ quality: 90 })
    .toFile(path.join(out, `${w.id}.webp`));
  return light ? 'light, no plate' : 'dark, white plate';
}

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--headless=new'] });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, locale: 'en-US' });
for (const w of works) {
  if (w.id in SOURCE) {
    try {
      console.log('logo', w.id, 'from its file:', await fromSource(w));
    } catch (e) {
      console.log('logo', w.id, 'skipped:', e.message.split('\n')[0]);
    }
    continue;
  }
  const page = await context.newPage();
  try {
    await page.goto(PAGE[w.id] ?? w.url, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(2500);
    // Pop-ups and cookie bars are hidden for the picture only.
    await page.addStyleTag({ content: `[role="dialog"],[aria-modal="true"],.klaviyo-form,[class*="popup" i],[class*="modal" i],[id*="cookie" i],[class*="cookie" i],[id*="shopify-pc" i],[class*="needsclick"]{display:none!important}` });
    await page.evaluate(() => scrollTo(0, 0));
    await page.waitForTimeout(400);
    const box = await page.evaluate(() => {
      const visible = (el) => {
        const r = el.getBoundingClientRect();
        const s = getComputedStyle(el);
        return r.width > 40 && r.height > 12 && r.top >= 0 && r.top < 260 && s.visibility !== 'hidden' && Number(s.opacity) > 0.1 && s.display !== 'none';
      };
      const selectors = [
        'header a[href="/"] img', 'a[href="/"] img[class*="logo" i]', '[class*="logo" i] img', 'img[class*="logo" i]', 'img[alt*="logo" i]',
        'header a[href="/"] svg', '[class*="logo" i] svg', 'a[href="/"] svg', 'header [class*="logo" i]',
        'a[href="/"] img', 'a[href^="/"] img[alt]', 'header a[href="/"]', '[class*="heading" i] a[href="/"]',
      ];
      for (const sel of selectors) {
        const el = [...document.querySelectorAll(sel)].find(visible);
        if (el) {
          const r = el.getBoundingClientRect();
          return { x: r.left, y: r.top, w: r.width, h: r.height, sel };
        }
      }
      return null;
    });
    if (!box) throw new Error('no logo found');
    const pad = Math.max(8, Math.round(box.h * 0.28));
    const clip = { x: Math.max(0, box.x - pad), y: Math.max(0, box.y - pad), width: box.w + pad * 2, height: box.h + pad * 2 };
    const png = await page.screenshot({ clip });
    await sharp(png).resize({ height: 96, withoutEnlargement: true }).webp({ quality: 90 }).toFile(path.join(out, `${w.id}.webp`));
    console.log('logo', w.id, box.sel, `${Math.round(box.w)}x${Math.round(box.h)}`);
  } catch (e) {
    console.log('logo', w.id, 'skipped:', e.message.split('\n')[0]);
  }
  await page.close();
}
await browser.close();
