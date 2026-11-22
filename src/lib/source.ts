// Where a visitor came from, so a form message or a booking shows its channel. Read from the address of the page the
// visit started on (utm_source, utm_medium, utm_campaign) and from the site that linked to it. Nothing is kept on the
// device without consent: only after "Accept" in the cookie notice is the first page's source remembered for the rest of
// the visit (session storage, entry `first-touch`, gone when the tab closes); without it, only the current page counts.
// No identifiers, no form input: just the campaign tags, the referring site and the first path. See the privacy policy.

export type Source = { utm: string; ref: string; land: string };

const KEY = 'first-touch';
const UTM = ['utm_source', 'utm_medium', 'utm_campaign'];

const consented = () => {
  try {
    return localStorage.getItem('consent-analytics') === 'granted';
  } catch {
    return false;
  }
};

/** The source this page alone can tell: its campaign tags and a referrer from another site (origin and path only). */
function here(): Source {
  const params = new URLSearchParams(location.search);
  const utm = new URLSearchParams(UTM.filter((k) => params.get(k)).map((k) => [k, params.get(k)!.slice(0, 80)])).toString();
  let ref = '';
  try {
    const r = document.referrer ? new URL(document.referrer) : null;
    if (r && r.host !== location.host) ref = (r.origin + r.pathname).slice(0, 200);
  } catch {
    // an odd referrer is no source
  }
  return { utm, ref, land: location.pathname };
}

const current = here();

function stored(): Source | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Source) : null;
  } catch {
    return null;
  }
}

/** With consent, the first page of the visit is remembered; a later page with its own campaign tags does not replace it. */
export function remember() {
  if (!consented()) return;
  try {
    if (!stored() && (current.utm || current.ref)) sessionStorage.setItem(KEY, JSON.stringify(current));
  } catch {
    // storage blocked: the current page still counts
  }
}

export function forget() {
  try {
    sessionStorage.removeItem(KEY);
  } catch {
    // nothing to remove
  }
}

/** The visit's first source when it was remembered, otherwise what the current page tells. */
export function source(): Source {
  return (consented() && stored()) || current;
}

/** Booking buttons carry the source into Cal.com: utm_* go into the booking's tracking, the referrer into its metadata. */
export function tagBookings() {
  const s = source();
  const extra: Record<string, string> = Object.fromEntries(new URLSearchParams(s.utm));
  if (s.ref) extra['metadata[ref]'] = s.ref;
  if (s.land) extra['metadata[land]'] = s.land;
  for (const el of document.querySelectorAll<HTMLElement>('[data-cal-link]')) {
    let config: Record<string, string> = {};
    try {
      config = JSON.parse(el.dataset.calBase || el.getAttribute('data-cal-config') || '{}');
    } catch {
      // keep the default
    }
    el.dataset.calBase ??= JSON.stringify(config);
    el.setAttribute('data-cal-config', JSON.stringify({ ...config, ...extra }));
  }
}

/** Run once per page: remember (with consent), tag the booking buttons, and follow a later consent choice. */
export function trackSource() {
  remember();
  tagBookings();
  const s = source();
  const w = window as unknown as { clarity?: (...args: unknown[]) => void };
  const utmSource = new URLSearchParams(s.utm).get('utm_source');
  if (utmSource) w.clarity?.('set', 'utm_source', utmSource);
  document.addEventListener('click', (event) => {
    const choice = event.target instanceof Element && event.target.closest<HTMLElement>('[data-consent]');
    if (!choice) return;
    setTimeout(() => {
      if (choice.dataset.consent === 'granted') remember();
      else forget();
      tagBookings();
    });
  });
}
