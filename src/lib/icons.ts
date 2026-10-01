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

export const ICON_NAMES = ['shop', 'migrate', 'plug', 'bolt', 'magnifier', 'gear', 'chat', 'tag', 'layers', 'rocket'] as const;
export type IconName = (typeof ICON_NAMES)[number];
export type ObjectName = IconName | 'logo';

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

function plug() {
  const g = new Group();
  g.add(mesh(solid(roundRect(1.9, 1.6, 0.5), 0.9, 0.16), mat(BLACK), 0, -0.35, 0));
  g.add(mesh(new CapsuleGeometry(0.17, 0.9, 12, 24), mat(COBALT), -0.48, 0.95, 0));
  g.add(mesh(new CapsuleGeometry(0.17, 0.9, 12, 24), mat(COBALT), 0.48, 0.95, 0));
  const cable = new CatmullRomCurve3([new Vector3(0, -1.0, 0), new Vector3(0, -1.7, 0), new Vector3(0.55, -2.1, 0), new Vector3(1.3, -1.95, 0)]);
  g.add(mesh(new TubeGeometry(cable, 48, 0.17, 20), mat(COBALT)));
  g.add(mesh(new SphereGeometry(0.17, 20, 20), mat(COBALT), 1.3, -1.95, 0));
  return g;
}

function bolt() {
  const g = new Group();
  g.add(mesh(solid(poly([[0.7, 2.3], [-1.2, -0.2], [-0.05, -0.2], [-0.7, -2.3], [1.25, 0.45], [0.1, 0.45]]), 0.55, 0.17), mat(COBALT)));
  return g;
}

function magnifier() {
  const g = new Group();
  const lx = -0.35;
  const ly = 0.35;
  g.add(mesh(new TorusGeometry(1.05, 0.27, 28, 64), mat(WHITE), lx, ly, 0));
  const glass = mesh(new CylinderGeometry(1.03, 1.03, 0.14, 64), mat(MIST, { transparent: true, opacity: 0.5 }), lx, ly, 0);
  glass.rotation.x = Math.PI / 2;
  g.add(glass);
  g.add(bar(lx + 0.74, ly - 0.74, lx + 2.05, ly - 2.05, 0.3, mat(BLACK)));
  const check = mat(COBALT);
  g.add(bar(lx - 0.5, ly + 0.05, lx - 0.15, ly - 0.3, 0.11, check));
  g.add(bar(lx - 0.15, ly - 0.3, lx + 0.5, ly + 0.4, 0.11, check));
  return g;
}

function gear() {
  const teeth = 8;
  const rOuter = 2.05;
  const rRoot = 1.62;
  const pts: [number, number][] = [];
  const steps = teeth * 22;
  for (let i = 0; i < steps; i++) {
    const a = (i / steps) * Math.PI * 2;
    const t = ((a * teeth) / (Math.PI * 2)) % 1;
    let k = 0;
    if (t >= 0.12 && t < 0.3) k = smooth((t - 0.12) / 0.18);
    else if (t >= 0.3 && t < 0.62) k = 1;
    else if (t >= 0.62 && t < 0.8) k = 1 - smooth((t - 0.62) / 0.18);
    const r = rRoot + (rOuter - rRoot) * k;
    pts.push([r * Math.cos(a), r * Math.sin(a)]);
  }
  const shape = poly(pts);
  const hole = new Path();
  hole.absarc(0, 0, 0.78, 0, Math.PI * 2, true);
  shape.holes.push(hole);
  const g = new Group();
  g.add(mesh(solid(shape, 0.7, 0.13, 26), mat(BLACK)));
  const hub = mesh(new CylinderGeometry(0.52, 0.52, 0.6, 48), mat(COBALT));
  hub.rotation.x = Math.PI / 2;
  g.add(hub);
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

const BUILDERS: Record<IconName, () => Group> = { shop, migrate, plug, bolt, magnifier, gear, chat, tag, layers, rocket };
/** Resting pose in degrees (x, y, z): a little turned so the depth reads. */
const REST: Record<ObjectName, [number, number, number]> = {
  shop: [-12, 24, 0], migrate: [-14, 26, 0], plug: [-12, 24, 8], bolt: [-10, 26, 0], magnifier: [-12, 22, 0], gear: [-14, 24, 0],
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

/** The logo mark pushed out of its outline: black, glossy, with soft edges. */
export function makeLogo(radius = 2.35) {
  const k = 4.4; // the mark is one unit tall in the data
  const [outer, ...holes] = markData.polygons[0] as [number, number][][];
  const toPoints = (ring: [number, number][]) => ring.map(([x, y]) => new Vector2(x * k, y * k));
  const shape = new Shape(toPoints(outer!));
  for (const ring of holes) shape.holes.push(new Path(toPoints(ring)));
  const content = new Group();
  // Darker and a little less mirror-like than the stones, so thin strokes still read as black.
  content.add(new Mesh(solid(shape, 0.55, 0.06, 28), mat('#030304', { roughness: 0.42, clearcoat: 0.35, clearcoatRoughness: 0.3, envMapIntensity: 0.4 })));
  return present(content, 'logo', radius);
}

export const isIcon = (name: string): name is IconName => (ICON_NAMES as readonly string[]).includes(name);
