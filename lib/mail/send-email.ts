import nodemailer, { type Transporter } from "nodemailer";

// Sends one email through Zoho Mail's SMTP server, with nodemailer. Server
// only: it reads the mailbox password from the environment.
//
// The environment:
//   ZOHO_MAIL_SMTP_HOST      smtp.zoho.eu for an EU account, smtp.zoho.com for US
//   ZOHO_MAIL_SMTP_PORT      465 (SSL) or 587 (STARTTLS)
//   ZOHO_MAIL_USER           the mailbox that signs in (its login address)
//   ZOHO_MAIL_PASSWORD       its password, or an app-specific password
//   MAIL_FROM_EMAIL / _NAME  who the emails are from; Zoho only accepts the
//                            mailbox itself or one of its aliases here
//   MAIL_SANDBOX=1           build every message but send nothing

export type EmailAddress = { email: string; name?: string };

export type Email = {
  to: EmailAddress;
  subject: string;
  html: string;
  text: string;
  // Where a reply should go, when it isn't the sender
  replyTo?: EmailAddress;
  // Mark it as automatic, so auto-responders don't answer it and start a loop
  automated?: boolean;
};

export type SendResult = { ok: true } | { ok: false; reason: string };

// One transport per server process, reused between sends
const globalForMail = globalThis as unknown as { mailTransport?: Transporter };

function transport(): Transporter | null {
  if (process.env.MAIL_SANDBOX === "1") {
    // Builds the message and hands it back as JSON, never touching the network
    return (globalForMail.mailTransport ??= nodemailer.createTransport({
      jsonTransport: true,
    }));
  }

  const host = process.env.ZOHO_MAIL_SMTP_HOST;
  const user = process.env.ZOHO_MAIL_USER;
  const pass = process.env.ZOHO_MAIL_PASSWORD;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.ZOHO_MAIL_SMTP_PORT ?? 465);
  return (globalForMail.mailTransport ??= nodemailer.createTransport({
    host,
    port,
    // Port 465 is encrypted from the first byte; 587 upgrades with STARTTLS
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  }));
}

// Who the emails are from. It has no default on purpose: it is a choice for
// whoever runs the site. The support address is where messages arrive and
// replies go, not the sender.
function sender(): EmailAddress | null {
  const email = process.env.MAIL_FROM_EMAIL;
  if (!email) return null;
  return { email, name: process.env.MAIL_FROM_NAME ?? "TransferLinkz" };
}

const address = ({ email, name }: EmailAddress) => ({
  address: email,
  name: name ?? "",
});

// The message as nodemailer will send it. Kept separate so it can be tested
// without a mail server.
export function buildMessage(email: Email, from: EmailAddress) {
  return {
    from: address(from),
    to: address(email.to),
    replyTo: email.replyTo ? address(email.replyTo) : undefined,
    // A line break in a subject has no business being there
    subject: email.subject.replace(/[\r\n]+/g, " ").trim(),
    html: email.html,
    text: email.text,
    headers: email.automated ? { "Auto-Submitted": "auto-generated" } : {},
  };
}

// Never throws: a failed email must not break the form that triggered it. The
// caller decides how much the failure matters.
export async function sendEmail(email: Email): Promise<SendResult> {
  const from = sender();
  if (!from) {
    console.error("Email not sent: MAIL_FROM_EMAIL is not set");
    return { ok: false, reason: "not-configured" };
  }

  const mailer = transport();
  if (!mailer) {
    console.error(
      "Email not sent: ZOHO_MAIL_SMTP_HOST, ZOHO_MAIL_USER or ZOHO_MAIL_PASSWORD is not set",
    );
    return { ok: false, reason: "not-configured" };
  }

  try {
    await mailer.sendMail(buildMessage(email, from));
    return { ok: true };
  } catch (error) {
    // The SMTP code and Zoho's explanation are useful ("535 Authentication
    // Failed", "553 Sender is not allowed to relay"); the password never
    // appears in either
    const e = error as {
      code?: string;
      responseCode?: number;
      response?: string;
    };
    console.error(
      `Email could not be sent (${e.code ?? "error"} ${e.responseCode ?? ""}): ${e.response ?? (error instanceof Error ? error.message : "unknown")}`,
    );
    return { ok: false, reason: e.code ?? "failed" };
  }
}
