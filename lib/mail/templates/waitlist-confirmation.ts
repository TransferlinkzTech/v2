import { absoluteUrl, site } from "@/lib/site";
import { escapeHtml, greeting, paragraph, renderEmail } from "./layout";

type WaitlistConfirmationInput = {
  name: string;
};

// Sent when someone joins the waitlist
export function waitlistConfirmationEmail({ name }: WaitlistConfirmationInput) {
  const hello = greeting(name);
  const privacyUrl = absoluteUrl("/privacy");

  const subject = "You’re on the TransferLinkz waitlist";
  const intro =
    "Thanks for joining the TransferLinkz waitlist. We’re onboarding a small group of pilot partners for 2026, and we’ll be in touch about early access.";
  const reply =
    "In the meantime, if you have questions about how TransferLinkz could fit your operation, just reply to this email.";

  const html = renderEmail({
    preheader: "Thanks for joining. We’ll be in touch about early access.",
    heading: "You’re on the list",
    bodyHtml: [
      paragraph(escapeHtml(hello)),
      paragraph(escapeHtml(intro)),
      paragraph(escapeHtml(reply)),
      paragraph("The TransferLinkz team"),
    ].join("\n"),
    footerHtml: `You’re receiving this because someone joined the waitlist at ${escapeHtml(site.url.replace(/^https?:\/\//, ""))} with this address. If that wasn’t you, reply and we’ll remove it. <a href="${escapeHtml(privacyUrl)}" style="color:#6a7081;">Privacy Policy</a>`,
  });

  const text = [
    hello,
    "",
    intro,
    "",
    reply,
    "",
    "The TransferLinkz team",
    "",
    "--",
    `You’re receiving this because someone joined the waitlist at ${site.url} with this address. If that wasn’t you, reply and we’ll remove it.`,
    `Privacy Policy: ${privacyUrl}`,
  ].join("\n");

  return { subject, html, text };
}
