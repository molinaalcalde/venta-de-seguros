import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Vida',
  badge: '❤️ Living Benefits · Sin SSN',
  heroLine1: 'Seguro de Vida',
  heroItalic: 'con beneficios que puedes usar en vida',
  heroSubtitle: 'No importa tu estatus migratorio. Si tienes ITIN y vives en USA, puedes tener seguro de vida. Y si te enfermas gravemente, puedes acceder al dinero — sin esperar a fallecer.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $45/mes', 'Beneficiarios en cualquier país'],
  priceFrom: 'Desde $45/mes',
  eligibilityTitle: 'Sí calificas, aunque...',
  eligibilityText: 'La ciudadanía no es requisito para tener seguro de vida en USA. Lo que importa es que vivas aquí, tengas identificación válida y quieras proteger a tu familia.',
  eligibilityItems: [
    'Seas inmigrante indocumentado o residente temporal',
    'No tengas número de seguro social (SSN)',
    'Tus beneficiarios vivan en México, Guatemala u otro país',
    'Tengas condiciones de salud previas (evaluar caso a caso)',
    'No tengas historial de crédito en USA',
  ],
  features: [
    { emoji: '💰', title: 'Beneficios en Vida (Living Benefits)', desc: 'Si te diagnostican cáncer, infarto o ACV puedes acceder al dinero del seguro mientras sigues vivo. Sin esperar, sin trámites interminables.' },
    { emoji: '🌎', title: 'Beneficiarios en Cualquier País', desc: 'Tus hijos, esposa o padres en México, Guatemala o cualquier otro país pueden ser beneficiarios. El seguro les paga directamente.' },
    { emoji: '🔒', title: 'Sin Examen Médico en Muchos Casos', desc: 'Varios planes no requieren examen médico físico — solo un cuestionario de salud. Rápido y sin salir de casa.' },
  ],
  coverageItems: [
    'Beneficio por fallecimiento para tu familia',
    'Living Benefits ante enfermedad terminal',
    'Living Benefits ante enfermedad crítica',
    'Living Benefits ante enfermedad crónica',
    'Beneficiarios fuera de USA',
    'Cobertura desde el primer día',
    'Acumulación de valor en efectivo (permanente)',
    'Sin penalidad en algunos planes',
  ],
  steps: [
    { title: 'Cotización sin compromiso', desc: 'Cuéntanos tu edad y estado de salud general. Sin SSN requerido. Sin formularios complicados.' },
    { title: 'Elige el plan ideal', desc: 'Te explicamos la diferencia entre seguro a término y permanente, y qué Living Benefits incluye cada opción.' },
    { title: 'Tu familia queda protegida', desc: 'Muchos planes se activan el mismo día de la firma. Tus beneficiarios quedan protegidos desde el inicio de vigencia.' },
  ],
  testimonials: [
    { name: 'Roberto A.', location: 'New York, NY', text: 'No sabía que podía tener seguro de vida sin SSN. Lo que más me convenció fue que si me enfermo, puedo usar el dinero yo mismo mientras sigo vivo.' },
    { name: 'Lucia M.', location: 'Los Angeles, California', text: 'Mis hijos viven en Guatemala. Me confirmaron que el seguro les paga allá también si algo me pasara. Eso era lo más importante para mí.' },
    { name: 'Héctor F.', location: 'Chicago, Illinois', text: 'Perdí a mi papá sin seguro y fue muy difícil para la familia. Yo no quería que mis hijos pasaran por eso. Me lo explicaron todo sin prisa.' },
  ],
  faq: [
    { q: '¿Puede un inmigrante indocumentado tener seguro de vida en USA?', a: 'Sí. Los inmigrantes, incluyendo personas indocumentadas, residentes permanentes y titulares de visas pueden contratar seguro de vida en Estados Unidos. Aceptamos ITIN como identificación válida. No se requiere SSN.' },
    { q: '¿Qué son los beneficios en vida (living benefits)?', a: 'Los beneficios en vida te permiten acceder al dinero del seguro mientras sigues vivo, si te diagnostican una enfermedad grave (terminal, crítica o crónica como cáncer, infarto o ACV). No tienes que esperar a fallecer para que tu familia reciba apoyo económico.' },
    { q: '¿El seguro de vida paga si mis beneficiarios viven fuera de USA?', a: 'Sí. El beneficio por fallecimiento puede pagarse a beneficiarios que viven en México, Guatemala, El Salvador u otros países. El proceso puede variar según la aseguradora, pero es completamente posible. Contáctanos para confirmar los detalles para tu situación.' },
    { q: '¿Necesito examen médico para contratar seguro de vida?', a: 'Depende del plan. Muchos seguros tienen opciones sin examen médico que solo requieren un cuestionario de salud. Otros planes más completos pueden requerir un examen básico que en muchos casos se realiza a domicilio sin costo para ti.' },
    { q: '¿Cuál es la diferencia entre seguro a término y permanente?', a: 'El seguro a término cubre por un período específico (10, 20 o 30 años) y es más económico. El seguro permanente cubre de por vida, acumula valor en efectivo y generalmente incluye Living Benefits. Recomendamos el tipo según tu situación familiar y presupuesto.' },
    { q: '¿Mi información de salud es confidencial?', a: 'Sí. Tu información de salud está protegida por HIPAA y las leyes estatales de privacidad. Nunca la compartimos con terceros no autorizados, incluidas agencias gubernamentales.' },
  ],
  ctaTitle: 'Tu familia merece',
  ctaItalic: 'seguridad real',
  ctaSubtitle: 'Seguro de vida sin SSN, con beneficios en vida. Beneficiarios en cualquier país.',
  ctaButton: 'Cotizar Seguro de Vida',
  theme: 'rose',
  schema: { description: 'Seguro de vida para inmigrantes sin SSN. Acepta ITIN. Living Benefits. Beneficiarios en cualquier país. Desde $45/mes.', price: '45' },
};

export default function VidaPage() {
  return <InsurancePage config={config} />;
}
