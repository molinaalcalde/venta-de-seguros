'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Heart, CurrencyDollar, Globe, Lock, Users } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Vida',
  badgeIcon: Heart,
  badge: 'ITIN aceptado · Beneficios en vida disponibles · Beneficiarios en cualquier país',
  heroLine1: 'Seguro de Vida',
  heroItalic: 'protege hoy el futuro de quienes más quieres',
  heroSubtitle: 'Un seguro de vida puede ayudar a tu familia a afrontar gastos, deudas y compromisos económicos si llegas a faltar. Te orientamos para elegir entre opciones temporales y permanentes, según tus necesidades y presupuesto.',
  trustBadges: ['ITIN aceptado', 'Opciones sin examen médico', 'Beneficios en vida en ciertos planes', 'Beneficiarios en cualquier país'],
  priceFrom: '',
  heroVideo: '/videos/hero-vida.mp4',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'Estas son las situaciones más comunes de personas que cotizaron sin esperarlo y encontraron opciones que no sabían que existían:',
  eligibilityItems: [
    'Creas que está fuera de tu presupuesto',
    'Quieras usar tu ITIN en lugar de SSN',
    'Tus beneficiarios vivan en México, Centroamérica u otro país',
    'No tengas historial de crédito en USA',
    'Tengas condiciones de salud preexistentes (hay planes sin examen)',
    'Nunca hayas tenido seguro de vida y no sepas por dónde empezar',
  ],
  features: [
    {
      icon: Users,
      title: 'Una decisión que puede marcar la diferencia para tu familia',
      desc: 'Si falta el ingreso principal, muchas familias no cubren ni un mes de gastos. Un seguro de vida puede ayudar a cubrir hipotecas, deudas y gastos del hogar. Te orientamos para encontrar una opción que se ajuste a tu presupuesto.',
    },
    {
      icon: CurrencyDollar,
      title: 'Beneficios en vida, disponibles en ciertos planes',
      desc: 'Algunos planes incluyen beneficios en vida que permiten acceder a parte del beneficio si te diagnostican una enfermedad crítica, crónica o terminal. El acceso y las condiciones dependen del plan y la aseguradora. Te explicamos las opciones disponibles en español.',
    },
    {
      icon: Lock,
      title: 'El precio que fijas hoy no sube, nunca',
      desc: 'Una persona sana de 30 años puede tener $250,000 de cobertura por menos de $20/mes durante 20 años. El precio que fijas al contratar se mantiene toda la vigencia de la póliza, sin importar cuántos años pasen o si tu salud cambia. Esperas un año: pagas más para siempre. La diferencia entre cotizar hoy y hacerlo en cinco años puede ser $50 al mes durante dos décadas.',
    },
  ],
  coverageItems: [
    'Beneficio por fallecimiento (Death Benefit) para tu familia',
    'Living Benefits: enfermedad crítica (infarto, cáncer, derrame)',
    'Living Benefits: enfermedad crónica (incapacidad para actividades diarias)',
    'Living Benefits: enfermedad terminal (menos de 24 meses de vida)',
    'Beneficiarios en cualquier país del mundo',
    'Vida a término (Term Life): la opción más económica',
    'Vida permanente con valor en efectivo (Whole Life)',
    'Hasta $300,000 sin examen médico en planes calificados',
  ],
  steps: [
    {
      title: 'Cuéntanos tu situación, sin presiones',
      desc: 'ITIN aceptado. Muchos planes aprueban sin examen médico, solo preguntas básicas sobre edad y salud. Gratis y sin compromiso.',
    },
    {
      title: 'Te explicamos término vs permanente en palabras simples',
      desc: 'La diferencia entre Vida a Término y Vida Permanente según tu presupuesto y las necesidades reales de tu familia. Sin jerga, sin apuro.',
    },
    {
      title: 'Póliza activa en 1 a 3 días hábiles',
      desc: 'Recibes tu documentación por email y puedes designar beneficiarios en cualquier país. Tu familia queda protegida esta semana.',
    },
  ],
  testimonials: [
    {
      name: 'Rosa M.',
      location: 'Houston, Texas',
      text: 'Nunca pensé que podía tener cobertura aquí. En minutos tenía cotización con mi ITIN. Lo mejor: designé a mi mamá en México como beneficiaria. No sabía que eso era posible.',
    },
    {
      name: 'Jorge L.',
      location: 'Chicago, Illinois',
      text: 'Los Living Benefits me convencieron. No solo protejo a mi familia si me pasa algo, si me diagnostican algo grave puedo usar el dinero para el tratamiento. Eso vale mucho cuando no tienes familia aquí.',
    },
    {
      name: 'Carmen G.',
      location: 'Dallas, Texas',
      text: 'Me explicaron en español la diferencia entre término y permanente, y por qué a mi edad convenía el término. Sin presiones, sin apuro. Contraté ese mismo día algo que hacía años debería haber tenido.',
    },
  ],
  faq: [
    {
      q: '¿Por qué muchas personas no tienen seguro de vida?',
      a: 'Las razones más comunes: creer que el costo está fuera de su presupuesto, no saber qué opciones existen, o no tener a alguien que lo explique en español. Te ayudamos a explorar alternativas según tu situación.',
    },
    {
      q: '¿Puedo tener seguro de vida usando mi ITIN?',
      a: 'Sí. No necesitas SSN para contratar seguro de vida en EE.UU. El ITIN es identificación válida para la mayoría de aseguradoras. También aceptamos pasaporte vigente del país de origen como documento adicional.',
    },
    {
      q: '¿Cuánto cuesta realmente un seguro de vida?',
      a: 'El costo varía según tu edad, salud, monto de cobertura y tipo de plan. Muchas personas sobrestiman el precio real. Te damos una cotización personalizada para que compares opciones con información real.',
    },
    {
      q: '¿Qué son los beneficios en vida y cómo funcionan?',
      a: 'Algunos planes de seguro de vida incluyen beneficios en vida que permiten acceder a parte del beneficio si te diagnostican una enfermedad terminal, crítica o crónica. El acceso, las condiciones y los montos dependen del plan y la aseguradora. Lo que se adelanta se descuenta del beneficio final. Te explicamos las opciones disponibles.',
    },
    {
      q: '¿Mi familia en otro país puede cobrar el seguro?',
      a: 'Sí. Puedes designar beneficiarios que vivan en México, Guatemala, Honduras, Colombia o cualquier país del mundo. No necesitan documentos americanos ni vivir en USA. El dinero les llega a ellos cuando lo necesitan.',
    },
    {
      q: '¿Cuál es la diferencia entre seguro a término y permanente?',
      a: 'El seguro a término (Term Life) cubre por un período definido (10, 20 o 30 años) y es el más económico. Ideal para proteger a tu familia mientras los hijos crecen o tienes deudas importantes. El seguro permanente (Whole Life) dura toda tu vida, no vence y acumula valor en efectivo que puedes usar como préstamo. Cuesta más pero no tiene fecha de vencimiento.',
    },
    {
      q: '¿Necesito examen médico para contratar?',
      a: 'No siempre. Muchos planes aprueban hasta $300,000 de cobertura sin examen médico, solo con un cuestionario de salud básico. Los planes sin examen son especialmente útiles si tienes condiciones preexistentes o no tienes historial médico en USA. Los planes con examen ofrecen primas más bajas si tienes buena salud.',
    },
    {
      q: '¿El precio del seguro de vida puede cambiar después de contratarlo?',
      a: 'En los planes a término, el precio que fijas al contratar se mantiene durante toda la vigencia de la póliza. En los planes permanentes, el precio también se mantiene estable. El costo final depende de tu edad, salud y el tipo de plan que elijas.',
    },
  ],
  ctaTitle: 'El respaldo que tu familia',
  ctaItalic: 'necesita hoy',
  ctaSubtitle: 'Beneficios en vida disponibles en ciertos planes. ITIN aceptado. Tu asesora en español te guía. Gratis, sin compromiso.',
  ctaButton: 'Cotizar gratis',
  theme: 'emerald',
  schema: {
    description: 'Seguro de vida en USA. ITIN aceptado. Beneficios en vida disponibles en ciertos planes. Beneficiarios en cualquier país. Opciones sin examen médico en planes calificados.',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Vida',
  badgeIcon: Heart,
  badge: 'Independent Agent · Living Benefits · From $15/mo · 10+ carriers',
  heroLine1: 'Life Insurance',
  heroItalic: 'most people guess the price wrong — by 10 times',
  heroSubtitle: '102 million Americans know they need more life insurance but don\'t have it — the largest coverage gap on record (LIMRA 2024). The #1 reason: most people overestimate what it costs by 3 to 10 times. A healthy 30-year-old pays around $18/month for $250,000 in 20-year coverage. And if you\'re ever diagnosed with something serious, you can access that money while you\'re still alive.',
  trustBadges: ['10+ carriers compared', 'From $15/mo', 'Living Benefits included', 'Free, no commitment'],
  priceFrom: 'From $15/mo',
  heroVideo: '/videos/hero-vida.mp4',
  eligibilityTitle: 'You can get covered even if...',
  eligibilityText: 'These are the most common situations we see — most people are surprised by how straightforward coverage actually is:',
  eligibilityItems: [
    'You think it costs way more than you can afford (most people overestimate by 10x)',
    'You\'re counting on your employer\'s group life policy as your main coverage',
    'Your beneficiaries live outside the US',
    'You have pre-existing health conditions (no-exam plans available)',
    'You\'ve been putting it off because the options feel overwhelming',
  ],
  features: [
    {
      icon: Users,
      title: 'Only 1 in 10 Americans guesses the cost correctly',
      desc: 'Adults under 30 overestimate the cost of life insurance by 10 to 12 times (LIMRA 2025). More than half base their estimate on a random guess. A healthy 30-year-old pays around $18/month for $250,000 in 20-year coverage — less than most people spend on a single dinner out. The gap between what people think it costs and what it actually costs is the #1 reason 102 million Americans are underinsured (LIMRA 2024).',
    },
    {
      icon: CurrencyDollar,
      title: 'Your employer\'s policy covers 2x your salary. Most families need 10x.',
      desc: 'Group life through work typically provides 1–2× your annual salary. Financial planners recommend 10–12× to cover what your family actually needs: income replacement, mortgage, debt, childcare, and college. More importantly, that policy is not yours. When you leave your job — voluntarily or not — the coverage disappears. Building your family\'s financial safety net on something you don\'t own creates real risk.',
    },
    {
      icon: Lock,
      title: 'You survive the diagnosis. The bills don\'t stop.',
      desc: 'Living Benefits let you access part of your policy\'s death benefit while you\'re still alive if you\'re diagnosed with a terminal illness (under 24 months to live), a critical illness (heart attack, cancer, stroke), or a chronic illness (unable to perform basic daily activities). A heart attack at 52 shouldn\'t also be a financial crisis. What\'s advanced is deducted from the final death benefit. The rate you lock in today also never increases — not with age, not with health changes.',
    },
  ],
  coverageItems: [
    'Death Benefit for your family',
    'Living Benefits: critical illness (heart attack, cancer, stroke)',
    'Living Benefits: chronic illness (unable to perform daily activities)',
    'Living Benefits: terminal illness (less than 24 months to live)',
    'Rate locked at application — never increases with age or health changes',
    'Beneficiaries in any country worldwide',
    'Term Life: most affordable option',
    'Whole Life with cash value accumulation',
    'Up to $300,000 with no medical exam on qualifying plans',
  ],
  steps: [
    {
      title: 'Tell us about yourself — 5 minutes',
      desc: 'Basic questions about your age and health. No medical exam required on many plans.',
    },
    {
      title: 'We explain term vs. permanent in plain language',
      desc: 'We break down Term vs. Whole Life based on your budget and your family\'s actual needs. No pressure, no jargon.',
    },
    {
      title: 'Policy active in 1–3 business days',
      desc: 'Documents arrive by email. Name beneficiaries in any country. Your family is protected this week.',
    },
  ],
  testimonials: [
    {
      name: 'Michael R.',
      location: 'Austin, Texas',
      text: 'I kept putting it off because I assumed it would be $100+ a month. Turns out I was paying more for my gym membership. Got $500K in coverage for $31/month. Should have done it years ago.',
    },
    {
      name: 'Jessica L.',
      location: 'Atlanta, Georgia',
      text: 'My HR plan covered one year of salary. I didn\'t realize that\'s barely enough to cover six months of real expenses for my family. My agent helped me understand the actual number I needed. Now I\'m actually covered.',
    },
    {
      name: 'David M.',
      location: 'Phoenix, Arizona',
      text: 'The Living Benefits were the deciding factor. My uncle had a stroke and couldn\'t work for two years — no life insurance, no living benefits, nothing. I wasn\'t going to let that happen to my family.',
    },
  ],
  faq: [
    {
      q: 'How much does life insurance actually cost?',
      a: 'Much less than most people expect. A healthy 30-year-old pays roughly $18–$25/month for $250,000 in term coverage for 20 years. Adults under 30 overestimate the cost by 10 to 12 times on average (LIMRA 2025). The actual cost depends on age, health, coverage amount, and term length. The rate you lock in today stays fixed for the entire policy — it never increases.',
    },
    {
      q: 'Is my employer\'s group life insurance enough?',
      a: 'In most cases, no. Employer group policies typically provide 1–2× your annual salary. Financial planners recommend 10–12× to cover income replacement, mortgage, debt, and childcare. For someone earning $70,000, that\'s a potential gap of $560,000 or more. Employer policies are also not portable — when you leave your job for any reason, the coverage ends.',
    },
    {
      q: 'How much life insurance do I actually need?',
      a: 'A common starting point: 10–12 times your annual income. A more precise method is DIME: add up your Debt (mortgage, car loans, credit cards), Income replacement (salary x years until retirement), Mortgage balance, and Education costs for your children. For someone earning $70,000, that typically means $700,000–$840,000 in coverage — far more than most employer policies provide. We help you run the numbers at no cost.',
    },
    {
      q: 'What are Living Benefits and how do they work?',
      a: 'Living Benefits let you access part of your life insurance benefit while you\'re still alive if you\'re diagnosed with a terminal illness (under 24 months to live), a critical illness (heart attack, cancer, stroke), or a chronic illness (unable to perform basic daily activities). The money is yours to use however you need. Whatever is advanced is deducted from the final death benefit.',
    },
    {
      q: 'What\'s the difference between term and whole life insurance?',
      a: 'Term life covers you for a set period (10, 20, or 30 years) and is the most affordable option — best for protecting your family while kids are growing up or you carry significant debt. Whole life lasts your entire lifetime, never expires, and builds cash value you can borrow against. It costs more but has no expiration date and serves as a long-term financial asset.',
    },
    {
      q: 'Why use an independent agent instead of buying directly online?',
      a: 'Digital platforms work well for straightforward cases — but they use algorithms, not judgment. If you have a pre-existing condition, work a high-risk job, need over $1M in coverage, or want Living Benefits riders, an independent agent shops 10+ carriers and navigates underwriting to find who approves you at the best rate. We also do annual reviews — something no digital platform offers. And when a claim happens, you have someone in your corner. Haven Life, one of the largest digital-only platforms, closed to new applicants in January 2024.',
    },
    {
      q: 'Can my family in another country collect the benefit?',
      a: 'Yes. You can name beneficiaries living in Mexico, Guatemala, Honduras, Colombia, or any country in the world. They don\'t need US documents or to live in the US. The benefit reaches them when they need it.',
    },
    {
      q: 'Do I need a medical exam to apply?',
      a: 'Not always. Many plans cover up to $300,000 without a medical exam — just a health questionnaire. No-exam plans are especially useful if you have pre-existing conditions or no US medical history. Plans that require an exam typically offer lower premiums if you\'re in good health. We\'ll tell you which path makes the most sense for your situation.',
    },
  ],
  ctaTitle: 'Lock in your rate',
  ctaItalic: 'before it costs more',
  ctaSubtitle: 'Independent agent. 10+ carriers compared. Living Benefits included. Free, no pressure.',
  ctaButton: 'Get a free quote',
  theme: 'emerald',
  schema: {
    description: 'Life insurance from an independent agent. Living Benefits included. Beneficiaries in any country. From $15/mo. Up to $300,000 with no medical exam on qualifying plans.',
    price: '15',
  },
};

export default function VidaPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} lang={params.lang} />;
}
