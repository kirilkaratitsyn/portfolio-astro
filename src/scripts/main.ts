// Entry point: tiny on purpose. The heavy parts load after the page has finished loading, so the poster
// images paint first and the Lighthouse numbers hold.
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
  if (weak || !webgl()) return; // the posters stay
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300));
  const stage = (globeOnly: boolean) =>
    import('./stage')
      .then((m) => m.start({ globeOnly }))
      .catch(() => {});

  // Touch screens: the stones and icons cannot be grabbed there, so their posters stay and three.js loads only when
  // the globe (pinch, tap) comes near. With a mouse, every 3D object goes live once the page is idle.
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const globe = document.querySelector('[data-globe]');
    if (!globe) return;
    const near = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        near.disconnect();
        idle(() => void stage(true), { timeout: 1200 });
      },
      { rootMargin: '1500px 0px' },
    );
    near.observe(globe);
    return;
  }
  idle(() => void stage(false), { timeout: 1800 });
}

if (document.readyState === 'complete') boot();
else window.addEventListener('load', boot, { once: true });
