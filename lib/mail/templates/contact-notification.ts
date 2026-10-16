import { escapeHtml, paragraph, renderEmail } from "./layout";

type ContactNotificationInput = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

// Sent to the team when someone uses the contact form. Replying to it goes to
// the visitor (the caller sets replyTo). Everything here is typed by a
// stranger, so all of it is escaped.
export function contactNotificationEmail(input: ContactNotificationInput) {
  const { name, email, company, role, message } = input;

  const subject = `New message from ${name}${company ? ` (${company})` : ""}`;

  const row = (label: string, value: string) =>
    `<tr><td style="padding:4px 16px 4px 0;color:#6a7081;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:4px 0;color:#000000;">${value}</td></tr>`;

  const html = renderEmail({
    preheader: `${name} wrote in through the contact form.`,
    heading: "New contact message",
    bodyHtml: [
      paragraph(
        "Someone sent a message through the contact form. Reply to this email to answer them.",
      ),
      `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 20px;font-size:14px;line-height:21px;">`,
      row("Name", escapeHtml(name)),
      row(
        "Email",
        `<a href="mailto:${escapeHtml(email)}" style="color:#2563eb;">${escapeHtml(email)}</a>`,
      ),
      row("Company", company ? escapeHtml(company) : "–"),
      row("They are a", escapeHtml(role)),
      `</table>`,
      `<div style="margin:0;padding:16px;background:#f4f6fa;border-radius:4px;color:#000000;white-space:pre-wrap;">${escapeHtml(message)}</div>`,
    ].join("\n"),
    footerHtml: "Sent from the contact form on the TransferLinkz website.",
  });

  const text = [
    "Someone sent a message through the contact form. Reply to this email to answer them.",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `They are a: ${role}`,
    "",
    message,
  ].join("\n");

  return { subject, html, text };
}
