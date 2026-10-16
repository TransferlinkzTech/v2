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

// Early access is a form on its own page (the signups go to the database)
export const WAITLIST_HREF = "/waitlist";

export const ENTERPRISE_HREF = mailto({
  subject: "TransferLinkz enterprise enquiry",
  body: enquiryBody("I'd like to talk about an enterprise plan."),
});
