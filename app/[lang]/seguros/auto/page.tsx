'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Car, IdentificationCard, Warning, TrendUp, ArrowsLeftRight, House, Headset } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Comparamos múltiples aseguradoras · Atención en español',
  heroLine1: 'Seguro de Auto',
  heroItalic: 'la cobertura correcta al precio justo',
  heroSubtitle: 'La mayoría de conductores elige su seguro una vez y no vuelve a comparar — pagando de más año tras año. Cotizamos con varias aseguradoras a la vez y te explicamos cada opción en español, sin presiones.',
  trustBadges: ['Varias aseguradoras comparadas', 'Desde $89/mes', 'Respuesta en 24 horas', 'Atención en español'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: '¿Cuál es tu situación?',
  eligibilityText: 'Cada conductor tiene una historia diferente. Cuéntanos la tuya y encontramos la cobertura que tiene sentido para ti.',
  eligibilityItems: [
    'Compraste tu primer auto aquí y el dealer te ofreció su seguro',
    'Tu prima subió y nadie te explicó por qué',
    'Usas el auto para trabajar — delivery, contratista, transporte',
    'Llevas años con la misma aseguradora sin haber comparado',
    'Tuviste un accidente y el proceso fue confuso y lento',
    'Tienes accidentes o infracciones previas en tu historial',
  ],
  features: [
    {
      icon: IdentificationCard,
      title: 'Cotizamos con varias compañías — tú eliges la mejor',
      desc: 'No trabajamos para una sola aseguradora. Comparamos opciones y te explicamos las diferencias reales — cobertura, precio y condiciones — sin presionarte. Aceptamos ITIN, pasaporte y matrícula consular para cotizar.',
    },
    {
      icon: House,
      title: 'Primer auto financiado — lo que el dealer no te explica',
      desc: 'Si financiaste el carro, el banco exige full coverage, no es opcional. El minimum liability solo cubre a la otra persona, no a ti. Tu historial de manejo de otro país no se transfiere — empiezas desde cero. Te decimos exactamente qué necesitas.',
    },
    {
      icon: TrendUp,
      title: '¿Tu prima subió? Te explicamos por qué y qué puedes hacer',
      desc: 'Los autos modernos tienen sensores que cuestan miles en reparar. Los repuestos subieron 30–40% desde 2020. No es personal — pero comparar entre aseguradoras es la forma más efectiva de recuperar esa diferencia.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil (Liability) — obligatoria por ley, protege a otros',
    'Colisión (Collision) — daños a tu vehículo en accidentes',
    'Daños completos (Comprehensive) — robo, granizo, fuego, vandalismo',
    'Conductor sin seguro (UM/UIM) — protección si el otro no tiene seguro',
    'Gap Insurance — si financiaste y debes más de lo que vale el auto',
    'Auto de reemplazo mientras te reparan el tuyo',
    'Protección de lesiones personales (PIP/MedPay)',
    'Asistencia en carretera 24/7',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación',
      desc: 'Info básica sobre tu auto y tu situación actual. Gratis, sin compromiso, en español.',
    },
    {
      title: 'Comparamos múltiples aseguradoras',
      desc: 'No trabajamos para una sola compañía. Buscamos la mejor cobertura al precio más justo para tu caso.',
    },
    {
      title: 'Tu tarjeta llega hoy — y cada año revisamos',
      desc: 'La tarjeta digital llega por email el mismo día. Y en 12 meses te contactamos para ver si hay una mejor opción disponible para ti.',
    },
  ],
  testimonials: [
    {
      name: 'Carmen L.',
      location: 'Miami, Florida',
      text: 'Compré mi primer carro aquí y no sabía por dónde empezar. Me explicaron cada cobertura en español, compararon varias opciones y elegí la que tenía sentido para mí. En 15 minutos tenía mi póliza activa.',
    },
    {
      name: 'Roberto M.',
      location: 'Houston, Texas',
      text: 'Compré mi primer carro aquí y el dealer me ofreció seguro carísimo. Me asesoraron, compararon opciones y conseguí la misma cobertura por $180 menos al mes. En un año son más de $2,000 de diferencia.',
    },
    {
      name: 'Patricia V.',
      location: 'Los Ángeles, California',
      text: 'Mi seguro subió $60 al mes sin haber tenido ningún accidente. Me explicaron que era por los costos de reparación de autos modernos — algo que nadie me había dicho. Luego me encontraron una aseguradora más barata. Ahorré $720 al año.',
    },
  ],
  faq: [
    {
      q: '¿Qué documentos necesito para cotizar un seguro de auto?',
      a: 'Aceptamos ITIN, pasaporte, matrícula consular o licencia extranjera. No necesitas número de seguro social. Solo tu nombre, correo y la información básica de tu vehículo para iniciar la cotización.',
    },
    {
      q: '¿Es seguro compartir mi información personal?',
      a: 'Sí. Tu información es 100% confidencial y está protegida por ley. Solo la usamos para gestionar tu póliza y nunca la compartimos con terceros sin tu consentimiento.',
    },
    {
      q: '¿Qué necesito si es mi primer auto en EE.UU.?',
      a: 'Tres cosas que el dealer generalmente no explica: (1) Si financiaste el carro, el banco exige full coverage — no puedes elegir solo liability. (2) El "minimum coverage" solo cubre daños a otras personas — tu propio carro no queda cubierto. (3) Tu historial de manejo de otro país no se transfiere: empiezas sin historial en EE.UU. y eso sube la prima el primer año. Te ayudamos a elegir la cobertura correcta según tu situación.',
    },
    {
      q: '¿Por qué me subió la prima si no tuve accidentes?',
      a: 'Es el mayor aumento en casi 50 años: 14% en 2023. Los autos modernos tienen sensores y cámaras que cuestan mucho más reparar que antes, los repuestos subieron 30–40% desde 2020, y más accidentes post-pandemia aumentaron los costos generales. No es personal — pero comparar entre aseguradoras es la forma más efectiva de recuperar esa diferencia.',
    },
    {
      q: '¿Qué es "full coverage" y qué cubre realmente?',
      a: '"Full coverage" no es un producto oficial — combina tres coberturas: Liability (protege a otros, obligatoria), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, vandalismo). Lo que NO cubre: fallas mecánicas, tus artículos personales dentro del auto, la diferencia si debes más de lo que vale el carro (Gap Insurance), ni el auto de reemplazo. Muchas familias descubren estos límites en el peor momento.',
    },
    {
      q: '¿Qué pasa si el otro conductor no tiene seguro?',
      a: 'En varios estados más del 15% de los conductores maneja sin seguro. Si te chocan y el culpable no tiene cobertura, puedes quedarte sin cobrar a menos que tengas cobertura UM/UIM (Uninsured/Underinsured Motorist). Es una de las coberturas más importantes y menos conocidas.',
    },
    {
      q: '¿Cuánto cuesta un seguro de auto?',
      a: 'Desde $89/mes para cobertura básica de responsabilidad civil. El estado, el vehículo y el historial de manejo son los factores principales. Comparamos entre múltiples compañías para encontrarte el mejor precio disponible para tu situación.',
    },
    {
      q: '¿Pueden asegurarme si tengo accidentes o infracciones previas?',
      a: 'Sí. Trabajamos con aseguradoras que aceptan conductores con historial de accidentes o infracciones. El precio puede ser mayor, pero encontramos cobertura. Te explicamos exactamente qué opciones tienes según tu historial.',
    },
  ],
  ctaTitle: 'Tu cobertura correcta',
  ctaItalic: 'al precio justo',
  ctaSubtitle: 'Sin revisión de crédito. Comparamos múltiples aseguradoras. Cubrirte hoy es el primer paso — cada año revisamos tu póliza para asegurarnos de que sigues pagando el precio justo.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  heroVideoMobile: '/videos/hero-auto-mobile.mp4',
  schema: {
    description: 'Agente de seguros de auto para familias latinas. Comparamos múltiples aseguradoras para encontrarte la mejor cobertura al precio justo. Atención en español. Desde $89/mes.',
    price: '89',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Independent Agent · Compare Multiple Carriers · No Loyalty Tax',
  heroLine1: 'Car Insurance',
  heroItalic: 'that actually works for you — not for the insurer',
  heroSubtitle: 'Rates just hit a 47-year high — $2,098/year average. Most drivers paid the increase without questioning it. We\'re an independent agent: we compare multiple carriers and find you the best rate. No loyalty to any one insurer.',
  trustBadges: ['Independent agent', 'Multiple carriers compared', 'No loyalty tax', 'Rate review in 5 min'],
  priceFrom: 'From $89/mo',
  eligibilityTitle: 'Which situation sounds like yours?',
  eligibilityText: 'Two very different people need car insurance — and they need completely different advice. We help both.',
  eligibilityItems: [
    'First car: you just bought a vehicle and need to understand what coverage you actually need',
    'Rate shock: your premium went up and nobody explained why',
    'Coverage gaps: you pay for "full coverage" but aren\'t sure what it really covers',
    'Loyalty trap: you\'ve been with the same insurer for years and suspect you\'re overpaying',
    'Life change: new car, new home, new driver — time to review your entire policy',
  ],
  features: [
    {
      icon: TrendUp,
      title: 'Your premium went up. Here\'s why — and what you can do.',
      desc: 'Modern vehicles have sensors that cost $2,800 to repair vs. $300 in 2015. Parts inflation hit 30-40% since 2020. None of this is your fault — but comparing rates can recover most of the increase. Drivers who shop around save an average of $900/year.',
    },
    {
      icon: Warning,
      title: '"Full coverage" is not a legal term. Most drivers learn this after a claim.',
      desc: 'It typically combines Liability, Collision, and Comprehensive. What it rarely covers: mechanical breakdown, personal belongings, the gap between your loan and car\'s value, or rental reimbursement. Most people discover these gaps when they file a claim.',
    },
    {
      icon: ArrowsLeftRight,
      title: 'First car? Here\'s what dealers don\'t tell you.',
      desc: 'State minimum protects others — not you. If you financed, your lender requires full coverage. If you owe more than the car is worth, gap insurance is critical. Most first-time buyers get this wrong. We walk you through exactly what you need before you sign.',
    },
  ],
  coverageItems: [
    'Liability — protects others (required by law — minimum limits are rarely enough)',
    'Collision — your car in accidents (applies after your deductible)',
    'Comprehensive — theft, hail, fire, vandalism (applies after your deductible)',
    'Uninsured/Underinsured Motorist — 15.4% of US drivers have no coverage',
    'Gap Insurance — covers the difference between your loan balance and car\'s value',
    'Rental Reimbursement — almost never included in standard policies by default',
    'Roadside Assistance — often cheaper through your insurer than a standalone plan',
    'MedPay / PIP — your own medical bills regardless of fault',
  ],
  steps: [
    {
      title: 'Tell us your situation — 5 min, no commitment',
      desc: 'First car or rate review. Vehicle info or current policy. No credit check to quote.',
    },
    {
      title: 'We compare multiple carriers at once',
      desc: 'Independent agent — no loyalty to any one insurer. Best coverage, best price for your situation.',
    },
    {
      title: 'You see everything before you commit',
      desc: 'Every coverage, every gap, in plain English. Keep, upgrade, or switch. No pressure. Cards arrive same day.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer K.',
      location: 'Phoenix, Arizona',
      text: 'I\'d been with the same insurer for 9 years. Never compared. Switching saved me $720 a year for identical coverage. I was essentially paying a loyalty tax the entire time.',
    },
    {
      name: 'Michael T.',
      location: 'Tampa, Florida',
      text: 'My rate jumped $52/month with zero claims or changes on my end. They explained every reason — sensor repair costs on my 2022 RAV4 are brutal now — then found me a better rate anyway. First time insurance actually made sense.',
    },
    {
      name: 'Sarah D.',
      location: 'Austin, Texas',
      text: 'Just bought my first car and had no idea what I needed. They walked me through liability vs. full coverage, explained gap insurance since I financed it, and saved me from buying coverage I didn\'t need. Wish I had called first before the dealer confused me.',
    },
  ],
  faq: [
    {
      q: 'Why did my auto insurance rate go up if I had no accidents?',
      a: 'It\'s almost certainly not about you. Modern vehicles have sensors, cameras, and computers that cost $2,800 to repair vs. $300 in 2015. Auto parts inflation hit 30-40% since 2020. Post-pandemic accident rates spiked nationally. And $40 billion in annual insurance fraud gets spread across all policyholders. The 14% average increase in 2023 was the largest in nearly 50 years. The practical fix: comparing rates across carriers can recover most of that increase — drivers who shop around save an average of $900 per year.',
    },
    {
      q: 'What does "full coverage" actually cover — and what doesn\'t it?',
      a: '"Full coverage" is not a legal term or an official product. It typically combines: Liability (required by law — protects others if you cause an accident), Collision (your car when you hit something), and Comprehensive (theft, hail, fire, vandalism). What it almost never includes by default: mechanical breakdown, personal belongings stolen from your car, the gap between your loan balance and car\'s value if it\'s totaled, rental reimbursement while yours is repaired, and roadside assistance. Most drivers discover these gaps when they file a claim.',
    },
    {
      q: 'I just bought my first car. What coverage do I actually need?',
      a: 'Start with these four questions: (1) Did you finance the car? If yes, your lender requires full coverage — liability only won\'t satisfy the loan agreement. (2) How much is the car worth? If it\'s under $10,000, full coverage may cost more than it\'s worth over time. (3) Do you owe more than the car is worth? If yes, gap insurance is critical — otherwise you could owe thousands on a totaled car. (4) What\'s your emergency fund? A higher deductible lowers your premium, but you need to be able to cover it out of pocket.',
    },
    {
      q: 'What is gap insurance and do I need it?',
      a: 'If you financed or leased your car, you likely owe more than it\'s worth — especially in the first 3 years. If it\'s totaled, your insurer pays the current market value. Gap insurance covers the difference between that payout and what you still owe your lender. Without it, you could owe $5,000-$10,000 on a car you no longer have. Dealers offer it at high markups ($500-$800). Your auto insurer typically offers it for $20-$40 per year.',
    },
    {
      q: 'When should I file a claim vs. pay out of pocket?',
      a: 'Filing a claim can raise your premium $300-600 per year for 3 years — potentially $1,800 total. Do the math: if the repair costs less than your deductible plus that 3-year premium increase, pay out of pocket. General rule: file for accidents involving other people, significant injuries, or damages well above your deductible. For minor fender-benders under $1,500, calculate first.',
    },
    {
      q: 'How often should I compare auto insurance rates?',
      a: 'Every 12 months, and whenever you have a major life change: new car, new home, marriage, teen driver added, or any at-fault accident. Insurance companies offer their best prices to new customers — staying loyal without comparing is called the "loyalty tax" and typically costs 10-25% more per year. Drivers who shop regularly save an average of $900/year.',
    },
    {
      q: 'What happens if I\'m hit by an uninsured driver?',
      a: '15.4% of US drivers have no insurance — a record high. In Florida, California, and Texas that number exceeds 20%. If an uninsured driver hits you, your ability to recover damages depends entirely on whether you have UM/UIM (Uninsured/Underinsured Motorist) coverage. Without it, you may recover nothing even when the accident was entirely their fault. UM/UIM is one of the most important and most underused coverages available.',
    },
    {
      q: 'Are my coverage limits actually enough — or just the minimum?',
      a: 'Most states require minimums like $25,000/$50,000 per person/per accident. The problem: a serious multi-person accident can far exceed those limits. If a lawsuit goes above your policy cap, the difference comes from your personal assets: savings, home equity, future wages. If you own a home or have significant assets, higher limits or an umbrella policy are worth a serious conversation with your agent.',
    },
  ],
  ctaTitle: 'See if you\'re',
  ctaItalic: 'overpaying',
  ctaSubtitle: 'Independent review. 5 minutes. Multiple carriers compared. No commitment, no loyalty to any one insurer.',
  ctaButton: 'Review my coverage — free',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  heroVideoMobile: '/videos/hero-auto-mobile.mp4',
  schema: {
    description: 'Independent car insurance agent — compare multiple carriers, understand full coverage, gap insurance, and why your premium went up. Rate review in 5 minutes. From $89/mo.',
    price: '89',
  },
};

export default function AutoPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
