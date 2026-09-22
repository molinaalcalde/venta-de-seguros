import type { Metadata } from 'next';
const BASE = 'https://venta-de-seguros.vercel.app';
export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: 'Seguro de Auto sin SSN | ITIN Aceptado · Desde $89/mes',
  description: 'Seguro de auto para inmigrantes sin número de seguro social. Aceptamos ITIN, pasaporte y matrícula consular. Desde $89/mes. Atención 100% en español. Sin SSN requerido.',
  keywords: ['seguro de auto sin seguro social','seguro de carro para inmigrantes','seguro de auto con ITIN','seguro para indocumentados auto','aseguranza de auto sin SSN','seguro de auto para hispanos'],
  alternates: { canonical: `${BASE}/seguros/auto` },
  openGraph: { title: 'Seguro de Auto sin SSN — ITIN Aceptado | Maria Fernanda', description: 'Asegura tu vehículo con ITIN, pasaporte o matrícula consular. Sin SSN. Desde $89/mes.', url: `${BASE}/seguros/auto`, siteName: 'Maria Fernanda Insurance Consulting', locale: 'es_US', type: 'website' },
  robots: { index: true, follow: true },
};
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
