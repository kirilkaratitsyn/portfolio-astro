// Serves the built site (dist/) and the contact form (api/contact.js) on Railway, the way Vercel served them:
// clean URLs without .html, no trailing slash, the redirects from vercel.json, 404.html with status 404,
// long caching for hashed files in /_astro, compression, and karatitsyn.com -> www.karatitsyn.com.
// No dependencies: plain Node (>= 22). Start with `node server.mjs`; the port comes from PORT (Railway sets it).
import { createServer } from 'node:http';
import { readFileSync, statSync, createReadStream } from 'node:fs';
import { join, extname, resolve, sep } from 'node:path';
import { brotliCompressSync, gzipSync, constants as zlib } from 'node:zlib';
import { Readable } from 'node:stream';
import contact from './api/contact.js';

const ROOT = resolve('dist');
const PORT = Number(process.env.PORT) || 4321;
const CANONICAL_HOST = 'www.karatitsyn.com';
const APEX_HOST = 'karatitsyn.com';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.webm': 'video/webm',
  '.mp4': 'video/mp4',
  '.bin': 'application/octet-stream',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.pdf': 'application/pdf',
};
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.mjs', '.json', '.xml', '.txt', '.svg', '.webmanifest', '.bin']);

// The same permanent redirects as vercel.json (":slug" matches one path segment).
const REDIRECTS = JSON.parse(readFileSync('vercel.json', 'utf8')).redirects.map(({ source, destination }) => {
  const names = [];
  const pattern = source.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/:(\w+)/g, (_, name) => (names.push(name), '([^/]+)'));
  return { re: new RegExp(`^${pattern}$`), names, destination };
});

function redirectFor(path) {
  for (const { re, names, destination } of REDIRECTS) {
    const match = re.exec(path);
    if (match) return names.reduce((to, name, i) => to.replace(`:${name}`, match[i + 1]), destination);
  }
  return null;
}

function fileAt(path) {
  const full = resolve(join(ROOT, path));
  if (full !== ROOT && !full.startsWith(ROOT + sep)) return null;
  try {
    const stat = statSync(full);
    return stat.isFile() ? { full, stat } : null;
  } catch {
    return null;
  }
}

/** /about -> about.html, / -> index.html, /og/x.jpg -> og/x.jpg. */
function lookup(path) {
  if (path === '/') return fileAt('index.html');
  return fileAt(path) || fileAt(`${path}.html`) || fileAt(`${path}/index.html`);
}

const compressed = new Map(); // "file|encoding|mtime" -> Buffer

function encodingFor(req, ext) {
  if (!COMPRESSIBLE.has(ext)) return null;
  const accept = String(req.headers['accept-encoding'] || '');
  if (/\bbr\b/.test(accept)) return 'br';
  if (/\bgzip\b/.test(accept)) return 'gzip';
  return null;
}

function compress(file, encoding) {
  const key = `${file.full}|${encoding}|${file.stat.mtimeMs}`;
  let body = compressed.get(key);
  if (!body) {
    const raw = readFileSync(file.full);
    body = encoding === 'br' ? brotliCompressSync(raw, { params: { [zlib.BROTLI_PARAM_QUALITY]: 9 } }) : gzipSync(raw, { level: 9 });
    compressed.set(key, body);
  }
  return body;
}

function send(req, res, file, status, path) {
  const ext = extname(file.full).toLowerCase();
  const etag = `W/"${file.stat.size.toString(16)}-${Math.floor(file.stat.mtimeMs).toString(16)}"`;
  const headers = {
    'content-type': TYPES[ext] || 'application/octet-stream',
    'cache-control': path.startsWith('/_astro/') ? 'public, max-age=31536000, immutable' : 'public, max-age=0, must-revalidate',
    etag,
    vary: 'accept-encoding',
  };
  if (status === 200 && req.headers['if-none-match'] === etag) {
    res.writeHead(304, headers);
    return res.end();
  }
  const encoding = encodingFor(req, ext);
  if (encoding) {
    const body = compress(file, encoding);
    res.writeHead(status, { ...headers, 'content-encoding': encoding, 'content-length': body.length });
    return res.end(req.method === 'HEAD' ? undefined : body);
  }
  res.writeHead(status, { ...headers, 'content-length': file.stat.size });
  if (req.method === 'HEAD') return res.end();
  createReadStream(file.full).pipe(res);
}

function redirect(res, location) {
  res.writeHead(308, { location, 'content-type': 'text/plain', 'cache-control': 'public, max-age=0, must-revalidate' });
  res.end(`Redirecting to ${location}`);
}

/** Hands the request to api/contact.js (a fetch-style handler) and writes its Response back. */
async function api(req, res, url) {
  const body = req.method === 'GET' || req.method === 'HEAD' ? undefined : Readable.toWeb(req);
  const headers = new Headers();
  for (const [name, value] of Object.entries(req.headers)) {
    if (value !== undefined) headers.set(name, Array.isArray(value) ? value.join(', ') : value);
  }
  const request = new Request(url, { method: req.method, headers, body, duplex: 'half' });
  const response = await contact.fetch(request);
  res.writeHead(response.status, Object.fromEntries(response.headers));
  res.end(Buffer.from(await response.arrayBuffer()));
}

const server = createServer(async (req, res) => {
  try {
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').split(':')[0].toLowerCase();
    const proto = String(req.headers['x-forwarded-proto'] || 'http').split(',')[0].trim();
    const url = new URL(req.url || '/', `${proto}://${host || 'localhost'}`);
    if (host === CANONICAL_HOST || host === APEX_HOST) res.setHeader('strict-transport-security', 'max-age=63072000');
    if (host === APEX_HOST || (host === CANONICAL_HOST && proto === 'http')) {
      return redirect(res, `https://${CANONICAL_HOST}${url.pathname}${url.search}`);
    }

    let path;
    try {
      path = decodeURIComponent(url.pathname);
    } catch {
      path = '/';
    }

    if (path === '/api/contact') return await api(req, res, url);
    // Vercel Web Analytics exists only on Vercel; here its script is an empty no-op instead of a 404 page.
    if (path.startsWith('/_vercel/')) {
      res.writeHead(204, { 'cache-control': 'public, max-age=3600' });
      return res.end();
    }
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { allow: 'GET, HEAD' });
      return res.end();
    }

    const target = redirectFor(path);
    if (target) return redirect(res, target + url.search);
    if (path.length > 1 && path.endsWith('/')) return redirect(res, path.replace(/\/+$/, '') + url.search);
    if (path.endsWith('.html')) {
      const clean = path.replace(/(?:\/index)?\.html$/, '') || '/';
      return redirect(res, clean + url.search);
    }

    const file = lookup(path);
    if (file) return send(req, res, file, 200, path);
    const notFound = fileAt('404.html');
    if (notFound) return send(req, res, notFound, 404, path);
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('Not found');
  } catch (error) {
    console.error('server:', error);
    if (!res.headersSent) res.writeHead(500, { 'content-type': 'text/plain' });
    res.end('Server error');
  }
});

server.listen(PORT, () => console.log(`karatitsyn.com listening on :${PORT}`));
