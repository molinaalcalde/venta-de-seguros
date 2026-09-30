'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Hospital, Shield, FirstAid, Pill, Warning } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Salud',
  badgeIcon: Hospital,
  badge: 'ITIN aceptado · 10+ aseguradoras · Revisión anual incluida · Cotización gratis',
  heroLine1: 'Seguro de Salud',
  heroItalic: 'sin seguro médico, una urgencia promedia $2,600',
  heroSubtitle: 'Con el plan correcto, esa misma visita cuesta $455. El 55% de los hispanos en USA tiene un seguro que no los cubre bien o directamente no tiene ninguno. Comparamos 10+ aseguradoras para encontrar el plan que realmente funciona para tu familia, en español y sin costo.',
  trustBadges: ['ITIN aceptado', '10+ aseguradoras comparadas', 'Revisión anual incluida', 'Cotización gratis'],
  priceFrom: 'Desde $381/mes',
  eligibilityTitle: 'Para quién es este seguro',
  eligibilityText: 'Para quien trabaja por su cuenta, cuyo empleador no ofrece cobertura, o para quien ya tiene seguro pero nunca lo revisó y no sabe si está pagando de más.',
  eligibilityItems: [
    'Trabajadores independientes y por cuenta propia',
    'Familias que nunca tuvieron seguro en USA',
    'Quienes tienen ITIN (no necesitas SSN para calificar)',
    'Empleados cuyo trabajo no ofrece beneficios de salud',
    'Quienes tienen seguro activo y quieren comparar opciones para 2027',
  ],
  features: [
    {
      icon: Warning,
      title: 'Sin seguro, una factura puede borrar años de trabajo',
      desc: 'Un parto sin cobertura cuesta entre $15,000 y $30,000. Una hospitalización de 3 días cuesta $30,000 o más. Una apendicitis puede llegar a $35,000. El 50% de los adultos hispanos en USA tienen deuda médica activa hoy. El seguro no es un gasto mensual extra. Es lo que protege todo lo que ya construiste.',
    },
    {
      icon: Shield,
      title: 'Comparamos 10+ aseguradoras. Tú eliges con toda la información',
      desc: 'No trabajamos para ninguna compañía en particular. Comparamos cada plan disponible en tu estado: precio mensual, qué cubre, qué médicos incluye y cuánto pagarías si necesitas usarlo. La mayoría de personas elige el plan más barato sin saber que el deducible puede triplicar el costo real.',
    },
    {
      icon: FirstAid,
      title: 'Las primas para 2027 suben hasta 15%. Quien no revisa, paga de más',
      desc: 'Las aseguradoras propusieron aumentos de entre 10% y 25% para 2027. Cigna sale del mercado en todos los estados. Quienes tienen ese plan necesitan elegir uno nuevo. Revisamos tu cobertura actual cada año en noviembre para asegurarnos de que sigues teniendo la mejor opción disponible.',
    },
  ],
  coverageItems: [
    'Consultas médicas y especialistas',
    'Hospitalización y cirugías',
    'Medicamentos recetados con copago reducido',
    'Emergencias',
    'Laboratorios, rayos X e imagen',
    'Salud mental y terapia',
    'Maternidad y pediatría',
    'Servicios preventivos anuales al 100%',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación en 5 minutos',
      desc: 'Ingresos, tamaño de familia y estado. Identificamos cada plan al que calificas y qué cubre realmente.',
    },
    {
      title: 'Comparamos cada opción en español, sin tecnicismos',
      desc: 'Precio mensual, qué cubre, qué médicos incluye y cuánto pagarías si necesitas usarlo. Ves el costo real, no solo la prima.',
    },
    {
      title: 'Inscripción y revisión anual incluida',
      desc: 'Te acompañamos hasta que tu tarjeta está activa. Y cada noviembre revisamos tu plan para asegurarnos de que sigue siendo la mejor opción disponible. La mayoría de agentes desaparece después de la venta.',
    },
  ],
  testimonials: [
    {
      name: 'Lucía M.',
      location: 'Houston, Texas',
      text: 'Mi esposo tuvo un accidente pequeño en el trabajo, nada grave, pero la sala de emergencias nos cobró $2,800. Lo pagamos en 8 meses. Eso fue lo que me hizo llamar. Ahora los tres estamos en el mismo plan y entre todos pagamos $89 al mes. No puedo creer que tardé tanto por miedo al precio.',
    },
    {
      name: 'Carlos V.',
      location: 'Orlando, Florida',
      text: 'Trabajo por mi cuenta y siempre dije que lo del seguro lo resolvería después. Después llegó una visita a urgencias por un dolor en el pecho, nada grave, pero la factura fue de $3,400. Mi asesora me explicó mis opciones y comparó varios planes. Terminé pagando $164 al mes. Ojalá hubiera llamado antes de la factura.',
    },
    {
      name: 'Sandra R.',
      location: 'Chicago, Illinois',
      text: 'Mi hijo menor tiene asma. Antes compraba el inhalador de bolsillo, $180 cada vez que se acababa. Pensé que con ITIN no podía tener seguro. Me equivoqué. Ahora el inhalador me cuesta $15, tiene pediatra fija y yo voy al médico sin calcular si me alcanza.',
    },
  ],
  faq: [
    {
      q: '¿Puedo tener seguro con ITIN sin SSN?',
      a: 'Sí. Los planes privados aceptan ITIN sin restricciones en todos los estados. Te orientamos según tu situación exacta.',
    },
    {
      q: '¿Cuánto cuesta el seguro médico?',
      a: 'Un plan básico promedia $381 al mes para un adulto. Un plan intermedio entre $486 y $497 al mes. El costo depende de tu edad, estado y el plan que elijas. Como referencia, una sola urgencia sin seguro promedia $2,600.',
    },
    {
      q: '¿Qué diferencia hay entre un plan básico y uno intermedio?',
      a: 'El plan básico tiene prima más baja pero pagas más cuando vas al médico. El plan intermedio balancea mejor lo que pagas cada mes con lo que pagas cuando lo usas. Te explicamos cuál conviene según cuánto usas el seguro.',
    },
    {
      q: '¿Cuándo puedo inscribirme?',
      a: 'La inscripción para planes 2027 va del 1 de noviembre al 15 de enero. Para cobertura desde el 1 de enero debes inscribirte antes del 15 de diciembre. Fuera de ese período solo puedes inscribirte ante eventos como pérdida de empleo, nacimiento o mudanza.',
    },
    {
      q: '¿Qué pasa si pierdo la fecha de inscripción?',
      a: 'Sin un evento de vida calificado, la siguiente oportunidad es noviembre de 2027. Eso puede significar hasta 12 meses sin cobertura.',
    },
    {
      q: '¿Vale la pena el seguro del trabajo si lo pierdo?',
      a: 'Casi nunca. Cuando pierdes el trabajo te ofrecen continuar pagando tú todo, incluyendo lo que antes pagaba tu empleador más un cargo extra. Eso generalmente representa 3 o 4 veces lo que pagabas antes. Un plan nuevo casi siempre sale más barato.',
    },
    {
      q: '¿Puedo incluir a toda mi familia en un solo plan?',
      a: 'Sí. Los planes familiares cubren a tu cónyuge e hijos en una sola póliza. Calculamos la opción más conveniente para el tamaño y situación de tu familia.',
    },
    {
      q: '¿Por qué usar un agente independiente y no contratar solo?',
      a: 'Si contratas directo con una aseguradora, solo ves sus planes. Un agente independiente compara 10+ compañías, explica las diferencias reales y está disponible cuando necesitas usar el seguro y hay un problema con el reclamo.',
    },
  ],
  ctaTitle: '¿Sin seguro médico todavía?',
  ctaItalic: 'hoy es el mejor momento para cotizar',
  ctaSubtitle: 'ITIN aceptado. Comparamos 10+ aseguradoras. Sin compromiso.',
  ctaButton: 'Cotizar gratis',
  theme: 'blue',
  schema: {
    description: 'Seguro de salud para hispanos con ITIN en USA. Agente independiente compara 10+ aseguradoras. Planes individuales y familiares. Inscripción abierta del 1 de noviembre al 15 de enero. Atención en español.',
    price: '381',
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
