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
  const adminEmail = process.env.ADMIN_EMAIL ?? '';
  const adminHash = process.env.ADMIN_PASSWORD_HASH ?? '';
  if (!adminEmail || !adminHash) return false;

  const emailA = Buffer.from(email.toLowerCase());
  const emailB = Buffer.from(adminEmail.toLowerCase());
  const emailOk = emailA.length === emailB.length && crypto.timingSafeEqual(emailA, emailB);

  const hash = hashPassword(password);
  const hashA = Buffer.from(hash);
  const hashB = Buffer.from(adminHash);
  const hashOk = hashA.length === hashB.length && crypto.timingSafeEqual(hashA, hashB);

  return emailOk && hashOk;
}
