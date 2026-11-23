import path from 'node:path';
import sharp from 'sharp';

// The flat background colour of a type-only blog cover (public/og/blog/...), read from its top-right corner at build
// time. The wide article card fills the space around the cover with it, so the cover never has to be cropped.
const cache = new Map<string, Promise<string | undefined>>();

export function coverColor(image: string): Promise<string | undefined> {
  if (!image.startsWith('/og/blog/')) return Promise.resolve(undefined);
  if (!cache.has(image)) {
    const file = path.join(process.cwd(), 'public', image);
    cache.set(
      image,
      sharp(file)
        .extract({ left: 1190, top: 4, width: 1, height: 1 })
        .raw()
        .toBuffer()
        .then(([r, g, b]) => `rgb(${r} ${g} ${b})`)
        .catch(() => undefined),
    );
  }
  return cache.get(image)!;
}
