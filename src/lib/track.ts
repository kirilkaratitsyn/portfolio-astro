// Conversion events. Names only, no personal data: the event goes to Vercel Web Analytics (cookieless) and, only when the
// visitor has accepted it, to Microsoft Clarity (window.clarity exists only after consent, see components/Consent.astro).
type Tracker = (command: string, payload?: unknown) => void;

export function track(name: string) {
  const w = window as unknown as { va?: Tracker; clarity?: Tracker };
  try {
    w.va?.('event', { name });
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
    if (target.closest('a[href$="#contact"]')) track('cta_shop_check');
  });
}
