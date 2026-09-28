import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Hospital, Lock, FirstAid, Pill } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Salud',
  badgeIcon: Hospital,
  badge: 'Planes con ITIN · Cualquier Estatus · Desde $199/mes',
  heroLine1: 'Seguro de Salud',
  heroItalic: 'tu información nunca llega a migración',
  heroSubtitle: 'Una visita al médico sin seguro: $300. Una emergencia: $30,000 o más. Muchas familias evitan buscar seguro por miedo al "public charge" — pero contratar un plan privado NO afecta tu caso migratorio. Tu información es 100% confidencial, nunca llega a ICE ni a migración. Hay opciones para casi todas las situaciones. Desde $199/mes.',
  trustBadges: ['Info confidencial — no ICE', 'Sin SSN requerido', 'Acepta ITIN', 'Desde $199/mes'],
  priceFrom: 'Desde $199/mes',
  eligibilityTitle: 'Tu privacidad es lo primero',
  eligibilityText: 'Entendemos el miedo a compartir información de salud. Tu historial médico está protegido por ley (HIPAA) y nunca se comparte con migración, ICE ni ninguna agencia gubernamental. Lo que hablás con nosotros es estrictamente confidencial.',
  eligibilityItems: [
    'Planes privados con ITIN — cualquier estatus migratorio',
    'ACA/Marketplace para residentes permanentes y ciudadanos',
    'Medi-Cal (California), Medicaid y programas estatales',
    'DACA: elegibilidad varía por estado — te orientamos',
    'Planes familiares que cubren hijos con cualquier estatus',
  ],
  features: [
    {
      icon: Lock,
      title: 'Tu Información Nunca Llega a Migración — Jamás',
      desc: 'Muchas familias evitan buscar atención médica por miedo. Pero tu información de salud está protegida por HIPAA — una ley federal que prohíbe compartirla con ICE o cualquier agencia sin una orden judicial específica. Buscar cobertura de salud no es un riesgo migratorio.',
    },
    {
      icon: FirstAid,
      title: 'Opciones Reales para Cada Situación Migratoria',
      desc: 'Indocumentados, DACA, visa temporal, residentes y ciudadanos — cada situación tiene opciones diferentes. En California, Illinois y Nueva York existen programas que cubren sin importar el estatus. Para el resto, hay planes privados con ITIN disponibles en todos los estados.',
    },
    {
      icon: Pill,
      title: 'Médico, Especialistas, Medicamentos y Emergencias',
      desc: 'Consultas con médico de familia, especialistas, hospitalizaciones y emergencias — todo dentro de tu red de cobertura. La mayoría de planes incluye medicamentos recetados, laboratorios, rayos X y servicios preventivos anuales como chequeos y vacunas.',
    },
  ],
  coverageItems: [
    'Consultas médicas y especialistas',
    'Hospitalización y cirugías',
    'Medicamentos recetados',
    'Atención de emergencias',
    'Exámenes de laboratorio e imagen',
    'Salud mental y terapia',
    'Maternidad y pediatría',
    'Servicios preventivos — chequeos y vacunas',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación — sin juicios, en confianza',
      desc: 'Estatus migratorio, tamaño de familia e ingresos aproximados. Todo completamente confidencial. Nunca compartimos tu información con el gobierno.',
    },
    {
      title: 'Te explicamos todas tus opciones en español',
      desc: 'Planes privados, ACA, Medicaid y programas estatales. Tu asesora te dice cuál aplica para vos, cuánto cuesta y qué cubre — sin tecnicismos ni letra pequeña.',
    },
    {
      title: 'Inscripción guiada de principio a fin',
      desc: 'Te acompañamos en todo el proceso hasta que tenés tu tarjeta activa. Sin formularios confusos, sin errores que retrasen tu cobertura.',
    },
  ],
  testimonials: [
    {
      name: 'María T.',
      location: 'Los Angeles, California',
      text: 'Llevaba 3 años sin seguro médico porque pensaba que no calificaba y tenía miedo de preguntar. Mi asesora me encontró un plan para toda la familia. Mis hijos ya tienen médico de cabecera.',
    },
    {
      name: 'Jorge S.',
      location: 'Houston, Texas',
      text: 'Me explicaron todo en español y con calma, sin hacerme sentir mal por mi situación. Ahora tengo un plan donde veo a mi médico sin pagar extra en cada visita. Vale cada peso.',
    },
    {
      name: 'Ana L.',
      location: 'Chicago, Illinois',
      text: 'Pensaba que el seguro médico era solo para ciudadanos. Me explicaron que hay opciones privadas con ITIN para cualquier estatus. Ahora toda mi familia está cubierta y dormimos más tranquilos.',
    },
  ],
  faq: [
    {
      q: '¿Contratar seguro de salud privado afecta mi caso de "public charge"?',
      a: 'No. El "public charge" aplica solo a beneficios del gobierno — Medicaid, SSI, vivienda pública. Contratar un plan de salud privado (pagado por ti) no se considera beneficio público y NO afecta tu proceso migratorio. El nuevo reglamento de 2026 del DHS fue malinterpretado por muchas familias — buscar cobertura privada es tu derecho y no tiene ningún impacto en tu residencia o ciudadanía.',
    },
    {
      q: '¿Mi información se comparte con ICE o migración?',
      a: 'No. Tu información de salud está protegida por HIPAA — una ley federal que prohíbe compartirla con ICE, la migra o cualquier agencia gubernamental sin una orden judicial específica. Buscar cobertura de salud no es un riesgo migratorio. Cumplimos estrictamente con HIPAA y las leyes de privacidad de cada estado.',
    },
    {
      q: '¿Pueden los indocumentados tener seguro médico en USA?',
      a: 'Sí, aunque las opciones varían por estado. Las personas sin estatus legal generalmente no califican para el ACA federal, pero existen planes privados que aceptan ITIN sin restricciones de estatus. En California (Medi-Cal), Illinois y Nueva York hay programas estatales que cubren sin importar el estatus migratorio. Te ayudamos a identificar la mejor opción.',
    },
    {
      q: '¿Cuánto cuesta el seguro médico con ITIN?',
      a: 'Los planes privados comienzan desde $199/mes para un adulto. Si calificás para subsidios del ACA por nivel de ingresos, podés pagar significativamente menos. El precio varía según edad, estado, cantidad de personas y nivel de cobertura. Te damos el precio real según tu situación.',
    },
    {
      q: '¿Cuándo puedo inscribirme?',
      a: 'Para el ACA, el período de inscripción abierta (Open Enrollment) es de noviembre a enero. Para planes privados podés inscribirte en cualquier momento del año. Si tuviste un evento de vida — nacimiento, pérdida de trabajo, mudanza, divorcio — podés calificar para inscripción especial fuera del período normal.',
    },
    {
      q: '¿El plan puede cubrir a toda mi familia?',
      a: 'Sí. Ofrecemos planes familiares que cubren cónyuge e hijos en una sola póliza. Tus hijos pueden estar cubiertos aunque tengan diferente estatus que vos. Los hijos nacidos en USA (ciudadanos americanos) pueden calificar para CHIP independientemente de tu estatus.',
    },
    {
      q: '¿Los medicamentos recetados están cubiertos?',
      a: 'Sí. La mayoría de planes incluye cobertura para medicamentos recetados con copago. Los genéricos generalmente tienen copagos bajos ($5–$20). Los medicamentos de marca pueden tener copagos más altos. Sujeto a términos y condiciones del plan.',
    },
    {
      q: '¿Qué pasa con DACA y el seguro de salud?',
      a: 'Los receptores de DACA generalmente no califican para ACA federal ni Medicaid en la mayoría de los estados, pero hay excepciones importantes. California, Illinois, Colorado, Massachusetts, Washington y otros estados tienen programas propios que cubren a personas con DACA. Para el resto, hay planes privados con ITIN disponibles. Tu asesora te orienta según tu estado.',
    },
  ],
  ctaTitle: 'La salud de tu familia',
  ctaItalic: 'no puede esperar',
  ctaSubtitle: 'Desde $199/mes con o sin SSN. Tu información es privada. Tu asesora en español te guía sin prisa.',
  ctaButton: 'Ver mis opciones gratis',
  theme: 'blue',
  schema: {
    description: 'Seguro de salud para inmigrantes latinos sin SSN en USA. Acepta ITIN. Información 100% confidencial — no compartida con ICE. Planes individuales y familiares desde $199/mes. ACA, planes privados y programas estatales.',
    price: '199',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Salud',
  badgeIcon: Hospital,
  badge: 'ITIN Accepted · Any Status · From $199/mo',
  heroLine1: 'Health Insurance',
  heroItalic: 'regardless of your immigration status',
  heroSubtitle: 'One doctor visit without insurance: $300. One ER visit: $10,000+. Your information is 100% private — never shared with ICE, immigration, or any government agency. Options exist for nearly every immigration status. From $199/month.',
  trustBadges: ['100% private — no ICE', 'No SSN required', 'ITIN accepted', 'From $199/mo'],
  priceFrom: 'From $199/mo',
  eligibilityTitle: 'Your privacy comes first',
  eligibilityText: 'We understand the fear of sharing health information. Your medical records are protected by law (HIPAA) and can never be shared with immigration authorities, ICE, or any government agency without a specific court order. Seeking health coverage is not an immigration risk.',
  eligibilityItems: [
    'Private plans with ITIN — any immigration status',
    'ACA/Marketplace for permanent residents and citizens',
    'Medi-Cal (CA), Medicaid, and state programs',
    'DACA: eligibility varies by state — we\'ll guide you',
    'Family plans covering children of any immigration status',
  ],
  features: [
    {
      icon: Lock,
      title: 'Your Information Never Reaches Immigration — Ever',
      desc: 'Many families avoid healthcare out of fear. But your health information is protected by HIPAA — a federal law that prohibits sharing it with ICE or any agency without a specific court order. Seeking health coverage is not an immigration risk.',
    },
    {
      icon: FirstAid,
      title: 'Real Options for Every Immigration Status',
      desc: 'Undocumented, DACA, temporary visa, permanent resident, or citizen — every situation has different options. In California, Illinois, and New York, there are programs that cover everyone regardless of status. For other states, private ITIN plans are available nationwide.',
    },
    {
      icon: Pill,
      title: 'Doctors, Specialists, Medications & Emergencies',
      desc: 'Primary care visits, specialists, hospitalizations, and emergency care — all within your coverage network. Most plans include prescription medications, labs, imaging, and annual preventive services like checkups and vaccines.',
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
    'Preventive services — checkups and vaccines',
  ],
  steps: [
    {
      title: 'Tell us your situation — no judgment, in confidence',
      desc: 'Immigration status, family size, and approximate income. 100% confidential. We never share your information with the government.',
    },
    {
      title: 'We explain all your options in plain language',
      desc: 'Private plans, ACA, Medicaid, and state programs. Your agent tells you which applies, how much it costs, and what it covers — no fine print, no jargon.',
    },
    {
      title: 'Guided enrollment from start to finish',
      desc: 'We walk you through the entire process until your card is active. No confusing forms, no errors that delay your coverage.',
    },
  ],
  testimonials: [
    {
      name: 'María T.',
      location: 'Los Angeles, California',
      text: 'I went 3 years without health insurance because I thought I didn\'t qualify and was afraid to ask. My agent found a plan for my whole family. My kids now have a primary care doctor.',
    },
    {
      name: 'Jorge S.',
      location: 'Houston, Texas',
      text: 'They explained everything clearly, without making me feel bad about my situation. Now I have a plan where I see my doctor without extra charges every visit. Worth every penny.',
    },
    {
      name: 'Ana L.',
      location: 'Chicago, Illinois',
      text: 'I thought health insurance was only for citizens. They explained there are private ITIN options for any status. My whole family is now covered and we sleep better at night.',
    },
  ],
  faq: [
    {
      q: 'Will my information be shared with ICE or immigration?',
      a: 'No. Your health information is protected by HIPAA — a federal law that prohibits sharing it with ICE, immigration authorities, or any government agency without a specific court order. Seeking health coverage is not an immigration risk. We strictly comply with HIPAA and state privacy laws.',
    },
    {
      q: 'Can undocumented people get health insurance in the US?',
      a: 'Yes, though options vary by state. Those without legal status generally don\'t qualify for federal ACA, but private plans accept ITIN without immigration status restrictions. In California (Medi-Cal), Illinois, and New York there are state programs that cover people regardless of status. We\'ll help identify the best option for you.',
    },
    {
      q: 'How much does health insurance cost with an ITIN?',
      a: 'Private plans start at $199/month for one adult. If you qualify for ACA subsidies based on income, you may pay significantly less. Price varies by age, state, number of people, and coverage level. We give you the actual price for your specific situation.',
    },
    {
      q: 'When can I enroll?',
      a: 'For ACA, Open Enrollment runs November through January. For private plans, you can enroll any time of year. If you had a qualifying life event — birth, job loss, move, divorce — you may qualify for a Special Enrollment Period outside the normal window.',
    },
    {
      q: 'Can the plan cover my whole family?',
      a: 'Yes. We offer family plans covering a spouse and children under one policy. Your children can be covered even if they have a different immigration status than you. US-born children (American citizens) may qualify for CHIP regardless of your status.',
    },
    {
      q: 'What about DACA and health insurance?',
      a: 'DACA recipients generally don\'t qualify for federal ACA or Medicaid in most states, but there are important exceptions. California, Illinois, Colorado, Massachusetts, Washington, and other states have programs specifically covering DACA recipients. For other states, private ITIN plans are available. Your agent will guide you based on your state.',
    },
  ],
  ctaTitle: 'Your family\'s health',
  ctaItalic: 'can\'t wait',
  ctaSubtitle: 'From $199/mo with or without SSN. Your information stays private. A bilingual agent guides you — no rush.',
  ctaButton: 'See my free options',
  theme: 'blue',
  schema: {
    description: 'Health insurance for Latino immigrants without SSN in the USA. Accepts ITIN. 100% private — not shared with ICE. Individual and family plans from $199/mo. ACA, private plans, and state programs.',
    price: '199',
  },
};

export default function SaludPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
