'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Heart, CurrencyDollar, Globe, Lock, Users } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Vida',
  badgeIcon: Heart,
  badge: 'ITIN aceptado · Living Benefits · Desde $15/mes · Beneficiarios en cualquier país',
  heroLine1: 'Seguro de Vida',
  heroItalic: 'casi todos calculan el precio cinco veces más caro de lo que es',
  heroSubtitle: 'Solo el 40% de los latinos en USA tiene seguro de vida, la tasa más baja de cualquier grupo y 11 puntos menos que hace cuatro años (LIMRA 2025). La razón principal no es falta de dinero: el 72% sobrestima el costo real. Una persona sana de 30 años puede tener $500,000 de cobertura por alrededor de $30/mes. Y si te diagnostican algo grave, puedes usar ese dinero mientras sigues vivo.',
  trustBadges: ['ITIN aceptado', 'Desde $15/mes', 'Living Benefits incluidos', 'Beneficiarios en cualquier país'],
  priceFrom: 'Desde $15/mes',
  heroVideo: '/videos/hero-vida.mp4',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'Estas son las situaciones más comunes de personas que cotizaron sin esperarlo y encontraron opciones que no sabían que existían:',
  eligibilityItems: [
    'Creas que está fuera de tu presupuesto (el 72% sobrestima el precio real)',
    'Quieras usar tu ITIN en lugar de SSN',
    'Tus beneficiarios vivan en México, Centroamérica u otro país',
    'No tengas historial de crédito en USA',
    'Tengas condiciones de salud preexistentes (hay planes sin examen)',
    'Nunca hayas tenido seguro de vida y no sepas por dónde empezar',
  ],
  features: [
    {
      icon: Users,
      title: '29% de familias hispanas no cubriría un mes de gastos si falta el ingreso principal',
      desc: 'En 2021, el 51% de los latinos en USA tenía seguro de vida. Hoy es el 40%, la caída más grande en cuatro años (LIMRA 2025). El 72% sobrestima el costo real: una persona sana de 30 años paga alrededor de $30/mes por $500,000 de cobertura. La barrera no es el dinero, es el precio imaginado.',
    },
    {
      icon: CurrencyDollar,
      title: 'El dinero lo usas tú, no solo tu familia después',
      desc: 'Los Living Benefits te permiten acceder a parte del beneficio mientras sigues vivo si te diagnostican una enfermedad crítica (infarto, cáncer, derrame), crónica (incapacidad para actividades básicas) o terminal. No tienes que esperar. Ese dinero paga tratamientos, deudas o los gastos del hogar cuando más se necesita. Es el beneficio que casi nadie explica en español.',
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
      q: '¿Por qué tan pocos latinos tienen seguro de vida?',
      a: 'Solo el 40% de los latinos en USA tiene seguro de vida, la tasa más baja de cualquier grupo étnico (LIMRA 2025). Las razones más comunes: creer que el costo está fuera de su presupuesto, no saber que se puede usar el ITIN, o no tener a alguien que lo explique en español. Los tres obstáculos tienen solución.',
    },
    {
      q: '¿Puedo tener seguro de vida usando mi ITIN?',
      a: 'Sí. No necesitas SSN para contratar seguro de vida en EE.UU. El ITIN es identificación válida para la mayoría de aseguradoras. También aceptamos pasaporte vigente del país de origen como documento adicional.',
    },
    {
      q: '¿Por qué la mayoría cree que el seguro de vida cuesta más de lo que es?',
      a: 'El 72% de las personas sobrestima el costo de una póliza a término (LIMRA 2024). El precio imaginado promedio es cinco veces el precio real. Una persona sana de 30 años paga alrededor de $30/mes por $500,000 de cobertura durante 20 años. La diferencia entre lo que se imagina y lo que cuesta es el motivo principal por el que millones de familias posponen algo que ya podrían tener esta semana.',
    },
    {
      q: '¿Qué son los Living Benefits y cómo funcionan?',
      a: 'Los Living Benefits te permiten acceder a parte del beneficio de tu seguro de vida mientras sigues vivo si te diagnostican: enfermedad terminal (menos de 24 meses de vida), enfermedad crítica (infarto, cáncer, derrame cerebral) o enfermedad crónica (cuando no puedes realizar actividades básicas diarias). El dinero lo usas para lo que necesitas. Lo que se adelanta se descuenta del beneficio final.',
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
      q: '¿Cuánto cuesta el seguro de vida?',
      a: 'Los planes a término comienzan desde $15/mes para personas jóvenes y sanas. Una persona sana de 25 años puede tener $250,000 de cobertura por menos de $16/mes durante 20 años. El precio varía según edad, salud, monto de cobertura y tipo de plan. Lo más importante: el precio que fijas hoy se mantiene fijo toda la vigencia de la póliza.',
    },
  ],
  ctaTitle: 'El respaldo que tu familia',
  ctaItalic: 'necesita hoy',
  ctaSubtitle: 'Living Benefits incluidos. ITIN aceptado. Tu asesora en español te guía. Gratis, sin compromiso.',
  ctaButton: 'Cotizar gratis',
  theme: 'emerald',
  schema: {
    description: 'Seguro de vida para latinos en USA. ITIN aceptado. Living Benefits incluidos. Beneficiarios en cualquier país. Desde $15/mes. Hasta $300,000 sin examen médico en planes calificados.',
    price: '15',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Vida',
  badgeIcon: Heart,
  badge: 'No SSN · Living Benefits · From $15/mo',
  heroLine1: 'Life Insurance',
  heroItalic: 'most people guess the price wrong by 5×',
  heroSubtitle: '102 million Americans know they need life insurance but don\'t have it. The #1 reason: they think it costs 5 times more than it actually does. A healthy 30-year-old pays around $18/month for $250,000 in coverage. No SSN required. And if you\'re ever diagnosed with a serious illness, you can access the money while you\'re still alive.',
  trustBadges: ['No SSN required', 'From $15/mo', 'Living Benefits included', 'Beneficiaries in any country'],
  priceFrom: 'From $15/mo',
  heroVideo: '/videos/hero-vida.mp4',
  eligibilityTitle: 'You can get covered even if...',
  eligibilityText: 'Immigration status doesn\'t matter. The earlier you get covered, the cheaper it is — a healthy 25-year-old pays under $16/month for $250,000 in coverage for 20 years. Waiting until you\'re sick may be too late.',
  eligibilityItems: [
    'You don\'t have a Social Security Number (SSN)',
    'You\'re a recent immigrant, DACA recipient, or have a temporary visa',
    'Your beneficiaries live in Mexico, Central America, or any other country',
    'You have no US credit history',
    'You have pre-existing health conditions (no-exam plans available)',
  ],
  features: [
    {
      icon: Users,
      title: '102 Million Americans Are Uninsured — Most Are Wrong About the Price',
      desc: 'LIMRA research shows the majority of uninsured Americans overestimate the cost of life insurance by 300–500%. A healthy 30-year-old can get $250,000 in coverage for around $18/month. That\'s less than most people spend on takeout in a week. The gap between what people think it costs and what it actually costs is the most expensive mistake they make.',
    },
    {
      icon: CurrencyDollar,
      title: 'Your Work Policy Isn\'t Enough — Here\'s Why',
      desc: 'Group life insurance through your employer typically provides 1–2× your annual salary. Financial planners recommend 10–12×. And when you leave your job, the policy disappears with it. If you build your family\'s financial safety net on a policy you don\'t own, you have no safety net at all.',
    },
    {
      icon: Lock,
      title: 'Lock Your Rate Today — It Never Goes Up',
      desc: 'A healthy 30-year-old can get $250,000 in coverage for under $20/month for 20 years. The rate you lock in today stays fixed for the entire policy — it doesn\'t increase with age or health changes. Wait a year, and you pay more forever. The cost of waiting is real and permanent.',
    },
  ],
  coverageItems: [
    'Death Benefit for your family',
    'Living Benefits — critical illness: heart attack, cancer, stroke',
    'Living Benefits — chronic illness: unable to perform daily activities',
    'Living Benefits — terminal illness: less than 24 months to live',
    'Beneficiaries in any country worldwide',
    'Term Life — most affordable option',
    'Whole Life with cash value accumulation',
    'No medical exam required on many plans',
  ],
  steps: [
    {
      title: 'Fill out the form — no SSN, no medical exam required',
      desc: 'Answer basic questions about your age and health. No SSN required. Many plans approve without a medical exam.',
    },
    {
      title: 'Your agent explains term vs. permanent life insurance',
      desc: 'We break down Term vs. Whole Life in plain language. You choose what fits your budget and your family\'s needs — no pressure.',
    },
    {
      title: 'Policy active in 1–3 business days',
      desc: 'Receive your documents by email and name beneficiaries in any country. Your family is protected this week.',
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
      text: 'My HR plan covered one year of salary — I didn\'t realize that\'s barely enough to cover six months of expenses for my family. My agent helped me understand the real number I needed. Now I\'m actually covered.',
    },
    {
      name: 'David M.',
      location: 'Phoenix, Arizona',
      text: 'The Living Benefits feature was the deciding factor. My uncle had a stroke and couldn\'t work for two years — no life insurance, no living benefits. I wasn\'t going to let that happen to my family.',
    },
  ],
  faq: [
    {
      q: 'How much does life insurance actually cost?',
      a: 'Much less than most people expect. A healthy 30-year-old pays roughly $18–$25/month for $250,000 in term life coverage for 20 years. LIMRA research shows most Americans overestimate the cost by 3–5 times. The actual cost depends on age, health, coverage amount, and term length. The earlier you lock in your rate, the lower it stays permanently.',
    },
    {
      q: 'Is my employer\'s group life insurance enough?',
      a: 'In most cases, no. Employer group policies typically provide 1–2× your annual salary. Financial planners recommend 10–12× to adequately protect your family. More importantly, employer policies aren\'t portable — when you leave your job for any reason, the coverage ends. Building your family\'s financial safety net on a policy you don\'t own creates real risk.',
    },
    {
      q: 'What are Living Benefits and how do they work?',
      a: 'Living Benefits let you access part of your life insurance benefit while still alive if you\'re diagnosed with: a terminal illness (less than 24 months to live), a critical illness (heart attack, cancer, stroke), or a chronic illness (unable to perform basic daily activities on your own). The money is yours to use however you need — treatments, bills, family expenses. Whatever is advanced is deducted from the final death benefit.',
    },
    {
      q: 'Can I get life insurance without an SSN?',
      a: 'Yes. You don\'t need an SSN to get life insurance in the US. We accept ITIN as valid identification. Immigrants, DACA recipients, temporary visa holders, and those with pending status can all get life insurance without an SSN.',
    },
    {
      q: 'Can my family in another country collect the benefit?',
      a: 'Yes. You can name beneficiaries living in Mexico, Guatemala, Honduras, Colombia, or any country in the world. They don\'t need US documents or to live in the US. The money reaches them when they need it.',
    },
    {
      q: 'What\'s the difference between term and whole life insurance?',
      a: 'Term life covers you for a set period (10, 20, or 30 years) and is the most affordable option. Best for protecting your family while kids are growing up or you have significant debt. Whole life lasts your entire lifetime, never expires, and builds cash value you can borrow against. It costs more but has no expiration date.',
    },
    {
      q: 'Do I need a medical exam to apply?',
      a: 'Not always. Many plans are approved without a medical exam — just basic health questions. No-exam plans are especially useful if you have pre-existing conditions. Plans that require exams typically offer lower premiums. Your agent will tell you which option fits your situation.',
    },
  ],
  ctaTitle: 'Lock in your rate',
  ctaItalic: 'before it costs more',
  ctaSubtitle: 'No SSN. Living Benefits included. A bilingual agent guides you — no pressure.',
  ctaButton: 'See my free quote',
  theme: 'emerald',
  schema: {
    description: 'Life insurance for Latino immigrants without SSN in the USA. Accepts ITIN. Living Benefits included. Beneficiaries in any country. From $15/mo. No medical exam on many plans.',
    price: '15',
  },
};

export default function VidaPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} />;
}
