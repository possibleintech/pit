import { CONTACT, SITE } from "@/lib/constants";

export type ConsultationEmailFields = {
  fullName: string;
  workEmail: string;
  company: string;
  projectType: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 0;border-bottom:1px solid #e8e8ed;width:132px;color:#53596a;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;vertical-align:top;">${label}</td>
      <td style="padding:12px 0;border-bottom:1px solid #e8e8ed;color:#292d3d;font-size:15px;line-height:1.5;">${value}</td>
    </tr>`;
}

export function buildConsultationEmailHtml(fields: ConsultationEmailFields) {
  const fullName = escapeHtml(fields.fullName);
  const workEmail = escapeHtml(fields.workEmail);
  const company = escapeHtml(fields.company);
  const projectType = escapeHtml(fields.projectType);
  const message = escapeHtml(fields.message);
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#f7f7fa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7fa;padding:36px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e8e8ed;box-shadow:0 8px 30px rgba(41,45,61,0.06);">
            <tr>
              <td style="background:#292d3d;padding:32px 36px 28px;">
                <p style="margin:0;color:#e20a96;font-size:13px;font-weight:800;letter-spacing:0.14em;text-transform:uppercase;">${SITE.name}</p>
                <h1 style="margin:8px 0 0;color:#ffffff;font-size:24px;line-height:1.3;font-weight:800;">New Project Inquiry</h1>
                <p style="margin:6px 0 0;color:#cbd5e1;font-size:13px;line-height:1.5;">${SITE.tagline}</p>
              </td>
            </tr>
            <tr>
              <td style="height:4px;background:#e20a96;font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px 36px 16px;">
                <p style="margin:0 0 20px;color:#292d3d;font-size:15px;line-height:1.6;">A new client inquiry just arrived from the website consultation form. You can reply directly to this email to connect.</p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${detailRow("Client Name", fullName)}
                  ${detailRow("Work Email", `<a href="mailto:${workEmail}" style="color:#e20a96;text-decoration:none;font-weight:600;">${workEmail}</a>`)}
                  ${detailRow("Company", company)}
                  ${detailRow("Service Scope", projectType)}
                </table>
                <p style="margin:24px 0 8px;color:#53596a;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;">Project Requirements</p>
                <div style="background:#fceaf4;border-left:4px solid #e20a96;border-radius:12px;padding:16px 20px;">
                  <p style="margin:0;color:#292d3d;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
                </div>
                <p style="margin:28px 0 12px;">
                  <a href="mailto:${workEmail}" style="display:inline-block;background:#e20a96;color:#ffffff;text-decoration:none;font-size:14px;font-weight:700;padding:12px 26px;border-radius:9999px;">Reply Directly to ${fullName}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="background:#f7f7fa;border-top:1px solid #e8e8ed;padding:24px 36px;">
                <p style="margin:0;color:#292d3d;font-size:14px;font-weight:700;">${SITE.name}</p>
                <p style="margin:4px 0 0;color:#53596a;font-size:12px;line-height:1.6;">${CONTACT.address} &nbsp;·&nbsp; ${CONTACT.phone}</p>
                <p style="margin:12px 0 0;color:#94a3b8;font-size:11px;line-height:1.5;">© ${year} ${SITE.name}. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
