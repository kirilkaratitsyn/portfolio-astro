// Conversion events. Names only, no personal data: the event goes to Microsoft Clarity, and only when the visitor has
// accepted it (window.clarity exists only after consent, see components/Consent.astro).
type Tracker = (command: string, payload?: unknown) => void;

export function track(name: string) {
  const w = window as unknown as { clarity?: Tracker };
  try {
    w.clarity?.('event', name);
  } catch {
    // analytics must never break the page
  }
}

/** One delegated listener for the three ways to reach Kiril that are links or buttons; the form calls track() itself. */
export function trackClicks() {
  document.addEventListener('click', (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    if (target.closest('[data-cal-link]')) return track('book_call');
    if (target.closest('a[href^="mailto:"]')) return track('email_click');
    if (target.closest('a[href$="#contact"], a[href$="#shop-check"]')) track('cta_shop_check');
  });
}
