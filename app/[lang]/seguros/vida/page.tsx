'use client';
import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';
import { Heart, CurrencyDollar, Globe, Lock } from '@phosphor-icons/react';

const configEs: InsurancePageConfig = {
  quoteType: 'Vida',
  badgeIcon: Heart,
  badge: 'Sin SSN · Living Benefits · Desde $15/mes',
  heroLine1: 'Seguro de Vida',
  heroItalic: 'el dinero lo usas vivo — no solo tu familia',
  heroSubtitle: 'En 2024, los latinos enviaron $161 mil millones a sus familias en América Latina. Si algo te pasa, ese ingreso desaparece. Tu mamá en México, tus hijos en Guatemala — no reciben nada. Desde $15/mes y sin SSN, tu familia queda protegida aunque no estés. Y si te diagnostican algo grave, puedes usar el dinero mientras sigues vivo.',
  trustBadges: ['Sin SSN requerido', 'Desde $15/mes', 'Living Benefits incluidos', 'Beneficiarios en cualquier país'],
  priceFrom: 'Desde $15/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'No importa tu estatus migratorio. Cuanto antes lo haces, más barato — una persona sana de 25 años paga menos de $16/mes por $250,000 de cobertura durante 20 años. Si esperas a estar enfermo, puede ser tarde.',
  eligibilityItems: [
    'No tengas número de seguro social (SSN)',
    'Seas inmigrante reciente, con DACA o visa temporal',
    'Tus beneficiarios vivan en México, Centroamérica u otro país',
    'No tengas historial de crédito en USA',
    'Tengas condiciones de salud preexistentes (hay planes sin examen)',
  ],
  features: [
    {
      icon: CurrencyDollar,
      title: 'Living Benefits — El Dinero lo Usas Tú, No Solo tu Familia',
      desc: 'Si te diagnostican una enfermedad crítica (infarto, cáncer, derrame), crónica (no puedes hacer actividades básicas solo) o terminal (menos de 24 meses de vida), puedes acceder a parte del beneficio MIENTRAS SIGUES VIVO. No tienes que morir para que tu familia lo use. Ese dinero paga tratamientos, deudas o lo que necesites.',
    },
    {
      icon: Globe,
      title: 'Tu Mamá en México Puede Ser Tu Beneficiaria',
      desc: 'Puedes designar a cualquier familiar en cualquier parte del mundo como beneficiario — tu mamá en México, tus hijos en Guatemala, tu pareja en Colombia. No es necesario que vivan en USA ni que tengan documentos americanos. El dinero les llega a ellos cuando más lo necesitan.',
    },
    {
      icon: Lock,
      title: 'Desde $15/mes — El Precio Que Fijas Hoy No Sube',
      desc: 'Una persona sana de 30 años puede tener $250,000 de cobertura por menos de $20/mes durante 20 años. El precio que fijas al contratar se mantiene toda la vigencia de la póliza — no sube con tu edad ni con cambios en tu salud. Esperas un año: pagas más para siempre.',
    },
  ],
  coverageItems: [
    'Beneficio por fallecimiento (Death Benefit) para tu familia',
    'Living Benefits — enfermedad crítica: infarto, cáncer, derrame',
    'Living Benefits — enfermedad crónica: incapacidad para actividades diarias',
    'Living Benefits — enfermedad terminal: menos de 24 meses de vida',
    'Beneficiarios en cualquier país del mundo',
    'Vida a término (Term Life) — la opción más económica',
    'Vida permanente con valor en efectivo (Whole Life)',
    'Sin examen médico en muchos planes',
  ],
  steps: [
    {
      title: 'Completa el formulario — sin SSN, sin examen médico',
      desc: 'Responde preguntas básicas sobre tu edad y salud. Sin SSN requerido. Muchos planes aprueban sin examen médico.',
    },
    {
      title: 'Tu asesora te explica término vs permanente',
      desc: 'La diferencia entre Vida a Término y Vida Permanente en palabras simples. Te ayudamos a elegir según tu presupuesto y las necesidades de tu familia.',
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
      text: 'Siempre creí que no podía tener seguro de vida sin SSN. En minutos tenía cotización con mi ITIN. Lo mejor: puse a mi mamá en México como beneficiaria. Eso no lo esperaba.',
    },
    {
      name: 'Jorge L.',
      location: 'Chicago, Illinois',
      text: 'Los Living Benefits me convencieron. No solo protejo a mi familia si muero — si me diagnostican algo grave, puedo usar el dinero para el tratamiento. Eso vale mucho cuando no tienes familia aquí.',
    },
    {
      name: 'Ana P.',
      location: 'Phoenix, Arizona',
      text: 'Mi esposo tiene DACA y pensábamos que era imposible. La asesora nos explicó todo en español y lo tramitamos ese mismo día. Muy profesionales y sin presiones para comprar más de lo que necesitamos.',
    },
  ],
  faq: [
    {
      q: '¿Puedo tener seguro de vida sin SSN?',
      a: 'Sí. No necesitas SSN para contratar seguro de vida en EE.UU. Aceptamos ITIN como identificación válida. Inmigrantes, personas con DACA, visa temporal y estatus pendiente pueden contratar seguro de vida sin SSN.',
    },
    {
      q: '¿Qué son los Living Benefits y cómo funcionan?',
      a: 'Los Living Benefits te permiten acceder a parte del beneficio de tu seguro de vida MIENTRAS SIGUES VIVO si te diagnostican: enfermedad terminal (menos de 24 meses de vida), enfermedad crítica (infarto, cáncer, derrame cerebral) o enfermedad crónica (cuando no puedes realizar actividades básicas diarias solo). El dinero lo usas para lo que necesitas — tratamientos, deudas, gastos del hogar. Lo que se adelanta se descuenta del beneficio final.',
    },
    {
      q: '¿Cuánto cuesta el seguro de vida para inmigrantes?',
      a: 'Los planes a término comienzan desde $15/mes para personas jóvenes y sanas — menos que Spotify y Netflix juntos. Una mujer sana de 25 años puede tener $250,000 de cobertura por menos de $16/mes durante 20 años. El precio varía según edad, salud y tipo de cobertura. Cuanto antes contratas, más barato para siempre.',
    },
    {
      q: '¿Mi familia en otro país puede cobrar el seguro?',
      a: 'Sí. Puedes designar como beneficiarios a familiares que vivan en México, Guatemala, Honduras, Colombia o cualquier país del mundo. No es necesario que tengan documentos americanos ni que vivan en USA. El dinero les llega a ellos cuando lo necesitan.',
    },
    {
      q: '¿Cuál es la diferencia entre seguro a término y permanente?',
      a: 'El seguro a término (Term Life) cubre por un período definido (10, 20 o 30 años) y es el más económico. Ideal para proteger a tu familia mientras los hijos crecen o tienes deudas importantes. El seguro permanente (Whole Life) dura toda tu vida, no vence y acumula valor en efectivo que puedes usar como préstamo. Cuesta más pero no tiene fecha de vencimiento.',
    },
    {
      q: '¿Necesito examen médico para contratar?',
      a: 'No siempre. Muchos planes se aprueban sin examen médico — solo con preguntas básicas de salud. Los planes sin examen son especialmente útiles si tienes condiciones preexistentes. Los planes con examen ofrecen primas más bajas. Tu asesora te indica cuál aplica para tu situación.',
    },
    {
      q: '¿Mi información se comparte con migración?',
      a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial. Lo que compartes con nosotros para contratar tu póliza es estrictamente privado.',
    },
  ],
  ctaTitle: 'Protege a tu familia',
  ctaItalic: 'hoy mismo',
  ctaSubtitle: 'Sin SSN. Living Benefits incluidos. Tu asesora en español te guía sin presiones.',
  ctaButton: 'Ver mi precio gratis',
  theme: 'emerald',
  schema: {
    description: 'Seguro de vida para inmigrantes latinos sin SSN en USA. Acepta ITIN. Living Benefits incluidos. Beneficiarios en cualquier país. Desde $15/mes. Sin examen médico en muchos planes.',
    price: '15',
  },
};

