// Microsoft Clarity (heatmaps, session recordings). It sets cookies, so it loads only after the visitor opts in
// (components/Consent.astro). An empty ID switches the banner and the footer link off.
export const CLARITY_ID = 'z464dtme6f';

// Google Ads conversion tracking (account 181-316-3580). Loads together with Clarity and only after the same opt-in;
// the form reports one conversion after it was sent (lib/track.ts). Enhanced conversions stay off: no form data to Google.
export const ADS_ID = 'AW-18597779170';
export const ADS_FORM_SENT = 'AW-18597779170/RLCLCN6LkMAdEOKtjqRF';
