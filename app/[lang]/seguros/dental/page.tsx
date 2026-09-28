'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Tooth, CurrencyDollar, Users, Heart, Warning } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Dental',
  badgeIcon: Tooth,
  badge: 'Sin SSN · Sin espera en preventivo · Desde $19/mes · ITIN aceptado',
  heroLine1: 'Seguro Dental',
  heroItalic: 'porque el sistema nadie te lo explica en español',
  heroSubtitle: 'Solo el 27.8% de latinos va al dentista en USA. No es por descuido — es porque el sistema está diseñado para confundir. Te lo explicamos desde cero. Sin SSN. Desde $19/mes.',
  trustBadges: ['Sin SSN — ITIN aceptado', 'Desde $19/mes', 'Sin espera en preventivo', 'Limpiezas al 100%'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: 'Cómo funciona el seguro dental en USA',
  eligibilityText: 'Tres niveles de cobertura. Lo que cuidás hoy cuesta 5 veces menos que lo que tratás mañana:',
  eligibilityItems: [
    '100% cubierto: limpiezas, revisiones y rayos X — sin espera, desde el día 1',
    '80% cubierto: empastes y extracciones (cobertura básica)',
    '50% cubierto: coronas, canales de raíz y prótesis (cobertura mayor)',
    'Sin SSN ni historial de crédito — acepta ITIN',
    'Planes familiares que incluyen hijos y ortodoncia',
  ],
  features: [
    {
      icon: Heart,
      title: 'Llevás a tus hijos — pero aguantás vos el dolor',
      desc: 'El 73% de latinos no va al dentista — y los adultos se ponen últimos por cuidar a la familia. Pero no podés cuidarlos si estás sufriendo. Los planes familiares cubren a todos desde $45/mes. Vos también entrás.',
    },
    {
      icon: CurrencyDollar,
      title: 'Canal de raíz: $1,400 sin seguro. 6 meses de plan: $114.',
      desc: 'Una limpieza sin seguro: $200. Con el plan: $0. Una corona sin seguro: $1,500. Con PPO: menos de $700. La matemática es simple — el plan se paga solo con la primera visita.',
    },
    {
      icon: Tooth,
      title: 'Sin espera: tus limpiezas cuestan $0 desde el día 1',
      desc: 'La limpieza, revisión y rayos X no tienen período de espera en la mayoría de planes. Activás hoy — usás esta semana. Los tratamientos mayores pueden tener espera de 6 meses, por eso conviene entrar antes de que aparezca el problema.',
    },
  ],
  coverageItems: [
    'Limpieza profesional (2 al año) — al 100%, sin espera',
    'Examen y revisión dental — al 100%',
    'Rayos X dentales — al 100%',
    'Empastes y restauraciones — al 80%',
    'Extracciones simples y quirúrgicas — al 80%',
    'Canal de raíz / endodoncia — al 50%',
    'Coronas y puentes — al 50%',
    'Ortodoncia infantil (planes selectos)',
  ],
  steps: [
    {
      title: 'Elegí tu plan en minutos',
      desc: 'Individual desde $19/mes o familiar desde $45/mes. Sin SSN — usá tu ITIN. Tu asesora te explica cada nivel sin presiones.',
    },
    {
      title: 'Preventivo activo desde el día 1',
      desc: 'Limpiezas y revisiones desde que activás la póliza. Sin espera, sin trámites adicionales.',
    },
    {
      title: 'Andá al dentista y mostrá tu tarjeta',
      desc: 'Cualquier dentista de la red. Las limpiezas cuestan $0. Solo el copago acordado en tratamientos.',
    },
  ],
  testimonials: [
    {
      name: 'Patricia C.',
      location: 'Miami, Florida',
      text: 'Mis hijos no habían ido al dentista en 2 años. Con el plan familiar ahora vamos todos — yo también, que era la que siempre postergaba. Sin SSN, buen precio y sin sorpresas en la cuenta.',
    },
    {
      name: 'Miguel A.',
      location: 'San Antonio, Texas',
      text: 'Aguanté el dolor de muela 3 meses porque no tenía seguro. Me arreglaron el canal de raíz por $280 con el plan. Sin seguro era $1,400. Nunca más espero.',
    },
    {
      name: 'Rosa V.',
      location: 'Orlando, Florida',
      text: 'No sabía que podía tener seguro dental con ITIN. Mi asesora me explicó todo en español — cómo funciona, qué cubre, qué no. Eso no lo encontré en ningún otro lado.',
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta ir al dentista sin seguro en USA?',
      a: 'Limpieza + revisión: $150–$300. Empaste: $200–$300 por diente. Canal de raíz: $700–$1,500. Corona: $1,000–$1,800. Implante: $3,000–$5,000. Con un plan desde $19/mes, las limpiezas cuestan $0 y los tratamientos bajan al 50–80%.',
    },
    {
      q: '¿Qué significa que no hay período de espera en preventivo?',
      a: 'Podés usar la limpieza, revisión y rayos X desde el primer día que activás tu plan — sin esperar semanas ni meses. Los tratamientos mayores como coronas o canales de raíz sí pueden tener espera de 6–12 meses según el plan. Por eso conviene entrar antes de necesitarlos.',
    },
    {
      q: '¿Cuál es la diferencia entre plan HMO y PPO dental?',
      a: 'HMO: copagos fijos, sin deducible, más económico — pero tenés que usar dentistas de la red. PPO: más libertad para elegir dentista, tiene deducible anual y límite de cobertura de $1,000–$2,000/año. El HMO es ideal si querés previsibilidad de costos; el PPO si querés flexibilidad.',
    },
    {
      q: '¿Necesito SSN para tener seguro dental?',
      a: 'No. Podés contratar con tu ITIN como identificación. No se requiere SSN ni historial de crédito en USA.',
    },
    {
      q: '¿El plan cubre ortodoncia para mis hijos?',
      a: 'Algunos planes incluyen ortodoncia para menores de 18 años con límite de $1,000–$2,000 de por vida. Varía por plan y estado. Si los braces son prioridad, consultanos antes de contratar.',
    },
    {
      q: '¿Mi información se comparte con migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial.',
    },
  ],
  ctaTitle: 'Tu salud dental',
  ctaItalic: 'no puede esperar más',
  ctaSubtitle: 'Desde $19/mes. Sin SSN. Limpiezas al 100% desde el primer día. En español.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'cyan',
  schema: {
    description: 'Seguro dental para latinos e inmigrantes sin SSN en USA. ITIN aceptado. Sin espera en servicios preventivos. Limpiezas al 100%. Planes individuales desde $19/mes y familiares. Coronas, canales de raíz y ortodoncia.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Dental',
  badgeIcon: Tooth,
  badge: 'Independent Agent · No Waiting Period on Preventive · From $19/mo',
  heroLine1: 'Dental Insurance',
  heroItalic: 'we\'ll tell you exactly what it covers — and what it doesn\'t',
  heroSubtitle: 'Most dental plans cap at $1,500/year. One crown costs $1,200. We know that math is brutal — so we find the plan that actually makes sense for your situation, not the one with the best brochure. From $19/mo.',
  trustBadges: ['No waiting period on preventive', 'From $19/mo', 'Multiple plans compared', 'No pressure, no upsell'],
  priceFrom: 'From $19/mo',
  eligibilityTitle: 'Which of these sounds like you?',
  eligibilityText: 'Dental insurance looks simple until you need it. These are the situations we help with most:',
  eligibilityItems: [
    'No dental coverage — paying full price every visit, skipping the ones you can\'t afford',
    'Annual cap runs out after one procedure — paying out of pocket for the rest of the year',
    'Employer plan is expiring or changing — need individual coverage fast',
    'Retiring in the next 1–5 years — 55% of seniors lose dental when they leave work',
    'Self-employed or freelancer — no group plan access, shopping on your own',
    'Need a specific procedure soon — want to know what\'s actually covered before signing up',
  ],
  features: [
    {
      icon: Warning,
      title: 'The annual maximum trap — and how to avoid it',
      desc: 'Most dental plans cap benefits at $1,000–$2,000/year. One crown ($1,200) or root canal ($1,500) wipes it out. We compare plans by annual maximum, waiting periods, and procedure-specific coverage — not just monthly premium. The cheapest plan is often the most expensive mistake.',
    },
    {
      icon: Users,
      title: 'Retiring soon? 55% of seniors have no dental coverage.',
      desc: 'Most employer dental plans end the day you retire. Medicare doesn\'t cover dental. Individual plans get more expensive as you age — and your teeth need more work. The window to lock in a good rate is while you\'re still healthy. We help you plan ahead.',
    },
    {
      icon: Heart,
      title: 'Gum disease → heart disease → Alzheimer\'s',
      desc: 'The research is clear: untreated periodontal disease is linked to cardiovascular disease, Type 2 diabetes, and cognitive decline. Dental care isn\'t cosmetic — it\'s systemic health. Two cleanings a year at $0 is the cheapest preventive medicine available.',
    },
  ],
  coverageItems: [
    'Professional cleanings (2/year) — 100%, no waiting period',
    'Dental exam and X-rays — 100%',
    'Fillings and restorations — 80%',
    'Extractions — 80%',
    'Root canals — 50%',
    'Crowns and bridges — 50%',
    'Implants (select premium plans)',
    'Children\'s orthodontics (select plans)',
  ],
  steps: [
    {
      title: 'Tell us what you actually need',
      desc: 'Upcoming procedure? Retiring soon? Family coverage? We match the plan to your situation — not a generic recommendation.',
    },
    {
      title: 'We compare plans honestly — including the limits',
      desc: 'Annual maximum, waiting periods, in-network dentists, procedure-specific coverage. We show you what each plan doesn\'t cover too.',
    },
    {
      title: 'Preventive care active from day 1',
      desc: 'Cleanings and exams start immediately in most plans. Most policies bind same day.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer M.',
      location: 'Phoenix, Arizona',
      text: 'I bought a cheap dental plan and used it for the first time when I needed a crown. The $1,000 annual cap was gone after one procedure. They helped me find a plan with a $2,000 cap and no waiting period — wish I had called first.',
    },
    {
      name: 'David R.',
      location: 'Nashville, Tennessee',
      text: 'I\'m self-employed and had no idea where to start with individual dental plans. They explained exactly what the annual limits meant in real dollars and found me a PPO that actually covers what I need. No upsell, no pressure.',
    },
    {
      name: 'Carol B.',
      location: 'Scottsdale, Arizona',
      text: 'I\'m 58 and retiring in two years. Nobody told me my dental coverage ends the day I leave my job. We found an individual plan I can keep long-term at a rate I can lock in now while I\'m still healthy.',
    },
  ],
  faq: [
    {
      q: 'Why do dental plans have an annual maximum — and is it enough?',
      a: '$1,000–$2,000/year sounds reasonable until one crown ($1,200) or root canal ($1,500) hits it. After that, you pay 100% out of pocket for the rest of the year. Plans with higher maximums cost more but protect you better against multiple procedures in one year. We help you do the math before you commit.',
    },
    {
      q: 'What\'s the difference between HMO and PPO dental plans?',
      a: 'HMO: lower monthly premium, fixed copays, no annual deductible — but you must use in-network dentists. PPO: more freedom to choose any dentist, but has a deductible and annual cap. If you have a preferred dentist, check their network first. If cost is the priority, HMO usually wins.',
    },
    {
      q: 'Are there waiting periods for dental insurance?',
      a: 'Cleanings and exams typically have no waiting period — you use them from day one. Fillings: 3–6 months. Major work (crowns, root canals): 6–12 months in most plans. This is why enrolling before you need treatment matters. We flag the waiting periods clearly before you sign.',
    },
    {
      q: 'What happens to my dental coverage when I retire?',
      a: 'Most employer plans end on your last day of work. Medicare Part A and B don\'t cover dental. If you wait until retirement to find individual coverage, premiums are higher and you may face waiting periods right when you need the most work. Locking in a plan 1–2 years before retirement is the smart move.',
    },
    {
      q: 'Is dental insurance worth it if I\'m healthy?',
      a: 'Two cleanings a year without insurance: $300–$600. Most plans cost $228–$480/year. You break even on preventive care alone — before any treatment. And research links untreated gum disease to heart disease, diabetes, and cognitive decline. The math and the health case both say yes.',
    },
    {
      q: 'Does dental insurance cover implants?',
      a: 'Most basic and mid-tier plans exclude implants. Some premium plans cover them at 50% after a waiting period. A single implant costs $3,000–$5,000 without insurance — worth asking about before you choose a plan if implants are on your radar.',
    },
  ],
  ctaTitle: 'Find the plan that',
  ctaItalic: 'actually covers you',
  ctaSubtitle: 'Honest comparison. No upsell. From $19/mo. Preventive care active from day one.',
  ctaButton: 'Compare my options — free',
  theme: 'cyan',
  schema: {
    description: 'Individual and family dental insurance plans from $19/mo. No waiting period on preventive care. Compare HMO and PPO plans. Cleanings, fillings, crowns, root canals, and implants. Independent agent.',
    price: '19',
  },
};

export default function DentalPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
