import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Seguro de Salud sin SSN | Para Inmigrantes · ITIN Aceptado',
  description: 'Seguro médico para inmigrantes y personas sin número de seguro social. Acepta ITIN. Planes individuales y familiares desde $199/mes. Atención 100% en español.',
  keywords: ['seguro medico para indocumentados USA','seguro de salud sin seguro social 2026','plan salud inmigrantes ITIN','seguro medico hispanos sin SSN','seguro salud familiar inmigrantes'],
  alternates: { canonical: `${BASE}/seguros/salud` },
  openGraph: { title: 'Seguro de Salud para Inmigrantes sin SSN | Aegis', description: 'Planes de salud individuales y familiares. ITIN aceptado. Sin SSN. Desde $199/mes.', url: `${BASE}/seguros/salud`, siteName: 'Aegis National Assurance', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