const configEn: InsurancePageConfig = {
  quoteType: 'Vida',
  badgeIcon: Heart,
  badge: 'No SSN · Living Benefits · From $15/mo',
  heroLine1: 'Life Insurance',
  heroItalic: 'that protects you while you\'re still alive',
  heroSubtitle: 'If something happened to you today, could your family cover next month\'s rent? No SSN needed. From $15/month — less than your streaming subscriptions. And if you\'re diagnosed with a serious illness, you can access the money while you\'re still living. No need to wait.',
  trustBadges: ['No SSN required', 'From $15/mo', 'Living Benefits included', 'Beneficiaries in any country'],
  priceFrom: 'From $15/mo',
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
      icon: CurrencyDollar,
      title: 'Living Benefits — You Use the Money, Not Just Your Family',
      desc: 'If you\'re diagnosed with a critical illness (heart attack, cancer, stroke), chronic condition (unable to perform daily activities alone), or terminal illness (less than 24 months to live), you can access part of the benefit WHILE STILL ALIVE. You don\'t have to die first. Use the money for treatments, debt, or whatever your family needs.',
    },
    {
      icon: Globe,
      title: 'Your Mom in Mexico Can Be Your Beneficiary',
      desc: 'You can name any family member anywhere in the world as your beneficiary — your mom in Mexico, your kids in Guatemala, your partner in Colombia. They don\'t need US documents or to live in the US. The money reaches them when they need it most.',
    },
    {
      icon: Lock,
      title: 'From $15/mo — Your Rate Never Goes Up',
      desc: 'A healthy 30-year-old can get $250,000 in coverage for under $20/month for 20 years. The price you lock in today stays the same for the life of your policy — it doesn\'t go up with age or health changes. Wait a year, and you pay more forever.',
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
      name: 'Rosa M.',
      location: 'Houston, Texas',
      text: 'I always thought I couldn\'t get life insurance without an SSN. In minutes I had a quote with my ITIN. Best part: I named my mom in Mexico as beneficiary. I didn\'t expect that to be possible.',
    },
    {
      name: 'Jorge L.',
      location: 'Chicago, Illinois',
      text: 'The Living Benefits sold me. I\'m not just protecting my family if I die — if I get seriously ill, I can use the money for treatment. That means a lot when you don\'t have family nearby.',
    },
    {
      name: 'Ana P.',
      location: 'Phoenix, Arizona',
      text: 'My husband has DACA and we thought it was impossible. The agent explained everything in Spanish and we handled it that same day. Very professional, no pressure to buy more than we needed.',
    },
  ],
  faq: [
    {
      q: 'Can I get life insurance without an SSN?',
      a: 'Yes. You don\'t need an SSN to get life insurance in the US. We accept ITIN as valid identification. Immigrants, DACA recipients, temporary visa holders, and those with pending status can all get life insurance without an SSN.',
    },
    {
      q: 'What are Living Benefits and how do they work?',
      a: 'Living Benefits let you access part of your life insurance benefit WHILE STILL ALIVE if you\'re diagnosed with: a terminal illness (less than 24 months to live), a critical illness (heart attack, cancer, stroke), or a chronic illness (unable to perform basic daily activities on your own). The money is yours to use however you need — treatments, bills, family expenses. Whatever is advanced is deducted from the final benefit.',
    },
    {
      q: 'How much does life insurance cost without an SSN?',
      a: 'Term life insurance starts at $15/month for young, healthy individuals — less than most streaming subscriptions combined. A healthy 25-year-old woman can get $250,000 in coverage for under $16/month for 20 years. Price depends on age, health, and coverage type. The earlier you get covered, the lower your rate stays forever.',
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
  ctaTitle: 'Protect your family',
  ctaItalic: 'starting today',
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
