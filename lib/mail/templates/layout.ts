// The shared look of every email: a dark header with the wordmark, a white
// card and a small grey footer. Inline styles and tables, because email apps
// ignore stylesheets and modern layout.

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// A first name to greet someone with, or null when what they typed doesn't look
// like one. Anyone can type anything into a form, and these emails go to
// whatever address they typed, so free text is never echoed back to it.
export function firstName(fullName: string) {
  const first = fullName.trim().split(/\s+/)[0] ?? "";
  return /^[\p{L}][\p{L}'’-]{0,29}$/u.test(first) ? first : null;
}

export function greeting(fullName: string) {
  const first = firstName(fullName);
  return first ? `Hi ${first},` : "Hello,";
}

type LayoutOptions = {
  // The grey preview line some email apps show next to the subject
  preheader: string;
  heading: string;
  // Already-escaped HTML for the body
  bodyHtml: string;
  // Already-escaped HTML for the small print
  footerHtml: string;
};

export function renderEmail({
  preheader,
  heading,
  bodyHtml,
  footerHtml,
}: LayoutOptions) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background:#f4f6fa;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6fa;">
<tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;background:#ffffff;border-radius:4px;font-family:Arial,Helvetica,sans-serif;color:#313858;">
<tr><td style="background:#040a1a;padding:22px 32px;border-radius:4px 4px 0 0;color:#ffffff;font-size:20px;"><span style="font-weight:300;">transfer</span><span style="font-weight:700;">linkz</span></td></tr>
<tr><td style="padding:32px;font-size:15px;line-height:24px;color:#313858;">
<h1 style="margin:0 0 16px;font-size:22px;line-height:30px;font-weight:700;color:#000000;">${escapeHtml(heading)}</h1>
${bodyHtml}
</td></tr>
<tr><td style="padding:0 32px 28px;font-size:12px;line-height:18px;color:#6a7081;">${footerHtml}</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export const paragraph = (html: string) =>
  `<p style="margin:0 0 16px;">${html}</p>`;
