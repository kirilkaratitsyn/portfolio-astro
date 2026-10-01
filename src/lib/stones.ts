// Shapes of the homepage stones. The same generator rendered the WebP posters in public/source/3d
// (scripts/3d), so the live 3D objects start exactly where the poster images are.
import { IcosahedronGeometry, Mesh, MeshPhysicalMaterial, Vector3, type BufferGeometry } from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

/** Small seeded generator: same seed, same stones. */
export function makeRng(seed: number) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

/** A noisy, slightly squashed icosphere with smooth shading and a clear coat. */
export function makeStone(size: number, color: string, rnd: () => number): Mesh {
  const base = new IcosahedronGeometry(size, 4);
  base.deleteAttribute('normal');
  base.deleteAttribute('uv');
  const geometry: BufferGeometry = mergeVertices(base);
  const position = geometry.attributes.position;
  const v = new Vector3();
  const n = new Vector3();
  const a = [rnd() * 6, rnd() * 6, rnd() * 6];
  for (let i = 0; i < position.count; i++) {
    v.fromBufferAttribute(position, i);
    n.copy(v).normalize();
    const d = 1 + 0.16 * Math.sin(n.x * 2.1 + a[0]) * Math.cos(n.y * 1.7 + a[1]) + 0.1 * Math.sin(n.z * 2.6 + a[2]);
    v.multiplyScalar(d);
    position.setXYZ(i, v.x, v.y * 0.86, v.z);
  }
  geometry.computeVertexNormals();
  const material = new MeshPhysicalMaterial({ color, roughness: 0.18, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
  return new Mesh(geometry, material);
}

const HERO_COLORS = ['#2433f0', '#f4f5f9', '#0d0e12', '#2433f0', '#dfe2ee'];
/** x, y, z, radius (world units, camera 17 units away, 32 degrees). */
export const HERO_SPOTS: [number, number, number, number][] = [
  [-3.4, 1.6, 0, 1.55], [-0.6, 2.2, -1, 1.3], [2.6, 1.9, 0.5, 1.6], [-4.3, -0.9, 0.6, 1.2],
  [-1.8, -0.2, 1.2, 1.7], [1.2, 0.2, 0, 1.5], [4.2, -0.3, -0.4, 1.25], [-3.1, -2.6, 0, 1.45],
  [0.1, -2.3, 0.8, 1.65], [3.0, -2.4, 0, 1.35], [-0.4, 3.7, -1.6, 0.9], [5.0, 2.6, -1.4, 0.9],
];
/** Camera of the hero poster (1720 x 1188). */
export const HERO_CAMERA = { fov: 32, aspect: 1720 / 1188, position: [0, 0.2, 17] as const };

export function makeHeroStones() {
  const rnd = makeRng(7);
  return HERO_SPOTS.map(([x, y, z, r], i) => {
    const mesh = makeStone(r, HERO_COLORS[i % HERO_COLORS.length], rnd);
    mesh.position.set(x, y, z);
    mesh.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
    return { mesh, home: new Vector3(x, y, z), radius: r };
  });
}

/** The four icon pebbles: color and seed of each poster. */
export const PEBBLES = {
  cobalt: { color: '#2433f0', seed: 3 },
  cobalt2: { color: '#2433f0', seed: 9 },
  white: { color: '#f4f5f9', seed: 11 },
  black: { color: '#0d0e12', seed: 5 },
} as const;
export type PebbleName = keyof typeof PEBBLES;
/** Radius of a pebble in world units. Camera 9.5 units away, 32 degrees (5.45 units fill the poster). */
export const PEBBLE_SIZE = 2.25;
export const PEBBLE_CAMERA = { fov: 32, distance: 9.5, y: 0.2 };

export function makePebble(name: PebbleName) {
  const { color, seed } = PEBBLES[name];
  const rnd = makeRng(seed);
  const mesh = makeStone(PEBBLE_SIZE, color, rnd);
  mesh.rotation.set(rnd() * 3, rnd() * 3, rnd() * 3);
  return mesh;
}
