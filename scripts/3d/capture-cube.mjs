// Renders the poster of the hero cube (public/source/3d/cube-560.webp and cube-1120.webp) from the live cube at rest.
// Usage: npm run build && npx serve@14 -c serve.json -l 4321 (in another terminal), then:
//   node scripts/3d/capture-cube.mjs [port]   (needs playwright-core and Google Chrome)
// The poster is the first paint, the LCP image and the fallback, so it has to look exactly like the live cube before
// its first twist: the script pauses the cube, puts every block home and draws it once at its resting pose.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const sharp = require('sharp');

const port = process.argv[2] ?? '4321';
const out = new URL('../../public/source/3d/', import.meta.url).pathname;
const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--headless=new', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'],
});
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })).newPage();
await page.goto(`http://localhost:${port}/`, { waitUntil: 'load' });
// A 560 px host at 2x, so the crop is exactly the 1120 px poster.
await page.addStyleTag({ content: '[data-pebble="cube"]{width:560px!important}' });
await page.waitForFunction(() => window.__stage?.views.some((v) => v.name === 'cube' && v.live), null, { timeout: 120000 });
await page.evaluate(() => {
  const v = window.__stage.views.find((x) => x.name === 'cube');
  const cube = v.object;
  cube.userData.paused = true;
  cube.userData.reset();
  cube.quaternion.copy(v.rest);
  v.w.set(0, 0, 0);
  v.tiltX = v.tiltY = v.lift = 0;
  // Full resolution for the capture (the live cube keeps a smaller budget).
  v.dprCap = 2;
  v.budget = 1e8;
  v.resize();
  v.dirty = true;
  window.__stage.wake();
});
await page.waitForTimeout(2500);
const url = await page.evaluate(() => document.querySelector('[data-pebble="cube"] canvas').toDataURL('image/png'));
const png = Buffer.from(url.split(',')[1], 'base64');
const { width, height } = await sharp(png).metadata();
const inner = Math.round(width / 1.4);
const pad = Math.round((width - inner) / 2);

// The canvas is 140% of the host: nothing of the resting cube may reach the outer band, or the poster would cut it.
const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let spill = 0;
const box = { left: Infinity, top: Infinity, right: -Infinity, bottom: -Infinity };
for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
  if (data[(y * info.width + x) * 4 + 3] <= 4) continue;
  if (x < pad || y < pad || x >= pad + inner || y >= pad + inner) spill++;
  box.left = Math.min(box.left, x - pad);
  box.top = Math.min(box.top, y - pad);
  box.right = Math.max(box.right, x - pad);
  box.bottom = Math.max(box.bottom, y - pad);
}
console.log(`canvas ${width}x${height}, poster ${inner}px, pixels outside the host: ${spill}, cube spans`, box);
if (spill > 0) console.warn('The resting cube reaches past its host: make it smaller in src/lib/cube.ts (root.scale).');

const crop = () => sharp(png).extract({ left: pad, top: pad, width: inner, height: inner });
await crop().resize(1120, 1120).webp({ quality: 86, alphaQuality: 92 }).toFile(`${out}cube-1120.webp`);
await crop().resize(560, 560).webp({ quality: 86, alphaQuality: 92 }).toFile(`${out}cube-560.webp`);
console.log('poster cube-1120.webp, cube-560.webp');
await browser.close();
