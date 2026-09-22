import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Protección Extra (Umbrella) | Desde $1M de Cobertura · Sin SSN',
  description: 'Seguro de responsabilidad extra (umbrella/paraguas) para hispanos. Protege tus ahorros cuando tu seguro de auto o casa no alcanza. Desde $1 millón de cobertura. Desde $19/mes.',
  keywords: ['qué es el seguro paraguas en USA','umbrella insurance hispanos','proteccion extra seguro inmigrantes','seguro paraguas desde 1 millon','seguro responsabilidad extra hispanos'],
  alternates: { canonical: `${BASE}/seguros/proteccion-extra` },
  openGraph: { title: 'Protección Extra (Umbrella) para Hispanos | Aegis', description: 'Desde $1M de cobertura adicional. Protege tus ahorros. Desde $19/mes. Sin SSN requerido.', url: `${BASE}/seguros/proteccion-extra`, siteName: 'Aegis National Assurance', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
