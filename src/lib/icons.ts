// 3D icons for the Services and Process sections, and the 3D version of the logo.
// Same look as the stones (glossy clear-coated material, soft bevels, cobalt / white / black), built from simple
// shapes so nothing has to be downloaded: no model files, only code.
import {
  Box3, CapsuleGeometry, CatmullRomCurve3, ConeGeometry, CylinderGeometry, Euler, ExtrudeGeometry, Group, LatheGeometry, Mesh,
  MeshPhysicalMaterial, Path, Quaternion, Shape, SphereGeometry, SplineCurve, TorusGeometry, TubeGeometry, Vector2, Vector3,
  type BufferGeometry, type Material, type MeshPhysicalMaterialParameters,
} from 'three';
import { toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';
import markData from './mark-paths.json';

export const ICON_NAMES = ['shop', 'migrate', 'puzzle', 'chart', 'funnel', 'lifebuoy', 'chat', 'tag', 'layers', 'rocket'] as const;
export type IconName = (typeof ICON_NAMES)[number];
export type ObjectName = IconName | 'logo';
export type LogoTone = 'ink' | 'white';

const COBALT = '#2433f0';
const WHITE = '#f4f5f9';
const BLACK = '#0d0e12';
const MIST = '#dfe2ee';

const mat = (color: string, extra: MeshPhysicalMaterialParameters = {}) =>
  new MeshPhysicalMaterial({ color, roughness: 0.2, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1, ...extra });

/** A flat shape pushed out into a solid with soft, smooth-shaded bevels. */
function solid(shape: Shape, depth: number, bevel = 0.14, creaseDeg = 22): BufferGeometry {
  const geometry = new ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 8, curveSegments: 28 });
  geometry.translate(0, 0, -depth / 2);
  return toCreasedNormals(geometry, (creaseDeg * Math.PI) / 180);
}

function roundRect(w: number, h: number, r: number) {
  const s = new Shape();
  const x = w / 2;
  const y = h / 2;
  s.moveTo(-x + r, -y);
  s.lineTo(x - r, -y);
  s.absarc(x - r, -y + r, r, -Math.PI / 2, 0, false);
  s.lineTo(x, y - r);
  s.absarc(x - r, y - r, r, 0, Math.PI / 2, false);
  s.lineTo(-x + r, y);
  s.absarc(-x + r, y - r, r, Math.PI / 2, Math.PI, false);
  s.lineTo(-x, -y + r);
  s.absarc(-x + r, -y + r, r, Math.PI, Math.PI * 1.5, false);
  return s;
}

function poly(points: [number, number][]) {
  const s = new Shape();
  points.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  return s;
}

const mesh = (geometry: BufferGeometry, material: Material, x = 0, y = 0, z = 0) => {
  const m = new Mesh(geometry, material);
  m.position.set(x, y, z);
  return m;
};

/** A capsule between two points, in the XY plane. */
function bar(x1: number, y1: number, x2: number, y2: number, radius: number, material: Material) {
  const length = Math.hypot(x2 - x1, y2 - y1);
  const m = new Mesh(new CapsuleGeometry(radius, Math.max(0.001, length), 12, 24), material);
  m.position.set((x1 + x2) / 2, (y1 + y2) / 2, 0);
  m.rotation.z = Math.atan2(y2 - y1, x2 - x1) - Math.PI / 2;
  return m;
}

const smooth = (t: number) => t * t * (3 - 2 * t);

/* ------------------------------------------------------------------ the icons */

function shop() {
  const g = new Group();
  g.add(mesh(solid(roundRect(2.9, 2.5, 0.5), 0.9, 0.16), mat(COBALT), 0, -0.3, 0));
  g.add(mesh(new TorusGeometry(0.72, 0.17, 24, 56, Math.PI), mat(BLACK), 0, 1.0, 0));
  g.add(mesh(solid(roundRect(1.15, 0.55, 0.27), 0.12, 0.08), mat(WHITE), 0, -0.55, 0.6));
  return g;
}

function migrate() {
  const arrow = () => poly([[-1.7, -0.31], [0.5, -0.31], [0.5, -0.75], [1.7, 0], [0.5, 0.75], [0.5, 0.31], [-1.7, 0.31]]);
  const g = new Group();
  g.add(mesh(solid(arrow(), 0.5, 0.14), mat(COBALT), 0, 0.98, 0));
  const back = mesh(solid(arrow(), 0.5, 0.14), mat(WHITE), 0, -0.98, 0);
  back.rotation.z = Math.PI;
  g.add(back);
  return g;
}

