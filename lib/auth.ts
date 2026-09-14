import { SignJWT, jwtVerify } from 'jose';
import crypto from 'crypto';

function getSecret() {
  return new TextEncoder().encode(process.env.JWT_SECRET!);
}

export async function signAdminToken(email: string): Promise<string> {
  return new SignJWT({ email, role: 'admin' })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(getSecret());
}

export async function verifyAdminToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload;
  } catch {
    return null;
  }
}

export function hashPassword(plain: string): string {
  return crypto.createHash('sha256').update(plain, 'utf8').digest('hex');
}

export function checkCredentials(email: string, password: string): boolean {
  const emailOk = crypto.timingSafeEqual(
    Buffer.from(email.toLowerCase()),
    Buffer.from((process.env.ADMIN_EMAIL ?? '').toLowerCase())
  );
  const hash = hashPassword(password);
  const hashOk = crypto.timingSafeEqual(
    Buffer.from(hash),
    Buffer.from(process.env.ADMIN_PASSWORD_HASH ?? '')
  );
  return emailOk && hashOk;
}
