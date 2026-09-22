import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Seguro de Vida para Inmigrantes | Living Benefits · Sin SSN',
  description: 'Seguro de vida sin SSN para inmigrantes e indocumentados. Acepta ITIN. Living Benefits: accede al dinero si te enfermas. Beneficiarios en cualquier país. Desde $45/mes.',
  keywords: ['seguro de vida para indocumentados USA','seguro de vida sin seguro social','seguro de vida con ITIN inmigrantes','living benefits español','seguro vida inmigrante indocumentado','seguro vida beneficiarios Mexico'],
  alternates: { canonical: `${BASE}/seguros/vida` },
  openGraph: { title: 'Seguro de Vida sin SSN — Living Benefits | Aegis', description: 'Para inmigrantes sin SSN. Acepta ITIN. Beneficiarios en México y cualquier país. Desde $45/mes.', url: `${BASE}/seguros/vida`, siteName: 'Aegis National Assurance', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
