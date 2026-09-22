import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Seguro de Auto Comercial sin SSN | Vans · Camiones · ITIN',
  description: 'Seguro comercial para vans, camiones y flotas de trabajo. Sin SSN requerido, acepta ITIN. COI en 24 horas. Para contratistas hispanos, delivery y negocios. Desde $110/mes.',
  keywords: ['seguro de camioneta de trabajo inmigrantes','seguro comercial auto ITIN','seguro para contratistas hispanos sin SSN','seguro van trabajo inmigrante','COI seguro comercial hispanos'],
  alternates: { canonical: `${BASE}/seguros/auto-comercial` },
  openGraph: { title: 'Seguro Auto Comercial para Contratistas Hispanos | Aegis', description: 'Vans, camiones y flotas. Sin SSN. COI en 24 horas. Desde $110/mes.', url: `${BASE}/seguros/auto-comercial`, siteName: 'Aegis National Assurance', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