function puzzle() {
  // A puzzle piece with two knobs: apps that snap into the store.
  const knob = (x: number, y: number) => {
    const c = new Shape();
    c.absarc(0, 0, 0.5, 0, Math.PI * 2, false);
    return mesh(solid(c, 0.9, 0.16), mat(COBALT), x, y, 0);
  };
  const g = new Group();
  g.add(mesh(solid(roundRect(2.7, 2.7, 0.5), 0.9, 0.16), mat(COBALT), 0, 0, 0));
  g.add(knob(0, 1.72), knob(1.72, 0));
  return g;
}

function chart() {
  // Three bars that grow, the tallest in cobalt: results, speed, search growth.
  const bar = (x: number, h: number, color: string) => mesh(solid(roundRect(0.95, h, 0.3), 0.8, 0.16), mat(color), x, -1.9 + h / 2, 0);
  const g = new Group();
  g.add(bar(-1.25, 1.7, WHITE), bar(0, 2.9, BLACK), bar(1.25, 4.1, COBALT));
  g.add(mesh(new SphereGeometry(0.34, 28, 28), mat(WHITE), 1.25, 2.55, 0));
  return g;
}

function funnel() {
  // A conversion funnel: wide mouth, narrow neck, with a lead dropping in.
  const g = new Group();
  g.add(mesh(solid(poly([[-1.9, 1.7], [1.9, 1.7], [0.5, -0.4], [0.5, -1.9], [-0.5, -1.9], [-0.5, -0.4]]), 0.9, 0.2, 26), mat(COBALT)));
  g.add(mesh(solid(roundRect(4.1, 0.5, 0.25), 0.9, 0.12), mat(WHITE), 0, 1.78, 0));
  g.add(mesh(new SphereGeometry(0.4, 28, 28), mat(BLACK), 0.15, 2.95, 0.1));
  g.add(mesh(new SphereGeometry(0.27, 24, 24), mat(WHITE), -0.85, 2.55, 0.3));
  return g;
}

function lifebuoy() {
  // A lifebuoy: support that is there when something goes wrong.
  const g = new Group();
  g.add(mesh(new TorusGeometry(1.5, 0.64, 36, 80), mat(WHITE)));
  for (let k = 0; k < 4; k++) {
    const band = mesh(new TorusGeometry(1.5, 0.67, 36, 28, Math.PI / 3), mat(COBALT));
    band.rotation.z = (k * Math.PI) / 2 + Math.PI / 12;
    g.add(band);
  }
  return g;
}

function chat() {
  const r = 0.75;
  const s = new Shape();
  s.moveTo(-0.7, -1.0);
  s.lineTo(1.8 - r, -1.0);
  s.absarc(1.8 - r, -1.0 + r, r, -Math.PI / 2, 0, false);
  s.lineTo(1.8, 1.5 - r);
  s.absarc(1.8 - r, 1.5 - r, r, 0, Math.PI / 2, false);
  s.lineTo(-1.8 + r, 1.5);
  s.absarc(-1.8 + r, 1.5 - r, r, Math.PI / 2, Math.PI, false);
  s.lineTo(-1.8, -2.0);
  s.closePath();
  const g = new Group();
  g.add(mesh(solid(s, 0.8, 0.16), mat(COBALT)));
  for (const x of [-0.75, 0, 0.75]) g.add(mesh(new SphereGeometry(0.21, 24, 24), mat(WHITE), x, 0.28, 0.58));
  return g;
}

