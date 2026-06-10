const PRODUCTS_KEY = 'products';
const SESSION_COOKIE = 'admin_session';
const SESSION_TTL_SECONDS = 60 * 60 * 12;
const DEFAULT_PRODUCTS = [];

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    try {
      if (url.pathname === '/api/products' && request.method === 'GET') {
        const all = await getProducts(env);
        return json({ products: all.filter(p => !p.oculto) });
      }

      if (url.pathname === '/api/admin/login' && request.method === 'POST') {
        return handleLogin(request, env, url);
      }

      if (url.pathname === '/api/admin/logout' && request.method === 'POST') {
        return json({ ok: true }, { headers: { 'Set-Cookie': clearCookie(url) } });
      }

      if (url.pathname === '/api/admin/session' && request.method === 'GET') {
        await requireAdmin(request, env);
        return json({ ok: true });
      }

      if (url.pathname === '/api/admin/products' && request.method === 'GET') {
        await requireAdmin(request, env);
        return json({ products: await getProducts(env) });
      }

      if (url.pathname === '/api/admin/products' && request.method === 'PUT') {
        await requireAdmin(request, env);
        const body = await request.json();
        const products = Array.isArray(body) ? body : body.products;
        if (!Array.isArray(products)) return json({ error: 'Lista de productos inválida' }, { status: 400 });
        const clean = normalizeProducts(products);
        await saveProducts(env, clean);
        return json({ products: clean });
      }

      if (url.pathname === '/api/admin/products' && request.method === 'POST') {
        await requireAdmin(request, env);
        const products = await getProducts(env);
        const product = normalizeProduct(await request.json(), products.length);
        if (!product.id || products.some((p) => p.id === product.id)) product.id = uniqueId(product.nombre, products);
        products.unshift(product);
        await saveProducts(env, products);
        return json({ product }, { status: 201 });
      }

      const itemMatch = url.pathname.match(/^\/api\/admin\/products\/([^/]+)$/);
      if (itemMatch) {
        await requireAdmin(request, env);
        const id = decodeURIComponent(itemMatch[1]);
        const products = await getProducts(env);
        const index = products.findIndex((p) => p.id === id);
        if (index === -1) return json({ error: 'Producto no encontrado' }, { status: 404 });

        if (request.method === 'PUT') {
          const next = normalizeProduct({ ...products[index], ...(await request.json()), id }, index);
          products[index] = next;
          await saveProducts(env, products);
          return json({ product: next });
        }

        if (request.method === 'DELETE') {
          const [deleted] = products.splice(index, 1);
          await saveProducts(env, products);
          return json({ product: deleted });
        }
      }
    } catch (error) {
      if (error && error.status === 401) return json({ error: 'No autorizado' }, { status: 401 });
      return json({ error: error.message || 'Error interno' }, { status: 500 });
    }

    return env.ASSETS.fetch(request);
  }
};

async function getProducts(env) {
  ensureKV(env);
  const stored = await env.PRODUCTS_KV.get(PRODUCTS_KEY, 'json');
  if (Array.isArray(stored)) return normalizeProducts(stored);
  return normalizeProducts(DEFAULT_PRODUCTS);
}

async function saveProducts(env, products) {
  ensureKV(env);
  await env.PRODUCTS_KV.put(PRODUCTS_KEY, JSON.stringify(products));
}

function ensureKV(env) {
  if (!env.PRODUCTS_KV) throw new Error('Falta vincular el namespace KV como PRODUCTS_KV');
}

async function handleLogin(request, env, url) {
  const password = env.ADMIN_PASSWORD || env.ADMIN_SECRET;
  if (!password) return json({ error: 'Falta configurar ADMIN_PASSWORD' }, { status: 500 });
  const body = await request.json().catch(() => ({}));
  if (String(body.password || '') !== String(password)) return json({ error: 'Clave incorrecta' }, { status: 401 });
  const token = await signSession(env);
  return json({ ok: true }, { headers: { 'Set-Cookie': sessionCookie(token, url) } });
}

async function requireAdmin(request, env) {
  const token = readCookie(request, SESSION_COOKIE);
  if (!token || !(await verifySession(token, env))) {
    const err = new Error('No autorizado');
    err.status = 401;
    throw err;
  }
}

async function signSession(env) {
  const now = Math.floor(Date.now() / 1000);
  const payload = base64urlEncode(JSON.stringify({ iat: now, exp: now + SESSION_TTL_SECONDS }));
  const signature = await hmac(payload, sessionSecret(env));
  return `${payload}.${signature}`;
}

async function verifySession(token, env) {
  const [payload, signature] = String(token).split('.');
  if (!payload || !signature) return false;
  const expected = await hmac(payload, sessionSecret(env));
  if (signature !== expected) return false;
  try {
    const data = JSON.parse(base64urlDecode(payload));
    return Number(data.exp || 0) > Math.floor(Date.now() / 1000);
  } catch {
    return false;
  }
}

function sessionSecret(env) {
  return String(env.ADMIN_PASSWORD || env.ADMIN_SECRET || '');
}

async function hmac(message, secret) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return base64urlEncodeBytes(new Uint8Array(sig));
}

function readCookie(request, name) {
  const cookie = request.headers.get('Cookie') || '';
  return cookie.split(';').map((v) => v.trim()).find((v) => v.startsWith(name + '='))?.slice(name.length + 1) || '';
}

function sessionCookie(token, url) {
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE}=${token}; Path=/; Max-Age=${SESSION_TTL_SECONDS}; HttpOnly; SameSite=Lax${secure}`;
}

function clearCookie(url) {
  const secure = url.protocol === 'https:' ? '; Secure' : '';
  return `${SESSION_COOKIE}=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax${secure}`;
}

function normalizeProducts(products) {
  return products.map(normalizeProduct).filter((p) => p.nombre);
}

function normalizeProduct(product, index = 0) {
  const p = product || {};
  return {
    id: String(p.id || `${slug(p.nombre || 'producto')}-${index}`),
    nombre: cleanText(p.nombre || 'Producto sin nombre'),
    categoria: cleanText(p.categoria || 'cuidado'),
    descripcion: cleanText(p.descripcion || ''),
    precio: finiteNumber(p.precio),
    precioAntes: p.precioAntes === null || p.precioAntes === '' || typeof p.precioAntes === 'undefined' ? null : finiteNumber(p.precioAntes),
    stock: Math.max(0, Math.floor(finiteNumber(p.stock))),
    tag: cleanText(p.tag || ''),
    tagTipo: cleanText(p.tagTipo || ''),
    img: cleanText(p.img || ''),
    oculto: p.oculto === true
  };
}

function uniqueId(name, products) {
  const base = slug(name || 'producto');
  let id = base;
  let i = 2;
  while (products.some((p) => p.id === id)) id = `${base}-${i++}`;
  return id;
}

function slug(value) {
  return String(value || 'producto').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'producto';
}

function cleanText(value) {
  return String(value || '').replace(/[<>]/g, '').trim();
}

function finiteNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : 0;
}

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    status: init.status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...corsHeaders(), ...(init.headers || {}) }
  });
}

function corsHeaders() {
  return { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
}

function base64urlEncode(value) {
  return base64urlEncodeBytes(new TextEncoder().encode(value));
}

function base64urlDecode(value) {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4);
  return new TextDecoder().decode(Uint8Array.from(atob(padded), (c) => c.charCodeAt(0)));
}

function base64urlEncodeBytes(bytes) {
  let binary = '';
  bytes.forEach((b) => { binary += String.fromCharCode(b); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
