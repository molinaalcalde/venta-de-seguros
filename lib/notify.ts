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

/* ── Shared layout pieces ───────────────────────────────────────────── */
const LOGO_URL = 'https://consultingbymf.com/logo.png';
const WA_ICON = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" alt="" width="20" height="20" style="display:inline-block;vertical-align:middle;border:0;">`;
const IG_ICON = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/240px-Instagram_icon.png" alt="" width="16" height="16" style="display:inline-block;vertical-align:middle;border:0;">`;

function emailShell(lang: 'es' | 'en', body: string): string {
  const title = lang === 'es' ? 'Recibimos tu solicitud' : 'We received your request';
  const subtitleText = lang === 'es' ? 'Agente Independiente de Seguros' : 'Independent Insurance Agent';
  const signatureLine = lang === 'es' ? 'Consulting by MF · Agente Independiente' : 'Consulting by MF · Independent Agent';
  const legalText = lang === 'es'
    ? 'Toda cobertura sujeta a terminos y condiciones de cada aseguradora.'
    : 'All coverage subject to terms and conditions of each carrier.';

  return `<!DOCTYPE html>
<html lang="${lang}" dir="ltr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="color-scheme" content="light dark">
<title>${title}</title></head>
<body style="margin:0;padding:0;background-color:#f2f2f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;-webkit-font-smoothing:antialiased;">

<!-- Outer wrapper -->
<div style="max-width:540px;margin:0 auto;padding:32px 16px;">

  <!-- Card -->
  <div style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">

    <!-- Header with logo -->
    <div style="background:#17281b;padding:32px 32px 28px;text-align:center;">
      <img src="${LOGO_URL}" alt="Consulting by MF" width="160" style="display:inline-block;max-width:160px;height:auto;border:0;margin:0 0 8px;">
      <p style="margin:0;color:#9cb8a0;font-size:11px;font-weight:500;letter-spacing:1.2px;text-transform:uppercase;">${subtitleText}</p>
    </div>

    <!-- Thin accent line -->
    <div style="height:3px;background:linear-gradient(90deg,#b2d1b7 0%,#53825d 50%,#b2d1b7 100%);"></div>

    <!-- Body -->
    <div style="padding:36px 32px 32px;">
      ${body}
    </div>

    <!-- Divider -->
    <div style="height:1px;background:#f0eeec;margin:0 32px;"></div>

    <!-- Footer -->
    <div style="padding:24px 32px 28px;">
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;">
        <tr>
          <td style="vertical-align:top;">
            <p style="margin:0 0 2px;color:#1c1917;font-size:14px;font-weight:700;">Maria Fernanda</p>
            <p style="margin:0 0 10px;color:#9ca3af;font-size:12px;line-height:1.6;">
              ${signatureLine}<br>
              NPN #3002959176
            </p>
            <p style="margin:0 0 14px;color:#9ca3af;font-size:12px;line-height:1.6;">
              <a href="mailto:info@consultingbymf.com" style="color:#53825d;text-decoration:none;font-weight:500;">info@consultingbymf.com</a><br>
              <a href="tel:+19082280973" style="color:#9ca3af;text-decoration:none;">(908) 228-0973</a>
            </p>
          </td>
        </tr>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right:16px;">
                  <a href="https://www.instagram.com/insurancebymf_/" target="_blank" rel="noopener noreferrer" style="color:#9ca3af;font-size:12px;text-decoration:none;">
                    ${IG_ICON}
                    <span style="vertical-align:middle;margin-left:4px;">@insurancebymf_</span>
                  </a>
                </td>
                <td>
                  <a href="https://consultingbymf.com" target="_blank" rel="noopener noreferrer" style="color:#9ca3af;font-size:12px;text-decoration:none;">
                    <span style="vertical-align:middle;">consultingbymf.com</span>
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <p style="margin:20px 0 0;color:#c4c0bb;font-size:10px;line-height:1.5;">${legalText}</p>
    </div>

  </div>
</div>
</body>
</html>`;
}

