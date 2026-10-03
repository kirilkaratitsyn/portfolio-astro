// The globe of the worldwide section (src/sections/Globe.astro): a glossy white ball in the material of the stones,
// land as ink dots, a cobalt pin for every client store, and an arc from home (Bad Bentheim, Germany) to each pin
// with a light travelling along it. Built in code; the land dots come from src/lib/globe-dots.json
// (scripts/make-globe-dots.mjs), so no map data is loaded at runtime.
import {
  BackSide, BufferAttribute, BufferGeometry, Color, DoubleSide, Group, Mesh, MeshBasicMaterial, MeshPhysicalMaterial,
  Points, RingGeometry, ShaderMaterial, SphereGeometry, TubeGeometry, Vector3, Curve,
} from 'three';
import dots from './globe-dots.json';

const DEG = Math.PI / 180;
export const GLOBE_RADIUS = 2;
export const GLOBE_CAMERA = { fov: 30, distance: 9.4 };
/** Where the arcs start: Bad Bentheim, Germany. */
export const HOME = { lat: 52.3, lng: 7.16 };

const COBALT = '#2433f0';
const INK = '#0e1018';

/** A pin as the page hands it over (data-markers on the globe host). */
export interface GlobeMarker {
  /** store title, city, localized country name, store url, latitude, longitude */
  t: string;
  c: string;
  n: string;
  u: string;
  la: number;
  lo: number;
}

export interface GlobePin extends GlobeMarker {
  /** Position on the ball in the globe's own space. */
  at: Vector3;
  ring: Mesh;
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
    varying float vFacing;
    void main() {
      float d = length(gl_PointCoord - 0.5);
      if (d > 0.5) discard;
      float a = smoothstep(0.5, 0.36, d) * smoothstep(0.02, 0.4, vFacing) * 0.78;
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
  const dotGeometry = new BufferGeometry();
  dotGeometry.setAttribute('position', new BufferAttribute(positions, 3));
  const dotMaterial = new ShaderMaterial({
    vertexShader: dotShader.vertex,
    fragmentShader: dotShader.fragment,
    uniforms: { uSize: { value: 4 }, uColor: { value: srgb(INK) } },
    transparent: true,
    depthWrite: false,
  });
  group.add(new Points(dotGeometry, dotMaterial));

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
    pins.push({ ...m, at, ring, phase });

    const arc = new Arc(home, at);
    group.add(new Mesh(new TubeGeometry(arc, 64, GLOBE_RADIUS * 0.0032, 5, false), arcMaterial));
    const comet = new Mesh(cometGeometry, cometMaterial);
    group.add(comet);
    comets.push({ mesh: comet, arc, phase, speed: 0.22 + ((i * 0.37) % 1) * 0.12 });
  });

  const tmp = new Vector3();
  return {
    group,
    halo,
    pins,
    home: { at: home },
    /** Dot size in device pixels at the front of the ball. */
    setDotSize(px: number) {
      dotMaterial.uniforms.uSize!.value = px * ((GLOBE_CAMERA.distance - GLOBE_RADIUS) / 10);
    },
    /** Pulse the pin rings and move the lights along the arcs. */
    update(time: number) {
      for (const pin of pins) {
        const k = (time * 0.45 + pin.phase) % 1;
        pin.ring.scale.setScalar(1 + k * 1.6);
        (pin.ring.material as MeshBasicMaterial).opacity = 0.55 * (1 - k);
      }
      for (const c of comets) {
        const t = (time * c.speed + c.phase) % 1;
        c.arc.getPoint(t, tmp);
        c.mesh.position.copy(tmp);
        c.mesh.scale.setScalar(Math.sin(Math.PI * t) * 1.1 + 0.05);
      }
    },
  };
}

export type Globe = ReturnType<typeof makeGlobe>;
