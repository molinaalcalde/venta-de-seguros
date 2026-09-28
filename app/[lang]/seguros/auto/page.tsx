'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Car, IdentificationCard, ShieldCheck, Headset, TrendUp, Warning, ArrowsLeftRight } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Sin SSN · ITIN · Pasaporte · Matrícula Consular',
  heroLine1: 'Seguro de Auto',
  heroItalic: 'deja de manejar sin seguro',
  heroSubtitle: 'La ley exige seguro a TODOS los conductores en USA, sin importar el estatus migratorio. No necesitas SSN. Aceptamos ITIN, pasaporte, matrícula consular y licencia extranjera. Un accidente sin seguro puede costarte $28,000 en promedio. Tu información es 100% confidencial — nunca se comparte con el gobierno.',
  trustBadges: ['Sin SSN requerido', 'Desde $89/mes', 'Info confidencial', 'Asesor en español'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'No importa tu situación migratoria. Manejar sin seguro puede costarte multas de $500 a $5,000, suspensión de licencia y responsabilidad personal ilimitada ante un accidente. Con o sin SSN, te ayudamos a cumplir la ley.',
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
      desc: 'Cotizas y contratas con lo que tienes: ITIN, pasaporte mexicano o centroamericano, matrícula consular o licencia extranjera. Sin burocracia, sin rechazo por estatus. Los conductores en vecindarios latinos pagan hasta 30% más por el mismo riesgo — nosotros te conseguimos el precio justo.',
    },
    {
      icon: Warning,
      title: 'El "Full Coverage" No Es Lo Que Crees',
      desc: '"Full coverage" no es un producto real — es una expresión que combina tres coberturas: Liability (obligatoria, protege a otros si los chocas), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, vandalismo). Lo que NO cubre: fallas mecánicas, tus cosas personales dentro del auto, el auto de reemplazo ni la diferencia si debes más de lo que vale el carro. Te explicamos exactamente qué tienes.',
    },
    {
      icon: TrendUp,
      title: '¿Tu Prima Subió Este Año? Te Explicamos Por Qué',
      desc: 'Las primas de seguro de auto subieron 14% en 2023 — el mayor aumento en casi 50 años. Las razones reales: los autos modernos tienen sensores y cámaras que cuestan $2,800 reparar (antes costaban $300), la inflación de repuestos, y más accidentes post-pandemia. Nadie te lo explica. Nosotros sí. Y como agentes independientes, comparamos entre múltiples aseguradoras para que no pagues de más.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil (Liability) — obligatoria por ley en todos los estados',
    'Colisión (Collision) — daños a tu vehículo en accidentes',
    'Daños completos (Comprehensive) — robo, granizo, fuego, vandalismo',
    'Conductor sin seguro (UM/UIM) — el 15.4% de conductores no tiene seguro',
    'Gap Insurance — si debes más de lo que vale tu carro',
    'Protección de lesiones personales (PIP/MedPay)',
    'Auto de reemplazo mientras te reparan el tuyo',
    'Asistencia en carretera 24/7',
  ],
  steps: [
    {
      title: 'Cuéntanos sobre tu vehículo y situación',
      desc: 'Sin SSN, sin revisión de crédito. Solo información básica sobre tu auto y documentos disponibles. Gratis, sin compromiso.',
    },
    {
      title: 'Tu asesora en español compara opciones reales',
      desc: 'Como agentes independientes, accedemos a múltiples aseguradoras. Te explicamos la diferencia entre liability, collision y comprehensive sin tecnicismos. Tú eliges según tu presupuesto — sin presiones.',
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
      text: 'Mi seguro subió $45 al mes sin razón aparente. Me explicaron por qué — los costos de reparación subieron mucho — y me encontraron una aseguradora más barata con la misma cobertura. Ahorré más de $600 al año.',
    },
  ],
  faq: [
    {
      q: '¿Puedo tener seguro de auto sin número de seguro social (SSN)?',
      a: 'Sí. No necesitas SSN para contratar seguro de auto en ningún estado de EE.UU. Aceptamos ITIN, pasaporte, matrícula consular o licencia extranjera como identificación válida. Tu estatus migratorio no es un obstáculo — la ley exige seguro a todos los conductores por igual.',
    },
    {
      q: '¿Mi información personal se comparte con ICE o migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE, la migra ni ninguna agencia gubernamental sin una orden judicial. Cumplimos con todas las leyes estatales de privacidad de seguros. Lo que compartes con nosotros para contratar tu seguro es estrictamente privado.',
    },
    {
      q: '¿Por qué me subió la prima si no tuve accidentes?',
      a: 'Es el aumento más grande en casi 50 años: 14% en 2023. Las razones reales que las aseguradoras no explican: los autos modernos tienen sensores y cámaras que pueden costar $2,800 reparar (antes $300), la inflación de repuestos subió 30-40% desde 2020, y más accidentes post-pandemia incrementaron los costos generales. No es personal — pero puedes hacer algo: comparar cotizaciones. Conductores que cambian de aseguradora ahorran en promedio $400-$900 al año.',
    },
    {
      q: '¿Qué es "full coverage" y qué cubre realmente?',
      a: '"Full coverage" no es un producto oficial — es una expresión que en la práctica significa combinar tres coberturas: Liability (protege a otros si los chocas, obligatoria por ley), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, incendio, vandalismo). Lo que NO cubre: fallas mecánicas, tus artículos personales dentro del auto, la diferencia si debes más de lo que vale el carro (necesitas Gap Insurance), ni el auto de reemplazo (necesitas Rental Reimbursement por separado).',
    },
    {
      q: '¿Qué pasa si el otro conductor no tiene seguro?',
      a: 'El 15.4% de los conductores en EE.UU. maneja sin seguro — el nivel más alto registrado. Si te chocan y el culpable no tiene seguro, puedes quedarte sin cobrar a menos que tengas cobertura UM/UIM (Uninsured/Underinsured Motorist). Esta cobertura adicional es una de las más recomendadas — especialmente en estados como Florida, California y Michigan donde más del 20% conduce sin seguro.',
    },
    {
      q: '¿Cuánto cuesta el seguro de auto sin SSN?',
      a: 'El seguro de auto comienza desde $89/mes para cobertura básica de responsabilidad civil. Usar ITIN en vez de SSN no afecta significativamente el precio. El estado, el vehículo y el historial de manejo son los principales factores. Como agentes independientes, comparamos entre múltiples aseguradoras — conductores que cambian ahorran en promedio $400-$900 al año.',
    },
    {
      q: '¿Aceptan licencia extranjera o matrícula consular?',
      a: 'Sí. Aceptamos licencias extranjeras (México, Guatemala, El Salvador, Colombia y otros países) y matrículas consulares como identificación para contratar. Los requisitos específicos varían por estado — te confirmamos qué documentos aplican en tu caso.',
    },
    {
      q: '¿Puedo contratar seguro si tengo accidentes previos o infracciones?',
      a: 'Sí. Trabajamos con aseguradoras que aceptan conductores con historial de accidentes o infracciones. El precio puede ser mayor, pero te conseguimos cobertura. Sin seguro, un accidente puede significar responsabilidad personal ilimitada — el costo promedio de un claim por lesiones es $28,278.',
    },
  ],
  ctaTitle: 'Maneja tranquilo',
  ctaItalic: 'desde hoy mismo',
  ctaSubtitle: 'Sin SSN. Sin revisión de crédito. Tu asesora en español compara múltiples aseguradoras para darte el mejor precio.',
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
  badge: 'Independent Agent · No Loyalty Tax · Rate Review in 5 Min',
  heroLine1: 'Car Insurance',
  heroItalic: 'that actually explains what you\'re paying for',
  heroSubtitle: 'Auto insurance rates rose 14% in 2023 — the biggest jump in nearly 50 years. Most drivers just paid the new bill. We think you deserve to know exactly why it happened, whether you\'re overpaying, and what you can actually do about it. Independent agent. No loyalty to any one insurer.',
  trustBadges: ['Independent agent', 'Rate review in 5 min', 'No loyalty to one insurer', 'Real human support'],
  priceFrom: 'From $89/mo',
  eligibilityTitle: 'Signs you might be overpaying right now',
  eligibilityText: 'Insurance companies raise rates quietly and rarely explain why. The average driver overpays $400–$900 per year simply by never comparing rates. As an independent agent, we work for you — not for any single insurer.',
  eligibilityItems: [
    'You haven\'t compared rates in the past 12 months',
    'Your premium went up even though you had zero accidents or claims',
    'You\'re not sure what your deductible actually is',
    'You have a car loan but don\'t know if you have gap coverage',
    'You pay for "full coverage" but couldn\'t explain what it covers if asked',
  ],
  features: [
    {
      icon: TrendUp,
      title: 'Your Premium Went Up. Here\'s the Real Reason.',
      desc: 'Repair costs for modern vehicles jumped dramatically — sensors, cameras, and onboard computers that cost $300 to replace in 2015 now cost $2,800. Add post-pandemic accident spikes, auto parts inflation (+30-40% since 2020), and $40 billion in annual insurance fraud spread across all policyholders. Your insurer raised your rate and sent a one-line notice. We\'ll explain every factor — and then find you a better price.',
    },
    {
      icon: Warning,
      title: '"Full Coverage" Is Not a Legal Term. Most Drivers Learn This the Hard Way.',
      desc: 'No insurance contract in the US uses the words "full coverage." What people usually mean: Liability (protects others, required by law), Collision (your car in accidents), and Comprehensive (theft, weather, vandalism). What almost no "full coverage" policy includes by default: gap insurance, mechanical breakdown, personal belongings inside your car, rental reimbursement while yours is repaired, or roadside assistance. Most drivers find out what\'s missing when they file a claim.',
    },
    {
      icon: ArrowsLeftRight,
      title: 'Your Loyalty to Your Insurer Is Not Rewarded. Switching Often Is.',
      desc: 'Insurance companies offer their best prices to new customers — not to drivers who\'ve stayed for 5 years. That\'s the loyalty tax: you pay more for being consistent. Drivers who compare rates save an average of $900 per year for identical coverage (GEICO/Progressive data). As an independent agent, we access multiple carriers simultaneously and work for you — not for any one company.',
    },
  ],
  coverageItems: [
    'Liability — protects others (required by law — check if your limits are enough)',
    'Collision — your car in accidents (subject to your deductible)',
    'Comprehensive — theft, hail, fire, vandalism (subject to deductible)',
    'Uninsured/Underinsured Motorist — 15.4% of drivers have no insurance',
    'Gap Insurance — if you owe more than your car is currently worth',
    'Rental Reimbursement — usually NOT included in standard full coverage',
    'Roadside Assistance — often cheaper through your insurer than a separate plan',
    'MedPay / PIP — your own medical bills after an accident',
  ],
  steps: [
    {
      title: 'Tell us about your current policy',
      desc: 'Five minutes. What you\'re currently paying, what coverage you have. No commitment, no credit check.',
    },
    {
      title: 'We compare your coverage against the market',
      desc: 'As an independent agent, we access multiple carriers at once. No loyalty to one insurer. No hidden agenda. We find what\'s available for your exact situation.',
    },
    {
      title: 'You see exactly what you\'re getting — and what you could save',
      desc: 'Keep your current coverage, upgrade it, or switch. Your choice, no pressure. In most cases, your new card arrives the same day.',
    },
  ],
  testimonials: [
    {
      name: 'Jennifer K.',
      location: 'Phoenix, Arizona',
      text: 'I\'d been with the same insurer for 8 years and never thought to look around. Switching saved me $720 a year for identical coverage. I wish I\'d done it sooner.',
    },
    {
      name: 'Michael T.',
      location: 'Tampa, Florida',
      text: 'My rate went up $40/month with zero claims. They actually explained why — repair costs for my 2022 RAV4 are brutal now. Then they found me a better rate anyway. First time an insurance agent actually made sense to me.',
    },
    {
      name: 'David R.',
      location: 'Dallas, Texas',
      text: 'I thought I had full coverage until a hailstorm hit. Turns out my deductible was $2,000 and I had no rental coverage — I had no idea. Now I actually understand my policy for the first time.',
    },
  ],
  faq: [
    {
      q: 'Why did my auto insurance rate go up if I had no accidents?',
      a: 'Your rate going up has almost nothing to do with your personal driving history. The real drivers: modern vehicles have sensors, cameras, and computers that cost $2,800 to repair vs. $300 in 2015; auto parts inflation rose 30-40% since 2020; post-pandemic accident rates spiked; and $40 billion in annual insurance fraud gets distributed across all policyholders. The 14% average increase in 2023 was the largest in nearly 50 years. The good news: comparing rates across insurers can recover most of that increase.',
    },
    {
      q: 'What does "full coverage" actually cover — and what doesn\'t it?',
      a: '"Full coverage" is not a legal term. It typically means three things combined: Liability (protects others if you cause an accident — required by law), Collision (your car when you hit something), and Comprehensive (theft, hail, fire, vandalism). What it almost never includes: mechanical breakdown, personal belongings stolen from your car, the gap between what you owe on a car loan and what the car is worth, rental car reimbursement while yours is repaired, or roadside assistance. These are usually separate add-ons.',
    },
    {
      q: 'What is gap insurance and do I need it?',
      a: 'If you financed or leased your car, you likely owe more than it\'s currently worth — especially in the first 3 years. If your car is totaled, your insurer pays its current market value. Gap insurance covers the difference between that payout and what you still owe your lender. Without it, you could owe thousands on a car you no longer have. Most dealers offer it at high markups; your auto insurer typically offers it much cheaper.',
    },
    {
      q: 'When should I file a claim vs. pay out of pocket?',
      a: 'Filing a claim can raise your premium by $300-600 per year for 3 years — potentially $1,800 total. If your repair costs less than your deductible plus that 3-year premium increase, it\'s usually better to pay out of pocket. General rule: file claims for accidents involving other people or damages significantly above your deductible. For minor fender-benders under $1,500, calculate the math first.',
    },
    {
      q: 'How often should I compare auto insurance rates?',
      a: 'Every 12 months, and any time you have a major life change: new car, new home, marriage, or adding a driver. Insurers use your loyalty against you — they offer better deals to attract new customers. Drivers who compare rates regularly save an average of $900 per year for identical coverage. It takes about 5 minutes.',
    },
    {
      q: 'What happens if I\'m hit by an uninsured driver?',
      a: '15.4% of US drivers are currently uninsured — a record high. In states like Florida, California, and Michigan, that number exceeds 20%. If an uninsured driver hits you, your ability to recover damages depends entirely on whether you have Uninsured/Underinsured Motorist (UM/UIM) coverage. Without it, you may receive nothing even if the accident was entirely their fault. UM/UIM is one of the most important and underused coverages available.',
    },
    {
      q: 'Does "full coverage" include a rental car while mine is being repaired?',
      a: 'Usually no. Rental reimbursement is typically a separate add-on, often costing $5-10 per month. Without it, you pay out of pocket for a rental while your car is in the shop — which can run $45-80 per day. After an accident, repairs can take 10-14 days. That\'s $500-$1,100 in rental costs most people didn\'t plan for.',
    },
    {
      q: 'How do I know if my liability limits are actually enough?',
      a: 'Most states require minimum liability limits of $25,000/$50,000 (per person/per accident). But the average bodily injury claim is $28,278 — and a serious accident with multiple injuries can exceed $300,000. If a lawsuit exceeds your limits, the difference comes from your personal assets: savings, home equity, future wages. If you have assets worth protecting, higher limits or an umbrella policy are worth considering.',
    },
  ],
  ctaTitle: 'See if you\'re',
  ctaItalic: 'overpaying',
  ctaSubtitle: 'Independent review. 5 minutes. No commitment. No loyalty to any one insurer.',
  ctaButton: 'Review my coverage — free',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  schema: {
    description: 'Car insurance review and comparison for US drivers. Independent agent — no loyalty to one insurer. Rate review in 5 minutes. Understand your full coverage, gap insurance, and why your premium went up. From $89/mo.',
    price: '89',
  },
};

export default function AutoPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
