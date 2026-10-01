# 3D art for the homepage

The cobalt stones in the hero and the pebbles used as icons are rendered once with three.js and shipped as WebP in `public/source/3d/`. Nothing 3D runs in the browser.

To re-render:

1. In a scratch folder: `npm i three@0.186.1`, copy `stones.html` and `pebble.html` next to `node_modules`, and serve the folder (`python3 -m http.server 8765`).
2. Open `stones.html?p=cobalt` (1720 x 1188) and `pebble.html?c=%232433f0&seed=3` (520 x 520) in headless Chrome with `--enable-unsafe-swiftshader --use-angle=swiftshader`, wait for `window.__done`, and screenshot the `#c` canvas with a transparent background.
3. Convert to WebP with sharp (stones: 1720 and 860 px wide, quality 82; pebbles: 360 px wide).