function tag() {
  const shape = poly([[-1.25, -1.9], [1.25, -1.9], [1.25, 0.75], [0, 2.1], [-1.25, 0.75]]);
  const hole = new Path();
  hole.absarc(0, 0.95, 0.36, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  const g = new Group();
  g.add(mesh(solid(shape, 0.55, 0.17, 26), mat(WHITE)));
  g.add(mesh(new TorusGeometry(0.4, 0.09, 20, 48), mat(COBALT), 0, 0.95, 0));
  g.add(mesh(solid(roundRect(1.5, 0.3, 0.15), 0.1, 0.07), mat(COBALT), 0, -0.45, 0.5));
  g.add(mesh(solid(roundRect(1.0, 0.3, 0.15), 0.1, 0.07), mat(COBALT), -0.25, -1.1, 0.5));
  return g;
}

function layers() {
  const slab = (color: string, y: number) => {
    const m = mesh(solid(roundRect(3.1, 3.1, 0.6), 0.4, 0.13), mat(color), 0, y, 0);
    m.rotation.x = -Math.PI / 2;
    return m;
  };
  const g = new Group();
  g.add(slab(BLACK, -0.98), slab(WHITE, 0), slab(COBALT, 0.98));
  return g;
}

function rocket() {
  const curve = new SplineCurve([new Vector2(0, -1.9), new Vector2(0.55, -1.8), new Vector2(0.9, -1.1), new Vector2(1.0, 0), new Vector2(0.82, 1.0), new Vector2(0.45, 1.75), new Vector2(0, 2.4)]);
  const profile = curve.getPoints(70).map((p) => new Vector2(Math.max(0, p.x), p.y));
  const split = profile.findIndex((p) => p.y > 0.95);
  const g = new Group();
  g.add(mesh(new LatheGeometry(profile.slice(0, split + 1), 72), mat(WHITE)));
  g.add(mesh(new LatheGeometry(profile.slice(split), 72), mat(COBALT)));
  const fin = poly([[0, 0], [0.95, -0.85], [0.95, -1.7], [0, -1.15]]);
  for (let k = 0; k < 3; k++) {
    const holder = new Group();
    holder.rotation.y = (k * Math.PI * 2) / 3;
    holder.add(mesh(solid(fin, 0.22, 0.07), mat(COBALT), 0.7, -0.2, 0));
    g.add(holder);
  }
  const ring = mesh(new TorusGeometry(0.36, 0.1, 20, 48), mat(COBALT), 0, 0.35, 0.93);
  g.add(ring);
  const glass = mesh(new CylinderGeometry(0.32, 0.32, 0.08, 40), mat(BLACK), 0, 0.35, 0.93);
  glass.rotation.x = Math.PI / 2;
  g.add(glass);
  const flame = mesh(new ConeGeometry(0.55, 1.15, 40), mat(BLACK), 0, -2.45, 0);
  flame.rotation.x = Math.PI;
  g.add(flame);
  return g;
}

const BUILDERS: Record<IconName, () => Group> = { shop, migrate, puzzle, chart, funnel, lifebuoy, chat, tag, layers, rocket };
/** Resting pose in degrees (x, y, z): a little turned so the depth reads. */
const REST: Record<ObjectName, [number, number, number]> = {
  shop: [-12, 24, 0], migrate: [-14, 26, 0], puzzle: [-12, 26, 6], chart: [-12, 28, 0], funnel: [-14, 24, 0], lifebuoy: [-28, 24, 0],
  chat: [-10, 22, 0], tag: [-12, 24, 0], layers: [34, -38, 0], rocket: [10, -30, -42], logo: [0, 0, 0],
};

/** Put the object in its resting pose, centre it and scale it to fill about the same space as a pebble. */
function present(content: Group, name: ObjectName, radius: number) {
  const wrap = new Group();
  wrap.add(content);
  const [rx, ry, rz] = REST[name];
  const rest = new Quaternion().setFromEuler(new Euler((rx * Math.PI) / 180, (ry * Math.PI) / 180, (rz * Math.PI) / 180, 'XYZ'));
  wrap.quaternion.copy(rest);
  wrap.updateMatrixWorld(true);
  const box = new Box3().setFromObject(wrap);
  const center = box.getCenter(new Vector3());
  const size = box.getSize(new Vector3());
  // keep the pivot in the middle of the object: move the content by the (unrotated) offset of the centre
  content.position.sub(center.clone().applyQuaternion(rest.clone().invert()));
  wrap.scale.setScalar((radius * 2) / Math.max(size.x, size.y));
  wrap.userData.rest = rest;
  return wrap;
}

export function makeIcon(name: IconName, radius = 2.1) {
  return present(BUILDERS[name](), name, radius);
}

let logoGeometry: BufferGeometry | null = null;

/** The logo mark pushed out of its outline, with soft edges. `ink` is the colour of the site's text, `white` is for the cobalt block. */
export function makeLogo(tone: LogoTone = 'ink', radius = 2.35) {
  if (!logoGeometry) {
    const k = 4.4; // the mark is one unit tall in the data
    const [outer, ...holes] = markData.polygons[0] as [number, number][][];
    const toPoints = (ring: [number, number][]) => ring.map(([x, y]) => new Vector2(x * k, y * k));
    const shape = new Shape(toPoints(outer!));
    for (const ring of holes) shape.holes.push(new Path(toPoints(ring)));
    logoGeometry = solid(shape, 0.55, 0.06, 28);
  }
  const content = new Group();
  const material =
    tone === 'white'
      ? mat(WHITE, { roughness: 0.28, clearcoat: 0.8, envMapIntensity: 0.9 })
      : mat('#07080c', { roughness: 0.62, clearcoat: 0, envMapIntensity: 0.16 });
  content.add(new Mesh(logoGeometry, material));
  return present(content, 'logo', radius);
}

export const isIcon = (name: string): name is IconName => (ICON_NAMES as readonly string[]).includes(name);
