import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Seguro Dental sin SSN | Para Familias Hispanas · Desde $19/mes',
  description: 'Aseguranza dental para inmigrantes e indocumentados sin número de seguro social. Acepta ITIN. Planes individuales desde $19/mes y familiares. Limpieza, empastes, extracciones y ortodoncia.',
  keywords: ['aseguranza dental para indocumentados sin SSN','seguro dental hispanos ITIN','plan dental familias latinas sin SSN','seguro dental para inmigrantes','seguro dentista sin social'],
  alternates: { canonical: `${BASE}/seguros/dental` },
  openGraph: { title: 'Seguro Dental para Inmigrantes sin SSN | Maria Fernanda', description: 'Desde $19/mes. Sin SSN. Acepta ITIN. Limpieza, empastes y tratamientos para toda la familia.', url: `${BASE}/seguros/dental`, siteName: 'Maria Fernanda Insurance Consulting', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
