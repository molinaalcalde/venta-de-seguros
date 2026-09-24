import type { Metadata } from 'next';

const BASE_URL = 'https://venta-de-seguros.vercel.app';

export function generateStaticParams() {
  return [{ lang: 'es' }, { lang: 'en' }];
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = params;
  const isEn = lang === 'en';

  return {
    metadataBase: new URL(BASE_URL),
    title: isEn
      ? 'Pet Insurance | Up to 90% Reimbursement · No SSN Required'
      : 'Seguro de Mascotas | Hasta 90% de Reembolso · Sin SSN',
    description: isEn
      ? 'Pet insurance with up to 90% reimbursement. No SSN required. ITIN accepted. Any vet in the USA. Full dental coverage included. Dogs and cats.'
      : 'Seguro de mascotas con reembolso de hasta el 90%. Sin SSN requerido. Acepta ITIN. Cualquier veterinario en EE.UU. Cobertura dental completa incluida.',
    keywords: isEn
      ? ['pet insurance no SSN', 'pet insurance ITIN', 'pet insurance immigrants', 'fetch pet insurance', 'pet insurance reimbursement', 'dog cat insurance USA']
      : ['seguro de mascotas sin SSN', 'seguro de mascotas ITIN', 'seguro veterinario inmigrantes', 'fetch pet insurance', 'seguro mascotas reembolso', 'seguro mascotas hispanos'],
    alternates: {
      canonical: isEn ? `${BASE_URL}/en/pet-insurance` : `${BASE_URL}/es/seguros/mascotas`,
      languages: {
        'es-US': `${BASE_URL}/es/seguros/mascotas`,
        'en-US': `${BASE_URL}/en/pet-insurance`,
        'x-default': `${BASE_URL}/es/seguros/mascotas`,
      },
    },
    openGraph: {
      title: isEn
        ? 'Pet Insurance | Up to 90% Reimbursement · No SSN Required'
        : 'Seguro de Mascotas | Hasta 90% de Reembolso · Sin SSN',
      description: isEn
        ? 'Pet insurance with up to 90% reimbursement. No SSN required. ITIN accepted. Any vet in the USA.'
        : 'Seguro de mascotas con reembolso de hasta el 90%. Sin SSN requerido. Acepta ITIN. Cualquier veterinario en EE.UU.',
      type: 'website',
      locale: isEn ? 'en_US' : 'es_US',
      url: isEn ? `${BASE_URL}/en/pet-insurance` : `${BASE_URL}/es/seguros/mascotas`,
      siteName: 'Maria Fernanda Insurance Consulting',
    },
    twitter: {
      card: 'summary_large_image',
      title: isEn
        ? 'Pet Insurance | Up to 90% Reimbursement | Maria Fernanda'
        : 'Seguro de Mascotas | Hasta 90% Reembolso | Maria Fernanda',
      description: isEn
        ? 'Up to 90% reimbursement. No SSN required. Any vet in the USA. ITIN accepted.'
        : 'Hasta 90% de reembolso. Sin SSN requerido. Cualquier veterinario en EE.UU. Acepta ITIN.',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large', 'max-video-preview': -1 },
    },
  };
}

export default function MascotasLangLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
