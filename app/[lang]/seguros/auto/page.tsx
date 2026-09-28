'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Car, IdentificationCard, Warning, TrendUp, ArrowsLeftRight, House, Headset } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Auto',
  badgeIcon: Car,
  badge: 'Sin SSN · ITIN · Pasaporte · Matrícula Consular',
  heroLine1: 'Seguro de Auto',
  heroItalic: 'sin SSN — protege a tu familia hoy',
  heroSubtitle: 'La ley exige seguro a todos los conductores en USA, sin importar el estatus migratorio. Si algo pasa manejando sin seguro, la deuda puede perseguirte por años — el costo promedio de un accidente con lesiones es $28,278. No necesitas SSN. Tu información nunca llega al gobierno.',
  trustBadges: ['Sin SSN requerido', 'Desde $89/mes', 'Info 100% confidencial', 'Asesor en español'],
  priceFrom: 'Desde $89/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'Llevamos años ayudando a familias latinas que creían que no podían asegurarse. Manejar sin seguro en Florida, California o Texas — donde 1 de cada 5 conductores tampoco tiene seguro — puede costarte desde una multa de $1,000 hasta responsabilidad personal ilimitada si hay un accidente con heridos.',
  eligibilityItems: [
    'No tengas número de seguro social (SSN) — aceptamos ITIN, pasaporte y matrícula consular',
    'Seas inmigrante recién llegado, tengas DACA o estatus pendiente',
    'Acabas de comprar tu primer auto en EE.UU. y no sabes qué cobertura necesitas',
    'Tu licencia sea extranjera o de otro estado',
    'Tengas accidentes o infracciones previas — trabajamos con aseguradoras que sí aceptan',
  ],
  features: [
    {
      icon: IdentificationCard,
      title: 'Sin SSN — y Más Barato de Lo Que Crees',
      desc: 'Cotizas y contratas con lo que tienes: ITIN, pasaporte, matrícula consular o licencia extranjera. Sin burocracia, sin rechazo por estatus. Dato que pocos conocen: los conductores en vecindarios latinos pagan hasta 30% más por el mismo riesgo según ProPublica. Como agentes independientes, comparamos entre múltiples aseguradoras para que no pagues de más.',
    },
    {
      icon: House,
      title: 'Tu Primer Auto en EE.UU. — Lo Que el Dealer No Te Explicó',
      desc: 'Si financiaste el carro, el banco exige full coverage — no es opcional. El "minimum liability" que ofrece el dealer solo cubre a la otra persona, no a tu auto. Tu historial de manejo de México o Guatemala no se transfiere: en EE.UU. empiezas desde cero y eso sube la prima. Te explicamos exactamente qué necesitas según tu situación — sin que tengas que descubrirlo en un accidente.',
    },
    {
      icon: TrendUp,
      title: '¿Tu Prima Subió? Te Decimos Por Qué y Cómo Bajarla',
      desc: 'Las primas de auto subieron 14% en 2023 — el mayor aumento en 50 años. La razón real: los autos modernos tienen sensores y cámaras que cuestan $2,800 reparar (antes $300). Nadie te lo explica. Nosotros sí. Y como agentes independientes, comparamos múltiples aseguradoras para conseguirte el mejor precio por la misma cobertura. Conductores que cambian ahorran en promedio $400-$900 al año.',
    },
  ],
  coverageItems: [
    'Responsabilidad civil (Liability) — obligatoria por ley, protege a otros',
    'Colisión (Collision) — daños a tu vehículo en accidentes',
    'Daños completos (Comprehensive) — robo, granizo, fuego, vandalismo',
    'Conductor sin seguro (UM/UIM) — el 15.4% de conductores no tiene seguro',
    'Gap Insurance — si financiaste y debes más de lo que vale el auto',
    'Auto de reemplazo mientras te reparan el tuyo',
    'Protección de lesiones personales (PIP/MedPay)',
    'Asistencia en carretera 24/7',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación — sin SSN, sin revisión de crédito',
      desc: 'Información básica sobre tu auto y los documentos que tienes. Gratis, sin compromiso. En español desde el primer momento.',
    },
    {
      title: 'Comparamos entre múltiples aseguradoras',
      desc: 'Como agentes independientes, no trabajamos para una sola compañía. Buscamos la mejor cobertura al menor precio para tu situación específica — con ITIN, pasaporte o matrícula consular.',
    },
    {
      title: 'Tu tarjeta de seguro llega hoy mismo',
      desc: 'En la mayoría de los casos, la tarjeta digital llega por email el mismo día. Puedes manejar legal — y protegido — desde hoy.',
    },
  ],
  testimonials: [
    {
      name: 'Carmen L.',
      location: 'Miami, Florida',
      text: 'Llevaba 2 años manejando sin seguro porque creía que necesitaba SSN. Un accidente menor me hizo entrar en pánico. Me explicaron que solo necesitaba mi ITIN — en 15 minutos tenía mi póliza activa. Ojalá lo hubiera sabido antes.',
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
      q: '¿Puedo tener seguro de auto sin número de seguro social (SSN)?',
      a: 'Sí. No necesitas SSN para contratar seguro de auto en ningún estado de EE.UU. Aceptamos ITIN, pasaporte, matrícula consular o licencia extranjera. Tu estatus migratorio no es un obstáculo — la ley exige seguro a todos los conductores por igual.',
    },
    {
      q: '¿Mi información personal se comparte con ICE o migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin una orden judicial. Lo que compartes con nosotros para contratar tu seguro es estrictamente privado.',
    },
    {
      q: '¿Qué necesito si es mi primer auto en EE.UU.?',
      a: 'Tres cosas que el dealer generalmente no explica: (1) Si financiaste el carro, el banco exige full coverage — no puedes elegir solo liability. (2) El "minimum coverage" solo cubre daños a otras personas — tu propio carro no queda cubierto. (3) Tu historial de manejo de otro país no se transfiere: empiezas sin historial en EE.UU. y eso sube la prima el primer año. Te ayudamos a elegir la cobertura correcta según tu situación sin pagar de más.',
    },
    {
      q: '¿Por qué me subió la prima si no tuve accidentes?',
      a: 'Es el mayor aumento en casi 50 años: 14% en 2023. Las razones reales que las aseguradoras no explican: los autos modernos tienen sensores y cámaras que cuestan $2,800 reparar (antes $300), la inflación de repuestos subió 30-40% desde 2020, y más accidentes post-pandemia aumentaron los costos generales. No es personal. Pero puedes hacer algo: comparar cotizaciones. Conductores que cambian de aseguradora ahorran en promedio $400-$900 al año.',
    },
    {
      q: '¿Qué es "full coverage" y qué cubre realmente?',
      a: '"Full coverage" no es un producto oficial — combina tres coberturas: Liability (protege a otros, obligatoria), Collision (daños a tu auto en accidentes) y Comprehensive (robo, granizo, vandalismo). Lo que NO cubre: fallas mecánicas, tus artículos personales dentro del auto, la diferencia si debes más de lo que vale el carro (Gap Insurance), ni el auto de reemplazo. Muchas familias descubren estos límites en el peor momento.',
    },
    {
      q: '¿Qué pasa si el otro conductor no tiene seguro?',
      a: 'En Florida y California más del 20% de los conductores maneja sin seguro. Si te chocan y el culpable no tiene seguro, puedes quedarte sin cobrar a menos que tengas cobertura UM/UIM (Uninsured/Underinsured Motorist). Esta cobertura adicional es una de las más recomendadas — especialmente donde viven la mayoría de las familias latinas.',
    },
    {
      q: '¿Cuánto cuesta el seguro de auto sin SSN?',
      a: 'Desde $89/mes para cobertura básica de responsabilidad civil. Usar ITIN en vez de SSN no afecta significativamente el precio — el estado, el vehículo y el historial de manejo son los factores principales. Como agentes independientes, comparamos entre múltiples compañías para conseguirte el mejor precio.',
    },
    {
      q: '¿Pueden asegurarme si tengo accidentes o infracciones previas?',
      a: 'Sí. Trabajamos con aseguradoras que aceptan conductores con historial de accidentes o infracciones. El precio puede ser mayor, pero encontramos cobertura. Sin seguro, un accidente puede significar responsabilidad personal ilimitada — el costo promedio de un claim por lesiones es $28,278.',
    },
  ],
  ctaTitle: 'Protege a tu familia',
  ctaItalic: 'desde hoy',
  ctaSubtitle: 'Sin SSN. Sin revisión de crédito. Comparamos entre múltiples aseguradoras para que pagues el precio justo.',
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
  badge: 'Independent Agent · Compare Multiple Carriers · No Loyalty Tax',
  heroLine1: 'Car Insurance',
  heroItalic: 'that actually works for you — not for the insurer',
  heroSubtitle: 'The national average for full coverage is $2,098/year — and rates just hit a 47-year high. Most drivers paid the increase without questioning it. We\'re an independent agent: we compare multiple carriers, explain exactly what you\'re paying for, and find you the best rate for your situation. No loyalty to any one insurer.',
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
      title: 'Your Premium Went Up. Here\'s Every Real Reason — and What To Do.',
      desc: 'Rates are at a 47-year high and rising. The reasons your insurer won\'t explain in plain English: modern vehicles have sensors and cameras that cost $2,800 to repair vs. $300 in 2015; auto parts inflation hit 30-40% since 2020; post-pandemic accident rates spiked; and $40 billion in annual insurance fraud gets distributed across all policyholders. None of this is your fault — but comparing rates can recover most of the increase. Drivers who shop around save an average of $900 per year.',
    },
    {
      icon: Warning,
      title: '"Full Coverage" Is Not a Legal Term. Most Drivers Learn This After a Claim.',
      desc: 'No insurance contract in the US uses the words "full coverage." What people usually mean: Liability (protects others — required by law), Collision (your car in accidents), and Comprehensive (theft, weather, vandalism). What almost no standard policy covers: mechanical breakdown, personal belongings in your car, the gap between your loan balance and your car\'s actual value, rental reimbursement while yours is repaired, or roadside assistance. These gaps cost people thousands every year.',
    },
    {
      icon: ArrowsLeftRight,
      title: 'First Car? Here\'s What Dealers and State DMVs Don\'t Tell You.',
      desc: 'State minimum coverage protects others — not you or your vehicle. If you financed your car, your lender requires full coverage, not just liability. A claim under $1,500 may cost more in future premium increases than paying out of pocket. And if your car is worth less than you owe, gap insurance could save you thousands if it\'s totaled. Most first-time buyers get this wrong. We walk you through exactly what you need — and what you don\'t — before you sign anything.',
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
      title: 'Tell us your situation — 5 minutes, no commitment',
      desc: 'First car or rate review — both work. Current policy details if you have them, or just your vehicle info. No credit check required to get a quote.',
    },
    {
      title: 'We compare across multiple carriers simultaneously',
      desc: 'As an independent agent, we access multiple insurance companies at once — not just one. No loyalty, no hidden agenda. We find the best coverage at the best price for your exact situation.',
    },
    {
      title: 'You see exactly what you\'re getting before you commit',
      desc: 'We break down every coverage, every deductible, every gap in plain language. Keep your current policy, upgrade it, or switch. Your decision, no pressure. Most new cards arrive the same day.',
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
      a: 'Most states require minimums like $25,000/$50,000 (per person/per accident for bodily injury). The problem: the average bodily injury claim is $28,278 — and a serious multi-person accident can exceed $300,000. If a lawsuit exceeds your limits, the difference comes from your personal assets: savings, home equity, future wages. If you own a home or have significant savings, higher limits or an umbrella policy are worth a serious conversation.',
    },
  ],
  ctaTitle: 'See if you\'re',
  ctaItalic: 'overpaying',
  ctaSubtitle: 'Independent review. 5 minutes. Multiple carriers compared. No commitment, no loyalty to any one insurer.',
  ctaButton: 'Review my coverage — free',
  theme: 'blue',
  heroVideo: '/videos/hero-auto.mp4',
  schema: {
    description: 'Independent car insurance agent — compare multiple carriers, understand full coverage, gap insurance, and why your premium went up. Rate review in 5 minutes. From $89/mo.',
    price: '89',
  },
};

export default function AutoPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
