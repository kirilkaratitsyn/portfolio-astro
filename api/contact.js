// The contact form (sections/Contact.astro) posts here: a store check request or a project enquiry. The message goes
// to Kiril by email through Resend, with the visitor's address as Reply-To; nothing is stored on the site.
// Settings in Vercel: RESEND_API_KEY (required), CONTACT_TO and CONTACT_FROM (optional). The sender is on
// updates.karatitsyn.com, the domain verified in Resend (DNS records on that subdomain only; the mail of the main
// domain is untouched).
//
// Spam: the message goes out only with a signed token (see token below). The form's script fetches one from GET
// /api/contact when the visitor first touches the form; a plain HTML post without scripts gets a "please confirm" page
// that carries one, so people without JavaScript still get through with one more click, while bots that post straight
// to this address never do. A token used within seconds, the hidden field, links in the name, XRumer markup, throwaway
// mail domains and keyboard-mash messages get the usual "thank you" with nothing sent (logged with a reason only).
import { createHash, createHmac, timingSafeEqual } from 'node:crypto';

const TO = process.env.CONTACT_TO || 'kiril@karatitsyn.com';
const FROM = process.env.CONTACT_FROM || 'karatitsyn.com <website@updates.karatitsyn.com>';
const LIMITS = { topic: 20, name: 120, email: 200, shop: 300, message: 4000, source: 60, page: 300, utm: 300, ref: 200, land: 300, lang: 5 };

/** What a visitor sees when the form was sent without scripts (a plain HTML post). */
const PAGES = {
  de: { ok: 'Danke! Ihre Nachricht ist angekommen. Sie hören innerhalb von zwei Werktagen von mir.', fail: 'Das hat leider nicht geklappt. Schreiben Sie mir bitte direkt an kiril@karatitsyn.com.', back: 'Zurück' },
  uk: { ok: 'Дякую! Повідомлення надіслано. Я відповім протягом двох робочих днів.', fail: 'На жаль, не вдалося надіслати. Напишіть мені напряму на kiril@karatitsyn.com.', back: 'Назад' },
  en: { ok: 'Thank you! Your message has arrived. You will hear from me within two working days.', fail: 'Sorry, that did not work. Please write to me directly at kiril@karatitsyn.com.', back: 'Back' },
};
const CONFIRM = {
  de: { text: 'Fast geschafft: Bitte bestätigen Sie, dass Ihre Nachricht gesendet werden soll.', send: 'Nachricht senden' },
  uk: { text: 'Майже готово: підтвердьте, будь ласка, надсилання повідомлення.', send: 'Надіслати' },
  en: { text: 'Almost done: please confirm that your message should be sent.', send: 'Send message' },
};

/** A token is "kind.issued.signature": f from the form's script, c from the confirm page. */
const TOKEN_MIN = { f: 3000, c: 2000 };
const TOKEN_MAX = 24 * 60 * 60 * 1000;
/** Throwaway mail services seen in spam (exact domains; never big free mailers such as gmx or gmail). */
const DISPOSABLE = new Set(['notlettersmail.com', 'mailinator.com', 'yopmail.com', 'guerrillamail.com', 'sharklasers.com', 'grr.la', 'temp-mail.org', 'tempmail.com', '10minutemail.com', 'trashmail.com', 'getnada.com', 'dispostable.com', 'maildrop.cc', 'mohmal.com', 'emailondeck.com']);
/** A soft limit per address, per running instance: enough for a person, not for a flood. */
const RATE = { max: 5, window: 15 * 60 * 1000 };
const sends = new Map();

const clean = (value, max) => String(value ?? '').replace(/\r/g, '').trim().slice(0, max);
const isEmail = (value) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);
const escape = (value) => value.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

const tokenKey = () => createHash('sha256').update(`contact-form-token\n${process.env.RESEND_API_KEY}`).digest();
const sign = (payload) => createHmac('sha256', tokenKey()).update(payload).digest('base64url').slice(0, 32);
const issue = (kind) => {
  const payload = `${kind}.${Date.now().toString(36)}`;
  return `${payload}.${sign(payload)}`;
};

