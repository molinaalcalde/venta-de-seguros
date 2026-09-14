import { NextRequest, NextResponse } from 'next/server';
import { checkCredentials, signAdminToken } from '@/lib/auth';

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Credenciales requeridas' }, { status: 400 });
    }

    if (!checkCredentials(email, password)) {
      // Mismo tiempo de respuesta para no filtrar si el email existe
      await new Promise((r) => setTimeout(r, 500));
      return NextResponse.json({ error: 'Email o contraseña incorrectos' }, { status: 401 });
    }

    const token = await signAdminToken(email);

    const res = NextResponse.json({ ok: true });
    res.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 24 horas
    });
    return res;
  } catch {
    return NextResponse.json({ error: 'Error del servidor' }, { status: 500 });
  }
}
