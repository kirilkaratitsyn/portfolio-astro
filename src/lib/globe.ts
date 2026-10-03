// The globe of the worldwide section (src/sections/Globe.astro): a glossy white ball in the material of the stones,
// land as ink dots, a cobalt pin for every client store, and an arc from home (Bad Bentheim, Germany) to each pin
// with a light travelling along it. Built in code; the land dots come from src/lib/globe-dots.json
// (scripts/make-globe-dots.mjs), so no map data is loaded at runtime. Zoomed in, a three times finer grid of land
// dots (public/source/3d/globe-land.bin, fetched on the first zoom) takes over from them.
import {
  BackSide, BufferAttribute, BufferGeometry, Color, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshPhysicalMaterial,
  Points, RingGeometry, ShaderMaterial, SphereGeometry, TubeGeometry, Vector3, Curve,
} from 'three';
import dots from './globe-dots.json';

const DEG = Math.PI / 180;
export const GLOBE_RADIUS = 2;
export const GLOBE_CAMERA = { fov: 30, distance: 9.4 };
/** How far the globe zooms in (camera zoom), close enough to tell the Benelux stores apart. */
export const GLOBE_MAX_ZOOM = 4;
/** Where the arcs start: Bad Bentheim, Germany. */
export const HOME = { lat: 52.3, lng: 7.16 };

const COBALT = '#2433f0';
const INK = '#0e1018';

/** A pin as the page hands it over (data-markers on the globe host). */
export interface GlobeMarker {
  /** store title, city, localized country name, country code, store url, latitude, longitude */
  t: string;
  c: string;
  n: string;
  k: string;
  u: string;
  la: number;
  lo: number;
}

export interface GlobePin extends GlobeMarker {
  /** Position on the ball in the globe's own space. */
  at: Vector3;
  dot: Mesh;
  ring: Mesh;
  arc: Mesh;
  comet: Mesh;
  phase: number;
}

export function toVector(lat: number, lng: number, r = GLOBE_RADIUS, into = new Vector3()) {
  const phi = lat * DEG;
  const lam = lng * DEG;
  return into.set(r * Math.cos(phi) * Math.sin(lam), r * Math.sin(phi), r * Math.cos(phi) * Math.cos(lam));
}

/** A great-circle path from a to b that lifts off the ball; long flights fly higher. */
class Arc extends Curve<Vector3> {
  private a: Vector3;
  private b: Vector3;
  private angle: number;
  private lift: number;
  constructor(from: Vector3, to: Vector3) {
    super();
    this.a = from.clone().normalize();
    this.b = to.clone().normalize();
    this.angle = this.a.angleTo(this.b);
    this.lift = 0.04 + 0.34 * (this.angle / Math.PI);
  }
  override getPoint(t: number, into = new Vector3()) {
    const s = Math.sin(this.angle) || 1;
    const wa = Math.sin((1 - t) * this.angle) / s;
    const wb = Math.sin(t * this.angle) / s;
    into.copy(this.a).multiplyScalar(wa).addScaledVector(this.b, wb).normalize();
    return into.multiplyScalar(GLOBE_RADIUS * (1.006 + this.lift * Math.sin(Math.PI * t)));
  }
}

const dotShader = {
  vertex: /* glsl */ `
    uniform float uSize;
    varying float vFacing;
    void main() {
      vec4 mv = modelViewMatrix * vec4(position, 1.0);
      vFacing = normalize(normalMatrix * normalize(position)).z;
      gl_PointSize = uSize * (10.0 / -mv.z);
      gl_Position = projectionMatrix * mv;
    }`,
  fragment: /* glsl */ `
    uniform vec3 uColor;
    uniform float uAlpha;
    varying float vFacing;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.36, d) * smoothstep(0.02, 0.4, vFacing) * 0.78 * uAlpha;
      gl_FragColor = vec4(uColor, a);
    }`,
};