/** 'ok', 'fast', 'old', 'missing' or 'bad' (a signature that does not match). */
function verify(token) {
  const [kind, issued, signature, extra] = String(token ?? '').split('.');
  if (!kind && !issued) return 'missing';
  if (extra !== undefined || !TOKEN_MIN[kind] || !signature) return 'bad';
  const expected = Buffer.from(sign(`${kind}.${issued}`));
  const given = Buffer.from(signature);
  if (given.length !== expected.length || !timingSafeEqual(given, expected)) return 'bad';
  const age = Date.now() - parseInt(issued, 36);
  if (!(age >= TOKEN_MIN[kind])) return age < 0 ? 'bad' : 'fast';
  return age > TOKEN_MAX ? 'old' : 'ok';
}

/** Why a filled-in form looks like a bot, or '' when it looks like a person. */
function spamReason(field, data) {
  if (clean(data.website, 200)) return 'honeypot';
  const all = [field.name, field.email, field.shop, field.message, field.source].join('\n');
  if (/#file_links|\[url=|\[link=/i.test(all)) return 'xrumer';
  if (/:\/\/|www\./i.test(field.name)) return 'name-link';
  if (/\d{3}/.test(field.name)) return 'name-digits';
  if (DISPOSABLE.has(field.email.split('@').pop().toLowerCase())) return 'disposable';
  // Keyboard mash: most of the letters sit in two or more "words" of 18+ letters. German compounds are long too,
  // but a real message has ordinary words around them.
  const words = field.message.match(/\p{L}+/gu) || [];
  const letters = words.reduce((sum, word) => sum + word.length, 0);
  const long = words.filter((word) => word.length >= 18);
  if (long.length >= 2 && long.reduce((sum, word) => sum + word.length, 0) > letters / 2) return 'mash';
  return '';
}

function clientIp(request) {
  return (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() || request.headers.get('x-real-ip') || '';
}

function overLimit(ip) {
  if (!ip) return false;
  const now = Date.now();
  if (sends.size > 1000) sends.clear();
  const recent = (sends.get(ip) || []).filter((time) => now - time < RATE.window);
  sends.set(ip, recent);
  return recent.length >= RATE.max;
}

async function readBody(request) {
  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) return await request.json();
  return Object.fromEntries((await request.formData()).entries());
}

/** Only paths on this site go back into a link (a referer from elsewhere falls back to the page field or home). */
function backLink(request, page = '') {
  try {
    const referer = new URL(request.headers.get('referer') || '');
    if (referer.host === new URL(request.url).host && !referer.pathname.startsWith('/api/')) return `${referer.pathname}${referer.search}#contact`;
  } catch {}
  return /^\/(?!\/)[^\s#]*$/.test(page) && !page.startsWith('/api/') ? `${page}#contact` : '/#contact';
}

function refererPath(request) {
  try {
    const referer = new URL(request.headers.get('referer') || '');
    if (referer.host === new URL(request.url).host && !referer.pathname.startsWith('/api/')) return referer.pathname;
  } catch {}
  return '';
}

const page = (lang, body) =>
  `<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>karatitsyn.com</title><body style="font:18px/1.6 system-ui,sans-serif;max-width:560px;margin:15vh auto;padding:0 20px;color:#0e1018;background:#edeff6">${body}</body></html>`;
const html = (status, body) => new Response(body, { status, headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });

/** Without scripts: the same fields once more, with a fresh token, and one button. */
function confirmPage(request, field, lang) {
  const text = CONFIRM[lang] || CONFIRM.en;
  const values = { ...field, lang, page: field.page || refererPath(request), t: issue('c') };
  const inputs = Object.entries(values)
    .filter(([, value]) => value)
    .map(([name, value]) => `<input type="hidden" name="${name}" value="${escape(value)}">`)
    .join('');
  return html(200, page(lang, `<p>${escape(text.text)}</p><form action="/api/contact" method="post">${inputs}<button type="submit" style="font:inherit;font-weight:600;padding:12px 26px;border:0;border-radius:999px;background:#2433f0;color:#fff;cursor:pointer">${escape(text.send)}</button></form><p><a href="${escape(backLink(request, field.page))}" style="color:#2433f0">${escape((PAGES[lang] || PAGES.en).back)}</a></p>`));
}

const wantsJson = (request) => (request.headers.get('accept') || '').includes('application/json');

function answer(request, status, ok, lang, pagePath = '') {
  if (wantsJson(request)) return Response.json({ ok }, { status });
  const text = PAGES[lang] || PAGES.en;
  return html(status, page(lang, `<p>${escape(ok ? text.ok : text.fail)}</p><p><a href="${escape(backLink(request, pagePath))}" style="color:#2433f0">${escape(text.back)}</a></p>`));
}

/** A bot gets the same "thank you" a person gets; only the log says why nothing was sent. */
function drop(request, reason, lang) {
  console.warn('contact: dropped as spam:', reason);
  return answer(request, 200, true, lang);
}

export default {
  async fetch(request) {
    // The form's script asks for a token when the visitor starts filling it in.
    if (request.method === 'GET') {
      if (!process.env.RESEND_API_KEY) return Response.json({ ok: false }, { status: 503, headers: { 'cache-control': 'no-store' } });
      return Response.json({ token: issue('f') }, { headers: { 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
    }
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { allow: 'GET, POST' } });

    let data;
    try {
      data = await readBody(request);
    } catch {
      return answer(request, 400, false, 'en');
    }
    const field = Object.fromEntries(Object.entries(LIMITS).map(([key, max]) => [key, clean(data[key], max)]));
    const lang = PAGES[field.lang] ? field.lang : 'en';

    // The hidden field, links in the name, mash and the like: "thank you", nothing sent.
    const spam = spamReason(field, data);
    if (spam) return drop(request, spam, lang);
    if (!isEmail(field.email) || (!field.message && !field.shop)) return answer(request, 422, false, lang, field.page);
    if (!process.env.RESEND_API_KEY) return answer(request, 503, false, lang, field.page);

    const token = verify(data.t);
    if (token === 'bad') return drop(request, 'token-bad', lang);
    if (token === 'fast') {
      if (!String(data.t).startsWith('f.')) return confirmPage(request, field, lang);
      return drop(request, 'token-fast', lang);
    }
    if (token !== 'ok') {
      // The script always sends a token, so a JSON post without a valid one gets a visible failure (it points to the
      // email address); a plain HTML post gets the confirm page.
      if (wantsJson(request)) return answer(request, 403, false, lang);
      return confirmPage(request, field, lang);
    }
    const ip = clientIp(request);
    if (overLimit(ip)) return drop(request, 'rate', lang);

    const check = field.topic === 'check';
    let refHost = '';
    try {
      refHost = field.ref ? new URL(field.ref).host.replace(/^www\./, '') : '';
    } catch {
      refHost = '';
    }
    const source = new URLSearchParams(field.utm).get('utm_source') || refHost;
    const subject = `${check ? 'Shop-Check' : 'Anfrage'}: ${field.shop || field.name || field.email}${source ? ` (via ${source})` : ''}`;
    const text = [
      check ? 'Kostenloser Shop-Check' : 'Projektanfrage',
      '',
      `Name: ${field.name || '–'}`,
      `E-Mail: ${field.email}`,
      `Shop: ${field.shop || '–'}`,
      `Gefunden über: ${field.source || '–'}`,
      '',
      field.message || '–',
      '',
      `Seite: ${field.page || '–'} (${lang})`,
      field.utm ? `UTM: ${field.utm}` : '',
      field.ref ? `Referrer: ${field.ref}` : '',
      field.land && field.land !== field.page ? `Einstieg: ${field.land}` : '',
    ]
      .filter((line, i, lines) => line || lines[i - 1])
      .join('\n');

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'content-type': 'application/json' },
        body: JSON.stringify({ from: FROM, to: [TO], reply_to: field.email, subject: subject.slice(0, 200), text }),
      });
      if (!response.ok) {
        console.error('contact: Resend answered', response.status, await response.text());
        return answer(request, 502, false, lang, field.page);
      }
      if (ip) sends.set(ip, [...(sends.get(ip) || []), Date.now()]);
    } catch (error) {
      console.error('contact: Resend unreachable', error);
      return answer(request, 502, false, lang, field.page);
    }
    return answer(request, 200, true, lang, field.page);
  },
};
