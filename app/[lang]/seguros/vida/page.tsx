import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Vida',
  badge: '❤️ Sin SSN · Living Benefits',
  heroLine1: 'Seguro de Vida',
  heroItalic: 'para inmigrantes y familias hispanas',
  heroSubtitle: 'Protege a tu familia aunque no tengas Social Security. Aceptamos ITIN. Living Benefits incluidos: accede al dinero si te enfermas gravemente, sin esperar.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $45/mes', 'Beneficiarios en cualquier país'],
  priceFrom: 'Desde $45/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'No importa tu estatus migratorio. Tu familia merece protección. Cotizamos sin SSN, sin historial de crédito en EE.UU., sin complicaciones.',
  eligibilityItems: [
    'No tengas número de seguro social (SSN)',
    'Seas inmigrante recién llegado al país',
    'Tengas visa temporal, DACA o estatus pendiente',
    'No tengas historial de crédito en USA',
    'Tus beneficiarios vivan fuera de EE.UU.',
  ],
  features: [
    { emoji: '❤️', title: 'Living Benefits', desc: 'Si te diagnostican una enfermedad grave, puedes acceder a una parte del beneficio en vida. No tienes que morir para que tu familia cobre.' },
    { emoji: '🌍', title: 'Beneficiarios en Cualquier País', desc: 'Puedes designar a familiares que vivan en México, Centroamérica o cualquier parte del mundo como beneficiarios de tu póliza.' },
    { emoji: '🔒', title: 'Sin SSN — Solo ITIN', desc: 'Cotiza y contrata con tu ITIN o pasaporte. Sin historial de crédito en USA. Sin burocracia innecesaria.' },
  ],
  coverageItems: [
    'Beneficio por fallecimiento (Death Benefit)',
    'Living Benefits por enfermedad crítica',
    'Cobertura por accidente',
    'Beneficiarios en cualquier país',
    'Póliza indexada o de vida entera disponible',
    'Valor en efectivo acumulado',
    'Protección por incapacidad',
    'Rider de gastos finales',
  ],
  steps: [
    { title: 'Cotiza en 90 segundos', desc: 'Responde unas preguntas básicas sobre tu edad y salud. Sin SSN requerido para cotizar.' },
    { title: 'Elige tu cobertura', desc: 'Te explicamos cada opción en español: vida término, vida entera, universal. Tú eliges según tu presupuesto y necesidades.' },
    { title: 'Póliza activa en días', desc: 'La mayoría de pólizas se activan en 1-3 días hábiles. Recibes tu documentación por correo electrónico.' },
  ],
  testimonials: [
    { name: 'Rosa M.', location: 'Houston, Texas', text: 'Siempre creí que no podía tener seguro de vida sin SSN. En 20 minutos tenía cotización con mi ITIN. Lo mejor: puedo poner a mi mamá en México como beneficiaria.' },
    { name: 'Jorge L.', location: 'Chicago, Illinois', text: 'Los Living Benefits me convencieron. No solo protejo a mi familia si muero — si me enfermo grave, puedo usar el dinero para tratamiento. Eso vale mucho.' },
    { name: 'Ana P.', location: 'Phoenix, Arizona', text: 'Mi esposo tiene DACA y pensamos que era imposible. La asesora nos explicó todo en español y lo tramitamos ese mismo día. Muy profesionales.' },
  ],
  faq: [
    { q: '¿Puedo tener seguro de vida sin número de seguro social?', a: 'Sí. No necesitas SSN para contratar seguro de vida en EE.UU. Aceptamos ITIN como identificación válida.' },
    { q: '¿Qué son los Living Benefits?', a: 'Te permiten acceder a una parte del beneficio si te diagnostican una enfermedad crítica, crónica o terminal — sin necesidad de morir primero.' },
    { q: '¿Puede mi familia en otro país cobrar el seguro?', a: 'Sí. Puedes designar como beneficiarios a familiares que vivan en México, Centroamérica o cualquier país del mundo.' },
    { q: '¿Cuánto cuesta el seguro de vida para inmigrantes?', a: 'Los planes comienzan desde $45/mes. El precio varía según edad, salud y cobertura elegida. No tener SSN no aumenta el precio. Sujeto a términos y condiciones.' },
    { q: '¿Mi información se comparte con migración?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental.' },
  ],
  ctaTitle: 'Protege a tu familia',
  ctaItalic: 'hoy mismo',
  ctaSubtitle: 'Sin SSN. Living Benefits incluidos. Un asesor en español te guía en todo el proceso.',
  ctaButton: 'Cotizar Seguro de Vida',
  theme: 'emerald',
  schema: { description: 'Seguro de vida para inmigrantes sin SSN. Acepta ITIN. Living Benefits incluidos. Beneficiarios en cualquier país. Desde $45/mes.', price: '45' },
};

export default function VidaPage() {
  return <InsurancePage config={config} />;
}
