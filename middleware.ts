import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

function getSecret() {
  return new TextEncoder().encode(process.env.JWT_SECRET!);
}

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

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

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
