// Renders the poster of the globe (public/source/3d/globe-1000.webp and -640.webp) from the live object on the built
// site, in its starting pose. Usage: build, serve on port 4321 (npm run preview), then node scripts/3d/capture-globe.mjs
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const sharp = require('sharp');

const out = new URL('../../public/source/3d/', import.meta.url).pathname;
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', args: ['--headless=new', '--use-angle=metal', '--enable-gpu', '--ignore-gpu-blocklist'] });
const page = await (await browser.newContext({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 2 })).newPage();
await page.goto('http://localhost:4321/', { waitUntil: 'load' });
await page.waitForFunction(() => Boolean(window.__stage), null, { timeout: 30000 });
await page.addStyleTag({ content: '[data-globe]{width:720px!important;max-width:none!important}' });
await page.evaluate(() => document.querySelector('[data-globe]').scrollIntoView({ block: 'center' }));
await page.waitForFunction(() => window.__stage.views.some((v) => v.name === 'globe' && v.live), null, { timeout: 30000 });
await page.waitForTimeout(800);
// Starting pose, lights half way along their arcs, then one frame.
await page.evaluate(() => {
  const v = window.__stage.views.find((x) => x.name === 'globe');
  v.yaw = 0.62; v.pitch = 0.62; v.vyaw = 0; v.time = 0.9; v.step(0); v.dirty = true; window.__stage.render(v);
});
const url = await page.evaluate(() => document.querySelector('[data-globe] canvas').toDataURL('image/png'));
const png = Buffer.from(url.split(',')[1], 'base64');
await sharp(png).resize(1000, 1000).webp({ quality: 84, alphaQuality: 90 }).toFile(`${out}globe-1000.webp`);
await sharp(png).resize(640, 640).webp({ quality: 82, alphaQuality: 90 }).toFile(`${out}globe-640.webp`);
console.log('globe poster written');
await browser.close();
