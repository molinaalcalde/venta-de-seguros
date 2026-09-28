'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Car, IdentificationCard, ShieldCheck, Headset } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Sin SSN · ITIN · Pasaporte · Matrícula Consular',
  heroLine1: 'Seguro de Auto',
  heroItalic: 'para toda tu familia — sin importar tus documentos',
  heroSubtitle: 'La ley exige seguro a TODOS los conductores en USA, sin importar el estatus migratorio. No necesitás SSN. Aceptamos ITIN, pasaporte, matrícula consular y licencia extranjera. Tu información es 100% confidencial — nunca se comparte con el gobierno.',
  trustBadges: ['Sin SSN requerido', 'Desde $89/mes', 'Info confidencial', 'Asesor en español'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: 'Sí podés asegurarte aunque...',
  eligibilityText: 'No importa tu situación migratoria. Manejar sin seguro puede costarte multas de $500 a $5,000, suspensión de licencia y responsabilidad personal ilimitada. Con o sin SSN, te ayudamos a cumplir la ley.',
  eligibilityItems: [
    'No tengas número de seguro social (SSN)',
    'Tu licencia sea extranjera, matrícula consular o de otro estado',
    'Seas inmigrante recién llegado, con DACA o estatus pendiente',
    'No tengas historial de crédito en Estados Unidos',
    'Tengas visa temporal o seas residente permanente',
  ],
  features: [
    {
      icon: IdentificationCard,
      title: 'Sin SSN — ITIN, Pasaporte y Matrícula Consular Aceptados',
      desc: 'Cotizás y contratás con lo que tenés: ITIN, pasaporte mexicano o centroamericano, matrícula consular o licencia extranjera. Sin burocracia, sin rechazo por estatus. Familias que cambian a nosotros ahorran en promedio $400–$900 al año.',
    },
    {
      icon: ShieldCheck,
      title: 'El "Full Coverage" No Es Lo Que Crees — Te Lo Explicamos',
      desc: '"Full coverage" no es un producto real — es la combinación de tres coberturas: Liability (obligatoria, protege a otros si los chocás), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, vandalismo). También existe UM/UIM: te protege cuando el otro conductor no tiene seguro — algo muy común en algunos estados donde más del 20% conduce sin seguro.',
    },
    {
      icon: Headset,
      title: 'Cuando Tenés un Accidente, Hablás con una Persona Real',
      desc: 'Ningún menú automático, ningún bot, ningún call center en inglés. Cuando más lo necesitás, un asesor que habla tu idioma te acompaña paso a paso: contacta a la otra parte, gestiona el reclamo y te explica qué hacer. Sin que vos tengas que lidiar con el inglés.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil (Liability) — obligatoria por ley en todos los estados',
    'Colisión (Collision) — daños a tu vehículo en accidentes',
    'Daños completos (Comprehensive) — robo, granizo, fuego, vandalismo',
    'Conductor sin seguro (UM/UIM) — te protege aunque el otro no tenga',
    'Protección de lesiones personales (PIP)',
    'Gastos médicos (MedPay)',
    'Asistencia en carretera 24/7',
    'Auto de reemplazo mientras te reparan el tuyo',
  ],
  steps: [
    {
      title: 'Completa el formulario — gratis, sin SSN, sin compromiso',
      desc: 'Contanos sobre tu vehículo y situación. Sin SSN, sin revisión de crédito. Solo información básica.',
    },
    {
      title: 'Tu asesora en español arma tus opciones',
      desc: 'Te explicamos la diferencia entre liability, collision y comprehensive sin tecnicismos. Vos elegís según tu presupuesto — sin presiones.',
    },
    {
      title: 'Tu tarjeta de seguro llega hoy mismo',
      desc: 'En la mayoría de los casos, la tarjeta digital llega por email el mismo día. Podés manejar legal desde hoy.',
    },
  ],
  testimonials: [
    {
      name: 'Carlos M.',
      location: 'Miami, Florida',
      text: 'Llegué de Honduras hace 2 años y pensaba que no podía asegurarme sin SSN. Me ayudaron en minutos con mi matrícula consular. Sin problemas, buen precio y todo en español. No esperaba que fuera tan fácil.',
    },
    {
      name: 'Sandra R.',
      location: 'Dallas, Texas',
      text: 'Tengo licencia mexicana y nunca me rechazaron. El servicio en español es real — hablás con una persona, no con un menú automático. Eso vale mucho cuando tenés un problema en la carretera.',
    },
    {
      name: 'Marcos V.',
      location: 'Atlanta, Georgia',
      text: 'Tuve un accidente el año pasado. Me resolvieron todo en español — contactaron a la otra parte, me explicaron cada paso, me consiguieron auto prestado. No tuve que preocuparme por el inglés para nada.',
    },
  ],
  faq: [
    {
      q: '¿Puedo tener seguro de auto sin número de seguro social (SSN)?',
      a: 'Sí. No necesitás SSN para contratar seguro de auto en ningún estado de EE.UU. Aceptamos ITIN, pasaporte, matrícula consular o licencia extranjera como identificación válida. Tu estatus migratorio no es un obstáculo — la ley exige seguro a todos los conductores por igual.',
    },
    {
      q: '¿Mi información personal se comparte con ICE o migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin una orden judicial. Cumplimos con todas las leyes estatales de privacidad de seguros. Lo que compartís con nosotros para contratar tu seguro es estrictamente privado.',
    },
    {
      q: '¿Qué es "full coverage" y qué cubre realmente?',
      a: '"Full coverage" no es un producto oficial — es una expresión que en la práctica significa combinar tres coberturas: Liability (protege a otros si los chocás, obligatoria por ley), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, incendio, vandalismo). Importante: ninguna de estas cubre lesiones de pasajeros propios ni conductores sin seguro a menos que agregués PIP o UM/UIM.',
    },
    {
      q: '¿Qué pasa si el otro conductor no tiene seguro?',
      a: 'En muchos estados, más del 20% de los conductores maneja sin seguro. Si te chocan y el culpable no tiene seguro, podés quedarte sin cobrar a menos que tengas cobertura UM/UIM (Uninsured/Underinsured Motorist). Esta cobertura adicional es una de las más recomendadas — especialmente en estados con alta tasa de conductores sin seguro como Florida, Michigan y California.',
    },
    {
      q: '¿Cuánto cuesta el seguro de auto sin SSN?',
      a: 'El seguro de auto comienza desde $89/mes para cobertura básica de responsabilidad civil. Usar ITIN en vez de SSN no afecta significativamente el precio. El estado, el vehículo y el historial de manejo son los principales factores. Familias que cambian de aseguradora ahorran en promedio $400–$900 al año — vale la pena cotizar.',
    },
    {
      q: '¿Aceptan licencia extranjera o matrícula consular?',
      a: 'Sí. Aceptamos licencias extranjeras (México, Guatemala, El Salvador, Colombia y otros países) y matrículas consulares como identificación para contratar. Los requisitos específicos varían por estado — te confirmamos qué documentos aplicarán en tu caso.',
    },
    {
      q: '¿Qué documentos necesito para contratar seguro de auto?',
      a: 'Generalmente: identificación (ITIN, pasaporte, matrícula consular o licencia extranjera), información del vehículo (placas, VIN, año y modelo) y una dirección postal en USA. No se requiere SSN ni revisión de crédito para cotizar ni en la mayoría de los casos para contratar.',
    },
    {
      q: '¿Puedo contratar seguro si tengo accidentes previos o infracciones?',
      a: 'Sí. Trabajamos con aseguradoras que aceptan conductores con historial de accidentes o infracciones. El precio puede ser mayor, pero te conseguimos cobertura. Sin seguro, un accidente puede significar responsabilidad personal ilimitada sobre tus ahorros y propiedades.',
    },
  ],
  ctaTitle: 'Manejá tranquilo',
  ctaItalic: 'desde hoy mismo',
  ctaSubtitle: 'Sin SSN. Sin revisión de crédito. Tu asesora en español te guía en todo el proceso.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  schema: {
    description: 'Seguro de auto para latinos e inmigrantes sin SSN en USA. Acepta ITIN, pasaporte, matrícula consular y licencia extranjera. Desde $89/mes. Atención 100% en español. Información confidencial.',
    price: '89',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'No SSN Required · ITIN · Passport · Consular ID',
  heroLine1: 'Car Insurance',
  heroItalic: 'for your family — no matter your documents',
  heroSubtitle: 'The law requires insurance for every driver in the US — regardless of immigration status. No SSN needed. We accept ITIN, passport, consular ID, and foreign licenses. Your information is 100% private — never shared with the government.',
  trustBadges: ['No SSN required', 'From $89/mo', 'Private & confidential', 'Spanish-speaking agents'],
  priceFrom: 'From $89/mo',
  eligibilityTitle: 'You can get covered even if...',
  eligibilityText: 'Immigration status doesn\'t matter. Driving without insurance can mean fines of $500–$5,000, license suspension, and unlimited personal liability. With or without an SSN, we help you stay legal on the road.',
  eligibilityItems: [
    'You don\'t have a Social Security Number (SSN)',
    'You have a foreign, consular, or out-of-state license',
    'You\'re a recent immigrant, DACA recipient, or have pending status',
    'You have no US credit history',
    'You have a temporary visa or are a permanent resident',
  ],
  features: [
    {
      icon: IdentificationCard,
      title: 'No SSN — ITIN, Passport & Consular ID Accepted',
      desc: 'Get covered with what you have: ITIN, Mexican or Central American passport, consular ID, or foreign license. No rejections based on immigration status. Families who switch to us save an average of $400–$900 per year.',
    },
    {
      icon: ShieldCheck,
      title: '"Full Coverage" Doesn\'t Mean What You Think',
      desc: '"Full coverage" isn\'t an actual product — it\'s a combination of three coverages: Liability (required by law — protects others), Collision (your vehicle in accidents), and Comprehensive (theft, hail, fire, vandalism). Add UM/UIM coverage to protect yourself when the other driver has no insurance — over 20% of drivers in some states are uninsured.',
    },
    {
      icon: Headset,
      title: 'A Real Person Answers When You Need Help',
      desc: 'No automated menus, no robots, no English-only call centers. When you have an accident, a bilingual agent guides you step by step: contacts the other party, manages your claim, and explains every decision. In Spanish or English — your choice.',
    },
  ],
  coverageItems: [
    'Liability — required by law in all 50 states',
    'Collision — your vehicle in accidents',
    'Comprehensive — theft, hail, fire, vandalism',
    'Uninsured/Underinsured Motorist (UM/UIM)',
    'Personal Injury Protection (PIP)',
    'Medical Payments (MedPay)',
    '24/7 Roadside Assistance',
    'Rental car while yours is being repaired',
  ],
  steps: [
    {
      title: 'Fill out the form — free, no SSN, no commitment',
      desc: 'Tell us about your vehicle and situation. No SSN, no credit check. Just basic information.',
    },
    {
      title: 'Your bilingual agent reviews your options',
      desc: 'We explain the difference between liability, collision, and comprehensive in plain language. You choose what fits your budget — no pressure.',
    },
    {
      title: 'Your insurance card arrives today',
      desc: 'In most cases, your digital insurance card arrives by email the same day. You can drive legally starting today.',
    },
  ],
  testimonials: [
    {
      name: 'Carlos M.',
      location: 'Miami, Florida',
      text: 'I came from Honduras 2 years ago and thought I couldn\'t get insurance without an SSN. They helped me in minutes with my consular ID. Great price, everything in Spanish. I didn\'t expect it to be so easy.',
    },
    {
      name: 'Sandra R.',
      location: 'Dallas, Texas',
      text: 'I have a Mexican license and they never turned me away. The Spanish service is real — you talk to a person, not an automated menu. That means a lot when you have a problem on the road.',
    },
    {
      name: 'Marcos V.',
      location: 'Atlanta, Georgia',
      text: 'I had an accident last year. They handled everything — contacted the other party, walked me through each step, got me a rental car. I didn\'t have to deal with any English paperwork.',
    },
  ],
  faq: [
    {
      q: 'Can I get car insurance without a Social Security Number?',
      a: 'Yes. You don\'t need an SSN to get car insurance in any US state. We accept ITIN, passport, consular ID, or foreign license as valid identification. Your immigration status is not a barrier — the law requires insurance from every driver equally.',
    },
    {
      q: 'Will my personal information be shared with ICE or immigration?',
      a: 'No. Your information is 100% confidential. We never share it with ICE, immigration authorities, or any government agency without a court order. We comply with all state insurance privacy laws. What you share with us stays strictly private.',
    },
    {
      q: 'What does "full coverage" actually mean?',
      a: '"Full coverage" is not an official product — it\'s shorthand for combining three coverages: Liability (protects others if you cause an accident, required by law), Collision (your car in accidents), and Comprehensive (theft, hail, fire, vandalism). Important: none of these cover you when hit by an uninsured driver unless you add UM/UIM coverage.',
    },
    {
      q: 'What happens if the other driver doesn\'t have insurance?',
      a: 'In many states, over 20% of drivers are uninsured. If someone hits you and they have no insurance, you may receive nothing unless you have UM/UIM (Uninsured/Underinsured Motorist) coverage. This is one of the most recommended add-ons — especially in Florida, Michigan, and California.',
    },
    {
      q: 'How much does car insurance cost without an SSN?',
      a: 'Car insurance starts at $89/month for basic liability coverage. Using an ITIN instead of SSN does not significantly affect your price. Your state, vehicle, and driving history are the main factors. Families who switch save an average of $400–$900 per year — it\'s worth getting a quote.',
    },
    {
      q: 'Do you accept foreign licenses or consular IDs?',
      a: 'Yes. We accept foreign licenses (Mexico, Guatemala, El Salvador, Colombia, and others) and consular IDs as identification. Specific requirements vary by state — we\'ll confirm exactly what documents apply in your case.',
    },
    {
      q: 'Can I get insurance with prior accidents or violations?',
      a: 'Yes. We work with insurers that accept drivers with accident history or violations. The price may be higher, but we\'ll find coverage for you. Without insurance, one accident can mean unlimited personal liability against your savings and assets.',
    },
  ],
  ctaTitle: 'Drive with confidence',
  ctaItalic: 'starting today',
  ctaSubtitle: 'No SSN. No credit check. A bilingual agent guides you through every step.',
  ctaButton: 'See my free quote',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  schema: {
    description: 'Car insurance for Latino immigrants without SSN in the USA. Accepts ITIN, passport, consular ID, and foreign license. From $89/mo. 100% Spanish-speaking service. Information stays private.',
    price: '89',
  },
};

export default function AutoPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
