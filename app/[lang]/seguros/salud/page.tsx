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
  badge: 'Independent Agent · 10+ Carriers · Annual Review Included · Free Quote',
  heroLine1: 'Health Insurance',
  heroItalic: 'the system forgot you. we didn\'t.',
  heroSubtitle: 'Only 1 in 5 gig workers has employer-sponsored health insurance. The other 4 figure it out alone, without anyone to negotiate rates, explain options, or fight for them when a claim gets denied. That is exactly what we do, and it costs you nothing because carriers pay us, not you.',
  trustBadges: ['Independent agent', '10+ carriers compared', 'Annual review included', 'Free quote'],
  priceFrom: 'From $381/mo',
  eligibilityTitle: 'Built for people the system forgot',
  eligibilityText: 'If you work for yourself, drive for an app, run a small business, or just lost employer coverage, you are navigating a market that was never designed with you in mind. We specialize in exactly this situation.',
  eligibilityItems: [
    'Freelancers and self-employed with no employer plan',
    'Gig workers (rideshare, delivery, freelance platforms)',
    'Small business owners and independent contractors',
    'People between jobs who were offered COBRA and want a real comparison first',
    'Anyone who has not reviewed their plan since 2025',
  ],
  features: [
    {
      icon: Warning,
      title: 'One ER visit without insurance averages $2,600. A hospital stay: $30,000+',
      desc: 'An appendectomy without coverage costs between $10,000 and $50,000. A broken leg requiring surgery: $17,000 to $35,000. 107 million Americans, 41% of all adults, carry medical debt right now. For someone self-employed, a week in the hospital is not just a bill. It is a bill plus zero income plus no employer safety net.',
    },
    {
      icon: Shield,
      title: 'COBRA averages $790 a month. Most people don\'t know there are cheaper options.',
      desc: 'When you leave a job, COBRA lets you keep your exact plan but you pay 100% of the premium plus an admin fee. For most people that means $635 to $790 a month for one person, or up to $2,290 for a family. A comparable plan for the same person typically costs $200 to $477 a month. We show you the exact comparison before you make any decision.',
    },
    {
      icon: Pill,
      title: 'Only 9% of Americans understand their health plan. We explain yours before you sign.',
      desc: 'Most people pick the plan with the lowest monthly premium without realizing their deductible could be $6,000 or $7,000. 28% of insured Americans say they could not pay their deductible today if needed. We walk you through exactly what you would pay monthly, for a routine visit, and in a real emergency, before you choose anything.',
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
    'Annual preventive services at 100%',
  ],
  steps: [
    {
      title: 'Tell us your situation in 5 minutes',
      desc: 'Income range, family size, and state. We identify every real option available including plans HealthCare.gov does not show.',
    },
    {
      title: 'We compare every plan in plain language',
      desc: 'Monthly premium, deductible, your doctor\'s network status, and what you would actually pay in three real scenarios: routine visit, ER, and hospitalization. You see the full picture, not just the monthly number.',
    },
    {
      title: 'Enrolled, covered, and reviewed every year',
      desc: 'We stay with you after enrollment. Every November we compare your current plan against new options because carriers raise deductibles, change networks, and exit markets. Cigna is leaving all marketplace states in 2027. Most agents never call you again after the sale.',
    },
  ],
  testimonials: [
    {
      name: 'Kevin M.',
      location: 'Austin, Texas',
      text: 'I kept saying I\'d sort out health insurance once the business stabilized. Then I had a kidney stone, $14,000 out of pocket paid over 18 months. My agent found a Silver plan for $230 a month. I should have called before I needed it.',
    },
    {
      name: 'Lisa T.',
      location: 'Denver, Colorado',
      text: 'I picked the cheapest monthly premium. My deductible was $6,500. I had no idea. My agent restructured my coverage for the same monthly cost with a $2,000 deductible and the same network. I had been overpaying for worse coverage for three years.',
    },
    {
      name: 'Robert C.',
      location: 'Miami, Florida',
      text: 'A claim got denied after my surgery. I had no idea what to do. My agent called the carrier directly, escalated it, and the claim was paid two weeks later. Nobody told me that was part of the service. It is the reason I will never buy insurance any other way.',
    },
  ],
  faq: [
    {
      q: 'How do self-employed people get health insurance in the US?',
      a: 'Your main options are ACA Marketplace plans, off-marketplace private plans, and short-term health plans. About half of ACA marketplace enrollees are self-employed or work for small businesses. The key is finding the right plan for your income and health needs, which an independent agent can do more accurately than navigating it alone.',
    },
    {
      q: 'Is COBRA worth it after leaving a job?',
      a: 'Almost never. With COBRA you pay 100% of the premium your employer was paying plus an admin fee. That typically means 3 to 4 times what you paid before. A marketplace or private plan for the same person usually costs significantly less for comparable coverage. We show you the exact comparison so you can decide.',
    },
    {
      q: 'How much does individual health insurance cost per month without an employer?',
      a: 'A basic Bronze plan averages $381 a month for one adult. A Silver plan averages $486 to $497 a month. Costs vary by age, state, and plan. As a reference point: one uninsured ER visit averages $2,600. One hospital stay averages $30,000.',
    },
    {
      q: 'What is a deductible and why does it matter more than the monthly premium?',
      a: 'Your premium is what you pay every month regardless of whether you use your insurance. Your deductible is what you pay out of pocket before insurance starts covering most services. A plan with a low premium often has a $6,000 or $7,000 deductible, meaning you pay that much before insurance kicks in. We map out the real cost of each plan before you choose.',
    },
    {
      q: 'Can I deduct 100% of my health insurance premiums if I am self-employed?',
      a: 'Yes, in most cases. If you are self-employed and not eligible for employer-sponsored coverage elsewhere, you can deduct 100% of your health insurance premiums from your federal income taxes. This applies to coverage for yourself, your spouse, and your dependents. It is one of the most underused tax advantages for freelancers and independent contractors.',
    },
    {
      q: 'What happens if I miss open enrollment?',
      a: 'Without a qualifying life event, the next opportunity to enroll in an ACA Marketplace plan is November 2027. Qualifying events include job loss, marriage, birth, adoption, or moving to a new state. Off-marketplace private plans are available year-round. If you are currently uninsured, we can identify options that work regardless of the calendar.',
    },
    {
      q: 'Cigna is leaving the marketplace in 2027. What does that mean for me?',
      a: 'If you have a Cigna marketplace plan, your current coverage ends December 31, 2026. You will need to actively choose a new plan during open enrollment (November 1 to January 15). If you do nothing, you may be auto-enrolled in a different plan that may not match your needs or budget. We review your replacement options before the deadline.',
    },
    {
      q: 'Why use an independent agent instead of buying directly from a carrier or using HealthCare.gov?',
      a: 'On HealthCare.gov you only see ACA Marketplace plans. An independent agent also compares off-marketplace private plans, checks whether your specific doctors are in-network, and helps you avoid enrollment mistakes that can result in surprise bills mid-year. The price you pay is identical whether you buy through an agent or directly. The difference is you have someone in your corner when you need to use the insurance.',
    },
  ],
  ctaTitle: 'Stop figuring this out alone',
  ctaItalic: 'we do the work your employer was supposed to do',
  ctaSubtitle: 'Free comparison. 10+ carriers. Annual review included. No obligation.',
  ctaButton: 'Get a free quote',
  theme: 'blue',
  schema: {
    description: 'Health insurance for self-employed, gig workers, and individuals without employer coverage. Independent agent compares 10+ carriers. ACA marketplace and off-marketplace options. Annual review included.',
    price: '381',
  },
};

export default function SaludPage({ params }: { params: { lang: string } }) {
  const config = params.lang === 'en' ? configEn : configEs;
  return <InsurancePage config={config} lang={params.lang} />;
}
