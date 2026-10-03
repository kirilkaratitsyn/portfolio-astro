// The stores' own logos for the globe tooltips (sections/Globe.astro, scripts/stage.ts), from the logo files the
// stores use: each live store is opened in headless Chrome, the logo in its header is found, and its file is
// downloaded (an <img> at full size from Shopify's CDN, an inline <svg> with its colours written in). Dark logos get a
// white plate, light logos on a transparent background stay as they are (the tooltip is dark). Saved as WebP in
// public/source/store-logos/. A store whose page will not open in a headless browser is read from its HTML instead;
// a store whose logo is plain text gets none (the tooltip shows its name).
// Usage (needs network): node scripts/make-store-logos.mjs [store-id ...]
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

/** Pages to read instead of the homepage (a splash page without a header). */
const PAGE = { 'bazar-bizar': 'https://www.bazarbizar.be/de/pages/home' };
/** Logos that need the white plate although they have white parts (dark lettering around a white shape). */
const PLATE = new Set(['white-canvas-earth']);
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129 Safari/537.36';

/** A Shopify CDN image asked for at 800 px wide. */
function bigger(src, base) {
  const url = new URL(src, base);
  if (url.pathname.includes('/cdn/shop/') || url.hostname.includes('cdn.shopify.com')) {
    url.searchParams.set('width', '800');
    url.searchParams.delete('height');
    url.pathname = url.pathname.replace(/_(\d+x\d*|\d*x\d+)(?=\.[a-z]+$)/i, '');
  }
  return url.href;
}

/** The logo in the page's header: an image URL, an SVG with its colours written in, or nothing. */
async function findInPage(page) {
  return page.evaluate(() => {
    const visible = (el) => {
      const r = el.getBoundingClientRect();
      const s = getComputedStyle(el);
      return r.width > 30 && r.height > 10 && r.top >= -5 && r.top < 260 && s.visibility !== 'hidden' && s.display !== 'none';
    };
    const selectors = [
      'header a[href="/"] img', 'a[href="/"] img[class*="logo" i]', '[class*="logo" i] img', 'img[class*="logo" i]', 'img[alt*="logo" i]',
      'header a[href="/"] svg', '[class*="logo" i] svg', 'a[href="/"] svg', 'a[href="/"] img',
    ];
    for (const sel of selectors) {
      const el = [...document.querySelectorAll(sel)].find(visible);
      if (!el) continue;
      if (el.tagName === 'IMG') return { kind: 'img', src: el.currentSrc || el.src };
      // Inline SVG: copy it with the colours the page gives it.
      const copy = el.cloneNode(true);
      const from = [el, ...el.querySelectorAll('*')];
      const to = [copy, ...copy.querySelectorAll('*')];
      from.forEach((node, i) => {
        const s = getComputedStyle(node);
        for (const prop of ['fill', 'stroke']) if (s[prop] && s[prop] !== 'none') to[i].setAttribute(prop, s[prop]);
      });
      const r = el.getBoundingClientRect();
      copy.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      copy.setAttribute('width', String(Math.round(r.width * 4)));
      copy.setAttribute('height', String(Math.round(r.height * 4)));
      return { kind: 'svg', svg: copy.outerHTML };
    }
    return null;
  });
}

/** The logo image from the page's HTML, for stores that do not open in a headless browser. */
async function findInHtml(url) {
  const html = await (await fetch(url, { headers: { 'user-agent': UA } })).text();
  const img =
    html.match(/<img[^>]+class="[^"]*(?:header__logo-image|header-logo__image|header__heading-logo|logo)[^"]*"[^>]*>/i)?.[0] ??
    html.match(/<a[^>]+href="\/"[^>]*>[\s\S]{0,800}?(<img[^>]+>)/i)?.[1];
  const src = img?.match(/\bsrc="([^"]+)"/)?.[1]?.replace(/&amp;/g, '&');
  return src ? { kind: 'img', src: new URL(src, url).href } : null;
}

/**
 * Trim the logo, then plate it: white behind a dark logo; nothing behind a logo on a transparent background that is light
 * or has white parts (white lettering would vanish on a white plate), as the tooltip under it is dark.
 */
async function save(id, input, forcePlate = false) {
  const trimmed = await sharp(input, { density: 400 }).trim({ threshold: 12 }).resize({ height: 160, withoutEnlargement: true }).png().toBuffer();
  const { data, info } = await sharp(trimmed).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let sum = 0;
  let solid = 0;
  let white = 0;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] < 128) continue;
    const lum = 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
    sum += lum;
    if (lum > 215) white++;
    solid++;
  }
  const transparent = 1 - solid / (info.width * info.height) > 0.15;
  const light = solid > 0 && (sum / solid > 165 || white / solid > 0.25);
  const plate = forcePlate || !(transparent && light);
  const pad = Math.round(info.height * (plate ? 0.32 : 0.12));
  await sharp(trimmed)
    .extend({ top: pad, bottom: pad, left: Math.round(pad * 1.3), right: Math.round(pad * 1.3), background: plate ? '#ffffff' : { r: 0, g: 0, b: 0, alpha: 0 } })
    .flatten(plate ? { background: '#ffffff' } : false)
    .resize({ height: 96 })
    .webp({ quality: 92 })
    .toFile(path.join(out, `${id}.webp`));
  return plate ? 'white plate' : 'light, no plate';
}

const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--headless=new'] });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2, locale: 'en-US', userAgent: UA });
for (const w of works) {
  const url = PAGE[w.id] ?? w.url;
  let found = null;
  const page = await context.newPage();
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(2000);
    // Stores may send the browser on to a regional domain; one that lands on a search engine is read from its HTML.
    if (!/(^|\.)google\./.test(new URL(page.url()).hostname)) found = await findInPage(page);
  } catch {
    found = null;
  }
  await page.close();
  try {
    found ??= await findInHtml(url);
    if (!found) {
      fs.rmSync(path.join(out, `${w.id}.webp`), { force: true });
      console.log('logo', w.id, 'none (text logo): the tooltip shows the name');
      continue;
    }
    const input = found.kind === 'svg' ? Buffer.from(found.svg) : Buffer.from(await (await fetch(bigger(found.src, url), { headers: { 'user-agent': UA } })).arrayBuffer());
    console.log('logo', w.id, found.kind, await save(w.id, input, PLATE.has(w.id)));
  } catch (e) {
    console.log('logo', w.id, 'failed:', e.message.split('\n')[0]);
  }
}
await browser.close();