const haloShader = {
  vertex: /* glsl */ `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragment: /* glsl */ `
    uniform vec3 uColor;
    varying vec3 vNormal;
    void main() {
      // Seen from inside (back faces), so -z grows from 0 at the outer edge of the glow to its inner edge at the ball.
      float glow = smoothstep(0.0, 0.42, -vNormal.z);
      gl_FragColor = vec4(uColor, glow * glow * 0.28);
    }`,
};

function srgb(hex: string) {
  const c = new Color(hex);
  return new Vector3(c.r, c.g, c.b);
}

export function makeGlobe(markers: GlobeMarker[]) {
  const group = new Group();
  group.rotation.order = 'XYZ';

  // The ball, in the glossy white of the pebbles.
  const ball = new Mesh(
    new SphereGeometry(GLOBE_RADIUS, 96, 64),
    new MeshPhysicalMaterial({ color: '#f4f5f9', roughness: 0.3, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.12, envMapIntensity: 1 }),
  );
  group.add(ball);

  // A faint cobalt glow around the rim (it stays still while the ball turns).
  const halo = new Mesh(
    new SphereGeometry(GLOBE_RADIUS * 1.1, 64, 48),
    new ShaderMaterial({ vertexShader: haloShader.vertex, fragmentShader: haloShader.fragment, uniforms: { uColor: { value: srgb(COBALT) } }, transparent: true, depthWrite: false, side: BackSide }),
  );

  // Land as dots; the dots fade out toward the rim.
  const land = dots as number[];
  const positions = new Float32Array((land.length / 2) * 3);
  const v = new Vector3();
  for (let i = 0; i < land.length; i += 2) {
    toVector(land[i]!, land[i + 1]!, GLOBE_RADIUS * 1.003, v);
    positions.set([v.x, v.y, v.z], (i / 2) * 3);
  }
  const dotLayer = (positions: Float32Array) => {
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(positions, 3));
    const material = new ShaderMaterial({
      vertexShader: dotShader.vertex,
      fragmentShader: dotShader.fragment,
      uniforms: { uSize: { value: 4 }, uAlpha: { value: 1 }, uColor: { value: srgb(INK) } },
      transparent: true,
      depthWrite: false,
    });
    const points = new Points(geometry, material);
    group.add(points);
    return { points, uniforms: material.uniforms as { uSize: { value: number }; uAlpha: { value: number } } };
  };
  const coarse = dotLayer(positions);
  let fine: ReturnType<typeof dotLayer> | null = null;

  // Pins, arcs from home, and a light flying along each arc.
  const pinGeometry = new SphereGeometry(GLOBE_RADIUS * 0.022, 20, 14);
  const pinMaterial = new MeshPhysicalMaterial({ color: COBALT, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
  const ringGeometry = new RingGeometry(GLOBE_RADIUS * 0.03, GLOBE_RADIUS * 0.038, 40);
  const arcMaterial = new MeshBasicMaterial({ color: COBALT, transparent: true, opacity: 0.32, toneMapped: false, depthWrite: false });
  const cometGeometry = new SphereGeometry(GLOBE_RADIUS * 0.014, 12, 10);
  const cometMaterial = new MeshBasicMaterial({ color: COBALT, toneMapped: false });

  const home = toVector(HOME.lat, HOME.lng, GLOBE_RADIUS * 1.01);
  const homePin = new Mesh(new SphereGeometry(GLOBE_RADIUS * 0.03, 20, 14), new MeshPhysicalMaterial({ color: INK, roughness: 0.25, clearcoat: 1, envMapIntensity: 0.4 }));
  homePin.position.copy(home);
  group.add(homePin);

  const pins: GlobePin[] = [];
  const comets: { mesh: Mesh; arc: Arc; phase: number; speed: number }[] = [];
  markers.forEach((m, i) => {
    const at = toVector(m.la, m.lo, GLOBE_RADIUS * 1.008);
    const pin = new Mesh(pinGeometry, pinMaterial);
    pin.position.copy(at);
    group.add(pin);
    const ring = new Mesh(ringGeometry, new MeshBasicMaterial({ color: COBALT, transparent: true, opacity: 0, side: DoubleSide, toneMapped: false, depthWrite: false }));
    ring.position.copy(at);
    ring.lookAt(at.clone().multiplyScalar(2));
    group.add(ring);
    const phase = (i * 0.618) % 1;
    const arc = new Arc(home, at);
    const tube = new Mesh(new TubeGeometry(arc, 64, GLOBE_RADIUS * 0.0032, 5, false), arcMaterial);
    group.add(tube);
    const comet = new Mesh(cometGeometry, cometMaterial);
    group.add(comet);
    comets.push({ mesh: comet, arc, phase, speed: 0.22 + ((i * 0.37) % 1) * 0.12 });
    pins.push({ ...m, at, dot: pin, ring, arc: tube, comet, phase });
  });

  const tmp = new Vector3();
  // Zoomed in, pins and lights grow less than the ball, so a cluster of stores (the Benelux) comes apart.
  let marks = 1;
  let zoom = 1;
  let dotPx = 4;
  /** Coarse dots grow with the zoom until the fine grid (three times as dense) fades in and takes over. */
  const sizeDots = () => {
    const k = (GLOBE_CAMERA.distance - GLOBE_RADIUS) / 10;
    const mix = fine ? Math.min(1, Math.max(0, (zoom - 1.4) / 1.0)) : 0;
    coarse.uniforms.uSize.value = dotPx * zoom ** 0.75 * k;
    coarse.uniforms.uAlpha.value = 1 - mix;
    coarse.points.visible = mix < 1;
    if (fine) {
      fine.uniforms.uSize.value = dotPx * (zoom / 3) * 1.15 * k;
      fine.uniforms.uAlpha.value = mix;
      fine.points.visible = mix > 0;
    }
  };
  return {
    group,
    halo,
    pins,
    home: { at: home },
    /** Dot size in device pixels at the front of the ball, at zoom 1. */
    setDotSize(px: number) {
      dotPx = px;
      sizeDots();
    },
    setZoom(value: number) {
      zoom = value;
      marks = zoom ** -0.6;
      for (const pin of pins) pin.dot.scale.setScalar(marks);
      homePin.scale.setScalar(marks);
      sizeDots();
    },
    /** Show the stores of one country only (its pins, rings, arcs and lights), or all of them with null. */
    setCountry(code: string | null) {
      for (const pin of pins) {
        const on = !code || pin.k === code;
        pin.dot.visible = pin.ring.visible = pin.arc.visible = pin.comet.visible = on;
      }
    },
    get hasFineLand() {
      return Boolean(fine);
    },
    /** The fine grid: a uint32 with the size of its Fibonacci sphere, then one bit per point (1 = land). */
    addFineLand(buffer: ArrayBuffer) {
      if (fine || buffer.byteLength < 4) return;
      const n = new DataView(buffer).getUint32(0, true);
      const bits = new Uint8Array(buffer, 4);
      const golden = Math.PI * (3 - Math.sqrt(5));
      const r = GLOBE_RADIUS * 1.003;
      const list: number[] = [];
      for (let i = 0; i < n; i++) {
        if (!((bits[i >> 3] ?? 0) & (1 << (i & 7)))) continue;
        // The same point as scripts/make-globe-dots.mjs fibonacci(), placed like toVector().
        const y = 1 - (i / (n - 1)) * 2;
        const ring = Math.sqrt(1 - y * y);
        const theta = golden * i;
        list.push(r * ring * Math.sin(theta), r * y, r * ring * Math.cos(theta));
      }
      fine = dotLayer(new Float32Array(list));
      sizeDots();
    },
    /** Pulse the pin rings and move the lights along the arcs. */
    update(time: number) {
      for (const pin of pins) {
        const k = (time * 0.45 + pin.phase) % 1;
        pin.ring.scale.setScalar((1 + k * 1.6) * marks);
        (pin.ring.material as MeshBasicMaterial).opacity = 0.55 * (1 - k);
      }
      for (const c of comets) {
        if (!c.mesh.visible) continue;
        const t = (time * c.speed + c.phase) % 1;
        c.arc.getPoint(t, tmp);
        c.mesh.position.copy(tmp);
        c.mesh.scale.setScalar((Math.sin(Math.PI * t) * 1.1 + 0.05) * marks);
      }
    },
  };
}

export type Globe = ReturnType<typeof makeGlobe>;
