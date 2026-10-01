// Renders the poster images of the 3D icons from the live objects on the built site.
// Usage: npm run build && npx serve@14 -c serve.json -l 4321 (in another terminal), then:
//   node scripts/3d/capture-posters.mjs   (needs playwright-core and Google Chrome)
// The posters are the first paint and the fallback, so they have to look exactly like the live objects at rest.
import { createRequire } from 'node:module';
import fs from 'node:fs';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const sharp = require('sharp');

const names = ['shop', 'migrate', 'plug', 'bolt', 'magnifier', 'gear', 'chat', 'tag', 'layers', 'rocket'];
const out = new URL('../../public/source/3d/', import.meta.url).pathname;
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--headless=new', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })).newPage();
await page.goto('http://localhost:4321/', { waitUntil: 'load' });
await page.waitForFunction(() => Boolean(window.__stage), null, { timeout: 30000 });
for (const name of names) {
  await page.addStyleTag({ content: `[data-pebble="${name}"]{width:360px!important}` });
  await page.evaluate((n) => document.querySelector(`[data-pebble="${n}"]`).scrollIntoView({ block: 'center' }), name);
  await page.waitForTimeout(800);
  // put the object in its resting pose and draw it once
  await page.evaluate((n) => {
    const v = window.__stage.views.find((x) => x.name === n);
    v.object.quaternion.copy(v.rest);
    v.w.set(0, 0, 0);
    v.tiltX = v.tiltY = v.lift = 0;
    v.dirty = true;
    window.__stage.wake();
  }, name);
  await page.waitForTimeout(1200);
  const url = await page.evaluate((n) => document.querySelector(`[data-pebble="${n}"] canvas`).toDataURL('image/png'), name);
  const png = Buffer.from(url.split(',')[1], 'base64');
  const { width } = await sharp(png).metadata();
  const inner = Math.round(width / 1.4);
  const pad = Math.round((width - inner) / 2);
  await sharp(png).extract({ left: pad, top: pad, width: inner, height: inner }).resize(360, 360).webp({ quality: 86, alphaQuality: 92 }).toFile(`${out}icon-${name}.webp`);
  console.log('poster', name);
}
await browser.close();
