// Entry point: tiny on purpose. The heavy parts load after the page has finished loading, so the poster
// images paint first and the Lighthouse numbers hold.
const root = document.documentElement;

function boot() {
  if (!root.classList.contains('motion')) return; // reduced motion: stay static
  import('./motion')
    .then((m) => m.init())
    .catch(() => root.classList.remove('motion'));

  const nav = navigator as Navigator & { deviceMemory?: number };
  const weak = (nav.deviceMemory !== undefined && nav.deviceMemory < 4) || (nav.hardwareConcurrency !== undefined && nav.hardwareConcurrency < 4);
  if (weak) return; // the posters stay
  const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300));
  idle(
    () => {
      import('./stage')
        .then((m) => m.start())
        .catch(() => {});
    },
    { timeout: 1800 },
  );
}

if (document.readyState === 'complete') boot();
else window.addEventListener('load', boot, { once: true });
