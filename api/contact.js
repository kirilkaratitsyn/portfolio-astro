// The contact form (sections/Contact.astro) posts here: a store check request or a project enquiry. The message goes
// to Kiril by email through Resend, with the visitor's address as Reply-To; nothing is stored on the site.
// Settings in Vercel: RESEND_API_KEY (required), CONTACT_TO and CONTACT_FROM (optional). The sender is on
// updates.karatitsyn.com, the domain verified in Resend (DNS records on that subdomain only; the mail of the main
// domain is untouched).
const TO = process.env.CONTACT_TO || 'kiril@karatitsyn.com';
const FROM = process.env.CONTACT_FROM || 'karatitsyn.com <website@updates.karatitsyn.com>';
const LIMITS = { topic: 20, name: 120, email: 200, shop: 300, message: 4000, source: 60, page: 300, utm: 300, lang: 5 };

/** What a visitor sees when the form was sent without scripts (a plain HTML post). */
const PAGES = {
  de: { ok: 'Danke! Ihre Nachricht ist angekommen. Sie hören innerhalb von zwei Werktagen von mir.', fail: 'Das hat leider nicht geklappt. Schreiben Sie mir bitte direkt an kiril@karatitsyn.com.', back: 'Zurück' },
  uk: { ok: 'Дякую! Повідомлення надіслано. Я відповім протягом двох робочих днів.', fail: 'На жаль, не вдалося надіслати. Напишіть мені напряму на kiril@karatitsyn.com.', back: 'Назад' },
  en: { ok: 'Thank you! Your message has arrived. You will hear from me within two working days.', fail: 'Sorry, that did not work. Please write to me directly at kiril@karatitsyn.com.', back: 'Back' },
};

const clean = (value, max) => String(value ?? '').replace(/\r/g, '').trim().slice(0, max);
const isEmail = (value) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(value);
const escape = (value) => value.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);

async function readBody(request) {
  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) return await request.json();
  return Object.fromEntries((await request.formData()).entries());
}

/** Only paths on this site go back into a link (a referer from elsewhere falls back to the home page). */
function backLink(request) {
  try {
    const referer = new URL(request.headers.get('referer') || '');
    if (referer.host === new URL(request.url).host) return `${referer.pathname}${referer.search}#contact`;
  } catch {}
  return '/#contact';
}

function answer(request, status, ok, lang) {
  if ((request.headers.get('accept') || '').includes('application/json')) return Response.json({ ok }, { status });
  const text = PAGES[lang] || PAGES.en;
  const html = `<!doctype html><html lang="${lang}"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>karatitsyn.com</title><body style="font:18px/1.6 system-ui,sans-serif;max-width:560px;margin:15vh auto;padding:0 20px;color:#0e1018;background:#edeff6"><p>${escape(ok ? text.ok : text.fail)}</p><p><a href="${escape(backLink(request))}" style="color:#2433f0">${escape(text.back)}</a></p></body></html>`;
  return new Response(html, { status, headers: { 'content-type': 'text/html; charset=utf-8' } });
}

export default {
  async fetch(request) {
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });

    let data;
    try {
      data = await readBody(request);
    } catch {
      return answer(request, 400, false, 'en');
    }
    const field = Object.fromEntries(Object.entries(LIMITS).map(([key, max]) => [key, clean(data[key], max)]));
    const lang = PAGES[field.lang] ? field.lang : 'en';

    // A field people never see: bots fill it in. They get the same "thank you" and nothing is sent.
    if (clean(data.website, 200)) return answer(request, 200, true, lang);
    if (!isEmail(field.email) || (!field.message && !field.shop)) return answer(request, 422, false, lang);
    if (!process.env.RESEND_API_KEY) return answer(request, 503, false, lang);

    const check = field.topic === 'check';
    const source = new URLSearchParams(field.utm).get('utm_source');
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
    ]
      .filter((line, i, lines) => line || lines[i - 1])
      .join('\n');

    try {
      const sent = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'content-type': 'application/json' },
        body: JSON.stringify({ from: FROM, to: [TO], reply_to: field.email, subject: subject.slice(0, 200), text }),
      });
      if (!sent.ok) {
        console.error('contact: Resend answered', sent.status, await sent.text());
        return answer(request, 502, false, lang);
      }
    } catch (error) {
      console.error('contact: Resend unreachable', error);
      return answer(request, 502, false, lang);
    }
    return answer(request, 200, true, lang);
  },
};
