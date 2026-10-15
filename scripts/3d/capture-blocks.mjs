// Renders the posters of the small 3D blocks (public/source/3d/block-<name>.webp, 360 x 360) from the live blocks at
// rest. Usage: npm run build && npx serve@14 -c serve.json -l 4321 (in another terminal), then:
//   node scripts/3d/capture-blocks.mjs [port]   (needs playwright-core and Google Chrome)
// The posters are the first paint and the fallback, so they have to look exactly like the live blocks at rest. The
// script puts one 360 px host per block on top of the home page, lets the stage build them and copies each canvas.
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');
const sharp = require('sharp');

const port = process.argv[2] ?? '4321';
const names = ['white', 'black', 'cobalt', 'cobalt2'].flatMap((n) => [n, `${n}-small`]);
const out = new URL('../../public/source/3d/', import.meta.url).pathname;
const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--headless=new', '--enable-unsafe-swiftshader', '--use-angle=swiftshader', '--ignore-gpu-blocklist'],
});
const page = await (await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })).newPage();
// The hosts go into the HTML itself, so the stage finds them when it starts.
const hosts = names
  .map((n, i) => `<span data-pebble="${n}" class="pebble block" style="position:absolute;left:${(i % 4) * 360}px;top:${Math.floor(i / 4) * 360}px;width:360px"><img src="/source/3d/block-${n}.webp" alt="" width="360" height="360" style="display:block;width:100%;height:auto"></span>`)
  .join('');
await page.route(`http://localhost:${port}/`, async (route) => {
  const response = await route.fetch();
  const html = (await response.text()).replace(/<body([^>]*)>/, `<body$1><div id="capture" style="position:fixed;inset:0;z-index:9999;background:#EDEFF6">${hosts}</div>`);
  await route.fulfill({ response, body: html });
});
await page.goto(`http://localhost:${port}/`, { waitUntil: 'load' });
for (const name of names) {
  await page.waitForFunction((n) => window.__stage?.views.some((v) => v.name === n && v.live), name, { timeout: 120000 });
  await page.evaluate((n) => {
    const v = window.__stage.views.find((x) => x.name === n);
    v.object.quaternion.copy(v.rest);
    v.w.set(0, 0, 0);
    v.tiltX = v.tiltY = v.lift = 0;
    v.dirty = true;
    window.__stage.wake();
  }, name);
  await page.waitForTimeout(1200);
  const url = await page.evaluate((n) => window.__stage.views.find((x) => x.name === n).canvas.toDataURL('image/png'), name);
  const png = Buffer.from(url.split(',')[1], 'base64');
  const { width } = await sharp(png).metadata();
  const inner = Math.round(width / 1.4);
  const pad = Math.round((width - inner) / 2);
  // Nothing of the resting block may reach past its host (the outer band of the 140% canvas), or the poster would cut it.
  const { data, info } = await sharp(png).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let spill = 0;
  for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
    if ((x < pad || y < pad || x >= pad + inner || y >= pad + inner) && data[(y * info.width + x) * 4 + 3] > 4) spill++;
  }
  await sharp(png).extract({ left: pad, top: pad, width: inner, height: inner }).resize(360, 360).webp({ quality: 86, alphaQuality: 92 }).toFile(`${out}block-${name}.webp`);
  console.log(`poster block-${name}.webp`, spill ? `(${spill} pixels past the host: make the block smaller)` : '');
}
await browser.close();
