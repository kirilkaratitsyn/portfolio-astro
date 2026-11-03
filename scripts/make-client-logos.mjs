// Smaller copies of the client logos for the strip on the home page (sections/ClientStrip.astro):
//   public/source/logos/clients/<name>-200.webp and -300.webp, from <name>.webp
// On phones a logo is at most 96 px wide, so a 2x or 3x screen takes the 200 or 300 px file instead of the full one
// (about 500 px, sized for a 2x desktop). SVG logos stay as they are.
// Run after adding or replacing a logo: node scripts/make-client-logos.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dir = new URL('../public/source/logos/clients/', import.meta.url).pathname;
const widths = [200, 300];

let count = 0;
for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith('.webp') || /-\d+\.webp$/.test(file)) continue;
  const name = file.replace(/\.webp$/, '');
  const { width = 0 } = await sharp(path.join(dir, file)).metadata();
  for (const size of widths) {
    // A copy barely smaller than the logo saves nothing.
    if (size > width * 0.8) continue;
    // The strip shows the logos as black silhouettes, so the edges of the alpha channel are what has to stay crisp.
    await sharp(path.join(dir, file)).resize({ width: size }).webp({ quality: 90, alphaQuality: 100 }).toFile(path.join(dir, `${name}-${size}.webp`));
    count += 1;
  }
}
console.log(`${count} logo sizes written to public/source/logos/clients`);
