'use client';

import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Car, IdentificationCard, ShieldCheck, Headset } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Sin SSN · ITIN · Pasaporte · Matrícula Consular',
  heroLine1: 'Seguro de Auto',
  heroItalic: 'sin SSN — deja de manejar sin seguro',
  heroVideo: '/videos/hero3.mp4',
  heroSubtitle: 'La ley exige seguro a TODOS los conductores en USA, sin importar el estatus migratorio. No necesitas SSN. Aceptamos ITIN, pasaporte, matrícula consular y licencia extranjera. Tu información es 100% confidencial — nunca se comparte con el gobierno.',
  trustBadges: ['Sin SSN requerido', 'Desde $89/mes', 'Info confidencial', 'Asesor en español'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
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
      desc: 'Cotizas y contratas con lo que tienes: ITIN, pasaporte mexicano o centroamericano, matrícula consular o licencia extranjera. Sin burocracia, sin rechazo por estatus. Familias que cambian a nosotros ahorran en promedio $400–$900 al año.',
    },
    {
      icon: ShieldCheck,
      title: 'El "Full Coverage" No Es Lo Que Crees — Te Lo Explicamos',
      desc: '"Full coverage" no es un producto real — es la combinación de tres coberturas: Liability (obligatoria, protege a otros si los chocás), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, vandalismo). También existe UM/UIM: te protege cuando el otro conductor no tiene seguro — algo muy común en algunos estados donde más del 20% conduce sin seguro.',
    },
    {
      icon: Headset,
      title: 'Cuando Tienes un Accidente, Hablás con una Persona Real',
      desc: 'Ningún menú automático, ningún bot, ningún call center en inglés. Cuando más lo necesitas, un asesor que habla tu idioma te acompaña paso a paso: contacta a la otra parte, gestiona el reclamo y te explica qué hacer. Sin que tú tengas que lidiar con el inglés.',
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
      desc: 'Te explicamos la diferencia entre liability, collision y comprehensive sin tecnicismos. Tú eliges según tu presupuesto — sin presiones.',
    },
    {
      title: 'Tu tarjeta de seguro llega hoy mismo',
      desc: 'En la mayoría de los casos, la tarjeta digital llega por email el mismo día. Puedes manejar legal desde hoy.',
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
      text: 'Tengo licencia mexicana y nunca me rechazaron. El servicio en español es real — hablas con una persona, no con un menú automático. Eso vale mucho cuando tienes un problema en la carretera.',
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
      a: 'Sí. No necesitas SSN para contratar seguro de auto en ningún estado de EE.UU. Aceptamos ITIN, pasaporte, matrícula consular o licencia extranjera como identificación válida. Tu estatus migratorio no es un obstáculo — la ley exige seguro a todos los conductores por igual.',
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
      a: 'En muchos estados, más del 20% de los conductores maneja sin seguro. Si te chocan y el culpable no tiene seguro, puedes quedarte sin cobrar a menos que tengas cobertura UM/UIM (Uninsured/Underinsured Motorist). Esta cobertura adicional es una de las más recomendadas — especialmente en estados con alta tasa de conductores sin seguro como Florida, Michigan y California.',
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
      a: 'Generalmente: identificación (ITIN, pasaporte, matrícula consular o licencia extranjera), información del vehículo (placas, VIN, año y modelo) y una dirección postal en USA. No se requiere SSN ni revisión de crédito para cotizar ni en la mayoría de los caeres para contratar.',
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
  schema: {
    description: 'Seguro de auto para latinos e inmigrantes sin SSN en USA. Acepta ITIN, pasaporte, matrícula consular y licencia extranjera. Desde $89/mes. Atención 100% en español. Información confidencial.',
    price: '89',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Independent Broker · 40+ Carriers · Licensed Agent',
  heroLine1: 'Car Insurance',
  heroItalic: 'one agent. 40+ carriers.',
  heroVideo: '/videos/hero3.mp4',
  heroSubtitle: 'Your rate went up at renewal — and you didn\'t file a single claim. That\'s what happens when one carrier controls your price. As independent brokers, we shop 40+ carriers to find you the best rate for the same coverage. One call replaces hours of comparison shopping.',
  trustBadges: ['40+ carriers compared', 'From $89/mo', 'Licensed broker', 'No-pressure quotes'],
  priceFrom: 'From $89/mo',
  eligibilityTitle: 'Time to stop overpaying?',
  eligibilityText: 'Average car insurance rates rose 39% between 2021 and 2026. Over 45% of drivers shopped their insurance in 2024 — a record. The ones who switched saved an average of $400–$900 per year. The only question is: are you getting the best rate for what you have?',
  eligibilityItems: [
    'Your premium went up at renewal — with no claims filed',
    'You\'ve been with the same carrier for years without re-shopping',
    'You\'ve never compared rates across 40+ carriers at once',
    'You had a claim and feel the settlement offer was too low',
    'You added a new driver or bought a new vehicle recently',
  ],
  features: [
    {
      icon: IdentificationCard,
      title: 'We Shop 40+ Carriers. Geico Shops One.',
      desc: 'When you go directly to Geico or Progressive, they quote you one price — theirs. As an independent broker, we run your profile through 40+ carriers simultaneously and bring you the best rate for the same coverage. That\'s real competition. Families who switch save an average of $400–$900 per year.',
    },
    {
      icon: ShieldCheck,
      title: 'When You Have a Claim, We Fight for You',
      desc: '65% of all insurance complaints are about claims — delays and lowball settlement offers. When you\'re insured through a direct carrier, they represent themselves. When you\'re with us, your agent advocates for you. We contact the other party, follow up on your claim, and make sure you get what your policy promises.',
    },
    {
      icon: Headset,
      title: 'A Real Person — Not a Call Center Queue',
      desc: 'J.D. Power 2025: auto insurance satisfaction hit 644 out of 1,000 — near the floor. The biggest driver? You can\'t reach anyone who knows your account. With us, you have a dedicated licensed agent who knows your policy, picks up the phone, and is there when it actually matters.',
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
      title: 'Tell us about your vehicle — takes 2 minutes',
      desc: 'No commitment, no credit impact. We just need basic info to run your profile across 40+ carriers and find the most competitive rate.',
    },
    {
      title: 'We present your top options — you decide',
      desc: 'Same coverage, different prices. We show you side-by-side comparisons in plain language — no jargon, no hidden fees. You choose what fits your budget.',
    },
    {
      title: 'Switch and save — today if you want',
      desc: 'In most cases, your new policy is active the same day. We handle the cancellation of your old one and make sure there\'s no coverage gap.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer K.',
      location: 'Phoenix, Arizona',
      text: 'My premium jumped from $142 to $191 a month at renewal — no accidents, no tickets. They ran my info through multiple carriers and got me back to $119 with better coverage. I don\'t know why I waited.',
    },
    {
      name: 'David L.',
      location: 'Houston, Texas',
      text: 'I had a claim last year and the adjuster offered me $3,200 for damage that clearly cost more. My agent pushed back, documented everything, and got the settlement to $5,800. Having someone in your corner matters.',
    },
    {
      name: 'Rachel M.',
      location: 'Atlanta, Georgia',
      text: 'I\'ve been with the same carrier for 9 years and assumed I was getting loyalty pricing. Turns out I was overpaying by $600 a year. One call, switched the same week. I wish I\'d done it sooner.',
    },
  ],
  faq: [
    {
      q: 'How is an independent broker different from going directly to Geico or State Farm?',
      a: 'Direct carriers like Geico, Progressive, and State Farm sell only their own products — they have no incentive to find you the best price. An independent broker like us is licensed to work with 40+ carriers. We run your profile across all of them and bring you the most competitive option. One call replaces hours of comparison shopping — and we work for you, not the insurer.',
    },
    {
      q: 'Why did my rate go up if I didn\'t file any claims?',
      a: 'Insurance companies raise rates based on population-level risk — accidents, weather events, vehicle repair costs, and inflation in your area — not just your personal record. Average rates rose 39% between 2021 and 2026. The best defense: shop every 12–18 months. Loyalty rarely pays in insurance.',
    },
    {
      q: 'Does getting a quote affect my credit score?',
      a: 'No. Getting a quote is a soft inquiry — it does not affect your credit score in any way. We check publicly available rating factors (vehicle type, zip code, driving history) to get you accurate quotes. No hard pull, no impact.',
    },
    {
      q: 'What coverage do I actually need?',
      a: 'At minimum, every state requires liability coverage (protects others if you cause an accident). Beyond that, collision covers your vehicle in accidents and comprehensive covers theft, hail, fire, and vandalism. We also strongly recommend UM/UIM — uninsured motorist coverage — because over 1 in 8 drivers on the road has no insurance at all.',
    },
    {
      q: 'What is UM/UIM and do I actually need it?',
      a: 'Uninsured/Underinsured Motorist (UM/UIM) coverage protects you when you\'re hit by a driver who has no insurance or not enough. In Florida, 20%+ of drivers are uninsured. In California and Michigan the numbers are similar. Without UM/UIM, if an uninsured driver totals your car, you may receive nothing. It\'s one of the highest-value add-ons available.',
    },
    {
      q: 'How do I know if I\'m overpaying?',
      a: 'The simplest test: when did you last shop your insurance? If it\'s been more than 18 months, there\'s a good chance you\'re overpaying. Our process takes about 2 minutes — you\'ll know within 24 hours if there\'s a better rate out there for you. No commitment to switch.',
    },
    {
      q: 'Can you help me during a claim?',
      a: 'Yes — and this is one of the biggest differences between a broker and going direct. When you have a claim, your dedicated agent contacts the adjuster, tracks the timeline, and advocates for a fair settlement. 65% of all insurance complaints are about claims handling. We\'ve seen the lowball offers. We push back.',
    },
  ],
  ctaTitle: 'One call.',
  ctaItalic: '40+ carriers. your best rate.',
  ctaSubtitle: 'Free quote in 2 minutes. No credit impact. No commitment. If we can\'t beat your current rate, we\'ll tell you.',
  ctaButton: 'Get my free quote',
  theme: 'blue',
  schema: {
    description: 'Independent car insurance broker in the USA. We compare 40+ carriers to find you the best rate. Licensed agent. From $89/mo. No pressure quotes, no credit impact.',
    price: '89',
  },
};

export default function AutoPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
