"use server";

import { after } from "next/server";
import { clientIp } from "@/lib/client-ip";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { sendEmail } from "@/lib/mail/send-email";
import { contactAcknowledgementEmail } from "@/lib/mail/templates/contact-acknowledgement";
import { contactNotificationEmail } from "@/lib/mail/templates/contact-notification";
import { allow } from "@/lib/rate-limit";
import type { ContactState } from "./state";
import { validateContact } from "./validate";

const HOUR = 60 * 60 * 1000;

// Emails the team the message, and the visitor a reply saying it arrived. Used
// as the form's action, so it also works before the page's JavaScript loads.
export async function sendContactMessage(
  _previous: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // A hidden field no person sees or fills in. Bots fill every field, so a
  // value here means a bot: report success and send nothing.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const result = validateContact(formData);
  if (!result.ok) {
    return {
      status: "error",
      fieldErrors: result.fieldErrors,
      values: result.values,
    };
  }

  const input = result.input;
  const { name, email } = input;

  // The form emails whatever address is typed in, so it is limited per visitor
  // and per address to stop it being used to spam someone
  const ip = await clientIp();
  if (
    !allow(`contact:ip:${ip}`, 5, HOUR) ||
    !allow(`contact:to:${email}`, 3, HOUR)
  ) {
    return {
      status: "error",
      message: `Too many messages. Try again later, or email ${SUPPORT_EMAIL}.`,
      values: result.input,
    };
  }

  // The message reaching the team is the point of the form, so this one is
  // waited for, and a failure is shown to the visitor. Replying to the email
  // goes to the visitor.
  const delivered = await sendEmail({
    to: { email: SUPPORT_EMAIL, name: "TransferLinkz support" },
    replyTo: { email, name },
    ...contactNotificationEmail(input),
    // (the message to the team: no flag, people reply to it)
  });
  if (!delivered.ok) {
    return {
      status: "error",
      message: `We couldn’t send your message just now. Try again, or email us at ${SUPPORT_EMAIL}.`,
      values: result.input,
    };
  }

  // The reply to the visitor goes out after the response. If it fails, the team
  // still has the message, so it isn't worth failing the form over.
  after(() =>
    sendEmail({
      to: { email, name },
      replyTo: { email: SUPPORT_EMAIL, name: "TransferLinkz support" },
      ...contactAcknowledgementEmail({ name }),
      automated: true,
    }),
  );

  return { status: "success" };
}
