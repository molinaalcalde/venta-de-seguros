const BASE_URL = 'https://venta-de-seguros.vercel.app';

const insuranceAgencySchema = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: 'Aegis National Assurance',
  description:
    'Agencia de seguros especializada en la comunidad hispana de Estados Unidos. Seguros de auto, vida, salud, mascotas y comerciales con atención bilingüe en español e inglés. Sujeto a términos y condiciones.',
  url: BASE_URL,
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  availableLanguage: ['Spanish', 'English'],
  knowsLanguage: ['es', 'en'],
  serviceType: [
    'Auto Insurance',
    'Life Insurance',
    'Health Insurance',
    'Pet Insurance',
    'Commercial Insurance',
    'Umbrella Insurance',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Portafolio de Seguros Aegis',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seguro de Auto y Vehículos Eléctricos',
          description:
            'Cobertura integral para vehículos tradicionales y eléctricos con asistencia 24/7. Sujeto a términos y condiciones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seguro de Mascotas VetDirect',
          description:
            'Cobertura veterinaria con pago directo en clínicas asociadas. Sujeto a términos y condiciones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seguro de Vida',
          description:
            'Pólizas de vida con Living Benefits y planificación sucesoria. Sujeto a términos y condiciones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seguros Comerciales',
          description:
            'Paquete BOP con protección cibernética para pequeñas y medianas empresas. Sujeto a términos y condiciones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Seguro de Salud y Medicare',
          description:
            'Planes individuales, familiares y Medicare Advantage con amplia red de proveedores. Sujeto a términos y condiciones.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Protección Patrimonial Umbrella',
          description:
            'Cobertura adicional de responsabilidad civil sobre pólizas existentes. Sujeto a términos y condiciones.',
        },
      },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puedo obtener seguro sin número de seguro social (SSN)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Para cotizar solo necesitas tu nombre y correo electrónico. Los requisitos de documentación varían según el tipo de póliza y el estado donde resides. Muchos de nuestros planes aceptan ITIN como identificación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo obtener seguro siendo inmigrante o con ITIN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Ofrecemos opciones de seguro para inmigrantes y residentes, incluyendo personas con ITIN. Hablamos español y entendemos las necesidades de la comunidad hispana. Los requisitos específicos dependen del tipo de cobertura y el estado donde resides.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona la cobertura directa en clínicas veterinarias con VetDirect?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con VetDirect, no necesitas pagar de tu bolsillo y esperar meses de reembolso. Al presentar tu tarjeta digital Aegis en clínicas asociadas, autorizamos el pago directamente al centro médico en tiempo real, cubriendo consultas, intervenciones y tratamientos elegibles. Sujeto a términos y condiciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo unificar mi póliza de automóvil y hogar para obtener descuentos multilínea?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Aegis ofrece el programa Aegis Bundle que permite agrupar seguros de vehículo, hogar, vida y mascotas bajo un único estado de cuenta, con descuentos acumulativos en tu prima total anual. Sujeto a términos y condiciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué momento se activan los beneficios en vida (Living Benefits) de los seguros de vida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A diferencia del seguro de vida tradicional que solo indemniza tras el fallecimiento, nuestras pólizas con Living Benefits permiten acceder por anticipado a un porcentaje del capital asegurado en caso de diagnóstico de enfermedad crítica, crónica o incapacitante grave. Sujeto a términos y condiciones de la póliza.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mi información personal es confidencial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutamente. Tu información personal nunca se comparte con terceros ni con agencias gubernamentales sin tu consentimiento explícito. Usamos cifrado de grado bancario de 256 bits para proteger todos tus datos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué requisitos necesita mi empresa para el seguro comercial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Realizamos una breve evaluación digital de seguridad en minutos sin interrumpir tus operaciones. Evaluamos protocolos básicos como autenticación multifactor y respaldos en la nube, estructurando tu paquete comercial BOP de inmediato. Sujeto a aprobación de suscripción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo reporto un siniestro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes reportar un siniestro llamando a nuestra línea 24/7 o a través del portal digital. Un gestor personal de siniestros se asigna a tu caso para acompañarte en cada paso del proceso hasta la resolución.',
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(insuranceAgencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
