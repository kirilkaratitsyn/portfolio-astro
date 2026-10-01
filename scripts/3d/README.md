# 3D art for the homepage

The cobalt stones in the hero and the pebbles used as icons exist twice:

- as WebP posters in `public/source/3d/` (rendered once with the scripts here). They are the first paint, the LCP image and the fallback when WebGL, scripts or motion are unavailable.
- as live three.js objects (`src/scripts/stage.ts`, shapes in `src/lib/stones.ts`) that replace the posters after the page has loaded. The shapes come from the same generator and seeds, so the swap is invisible. Seeds: pebbles cobalt 3, cobalt2 9, white 11, black 5; hero stones seed 7.

If you change the shapes in `src/lib/stones.ts`, change `stones.html` / `pebble.html` the same way and re-render the posters (`pebble.html?...&r=2.25` is the size used on the site).

To re-render:

1. In a scratch folder: `npm i three@0.186.1`, copy `stones.html` and `pebble.html` next to `node_modules`, and serve the folder (`python3 -m http.server 8765`).
2. Open `stones.html?p=cobalt` (1720 x 1188) and `pebble.html?c=%232433f0&seed=3` (520 x 520) in headless Chrome with `--enable-unsafe-swiftshader --use-angle=swiftshader`, wait for `window.__done`, and screenshot the `#c` canvas with a transparent background.
3. Convert to WebP with sharp (stones: 1720 and 860 px wide, quality 82; pebbles: 360 px wide).
