import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFY_TO = [
  'info@consultingbymf.com',
  'molinaalcalde89@gmail.com',
];

const WA_PHONE = '19082280973';

interface LeadData {
  nombre: string;
  email?: string;
  telefono?: string | null;
  tipo_seguro?: string | null;
  canal?: string;
  ciudad?: string | null;
  estado_us?: string | null;
  lead_score?: number | null;
  lang?: string;
}

/* ── Notificacion interna (a Maria Fernanda) ────────────────────────── */
export async function notifyNewLead(lead: LeadData) {
  if (!process.env.RESEND_API_KEY) return;

  const canal = lead.canal || 'Formulario';
  const isWhatsApp = canal === 'WhatsApp';
  const ubicacion = [lead.ciudad, lead.estado_us].filter(Boolean).join(', ') || 'No especificada';
  const emailDisplay = lead.email?.endsWith('@lead.local') ? 'No proporcionado' : (lead.email || 'No proporcionado');

  try {
    await resend.emails.send({
      from: 'Consulting by MF <notificaciones@consultingbymf.com>',
      to: NOTIFY_TO,
      subject: `Nuevo lead${isWhatsApp ? ' via WhatsApp' : ''}: ${lead.nombre} - ${lead.tipo_seguro || 'General'}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 0;">
          <div style="background: #17281b; padding: 24px 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 18px; font-weight: 600;">Nuevo Lead Recibido</h2>
            <p style="color: #b2d1b7; margin: 6px 0 0; font-size: 13px;">Consulting by MF</p>
          </div>

          <div style="background: #ffffff; padding: 24px 20px; border: 1px solid #e5e7eb; border-top: none;">
            <div style="background: ${isWhatsApp ? '#dcfce7' : '#dbeafe'}; border-radius: 8px; padding: 10px 14px; margin-bottom: 20px; display: inline-block;">
              <span style="font-size: 13px; font-weight: 600; color: ${isWhatsApp ? '#166534' : '#1e40af'};">
                ${isWhatsApp ? 'WhatsApp' : 'Formulario Web'}
              </span>
            </div>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px; width: 120px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">${lead.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Telefono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">
                  ${lead.telefono ? `<a href="https://wa.me/${lead.telefono.replace(/\D/g, '')}" style="color: #25D366; text-decoration: none;">${lead.telefono}</a>` : 'No proporcionado'}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px;">${emailDisplay}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 13px;">Tipo de seguro</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 14px; font-weight: 500;">${lead.tipo_seguro || 'General'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Ubicacion</td>
                <td style="padding: 10px 0; color: #111827; font-size: 14px;">${ubicacion}</td>
              </tr>
            </table>
          </div>

          <div style="background: #f9fafb; padding: 16px 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
            <a href="https://consultingbymf.com/admin/leads" style="display: inline-block; background: #17281b; color: #ffffff; padding: 10px 24px; border-radius: 8px; font-size: 13px; font-weight: 600; text-decoration: none;">
              Ver en el CRM
            </a>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error('Resend notification error:', err);
  }
}

/* ── Auto-reply al cliente ──────────────────────────────────────────── */
export async function sendAutoReply(lead: LeadData) {
  if (!process.env.RESEND_API_KEY) return;
  if (!lead.email || lead.email.endsWith('@lead.local')) return;

  const isEn = lead.lang === 'en';
  const tipoSeguro = lead.tipo_seguro || (isEn ? 'insurance' : 'seguro');
  const waLink = `https://wa.me/${WA_PHONE}`;

  const subject = isEn
    ? `${lead.nombre}, we're already looking for your best option`
    : `${lead.nombre}, ya estamos buscando tu mejor opcion`;

  const html = isEn
    ? buildAutoReplyEN(lead.nombre, tipoSeguro, waLink)
    : buildAutoReplyES(lead.nombre, tipoSeguro, waLink);

  try {
    await resend.emails.send({
      from: 'Consulting by MF <info@consultingbymf.com>',
      to: [lead.email],
      subject,
      html,
    });
  } catch (err) {
    console.error('Auto-reply error:', err);
  }
}

/* ── Template ES ────────────────────────────────────────────────────── */
function buildAutoReplyES(nombre: string, tipoSeguro: string, waLink: string): string {
  return `
<!DOCTYPE html>
<html lang="es" dir="ltr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="light dark">
<title>Recibimos tu solicitud</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;">
<div style="max-width:520px;margin:0 auto;padding:24px 16px;">

  <!-- Header -->
  <div style="background:#17281b;padding:28px 32px;border-radius:16px 16px 0 0;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">Consulting by MF</h1>
    <p style="margin:6px 0 0;color:#b2d1b7;font-size:12px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;">Agente Independiente de Seguros</p>
  </div>

  <!-- Body -->
  <div style="background:#ffffff;padding:32px;border-left:1px solid #e7e5e4;border-right:1px solid #e7e5e4;">

    <p style="margin:0 0 20px;color:#1c1917;font-size:15px;line-height:1.6;">
      Hola <strong>${nombre}</strong>,
    </p>

    <p style="margin:0 0 20px;color:#44403c;font-size:15px;line-height:1.6;">
      Recibimos tu solicitud. Ya estamos comparando opciones de <strong>${tipoSeguro}</strong> entre mas de 10 aseguradoras para encontrar la que mejor se ajuste a tu situacion.
    </p>

    <!-- Highlight box -->
    <div style="background:#f0fdf4;border-left:3px solid #22c55e;padding:14px 18px;border-radius:0 10px 10px 0;margin:0 0 20px;">
      <p style="margin:0;color:#166534;font-size:14px;font-weight:600;line-height:1.5;">
        Un agente te contactara a la brevedad.
      </p>
    </div>

    <p style="margin:0 0 24px;color:#78716c;font-size:13px;line-height:1.5;">
      Tu informacion es confidencial y no la compartimos con terceros.
    </p>

    <p style="margin:0 0 16px;color:#44403c;font-size:14px;line-height:1.5;">
      Si necesitas algo antes, escribenos directo:
    </p>

    <!-- WhatsApp CTA -->
    <div style="text-align:center;margin:0 0 8px;">
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 32px;border-radius:12px;font-size:14px;font-weight:600;text-decoration:none;min-width:200px;">
        Escribenos por WhatsApp
      </a>
    </div>
  </div>

  <!-- Footer -->
  <div style="background:#fafaf9;padding:24px 32px;border:1px solid #e7e5e4;border-top:none;border-radius:0 0 16px 16px;">

    <!-- Signature -->
    <p style="margin:0 0 4px;color:#1c1917;font-size:14px;font-weight:600;">Maria Fernanda</p>
    <p style="margin:0 0 12px;color:#78716c;font-size:12px;line-height:1.5;">
      Consulting by MF · Agente Independiente<br>
      NPN #3002959176<br>
      <a href="mailto:info@consultingbymf.com" style="color:#78716c;text-decoration:none;">info@consultingbymf.com</a> · <a href="tel:+19082280973" style="color:#78716c;text-decoration:none;">(908) 228-0973</a>
    </p>

    <!-- Instagram -->
    <div style="margin:0 0 16px;">
      <a href="https://www.instagram.com/insurancebymf_/" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;color:#78716c;font-size:12px;text-decoration:none;">
        <img src="https://cdn-icons-png.flaticon.com/16/174/174855.png" alt="" width="14" height="14" style="display:inline-block;vertical-align:middle;border:0;">
        @insurancebymf_
      </a>
    </div>

    <!-- Legal -->
    <p style="margin:0;color:#a8a29e;font-size:11px;line-height:1.5;">
      Toda cobertura sujeta a terminos y condiciones de cada aseguradora.
    </p>
  </div>

</div>
</body>
</html>`;
}

/* ── Template EN ────────────────────────────────────────────────────── */
function buildAutoReplyEN(nombre: string, tipoSeguro: string, waLink: string): string {
  return `
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="light dark">
<title>We received your request</title></head>
<body style="margin:0;padding:0;background-color:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;-webkit-font-smoothing:antialiased;">
<div style="max-width:520px;margin:0 auto;padding:24px 16px;">

  <!-- Header -->
  <div style="background:#17281b;padding:28px 32px;border-radius:16px 16px 0 0;text-align:center;">
    <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;letter-spacing:-0.3px;">Consulting by MF</h1>
    <p style="margin:6px 0 0;color:#b2d1b7;font-size:12px;font-weight:500;letter-spacing:0.5px;text-transform:uppercase;">Independent Insurance Agent</p>
  </div>

  <!-- Body -->
  <div style="background:#ffffff;padding:32px;border-left:1px solid #e7e5e4;border-right:1px solid #e7e5e4;">

    <p style="margin:0 0 20px;color:#1c1917;font-size:15px;line-height:1.6;">
      Hi <strong>${nombre}</strong>,
    </p>

    <p style="margin:0 0 20px;color:#44403c;font-size:15px;line-height:1.6;">
      We got your request. We're already comparing <strong>${tipoSeguro}</strong> options across 10+ carriers to find the best fit for your situation.
    </p>

    <!-- Highlight box -->
    <div style="background:#f0fdf4;border-left:3px solid #22c55e;padding:14px 18px;border-radius:0 10px 10px 0;margin:0 0 20px;">
      <p style="margin:0;color:#166534;font-size:14px;font-weight:600;line-height:1.5;">
        An agent will be in touch shortly.
      </p>
    </div>

    <p style="margin:0 0 24px;color:#78716c;font-size:13px;line-height:1.5;">
      Your information is confidential and we do not share it with third parties.
    </p>

    <p style="margin:0 0 16px;color:#44403c;font-size:14px;line-height:1.5;">
      Need something sooner? Message us directly:
    </p>

    <!-- WhatsApp CTA -->
    <div style="text-align:center;margin:0 0 8px;">
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 32px;border-radius:12px;font-size:14px;font-weight:600;text-decoration:none;min-width:200px;">
        Message us on WhatsApp
      </a>
    </div>
  </div>

  <!-- Footer -->
  <div style="background:#fafaf9;padding:24px 32px;border:1px solid #e7e5e4;border-top:none;border-radius:0 0 16px 16px;">

    <!-- Signature -->
    <p style="margin:0 0 4px;color:#1c1917;font-size:14px;font-weight:600;">Maria Fernanda</p>
    <p style="margin:0 0 12px;color:#78716c;font-size:12px;line-height:1.5;">
      Consulting by MF · Independent Agent<br>
      NPN #3002959176<br>
      <a href="mailto:info@consultingbymf.com" style="color:#78716c;text-decoration:none;">info@consultingbymf.com</a> · <a href="tel:+19082280973" style="color:#78716c;text-decoration:none;">(908) 228-0973</a>
    </p>

    <!-- Instagram -->
    <div style="margin:0 0 16px;">
      <a href="https://www.instagram.com/insurancebymf_/" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;color:#78716c;font-size:12px;text-decoration:none;">
        <img src="https://cdn-icons-png.flaticon.com/16/174/174855.png" alt="" width="14" height="14" style="display:inline-block;vertical-align:middle;border:0;">
        @insurancebymf_
      </a>
    </div>

    <!-- Legal -->
    <p style="margin:0;color:#a8a29e;font-size:11px;line-height:1.5;">
      All coverage subject to terms and conditions of each carrier.
    </p>
  </div>

</div>
</body>
</html>`;
}