/* ── Template ES ────────────────────────────────────────────────────── */
function buildAutoReplyES(nombre: string, tipoSeguro: string, waLink: string): string {
  const body = `
    <p style="margin:0 0 22px;color:#1c1917;font-size:16px;line-height:1.6;">
      Hola <strong>${nombre}</strong>,
    </p>

    <p style="margin:0 0 22px;color:#44403c;font-size:15px;line-height:1.7;">
      Recibimos tu solicitud. Ya estamos comparando opciones de <strong style="color:#1c1917;">${tipoSeguro}</strong> entre mas de 10 aseguradoras para encontrar la que mejor se ajuste a tu situacion.
    </p>

    <!-- Callout -->
    <div style="background:#f8f7f5;border-radius:12px;padding:18px 22px;margin:0 0 22px;text-align:center;">
      <p style="margin:0;color:#17281b;font-size:15px;font-weight:600;line-height:1.5;">
        Un agente te contactara a la brevedad.
      </p>
    </div>

    <p style="margin:0 0 28px;color:#9ca3af;font-size:13px;line-height:1.5;">
      Tu informacion es confidencial y no la compartimos con terceros.
    </p>

    <p style="margin:0 0 14px;color:#44403c;font-size:14px;line-height:1.5;">
      Si necesitas algo antes, escribenos directo:
    </p>

    <!-- WhatsApp CTA -->
    <div style="text-align:center;margin:0 0 4px;">
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;text-decoration:none;line-height:1;">
        <!--[if mso]><i style="mso-font-width:0;mso-text-raise:6pt;">&#8203;</i><![endif]-->
        ${WA_ICON}
        <span style="vertical-align:middle;margin-left:8px;">Escribenos por WhatsApp</span>
        <!--[if mso]><i style="mso-font-width:0;">&#8203;</i><![endif]-->
      </a>
    </div>`;
  return emailShell('es', body);
}

/* ── Template EN ────────────────────────────────────────────────────── */
function buildAutoReplyEN(nombre: string, tipoSeguro: string, waLink: string): string {
  const body = `
    <p style="margin:0 0 22px;color:#1c1917;font-size:16px;line-height:1.6;">
      Hi <strong>${nombre}</strong>,
    </p>

    <p style="margin:0 0 22px;color:#44403c;font-size:15px;line-height:1.7;">
      We got your request. We're already comparing <strong style="color:#1c1917;">${tipoSeguro}</strong> options across 10+ carriers to find the best fit for your situation.
    </p>

    <!-- Callout -->
    <div style="background:#f8f7f5;border-radius:12px;padding:18px 22px;margin:0 0 22px;text-align:center;">
      <p style="margin:0;color:#17281b;font-size:15px;font-weight:600;line-height:1.5;">
        An agent will be in touch shortly.
      </p>
    </div>

    <p style="margin:0 0 28px;color:#9ca3af;font-size:13px;line-height:1.5;">
      Your information is confidential and we do not share it with third parties.
    </p>

    <p style="margin:0 0 14px;color:#44403c;font-size:14px;line-height:1.5;">
      Need something sooner? Message us directly:
    </p>

    <!-- WhatsApp CTA -->
    <div style="text-align:center;margin:0 0 4px;">
      <a href="${waLink}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#25D366;color:#ffffff;padding:14px 28px;border-radius:50px;font-size:14px;font-weight:600;text-decoration:none;line-height:1;">
        <!--[if mso]><i style="mso-font-width:0;mso-text-raise:6pt;">&#8203;</i><![endif]-->
        ${WA_ICON}
        <span style="vertical-align:middle;margin-left:8px;">Message us on WhatsApp</span>
        <!--[if mso]><i style="mso-font-width:0;">&#8203;</i><![endif]-->
      </a>
    </div>`;
  return emailShell('en', body);
}
