import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Paquete Casa + Auto sin SSN | Ahorra hasta 25% · ITIN',
  description: 'Combina seguro de hogar (renters o homeowners) y auto en un paquete. Ahorra hasta 25%. Sin SSN requerido, acepta ITIN. Para inquilinos y dueños de casa. Atención en español.',
  keywords: ['paquete seguro casa auto hispanos','seguro renters auto inmigrantes sin SSN','bundle seguro hogar carro ITIN','seguro renters inquilinos hispanos','seguro casa auto descuento hispanos'],
  alternates: { canonical: `${BASE}/seguros/paquete-casa-auto` },
  openGraph: { title: 'Paquete Seguro Casa + Auto para Hispanos | Maria Fernanda', description: 'Combina y ahorra hasta 25%. Sin SSN. Para inquilinos y dueños de casa. ITIN aceptado.', url: `${BASE}/seguros/paquete-casa-auto`, siteName: 'Maria Fernanda Insurance Consulting', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
