import InsurancePage, { type InsurancePageConfig } from '@/components/InsurancePage';

const config: InsurancePageConfig = {
  quoteType: 'Vida',
  badge: '❤️ Sin SSN · Living Benefits · Desde $15/mes',
  heroLine1: 'Seguro de Vida',
  heroItalic: 'para inmigrantes y familias latinas en USA',
  heroSubtitle: 'Si algo te pasara, ¿tu familia podría pagar la renta, la comida y las deudas? El seguro de vida garantiza que la respuesta sea sí. Sin SSN requerido. Desde $15/mes. Con Living Benefits: puedes usar el dinero mientras sigues vivo si te enfermas gravemente.',
  trustBadges: ['Sin SSN requerido', 'Acepta ITIN', 'Desde $15/mes', 'Living Benefits incluidos'],
  priceFrom: 'Desde $15/mes',
  eligibilityTitle: 'Sí puedes asegurarte aunque...',
  eligibilityText: 'No importa tu estatus migratorio. Inmigrantes, personas con DACA, visa temporal o estatus pendiente pueden contratar seguro de vida en USA sin SSN. Cuanto antes lo haces, más barato — si esperas a estar enfermo, puede ser tarde.',
  eligibilityItems: [
    'No tengas número de seguro social (SSN)',
    'Seas inmigrante reciente, residente o ciudadano',
    'Tengas visa temporal, DACA o estatus pendiente',
    'Tus beneficiarios vivan en México, Centroamérica u otro país',
    'No tengas historial de crédito en USA',
  ],
  features: [
    { emoji: '💰', title: 'Living Benefits — El Dinero lo Usas Tú, No Solo tu Familia', desc: 'Si te diagnostican una enfermedad crítica (infarto, cáncer, derrame), crónica o terminal, puedes acceder a parte del beneficio MIENTRAS SIGUES VIVO. No tienes que morir para que tu familia lo use. Ese dinero paga tratamientos, deudas o lo que necesites.' },
    { emoji: '🌍', title: 'Tus Beneficiarios Pueden Vivir en Otro País', desc: 'Puedes designar a tu mamá en México, a tus hijos en Guatemala o a cualquier familiar en cualquier parte del mundo como beneficiario de tu póliza. No es necesario que vivan en USA.' },
    { emoji: '🔒', title: 'Sin SSN — Solo ITIN o Pasaporte', desc: 'Cotiza y contrata con tu ITIN o pasaporte. Sin historial de crédito en USA, sin examen médico en muchos planes. El precio que pagas hoy se mantiene — no sube por tu edad ni por cambios en tu salud.' },
  ],
  coverageItems: [
    'Beneficio por fallecimiento (Death Benefit)',
    'Living Benefits — enfermedad crítica y crónica',
    'Acceso al dinero en vida si te enfermas',
    'Beneficiarios en cualquier país del mundo',
    'Vida a término (Term Life) — la más económica',
    'Vida permanente con valor en efectivo (Whole Life)',
    'Sin examen médico en muchos planes',
    'Valor en efectivo acumulado (cash value)',
  ],
  steps: [
    { title: 'Cotiza en 90 segundos — sin examen médico', desc: 'Responde unas preguntas básicas sobre tu edad y salud. Sin SSN requerido. Muchos planes aprueban sin examen médico.' },
    { title: 'Elegimos juntos el plan correcto', desc: 'Te explicamos en español la diferencia entre vida a término y vida permanente, y cuáles incluyen Living Benefits. Tú decides según tu presupuesto.' },
    { title: 'Póliza activa en días', desc: 'La mayoría de pólizas se activan en 1–3 días hábiles. Recibes tu documentación por correo electrónico y puedes designar beneficiarios en cualquier país.' },
  ],
  testimonials: [
    { name: 'Rosa M.', location: 'Houston, Texas', text: 'Siempre creí que no podía tener seguro de vida sin SSN. En 20 minutos tenía cotización con mi ITIN. Lo mejor: puedo poner a mi mamá en México como beneficiaria. Eso no lo esperaba.' },
    { name: 'Jorge L.', location: 'Chicago, Illinois', text: 'Los Living Benefits me convencieron. No solo protejo a mi familia si muero — si me diagnostican algo grave, puedo usar el dinero para el tratamiento. Eso vale mucho cuando no tienes familia aquí.' },
    { name: 'Ana P.', location: 'Phoenix, Arizona', text: 'Mi esposo tiene DACA y pensábamos que era imposible. La asesora nos explicó todo en español y lo tramitamos ese mismo día. Muy profesionales y sin presiones para comprar más de lo que necesitamos.' },
  ],
  faq: [
    { q: '¿Puedo tener seguro de vida sin número de seguro social?', a: 'Sí. No necesitas SSN para contratar seguro de vida en EE.UU. Aceptamos ITIN como identificación válida. Inmigrantes, personas con DACA, visa temporal y estatus pendiente pueden contratar seguro de vida sin SSN.' },
    { q: '¿Mi información se comparte con migración o el gobierno?', a: 'No. Tu información es 100% confidencial. Nunca la compartimos con ICE ni ninguna agencia gubernamental sin orden judicial. Cumplimos con HIPAA y todas las regulaciones de privacidad. Lo que compartes aquí es solo tuyo.' },
    { q: '¿Qué son los Living Benefits y cómo funcionan?', a: 'Los Living Benefits te permiten acceder a parte del beneficio de tu seguro de vida MIENTRAS SIGUES VIVO si te diagnostican: una enfermedad terminal (menos de 2 años de vida), una enfermedad crítica (infarto, cáncer, derrame) o una enfermedad crónica (cuando no puedes realizar actividades básicas diarias). El dinero lo usas para lo que necesites — tratamientos, deudas, viajes. Lo que se adelanta se descuenta del beneficio final.' },
    { q: '¿Cuánto cuesta el seguro de vida para inmigrantes?', a: 'Los planes a término (Term Life) comienzan desde $15/mes para personas jóvenes y sanas — menos que Spotify y Netflix juntos. Para una mujer de 25 años con buena salud, $250,000 de cobertura puede costar menos de $16/mes por 20 años. El precio varía según edad, salud y tipo de cobertura. Cuanto antes contratas, más barato. Sujeto a términos y condiciones.' },
    { q: '¿Puede mi familia en otro país cobrar el seguro?', a: 'Sí. Puedes designar como beneficiarios a familiares que vivan en México, Centroamérica, Sudamérica o cualquier país del mundo. No es necesario que tus beneficiarios vivan en USA ni tengan documentos americanos.' },
    { q: '¿Cuál es la diferencia entre seguro de vida a término y permanente?', a: 'El seguro a término (Term Life) cubre por un período definido (10, 20 o 30 años) y es el más económico. Es ideal para proteger a tu familia mientras los hijos crecen o tienes deudas importantes. El seguro permanente (Whole Life) dura toda tu vida y acumula valor en efectivo que puedes usar como préstamo o retiro. Cuesta más pero nunca vence.' },
    { q: '¿Necesito examen médico para contratar seguro de vida?', a: 'No siempre. Muchos planes aprueban sin examen médico — solo con preguntas básicas de salud. Los planes sin examen son especialmente útiles si tienes condiciones preexistentes. Los planes con examen médico generalmente ofrecen primas más bajas.' },
  ],
  ctaTitle: 'Protege a tu familia',
  ctaItalic: 'hoy mismo',
  ctaSubtitle: 'Sin SSN. Living Benefits incluidos. Un asesor en español te guía sin presiones.',
  ctaButton: 'Cotizar Seguro de Vida',
  theme: 'emerald',
  schema: { description: 'Seguro de vida para inmigrantes latinos sin SSN en USA. Acepta ITIN. Living Benefits incluidos. Beneficiarios en cualquier país. Desde $15/mes. Sin examen médico en muchos planes.', price: '15' },
};

export default function VidaPage() {
  return <InsurancePage config={config} />;
}
