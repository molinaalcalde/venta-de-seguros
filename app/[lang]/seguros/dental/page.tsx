'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Tooth, CurrencyDollar, Users, Warning } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Dental',
  badgeIcon: Tooth,
  badge: 'ITIN aceptado · Sin espera en preventivo · Desde $19/mes · Cotización gratis',
  heroLine1: 'Seguro Dental',
  heroItalic: 'en USA el seguro dental cubre más cuando no te duele nada',
  heroSubtitle: 'En México vas al dentista cuando duele. En USA el sistema funciona al revés: las limpiezas, revisión y rayos X cuestan $0 con el plan desde el primer día. Una corona o canal de raíz tienen períodos de espera de 6 a 12 meses. Quienes entran cuando ya tienen el problema esperan. Quienes entran antes tienen todo cubierto cuando lo necesitan. Comparamos los planes disponibles para encontrar el correcto antes de que llegue el dolor.',
  trustBadges: ['ITIN aceptado', 'Sin espera en preventivo', 'Limpiezas al 100%', 'Desde $19/mes'],
  priceFrom: 'Desde $19/mes',
  eligibilityTitle: 'Para quién es este seguro',
  eligibilityText: 'Si llevas tiempo sin ir al dentista o solo vas cuando ya hay dolor, el seguro dental es lo que cambia ese patrón.',
  eligibilityItems: [
    'Adultos sin cobertura dental en su trabajo o que trabajan por su cuenta',
    'Familias con hijos que necesitan limpiezas y revisiones regulares',
    'Quienes tienen ITIN y nunca supieron que podían tener seguro dental aquí',
    'Personas que fueron al dentista sin seguro y recibieron una factura inesperada',
    'Quienes llevan años sin ir y no saben por dónde empezar',
  ],
  features: [
    {
      icon: Warning,
      title: 'Cada minuto, dos hispanos van a urgencias por dolor de muela.',
      desc: 'Una sala de emergencias cobra entre $1,500 y $3,000 por una visita por dolor dental. No arreglan el diente, solo dan analgésicos. El canal de raíz que con el seguro cuesta entre $150 y $280 termina en una visita de urgencias de $2,000 más el procedimiento después. Con el plan correcto, una emergencia dental va al dentista, no a urgencias.',
    },
    {
      icon: Tooth,
      title: 'Si tienes diabetes, lo que pasa en tu boca afecta directamente tu azúcar.',
      desc: 'Los hispanos tienen 80% más probabilidad de tener diabetes tipo 2 que los blancos no hispanos. La relación entre enfermedad de encías y diabetes es bidireccional: la periodontitis dificulta el control del azúcar y la diabetes empeora la enfermedad dental. Los hispanos con diabetes tienen casi el triple de pérdida dental que los no diabéticos. Dos limpiezas al año no son cosmética, son parte del manejo de tu salud.',
    },
    {
      icon: CurrencyDollar,
      title: 'Tu plan tiene un límite anual. Una corona ya lo consume.',
      desc: 'La mayoría de planes dentales cubre hasta $1,500 al año. Una corona cuesta entre $800 y $2,500. Un canal de raíz entre $700 y $1,800. Si necesitas los dos en el mismo año, el seguro deja de pagar antes de terminar el tratamiento. Comparamos planes por límite anual, período de espera y cobertura real, no solo por precio mensual. El plan más barato es casi siempre el que sale más caro.',
    },
  ],
  coverageItems: [
    'Limpiezas profesionales (2 al año) al 100%, sin período de espera',
    'Examen dental y rayos X al 100%',
    'Empastes y restauraciones al 80%',
    'Extracciones simples y quirúrgicas al 80%',
    'Canal de raíz al 50%',
    'Coronas y puentes al 50%',
    'Ortodoncia infantil (planes selectos)',
    'Implantes (planes premium selectos)',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación en 5 minutos',
      desc: 'Si necesitas trabajo mayor pronto, si tienes familia, si tienes ITIN. Con esa información encontramos el plan que cubre lo que necesitas y evitamos sorpresas de período de espera.',
    },
    {
      title: 'Comparamos planes por lo que realmente importa',
      desc: 'Límite anual, período de espera por tipo de tratamiento, red de dentistas y precio mensual real. Te explicamos exactamente qué cubre y qué no antes de firmar.',
    },
    {
      title: 'Preventivo activo desde el día uno',
      desc: 'Limpiezas y revisiones desde que activas la póliza. Si tienes dentista preferido, verificamos que esté en la red antes de contratarlo.',
    },
  ],
  testimonials: [
    {
      name: 'Patricia C.',
      location: 'Miami, Florida',
      text: 'Mis hijos no habían ido al dentista en 2 años. Con el plan familiar ahora vamos todos, yo también, que era la que siempre postergaba. Sin SSN, buen precio y sin sorpresas en la cuenta.',
    },
    {
      name: 'Miguel A.',
      location: 'San Antonio, Texas',
      text: 'Aguanté el dolor de muela 3 meses porque no tenía seguro. Me arreglaron el canal de raíz por $280 con el plan. Sin seguro era $1,400. Nunca más espero.',
    },
    {
      name: 'Rosa V.',
      location: 'Orlando, Florida',
      text: 'Llevaba años sin ir al dentista porque no entendía cómo funcionaba el seguro aquí. En México ibas y pagabas. Aquí no sabía qué preguntar ni cómo empezar. Mi asesora me explicó todo en español, qué cubre cada plan y qué no, sin presión. Por primera vez alguien me lo explicó sin querer venderme una sola compañía.',
    },
  ],
  faq: [
    {
      q: '¿Cuánto cuesta ir al dentista sin seguro en USA?',
      a: 'Limpieza y revisión entre $150 y $300. Empaste entre $200 y $300 por diente. Canal de raíz entre $700 y $1,500. Corona entre $1,000 y $2,500. Implante entre $3,000 y $6,000. Con un plan desde $19 al mes, las limpiezas cuestan $0 y los tratamientos bajan entre un 50% y un 80%.',
    },
    {
      q: '¿Por qué el seguro dental en USA cubre más cuando no te duele nada?',
      a: 'En USA el seguro dental está diseñado para el cuidado preventivo: las limpiezas, revisión y rayos X tienen cobertura desde el primer día sin período de espera. Los tratamientos mayores como coronas o canales de raíz tienen esperas de 6 a 12 meses. El sistema premia a quienes entran antes del problema. Si contratas cuando ya tienes dolor, el plan no cubre ese tratamiento de inmediato.',
    },
    {
      q: '¿Tiene sentido el seguro dental si puedo ir al dentista en México?',
      a: 'Para quien vive cerca de la frontera, el turismo dental puede ser una opción. Pero para quien vive en Florida, Nueva York, Nueva Jersey o Illinois, un viaje a Los Algodones significa combustible, hotel, tiempo perdido y sin seguimiento local si hay complicaciones. Con un plan desde $19 al mes, la limpieza preventiva cuesta $0 y el dentista está a 15 minutos de tu casa. Calculamos cuál opción tiene más sentido para tu situación específica.',
    },
    {
      q: '¿Cuál es la diferencia entre plan HMO y PPO dental?',
      a: 'HMO: copagos fijos, sin deducible, más económico, pero tienes que usar dentistas de la red. PPO: más libertad para elegir dentista, tiene deducible anual y límite de cobertura de entre $1,000 y $2,000 al año. El HMO es ideal si quieres previsibilidad de costos. El PPO si quieres flexibilidad o ya tienes un dentista de confianza.',
    },
    {
      q: '¿Necesito SSN para tener seguro dental?',
      a: 'No. Puedes contratar con tu ITIN como identificación. No se requiere SSN ni historial de crédito en USA.',
    },
    {
      q: '¿El plan cubre ortodoncia para mis hijos?',
      a: 'Algunos planes incluyen ortodoncia para menores de 18 años con límite de entre $1,000 y $2,000 de por vida. Varía por plan y estado. Si los braces son prioridad, consúltanos antes de contratar.',
    },
    {
      q: '¿Cómo sé si hay un plan sin período de espera en mi estado?',
      a: 'Algunos carriers ofrecen planes sin períodos de espera para trabajo mayor. Si llevas 12 meses o más con cobertura dental continua, muchos planes eliminan automáticamente los períodos de espera. Si tienes un tratamiento próximo, eso es lo primero que revisamos antes de recomendarte cualquier plan.',
    },
    {
      q: '¿Por qué usar un agente independiente y no contratar directo?',
      a: 'Si contratas directo con Delta Dental o Cigna, solo ves sus planes. Un agente independiente compara entre 10 y más aseguradoras, revisa el límite anual, los períodos de espera y si tu dentista actual está en la red. El precio que pagas es el mismo. La diferencia es que alguien revisa que el plan realmente cubra lo que necesitas antes de que firmes.',
    },
  ],
  ctaTitle: 'No importa cuánto tiempo llevas sin ir.',
  ctaItalic: 'el plan cubre desde la primera visita',
  ctaSubtitle: 'Sin juicios, sin preguntas. ITIN aceptado. Desde $19/mes. Cotización gratis.',
  ctaButton: 'Cotizar gratis',
  heroVideo: '/videos/hero-dental.mp4',
  theme: 'cyan',
  schema: {
    description: 'Seguro dental para latinos en USA. ITIN aceptado. Sin espera en servicios preventivos. Limpiezas al 100%. Agente independiente compara 10 aseguradoras. Planes individuales desde $19 al mes y familiares. Coronas, canales de raíz y ortodoncia.',
    price: '19',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Dental',
  badgeIcon: Tooth,
  badge: 'Annual max compared · No waiting period options · 10+ carriers · Free quote',
  heroLine1: 'Dental Insurance',
  heroItalic: 'your dental plan\'s annual cap has not changed since 1973',
  heroSubtitle: 'In 1973, $1,500 covered a full year of dental care. In today\'s dollars that was between $9,000 and $10,000. Dental costs have grown 12 times since then. The cap has not moved. One crown costs $1,200. One root canal costs $1,500. If you need both this year, most plans stop paying before you finish treatment. We compare 10+ carriers to find the plan with the annual limit, waiting period, and network that actually works for your situation.',
  trustBadges: ['Annual max compared', 'No waiting period options', '10+ carriers', 'Free quote'],
  priceFrom: 'From $19/mo',
  eligibilityTitle: 'Which of these sounds like you?',
  eligibilityText: 'These are the situations where the wrong dental plan costs more than no plan at all.',
  eligibilityItems: [
    'No dental coverage, paying full price for every visit or skipping the ones you cannot afford',
    'Plan hit its annual cap after one procedure, leaving you uninsured for the rest of the year',
    'Retiring in the next two years and your employer dental coverage ends the day you leave',
    'Self-employed or freelancer with no access to group dental benefits',
    'Just bought dental insurance because you have tooth pain and discovered the 12-month waiting period',
  ],
  features: [
    {
      icon: CurrencyDollar,
      title: 'The $1,500 cap your plan inherited from 1973',
      desc: 'The average dental plan annual maximum has not changed in 50 years. In 1973, $1,500 was worth between $9,000 and $10,000 in today\'s dollars. Dental costs grew 12 times. The cap did not move. One crown costs between $800 and $2,500. One root canal between $700 and $1,800. If you need both this year, your plan stops paying before treatment is done. We compare plans by annual maximum, not just monthly premium. The cheapest plan is almost always the most expensive mistake.',
    },
    {
      icon: Users,
      title: 'Medicare does not cover dental. 24 million seniors found out too late.',
      desc: 'Medicare Parts A and B do not cover cleanings, fillings, crowns, bridges, or dentures. 47% of Medicare beneficiaries, 24 million people, have no dental coverage at all. The average senior without dental coverage spends $922 out of pocket per year. Your employer dental plan ends the day you retire. The window to lock in individual coverage at a lower rate is before you leave your job, while you are still healthy. We help you plan ahead.',
    },
    {
      icon: Warning,
      title: 'Bought coverage because you already have tooth pain? The crown waits 12 months.',
      desc: 'Most dental plans have 6 to 12 month waiting periods for crowns, root canals, and bridges. If you buy after the problem starts, you wait. Preventive care (cleanings, X-rays, exams) has no waiting period on most plans and is active from day one. Some carriers eliminate waiting periods entirely. We identify which ones are available in your state and whether your situation qualifies for immediate major coverage.',
    },
  ],
  coverageItems: [
    'Professional cleanings (2 per year) at 100%, no waiting period',
    'Dental exam and X-rays at 100%',
    'Fillings and restorations at 80%',
    'Extractions at 80%',
    'Root canals at 50%',
    'Crowns and bridges at 50%',
    'Implants (select premium plans)',
    'Children\'s orthodontics (select plans)',
  ],
  steps: [
    {
      title: 'Tell us what you actually need',
      desc: 'Upcoming procedure, retiring soon, family coverage, or just lost employer coverage. We match the plan to your situation, not a generic recommendation.',
    },
    {
      title: 'We compare plans by what matters: annual max, waiting periods, your dentist\'s network',
      desc: 'Most people pick by monthly premium. We show you what each plan pays for a routine visit, one crown, and a worst-case year before you commit to anything.',
    },
    {
      title: 'Enrolled, active, and someone to call if a claim goes wrong',
      desc: 'Preventive care starts immediately on most plans. If a claim gets denied or a procedure is not covered the way you expected, you have a direct line, not a 1-800 number.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer M.',
      location: 'Phoenix, Arizona',
      text: 'I bought a cheap dental plan and used it for the first time when I needed a crown. The $1,000 annual cap was gone after one procedure. My agent found a plan with a $2,000 cap and no waiting period. Wish I had called before I bought the first one.',
    },
    {
      name: 'David R.',
      location: 'Nashville, Tennessee',
      text: 'I am self-employed and had no idea where to start with individual dental plans. My agent explained exactly what the annual limits meant in real dollars and found me a PPO that actually covers what I need. No upsell, no pressure.',
    },
    {
      name: 'Carol B.',
      location: 'Scottsdale, Arizona',
      text: 'I am 58 and retiring in two years. Nobody told me my dental coverage ends the day I leave my job. My agent found an individual plan I can keep long-term at a rate I can lock in now while I am still healthy. That conversation saved me thousands.',
    },
  ],
  faq: [
    {
      q: 'Why do dental plans have an annual maximum and is it enough?',
      a: 'Most dental plans cap benefits at between $1,000 and $2,000 per year. One crown costs between $800 and $2,500. One root canal between $700 and $1,800. After the cap is hit, you pay 100% out of pocket for the rest of the year. Plans with higher annual maximums cost more per month but protect you against multiple procedures in one year. We help you calculate the real cost of each plan before you commit.',
    },
    {
      q: 'What is the difference between HMO and PPO dental plans?',
      a: 'HMO: lower monthly premium, fixed copays, no annual deductible, but you must use in-network dentists. PPO: more freedom to choose any dentist, but has a deductible and annual cap. If you have a preferred dentist, we check their network status before recommending a plan. If cost is the priority, HMO usually wins on monthly premium but PPO gives you more flexibility when you need major work.',
    },
    {
      q: 'Are there waiting periods for dental insurance?',
      a: 'Cleanings and exams typically have no waiting period. Fillings: 3 to 6 months. Major work such as crowns and root canals: 6 to 12 months in most plans. Some carriers eliminate waiting periods entirely, especially if you had prior continuous coverage of 12 months or more. We flag every waiting period clearly before you sign, and identify plans that cover major work immediately if that is what you need.',
    },
    {
      q: 'What happens to my dental coverage when I retire?',
      a: 'Most employer plans end on your last day of work. Medicare Parts A and B do not cover dental at all. If you wait until retirement to find individual coverage, premiums are higher and you may face waiting periods right when you need the most work. Locking in a plan one to two years before retirement is the right move. We help you identify the right plan before the gap opens.',
    },
    {
      q: 'Is dental insurance worth it if I am healthy?',
      a: 'Two cleanings per year without insurance cost between $300 and $600. Most plans cost between $228 and $480 per year. You break even on preventive care alone before any treatment. Research from Harvard Medical School links untreated gum disease to cardiovascular disease, Type 2 diabetes, and cognitive decline. The math and the health case both say yes.',
    },
    {
      q: 'Does dental insurance cover implants?',
      a: 'Most basic and mid-tier plans exclude implants. Some premium plans cover them at 50% after a waiting period. A single implant costs between $3,000 and $6,000 without coverage. If implants are on your radar, tell us before we recommend a plan and we will factor that in.',
    },
    {
      q: 'How do I find a dental plan with no waiting period?',
      a: 'Several carriers offer plans with no waiting periods on major work. Availability depends on your state and whether you had prior continuous dental coverage. If you had dental coverage for the past 12 months or more, many plans waive waiting periods automatically. If you have a procedure coming up soon, that is the first thing we check before recommending anything.',
    },
    {
      q: 'Why use an independent agent instead of buying dental insurance directly?',
      a: 'If you buy directly from Delta Dental or Cigna, you see one carrier\'s options. An independent agent compares 10 or more carriers, checks annual maximums, waiting periods, and whether your current dentist is in-network. The premium you pay is the same either way. The difference is someone who reviews that the plan actually covers what you need before you sign, and who is available if a claim gets denied.',
    },
  ],
  ctaTitle: 'Stop paying for a plan built in 1973',
  ctaItalic: 'we compare what your carrier will never show you',
  ctaSubtitle: 'Free comparison. 10+ carriers. Annual max, waiting periods, and your dentist\'s network checked. No obligation.',
  ctaButton: 'Get a free quote',
  heroVideo: '/videos/hero-dental.mp4',
  theme: 'cyan',
  schema: {
    description: 'Individual and family dental insurance plans from $19 per month. No waiting period on preventive care. Independent agent compares 10+ carriers by annual maximum, waiting periods, and network. Cleanings, fillings, crowns, root canals, and implants.',
    price: '19',
  },
};

export default function DentalPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
