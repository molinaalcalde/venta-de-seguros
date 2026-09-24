import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

function getSecret() {
  return new TextEncoder().encode(process.env.JWT_SECRET!);
}

const SUPPORTED_LANGS = ['es', 'en'] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

function detectLang(req: NextRequest): Lang {
  const acceptLang = req.headers.get('accept-language') ?? '';
  const primary = acceptLang.split(',')[0]?.split(';')[0]?.trim().toLowerCase() ?? '';
  if (primary.startsWith('en')) return 'en';
  return 'es';
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // ── JWT Auth para /admin ─────────────────────────────────────────────────────

  // Rutas de autenticación — siempre accesibles
  if (pathname === '/admin/login') return NextResponse.next();

  // Proteger todo /admin/*
  if (pathname.startsWith('/admin')) {
    const token = req.cookies.get('admin_token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', req.url));
    }
    try {
      await jwtVerify(token, getSecret());
      return NextResponse.next();
    } catch {
      const res = NextResponse.redirect(new URL('/admin/login', req.url));
      res.cookies.delete('admin_token');
      return res;
    }
  }

  // Proteger rutas API del admin
  if (pathname.startsWith('/api/admin')) {
    const token = req.cookies.get('admin_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'No autorizado' }, { status: 401 });
    }
    try {
      await jwtVerify(token, getSecret());
      return NextResponse.next();
    } catch {
      return NextResponse.json({ error: 'Sesión expirada' }, { status: 401 });
    }
  }

  // ── Detección de idioma y redirección ────────────────────────────────────────

  // Skip: archivos estáticos, _next, api, admin, blog
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/blog') ||
    pathname.startsWith('/static') ||
    /\.(.+)$/.test(pathname)   // tiene extensión de archivo
  ) {
    return NextResponse.next();
  }

  // Si ya tiene prefijo de idioma → solo agregar header x-lang
  if (pathname.startsWith('/es') || pathname.startsWith('/en')) {
    const lang: Lang = pathname.startsWith('/en') ? 'en' : 'es';
    const res = NextResponse.next();
    res.headers.set('x-lang', lang);
    return res;
  }

  // Sin prefijo → detectar idioma y redirigir 307 temporal
  const lang = detectLang(req);
  const newPath = `/${lang}${pathname === '/' ? '' : pathname}`;
  const redirectUrl = new URL(newPath, req.url);

  // Preservar query params
  redirectUrl.search = req.nextUrl.search;

  const res = NextResponse.redirect(redirectUrl, 307);
  res.headers.set('x-lang', lang);
  return res;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
    '/((?!_next/static|_next/image|favicon.ico|logo.png|videos|images).*)',
  ],
};
