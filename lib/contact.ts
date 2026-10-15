export const SUPPORT_EMAIL = "support@transferlinkz.com";

type MailtoOptions = {
  subject: string;
  // Plain text; line breaks are kept
  body: string;
};

function mailto({ subject, body }: MailtoOptions) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

// Enterprise enquiries are an email to the team, so the draft asks for what
// they need to know: the business, volumes and destinations.
function enquiryBody(intro: string) {
  return [
    "Hi TransferLinkz team,",
    "",
    intro,
    "",
    "Business name:",
    "Transfer volumes (per month):",
    "Destinations:",
    "",
    "Thanks!",
  ].join("\n");
}

export type ContactMessage = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

// The Contact form has no backend yet, so submitting it opens an email draft
// to the team with the answers filled in.
export function contactMessageHref({
  name,
  email,
  company,
  role,
  message,
}: ContactMessage) {
  return mailto({
    subject: `TransferLinkz enquiry from ${name}${company ? ` (${company})` : ""}`,
    body: [
      message,
      "",
      "---",
      `Name: ${name}`,
      `Work email: ${email}`,
      `Company: ${company}`,
      `I am a: ${role}`,
    ].join("\n"),
  });
}

// Early access is a form on its own page (the signups go to the database)
export const WAITLIST_HREF = "/waitlist";

export const ENTERPRISE_HREF = mailto({
  subject: "TransferLinkz enterprise enquiry",
  body: enquiryBody("I'd like to talk about an enterprise plan."),
});
