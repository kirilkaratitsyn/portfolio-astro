// Entry point: tiny on purpose. The heavy parts load after the page has finished loading, so the poster
// images paint first and the Lighthouse numbers hold.
import { trackClicks } from '../lib/track';

trackClicks();

const root = document.documentElement;

/** WebGL works here (it can be off, or the GPU blocklisted): without it the posters stay and three.js never loads. */
function webgl() {
  try {
    const gl = document.createElement('canvas').getContext('webgl2') ?? document.createElement('canvas').getContext('webgl');
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return Boolean(gl);
  } catch {
    return false;
  }
}

function boot() {
  if (!root.classList.contains('motion')) return; // reduced motion: stay static
  import('./motion')
    .then((m) => m.init())
    .catch(() => root.classList.remove('motion'));

  const nav = navigator as Navigator & { deviceMemory?: number };
  const weak = (nav.deviceMemory !== undefined && nav.deviceMemory < 4) || (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency < 4);
  if (weak) return; // the posters stay
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300));
  // The WebGL check opens a GL context, which can hold the main thread for a long time on a phone or a machine without
  // a GPU: it runs only once three.js is about to load, never in the load event.
  const stage = (globeOnly: boolean) => {
    if (!webgl()) return; // the posters stay
    import('./stage')
      .then((m) => m.start({ globeOnly }))
      .catch(() => {});
  };

  // Touch screens: every 3D object goes live after the first touch, scroll or key (a page that is only loaded stays
  // light), or when the globe comes near; until then the posters show the same picture. With a mouse, once idle.
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let started = false;
    const events = ['touchstart', 'pointerdown', 'scroll', 'keydown'] as const;
    // Parsing three.js is one long task: start it once the finger has rested for half a second, not mid-flick.
    let quiet = 0;
    const load = () => {
      window.removeEventListener('scroll', rest);
      window.removeEventListener('touchmove', rest);
      idle(() => void stage(false), { timeout: 1500 });
    };
    const rest = () => {
      window.clearTimeout(quiet);
      quiet = window.setTimeout(load, 500);
    };
    const go = () => {
      if (started) return;
      started = true;
      for (const type of events) window.removeEventListener(type, go);
      near?.disconnect();
      window.addEventListener('scroll', rest, { passive: true });
      window.addEventListener('touchmove', rest, { passive: true });
      rest();
    };
    for (const type of events) window.addEventListener(type, go, { passive: true });
    const globe = document.querySelector('[data-globe]');
    const near = globe
      ? new IntersectionObserver((entries) => entries.some((e) => e.isIntersecting) && go(), { rootMargin: '1500px 0px' })
      : null;
    if (globe) near?.observe(globe);
    return;
  }
  idle(() => void stage(false), { timeout: 1800 });
}

if (document.readyState === 'complete') boot();
else window.addEventListener('load', boot, { once: true });
