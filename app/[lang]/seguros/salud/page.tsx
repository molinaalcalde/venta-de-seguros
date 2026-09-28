'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Hospital, Lock, Shield, FirstAid, Pill, Warning } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Salud',
  badgeIcon: Hospital,
  badge: 'ITIN aceptado · Info confidencial — no ICE · Desde $199/mes',
  heroLine1: 'Seguro de Salud',
  heroItalic: 'tu familia puede atenderse sin miedo',
  heroSubtitle: 'El 29% de familias inmigrantes pospusieron atención médica en 2025 por miedo — 7 puntos más que en 2023. Una emergencia sin seguro cuesta $2,600 en promedio. Con seguro: $455. Tu información de salud está protegida por ley federal (HIPAA) — nadie puede compartirla con ICE sin orden judicial específica. Puedes tener seguro con ITIN, sin SSN, sin importar tu estatus.',
  trustBadges: ['Info confidencial — no ICE', 'Sin SSN — ITIN aceptado', 'Cualquier estatus migratorio', 'Desde $199/mes'],
  priceFrom: 'Desde $199/mes',
  eligibilityTitle: 'Tu privacidad está protegida por ley — no por promesas',
  eligibilityText: 'El 78% de familias indocumentadas temen que proveedores de salud compartan su información con migración. Ese miedo tiene consecuencias reales: dejan de ir al médico, las enfermedades avanzan, las facturas de emergencia destruyen años de ahorro. La ley HIPAA prohíbe compartir tu información médica con ICE o cualquier agencia sin una orden judicial específica. Buscar cobertura de salud no es un riesgo migratorio.',
  eligibilityItems: [
    'Planes privados con ITIN — cualquier estatus migratorio, sin excepción',
    'ACA/Marketplace para residentes permanentes y ciudadanos',
    'Medi-Cal (California), Medicaid y programas estatales sin restricción',
    'DACA: elegibilidad varía por estado — te orientamos caso por caso',
    'Planes familiares que cubren hijos con cualquier estatus, incluyendo ciudadanos americanos',
  ],
  features: [
    {
      icon: Lock,
      title: 'HIPAA: La Ley que Protege tu Información — No tu Aseguradora',
      desc: 'La Ley HIPAA es federal. Prohíbe que cualquier proveedor de salud, aseguradora o agente comparta tu información médica con ICE, la migra o cualquier agencia gubernamental sin una orden judicial específica dirigida a ti. Eso incluye tu nombre, tu diagnóstico, tu historial. Buscar cobertura de salud no aparece en ningún registro de migración. Es tu derecho legal, no una promesa de marketing.',
    },
    {
      icon: Warning,
      title: 'Public Charge 2026 — Qué Cambió y Qué No Te Afecta',
      desc: 'La nueva regla Trump de septiembre 2026 reinstauró Medicaid como factor negativo en solicitudes de residencia permanente (green card). Pero esto aplica únicamente a solicitudes I-485 presentadas después del 18 de septiembre de 2026. No aplica a ciudadanos, residentes permanentes, personas con DACA ni a la mayoría de visas temporales. Los planes privados pagados por ti NO son beneficio público y nunca afectan ningún proceso migratorio. Tu asesora te explica exactamente qué aplica a tu situación.',
    },
    {
      icon: FirstAid,
      title: '6 Veces Más Caro Sin Seguro — y la Deuda Te Sigue a Todas Partes',
      desc: 'Una visita a urgencias sin seguro cuesta $2,600 en promedio. Con seguro: $455. El 50% de adultos hispanos tienen deuda médica activa hoy. El 25% de las familias con deuda médica tuvieron que mudarse con familiares o amigos como consecuencia directa. El seguro médico no es un lujo — es lo que protege los años de trabajo que ya pusiste.',
    },
  ],
  coverageItems: [
    'Consultas médicas y especialistas — sin pagar de tu bolsillo en cada visita',
    'Hospitalización y cirugías',
    'Medicamentos recetados con copago',
    'Atención de emergencias',
    'Exámenes de laboratorio, rayos X e imagen',
    'Salud mental y terapia',
    'Maternidad y pediatría',
    'Servicios preventivos anuales — chequeos y vacunas al 100%',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación — sin juicios, en confianza',
      desc: 'Estatus migratorio, tamaño de familia e ingresos aproximados. 100% confidencial. Tu información nunca sale de nuestra conversación.',
    },
    {
      title: 'Te explicamos todas tus opciones en español, sin letra chica',
      desc: 'Planes privados con ITIN, ACA, Medicaid y programas estatales. Cuál aplica para ti, cuánto cuesta, qué cubre — sin tecnicismos y sin presionarte.',
    },
    {
      title: 'Inscripción guiada hasta que tienes tu tarjeta activa',
      desc: 'Te acompañamos en cada paso hasta que tu cobertura está activa. Sin formularios confusos ni errores que retrasen tu seguro.',
    },
  ],
  testimonials: [
    {
      name: 'María T.',
      location: 'Los Angeles, California',
      text: 'Llevaba 3 años sin ir al médico por miedo. Mi asesora me explicó que HIPAA protege mi información por ley y que con mi ITIN podía tener cobertura. Ahora toda mi familia tiene médico de cabecera. No puedo creer que esperé tanto.',
    },
    {
      name: 'Jorge S.',
      location: 'Houston, Texas',
      text: 'Me explicaron la regla del public charge con detalle — mi situación no se ve afectada. Me tranquilicé y contraté. Ahora veo a mi médico sin pagar extra en cada visita. Vale cada centavo.',
    },
    {
      name: 'Ana L.',
      location: 'Chicago, Illinois',
      text: 'Pensaba que era imposible con mi estatus. Hay planes privados con ITIN para cualquier situación. Toda mi familia está cubierta — mis hijos, mi esposo y yo. Dormimos más tranquilos.',
    },
  ],
  faq: [
    {
      q: '¿Mi información se comparte con ICE o migración si contrato un seguro?',
      a: 'No. Tu información de salud está protegida por HIPAA — una ley federal que prohíbe compartirla con ICE, la migra o cualquier agencia gubernamental sin una orden judicial específica dirigida a ti. Esto aplica a aseguradoras, médicos, hospitales y agentes de seguros como nosotros. Buscar cobertura de salud no genera ningún registro en sistemas de migración. Cumplimos estrictamente con HIPAA.',
    },
    {
      q: '¿El public charge de 2026 me afecta si contrato seguro médico privado?',
      a: 'Los planes de salud privados (pagados por ti) nunca han sido ni son beneficio público — no afectan ningún proceso migratorio. La nueva regla de septiembre 2026 reinstauró Medicaid y CHIP como factores negativos solo para solicitudes de green card (I-485) presentadas después del 18/9/2026. No aplica a ciudadanos, residentes permanentes, DACA, visas temporales, ni a personas que no están solicitando residencia permanente. Tu asesora te explica exactamente qué aplica a tu caso.',
    },
    {
      q: '¿Pueden los indocumentados tener seguro médico en USA?',
      a: 'Sí. Las personas sin estatus legal generalmente no califican para el ACA federal, pero existen planes privados que aceptan ITIN sin restricciones de estatus, disponibles en todos los estados. En California (Medi-Cal), Illinois y Nueva York hay programas estatales que cubren sin importar el estatus migratorio. Te ayudamos a identificar la mejor opción según tu estado y situación.',
    },
    {
      q: '¿Cuánto cuesta el seguro médico sin SSN?',
      a: 'Los planes privados comienzan desde $199/mes para un adulto. Si calificas para subsidios del ACA por nivel de ingresos, puedes pagar significativamente menos. Una visita a urgencias sin seguro cuesta $2,600 en promedio — con seguro, $455. El seguro médico no es un gasto: es lo que evita que una emergencia destruya tus ahorros.',
    },
    {
      q: '¿Cuándo puedo inscribirme?',
      a: 'Para el ACA, el período de inscripción abierta (Open Enrollment) es de noviembre a enero. Para planes privados puedes inscribirte en cualquier momento del año. Si tuviste un evento de vida — nacimiento, pérdida de trabajo, mudanza, divorcio — puedes calificar para inscripción especial (Special Enrollment Period) fuera del período normal.',
    },
    {
      q: '¿El plan puede cubrir a toda mi familia con diferentes estatus?',
      a: 'Sí. Ofrecemos planes familiares que cubren cónyuge e hijos en una sola póliza, aunque tengan diferente estatus migratorio que tú. Los hijos nacidos en USA (ciudadanos americanos) pueden calificar para CHIP independientemente de tu estatus. Diseñamos el plan para toda tu familia, caso por caso.',
    },
    {
      q: '¿Qué pasa con DACA y el seguro de salud?',
      a: 'Los receptores de DACA generalmente no califican para ACA federal ni Medicaid en la mayoría de estados, pero hay excepciones importantes: California, Illinois, Colorado, Massachusetts, Washington y otros estados tienen programas propios que cubren a personas con DACA. Para el resto, hay planes privados con ITIN disponibles. Tu asesora te orienta según tu estado específico.',
    },
  ],
  ctaTitle: 'Tu familia merece',
  ctaItalic: 'atenderse sin miedo',
  ctaSubtitle: 'Con ITIN, sin SSN, sin importar tu estatus. Tu información es privada por ley.',
  ctaButton: 'Ver mis opciones gratis',
  theme: 'blue',
  schema: {
    description: 'Seguro de salud para inmigrantes latinos sin SSN en USA. ITIN aceptado. Info 100% confidencial — no compartida con ICE. Planes individuales y familiares desde $199/mes. ACA, planes privados y programas estatales.',
    price: '199',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Salud',
  badgeIcon: Hospital,
  badge: 'Self-Employed · No Employer Coverage · ACA Plans · From $199/mo',
  heroLine1: 'Health Insurance',
  heroItalic: 'one hospital stay without coverage: $20,000+',
  heroSubtitle: '79 million Americans have medical debt. 2 in 5 working-age adults struggle with medical bills. In 2026, ACA marketplace deductibles jumped 37% — from $2,759 to $3,786 — as enhanced tax credits expired. If you\'re self-employed, between jobs, or your employer doesn\'t offer coverage, we find you a plan that actually covers you. Not just on paper.',
  trustBadges: ['Independent agent', 'ACA + private plans', 'Self-employed specialists', 'From $199/mo'],
  priceFrom: 'From $199/mo',
  eligibilityTitle: 'Who actually needs to find their own health insurance',
  eligibilityText: 'Most people without coverage aren\'t irresponsible — they\'re self-employed, between jobs, or working for a small business that doesn\'t offer benefits. The ACA marketplace exists for exactly this situation. The problem is that navigating it alone — especially after the 2026 deductible jump — often means paying too much for too little.',
  eligibilityItems: [
    'Self-employed and freelancers — no employer plan available',
    'Small business owners and contractors',
    'Between jobs — COBRA is usually overpriced and temporary',
    'Part-time workers without employer benefits',
    'Early retirees not yet eligible for Medicare',
  ],
  features: [
    {
      icon: Shield,
      title: 'The 2026 Deductible Jump Nobody Warned You About',
      desc: 'When enhanced ACA tax credits expired in 2026, the average marketplace deductible jumped 37% overnight — from $2,759 to $3,786. Most enrollees didn\'t notice until they needed care. Many shifted to bronze plans thinking they were saving money, only to discover their deductible is now $7,000+. An independent agent compares every available plan at your income level and finds where the real value is — not just the lowest premium.',
    },
    {
      icon: FirstAid,
      title: 'Medical Debt Is the #1 Cause of Personal Bankruptcy in America',
      desc: '79 million Americans currently have problems with medical bills or medical debt. The average ER visit without insurance: $2,600. A 3-day hospital stay: $30,000+. A serious diagnosis without coverage can erase years of savings in weeks. The right health plan isn\'t about paying less every month — it\'s about not losing everything when something goes wrong.',
    },
    {
      icon: Pill,
      title: 'We Compare Every Plan — You Choose With Full Information',
      desc: 'As an independent agent, we\'re not tied to one carrier. We compare ACA marketplace plans, off-marketplace private plans, and short-term options side by side — premium, deductible, network, and out-of-pocket maximum. 63% of ACA shoppers feel worried during enrollment, 52% angry, 46% confused. Our job is to make it simple.',
    },
  ],
  coverageItems: [
    'Primary care and specialist visits',
    'Hospitalizations and surgeries',
    'Prescription medications',
    'Emergency care',
    'Laboratory tests and imaging',
    'Mental health and therapy',
    'Maternity and pediatrics',
    'Preventive services — annual checkups and vaccines at 100%',
  ],
  steps: [
    {
      title: 'Tell us your situation — income, family size, state',
      desc: 'We identify every plan you qualify for, including subsidies that lower your premium. Takes about 5 minutes.',
    },
    {
      title: 'We compare every option side by side — no jargon',
      desc: 'Premium, deductible, network, and out-of-pocket max explained clearly. You see the real cost of each plan, not just the monthly payment.',
    },
    {
      title: 'Enrolled and covered — we handle the paperwork',
      desc: 'We guide you through every step until your card is active. No confusing forms, no errors that delay your coverage.',
    },
  ],
  testimonials: [
    {
      name: 'Kevin M.',
      location: 'Austin, Texas',
      text: 'I went self-employed 2 years ago and kept telling myself I\'d figure out health insurance later. Then I had a kidney stone — $14,000 ER bill, paid entirely out of pocket. My agent found me a silver plan with $1,800 deductible for $230/month after subsidies. Should have done this on day one.',
    },
    {
      name: 'Lisa T.',
      location: 'Denver, Colorado',
      text: 'I picked my ACA plan based on the lowest premium. Turns out my deductible was $6,500. My agent restructured my coverage — same premium, $2,000 deductible, same network. I didn\'t know that was possible. I\'ve been leaving money on the table for three years.',
    },
    {
      name: 'Robert C.',
      location: 'Miami, Florida',
      text: 'COBRA after leaving my job was $890/month for basically the same coverage I now get for $310 through the marketplace. My agent found the subsidy I qualified for that I had no idea existed. The system is genuinely confusing — having someone explain it makes all the difference.',
    },
  ],
  faq: [
    {
      q: 'How much did ACA marketplace deductibles actually increase in 2026?',
      a: 'According to KFF, the average marketplace deductible jumped 37% in 2026 — from $2,759 to $3,786 — after enhanced tax credits from the Inflation Reduction Act expired. Many enrollees shifted from silver to bronze plans to keep premiums manageable, which further raised their deductibles. An independent agent can help you find where the actual value is at your income level, including any remaining subsidies you qualify for.',
    },
    {
      q: 'I\'m self-employed. What are my actual options?',
      a: 'You have three main options: ACA Marketplace plans (with potential subsidies based on your income), off-marketplace private plans (more flexibility, no subsidies), and short-term health plans (cheaper but limited coverage). About half of ACA marketplace enrollees are self-employed or work for small businesses — the system is designed for your situation. The key is finding the right metal tier at your income level, which an independent agent can do faster and more accurately than going it alone.',
    },
    {
      q: 'Is COBRA worth it after leaving a job?',
      a: 'Almost never. COBRA lets you keep your employer\'s exact plan — but you now pay both your share and your employer\'s share of the premium, plus an admin fee. That typically means 3-4x what you were paying before. In most cases, an ACA marketplace plan with subsidies is significantly cheaper for similar or better coverage. The 60-day COBRA election window also gives you a Special Enrollment Period to find a marketplace plan instead.',
    },
    {
      q: 'What\'s the difference between a premium and a deductible?',
      a: 'Your premium is what you pay every month regardless of whether you use your insurance. Your deductible is what you pay out of pocket before your insurance starts covering most services. A plan with a low premium often has a high deductible — meaning you pay a lot when you actually need care. The right balance depends on how often you use healthcare. We map this out for you before you pick a plan.',
    },
    {
      q: 'When can I enroll?',
      a: 'For ACA marketplace plans, Open Enrollment runs November through January. Outside that window, you need a qualifying life event — job loss, birth, marriage, divorce, or moving to a new state — to trigger a Special Enrollment Period. Private off-marketplace plans are available year-round. If you\'re uninsured right now, we can find options that work regardless of where we are in the calendar.',
    },
    {
      q: 'Can my whole family be on one plan?',
      a: 'Yes. Family plans cover a spouse and children under one monthly premium. Subsidies are calculated based on total household income and family size — larger families often qualify for more significant premium reductions. We calculate your exact subsidy eligibility before recommending any plan.',
    },
  ],
  ctaTitle: 'Find the plan that',
  ctaItalic: 'actually covers you',
  ctaSubtitle: 'Independent review. No pressure. We compare every option at your income level.',
  ctaButton: 'See my options — free',
  theme: 'blue',
  schema: {
    description: 'Health insurance for self-employed, small business owners, and individuals without employer coverage. ACA marketplace plans, private options, and subsidy analysis. Independent agent. From $199/mo.',
    price: '199',
  },
};

export default function SaludPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
