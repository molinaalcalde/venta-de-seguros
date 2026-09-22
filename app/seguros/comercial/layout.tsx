import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Seguro Comercial para Negocios Hispanos | BOP · ITIN · Sin SSN',
  description: 'Seguro para pequeños negocios hispanos sin SSN. Acepta ITIN y EIN. Responsabilidad civil general, BOP, protección de propiedad. COI en 24 horas. Desde $120/mes.',
  keywords: ['seguro para negocio pequeño hispano USA','seguro comercial ITIN negocios latinos','póliza BOP negocios hispanos','responsabilidad general contratistas hispanos','seguro negocio sin SSN EIN'],
  alternates: { canonical: `${BASE}/seguros/comercial` },
  openGraph: { title: 'Seguro Comercial para Negocios Hispanos sin SSN | Aegis', description: 'BOP, responsabilidad y propiedad. Sin SSN. ITIN o EIN aceptado. COI en 24h. Desde $120/mes.', url: `${BASE}/seguros/comercial`, siteName: 'Aegis National Assurance', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
