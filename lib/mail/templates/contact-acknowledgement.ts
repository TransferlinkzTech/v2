import { absoluteUrl, site } from "@/lib/site";
import { escapeHtml, greeting, paragraph, renderEmail } from "./layout";

type ContactAcknowledgementInput = {
  name: string;
};

// Sent to the person who used the contact form. It deliberately doesn't repeat
// what they wrote: it goes to whatever address was typed into the form.
export function contactAcknowledgementEmail({
  name,
}: ContactAcknowledgementInput) {
  const hello = greeting(name);
  const privacyUrl = absoluteUrl("/privacy");

  const subject = "We’ve received your message";
  const body =
    "Thanks for getting in touch. We’ve received your message and we’ll get back to you as soon as possible.";
  const extra =
    "If there’s anything you forgot to mention, just reply to this email.";

  const html = renderEmail({
    preheader: "We’ll get back to you as soon as possible.",
    heading: "We’ve got your message",
    bodyHtml: [
      paragraph(escapeHtml(hello)),
      paragraph(escapeHtml(body)),
      paragraph(escapeHtml(extra)),
      paragraph("The TransferLinkz team"),
    ].join("\n"),
    footerHtml: `You’re receiving this because someone sent a message through the contact form at ${escapeHtml(site.url.replace(/^https?:\/\//, ""))} with this address. If that wasn’t you, you can ignore this email. <a href="${escapeHtml(privacyUrl)}" style="color:#6a7081;">Privacy Policy</a>`,
  });

  const text = [
    hello,
    "",
    body,
    "",
    extra,
    "",
    "The TransferLinkz team",
    "",
    "--",
    `You’re receiving this because someone sent a message through the contact form at ${site.url} with this address. If that wasn’t you, you can ignore this email.`,
    `Privacy Policy: ${privacyUrl}`,
  ].join("\n");

  return { subject, html, text };
}
