import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Tooth, CurrencyDollar, Users } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Dental',
  badgeIcon: Tooth,
  badge: 'Desde $19/mes · Limpiezas al 100% · Sin SSN',
  heroLine1: 'Seguro Dental',
  heroItalic: 'para que el dolor de muela no arruine tus finanzas',
  heroSubtitle: 'Una corona sin seguro: $2,000. Con seguro PPO: menos de $700. Un canal de raíz: $1,500 sin seguro. Las limpiezas cuestan $0 desde el día 1. Y cuando el diente duele, ya es tarde para lo barato — la prevención cuesta 5 veces menos que el tratamiento. Sin SSN requerido.',
  trustBadges: ['Sin SSN requerido', 'Desde $19/mes', 'Limpiezas al 100%', 'Sin espera en preventivo'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: '¿Cómo funciona el sistema dental en USA?',
  eligibilityText: 'El seguro dental funciona con tres niveles de cobertura. La lógica es simple: lo que se cuida hoy cuesta mucho menos que lo que se trata mañana. Por eso los planes cubren el 100% de la prevención y menos del tratamiento mayor.',
  eligibilityItems: [
    '100% cubierto: limpiezas, revisiones y rayos X (preventivo) — desde día 1',
    '80% cubierto: empastes y extracciones simples (básico)',
    '50% cubierto: coronas, endodoncias (canal de raíz) y prótesis (mayor)',
    'Sin SSN ni historial de crédito requerido — acepta ITIN',
    'Planes familiares que incluyen hijos dependientes',
  ],
  features: [
    {
      icon: Tooth,
      title: '2 Limpiezas al Año Cubiertas al 100% — Desde el Día 1',
      desc: 'La limpieza profesional, revisión y rayos X no tienen período de espera y están cubiertos al 100% desde que activás la póliza. Una limpieza sin seguro cuesta $150–$300. Dos limpiezas al año ya equivalen a $300–$600 en ahorros — más que el costo anual del plan en muchos casos.',
    },
    {
      icon: CurrencyDollar,
      title: 'Corona: $2,000 Sin Seguro → $700 Con PPO',
      desc: 'Ejemplo real: una corona puede costar $2,000 o más sin seguro. Con un plan PPO, tu copago cae a menos de $700. Un canal de raíz en un molar: entre $1,000 y $1,800 sin seguro, la mitad con el 50% cubierto. Un implante dental completo: $3,000–$6,000 sin seguro — más caro que el seguro familiar de 5 años. El problema es que cuando duele, ya no podés elegir lo barato.',
    },
    {
      icon: Users,
      title: 'Plan Familiar con Ortodoncia para los Chicos',
      desc: 'Los planes familiares cubren a cónyuge e hijos dependientes. Algunos planes incluyen cobertura de ortodoncia para menores de 18 años con límites de $1,000–$2,000. Si tus hijos necesitan braces, consultá por los planes que incluyen ortodoncia.',
    },
  ],
  coverageItems: [
    'Limpieza profesional (2 al año) — al 100%',
    'Examen y revisión dental — al 100%',
    'Rayos X dentales — al 100%',
    'Empastes y restauraciones — al 80%',
    'Extracciones simples y quirúrgicas — al 80%',
    'Tratamiento de conducto / canal de raíz (endodoncia) — al 50%',
    'Coronas y puentes dentales — al 50%',
    'Ortodoncia infantil (planes selectos)',
  ],
  steps: [
    {
      title: 'Elegí tu plan — individual o familiar',
      desc: 'Planes desde $19/mes para una persona. Planes familiares desde $45/mes. Tu asesora te explica qué cubre cada nivel.',
    },
    {
      title: 'Cobertura preventiva activa desde el día 1',
      desc: 'La limpieza y revisión se cubren desde el primer día en la mayoría de planes — sin períodos de espera para servicios preventivos.',
    },
    {
      title: 'Andá al dentista y presentá tu tarjeta',
      desc: 'Visitá cualquier dentista de la red. Sin pagar adelantado por limpiezas y preventivos. Solo el copago acordado en tratamientos.',
    },
  ],
  testimonials: [
    {
      name: 'Patricia C.',
      location: 'Miami, Florida',
      text: 'Mis hijos no habían ido al dentista en 2 años porque era muy caro. Con el plan familiar ahora todos vamos. Sin problema de SSN, buen precio y los chicos ya tienen sus dientes revisados.',
    },
    {
      name: 'Miguel A.',
      location: 'San Antonio, Texas',
      text: 'Me dolía una muela y estaba aguantando porque no tenía seguro. Con el seguro dental me arreglaron el canal de raíz por mucho menos que el precio sin seguro. Hubiera costado $1,400 de mi bolsillo.',
    },
    {
      name: 'Rosa V.',
      location: 'Orlando, Florida',
      text: 'Nunca pensé que podía tener seguro dental sin SSN. Mi asesora me explicó que con ITIN es suficiente. Ahora toda la familia va al dentista sin miedo a la cuenta.',
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta realmente ir al dentista sin seguro en USA?',
      a: 'Sin seguro dental, los costos típicos son: limpieza + revisión $150–$300, empaste $200–$300 por diente, extracción $150–$300, canal de raíz $1,000–$1,800 según el diente, corona $1,200–$1,800, implante dental $3,000–$5,000 por diente. Con un plan desde $19/mes, las limpiezas cuestan $0 y los tratamientos se cubren al 50%–80%.',
    },
    {
      q: '¿Cuál es la diferencia entre plan HMO y PPO dental?',
      a: 'El plan HMO dental tiene copagos fijos y predecibles, sin deducible anual — sabés exactamente cuánto vas a pagar en cada visita. Tenés que elegir un dentista de la red y no salirte. El plan PPO dental tiene más libertad para elegir cualquier dentista, pero tiene deducible anual y un límite de cobertura típico de $1,000–$2,000 por año. El HMO es más económico; el PPO da más flexibilidad.',
    },
    {
      q: '¿Hay períodos de espera en el seguro dental?',
      a: 'Los servicios preventivos — limpieza, revisión y rayos X — no tienen período de espera en la mayoría de planes: los usás desde el primer día. Los empastes pueden tener espera de 3–6 meses. Los tratamientos mayores como coronas y endodoncias pueden tener espera de 6–12 meses dependiendo del plan. Por eso es importante tener el seguro antes de que aparezca el problema, no después.',
    },
    {
      q: '¿Necesito SSN para tener seguro dental?',
      a: 'No. Podés contratar seguro dental con tu ITIN como identificación. No se requiere SSN ni historial de crédito en USA.',
    },
    {
      q: '¿El seguro dental cubre la ortodoncia para mis hijos?',
      a: 'Algunos planes incluyen cobertura de ortodoncia para menores de 18 años, generalmente con un límite de por vida de $1,000–$2,000 por persona. Esto varía por plan y estado. Si la ortodoncia de tus hijos es prioritaria, te recomendamos preguntar específicamente por planes que la incluyan antes de contratar.',
    },
    {
      q: '¿Cuánto cuesta el seguro dental familiar?',
      a: 'Los planes individuales comienzan desde $19/mes. Los planes familiares para dos adultos y hijos están disponibles desde aproximadamente $45/mes dependiendo del estado y nivel de cobertura. Dos limpiezas anuales para dos personas ya equivalen a $300–$600 en ahorros — el plan familiar muchas veces se paga solo solo con las limpiezas.',
    },
    {
      q: '¿El plan cubre implantes dentales?',
      a: 'Los implantes son tratamientos mayores cubiertos en algunos planes premium al 50%. Muchos planes básicos no los incluyen. Si necesitás implantes, consultá los detalles antes de contratar. Sin seguro, un implante puede costar $3,000–$5,000 por diente.',
    },
  ],
  ctaTitle: 'Tu sonrisa merece',
  ctaItalic: 'cuidado real',
  ctaSubtitle: 'Planes desde $19/mes. Sin SSN. Limpiezas al 100% desde el primer día.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'cyan',
  schema: {
    description: 'Seguro dental para latinos e inmigrantes sin SSN en USA. Acepta ITIN. Planes individuales desde $19/mes y familiares. 2 limpiezas al año al 100%. Empastes, coronas, endodoncias y ortodoncia.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Dental',
  badgeIcon: Tooth,
  badge: 'From $19/mo · 100% Covered Cleanings · No SSN',
  heroLine1: 'Dental Insurance',
  heroItalic: 'so a toothache doesn\'t wreck your finances',
  heroSubtitle: 'A crown without insurance: $2,000. With a PPO plan: under $700. A root canal: $1,500 without coverage. Cleanings cost $0 from day one. And once it hurts, the cheap option is already gone — prevention costs 5x less than treatment. No SSN required.',
  trustBadges: ['No SSN required', 'From $19/mo', '100% covered cleanings', 'No waiting period on preventive'],
  priceFrom: 'From $19/mo',
  eligibilityTitle: 'How does dental insurance work in the US?',
  eligibilityText: 'Dental insurance works in three coverage levels. The logic is simple: what you maintain today costs much less than what you treat tomorrow. That\'s why plans cover 100% of prevention and less of major treatment.',
  eligibilityItems: [
    '100% covered: cleanings, exams, and X-rays (preventive) — from day 1',
    '80% covered: fillings and simple extractions (basic)',
    '50% covered: crowns, root canals, and dentures (major)',
    'No SSN or US credit history — ITIN accepted',
    'Family plans covering dependent children',
  ],
  features: [
    {
      icon: Tooth,
      title: '2 Free Cleanings a Year — Starting Day 1',
      desc: 'Professional cleanings, exams, and X-rays have no waiting period and are covered at 100% from the moment your policy activates. A cleaning without insurance costs $150–$300. Two cleanings a year equals $300–$600 in savings — often more than the annual cost of the plan.',
    },
    {
      icon: CurrencyDollar,
      title: 'Crown: $2,000 Without Insurance → $700 With PPO',
      desc: 'Real example: a crown can cost $2,000 or more without insurance. With a PPO plan, your copay drops to under $700. A molar root canal: $1,000–$1,800 without insurance, half that with 50% coverage. A full dental implant: $3,000–$6,000 without insurance — more expensive than a family dental plan for 5 years. The problem is that once it hurts, the affordable option is already gone.',
    },
    {
      icon: Users,
      title: 'Family Plans with Orthodontics for Kids',
      desc: 'Family plans cover your spouse and dependent children. Some plans include orthodontic coverage for children under 18 with $1,000–$2,000 lifetime limits. If your kids need braces, ask specifically about plans that include orthodontics.',
    },
  ],
  coverageItems: [
    'Professional cleanings (2 per year) — 100%',
    'Dental exam and checkup — 100%',
    'Dental X-rays — 100%',
    'Fillings and restorations — 80%',
    'Simple and surgical extractions — 80%',
    'Root canals (endodontics) — 50%',
    'Crowns and bridges — 50%',
    'Children\'s orthodontics (select plans)',
  ],
  steps: [
    {
      title: 'Choose your plan — individual or family',
      desc: 'Plans from $19/mo for one person. Family plans from $45/mo. Your agent explains what each coverage level includes.',
    },
    {
      title: 'Preventive coverage active from day 1',
      desc: 'Cleanings and exams are covered from the first day in most plans — no waiting period for preventive services.',
    },
    {
      title: 'Visit the dentist and show your card',
      desc: 'Visit any in-network dentist. No upfront payment for cleanings and preventive care. Only the agreed copay for treatments.',
    },
  ],
  testimonials: [
    {
      name: 'Patricia C.',
      location: 'Miami, Florida',
      text: 'My kids hadn\'t been to the dentist in 2 years because it was too expensive. With the family plan we all go now. No SSN problem, great price, and the kids have their teeth checked.',
    },
    {
      name: 'Miguel A.',
      location: 'San Antonio, Texas',
      text: 'I had a toothache and was holding out because I had no insurance. With dental coverage they fixed my root canal for much less than the cash price. It would have cost $1,400 out of pocket.',
    },
    {
      name: 'Rosa V.',
      location: 'Orlando, Florida',
      text: 'I never thought I could have dental insurance without an SSN. My agent explained that ITIN is enough. Now my whole family goes to the dentist without fear of the bill.',
    },
  ],
  faq: [
    {
      q: 'How much does going to the dentist actually cost without insurance?',
      a: 'Without dental insurance, typical costs are: cleaning + exam $150–$300, filling $200–$300 per tooth, extraction $150–$300, root canal $1,000–$1,800 depending on the tooth, crown $1,200–$1,800, dental implant $3,000–$5,000 per tooth. With a plan from $19/mo, cleanings cost $0 and treatments are covered at 50%–80%.',
    },
    {
      q: 'What\'s the difference between HMO and PPO dental plans?',
      a: 'An HMO dental plan has fixed, predictable copays with no annual deductible — you know exactly what you\'ll pay at each visit. You must choose a dentist within the network. A PPO dental plan gives you freedom to visit any dentist, but has an annual deductible and a typical coverage limit of $1,000–$2,000 per year. HMO is more affordable; PPO gives more flexibility.',
    },
    {
      q: 'Are there waiting periods for dental insurance?',
      a: 'Preventive services — cleanings, exams, and X-rays — have no waiting period in most plans: you use them from day one. Fillings may have a 3–6 month wait. Major treatments like crowns and root canals may have a 6–12 month wait depending on the plan. That\'s why having insurance before the problem appears is so important.',
    },
    {
      q: 'Do I need an SSN for dental insurance?',
      a: 'No. You can get dental insurance with your ITIN as identification. No SSN or US credit history required.',
    },
    {
      q: 'Does dental insurance cover braces for my kids?',
      a: 'Some plans include orthodontic coverage for children under 18, generally with a lifetime limit of $1,000–$2,000 per person. This varies by plan and state. If your children\'s orthodontics is a priority, ask specifically about plans that include it before enrolling.',
    },
    {
      q: 'How much does a family dental plan cost?',
      a: 'Individual plans start at $19/month. Family plans for two adults and children are available from approximately $45/month depending on the state and coverage level. Two annual cleanings for two people equals $300–$600 in savings — the family plan often pays for itself with just the cleanings.',
    },
  ],
  ctaTitle: 'Your smile deserves',
  ctaItalic: 'real care',
  ctaSubtitle: 'Plans from $19/mo. No SSN. Cleanings covered 100% from day one.',
  ctaButton: 'See my free quote',
  theme: 'cyan',
  schema: {
    description: 'Dental insurance for Latino immigrants without SSN in the USA. Accepts ITIN. Individual plans from $19/mo and family plans. 2 cleanings per year at 100%. Fillings, crowns, root canals, and orthodontics.',
    price: '19',
  },
};

export default function DentalPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
