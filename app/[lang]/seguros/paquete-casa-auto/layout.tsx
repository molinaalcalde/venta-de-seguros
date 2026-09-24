import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export function generateStaticParams() { return [{ lang: 'es' }, { lang: 'en' }]; }
export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const isEn = params.lang === 'en';
  return {
    metadataBase: new URL(BASE),
    title: isEn ? 'Home + Auto Bundle Without SSN | Save up to 25% · ITIN' : 'Paquete Casa + Auto sin SSN | Ahorra hasta 25% · ITIN',
    description: isEn ? 'Bundle home (renters or homeowners) and auto insurance. Save up to 25%. No SSN required, ITIN accepted. For renters and homeowners. Bilingual service.' : 'Combina seguro de hogar (renters o homeowners) y auto en un paquete. Ahorra hasta 25%. Sin SSN requerido, acepta ITIN. Para inquilinos y dueños de casa. Atención en español.',
    alternates: { canonical: isEn ? `${BASE}/en/home-auto-bundle` : `${BASE}/es/seguros/paquete-casa-auto`, languages: { 'es-US': `${BASE}/es/seguros/paquete-casa-auto`, 'en-US': `${BASE}/en/home-auto-bundle`, 'x-default': `${BASE}/es/seguros/paquete-casa-auto` } },
    openGraph: { title: isEn ? 'Home + Auto Bundle for Hispanics | Maria Fernanda' : 'Paquete Seguro Casa + Auto para Hispanos | Maria Fernanda', description: isEn ? 'Bundle and save up to 25%. No SSN. ITIN accepted.' : 'Combina y ahorra hasta 25%. Sin SSN. ITIN aceptado.', url: isEn ? `${BASE}/en/home-auto-bundle` : `${BASE}/es/seguros/paquete-casa-auto`, siteName: 'Maria Fernanda Insurance Consulting', locale: isEn ? 'en_US' : 'es_US', type: 'website' },
    robots: { index: true, follow: true },
  };
}
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
