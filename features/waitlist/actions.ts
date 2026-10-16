"use server";

import { after } from "next/server";
import { clientIp } from "@/lib/client-ip";
import { SUPPORT_EMAIL } from "@/lib/contact";
import { getPool } from "@/lib/db";
import { sendEmail } from "@/lib/mail/send-email";
import { waitlistConfirmationEmail } from "@/lib/mail/templates/waitlist-confirmation";
import { allow } from "@/lib/rate-limit";
import type { WaitlistState } from "./state";
import { validateWaitlist } from "./validate";

// Saves a waitlist signup. Used as the form's action, so it also works
// before the page's JavaScript has loaded.
export async function joinWaitlist(
  _previous: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  // A hidden field no person sees or fills in. Bots fill every field, so a
  // value here means a bot: report success and store nothing.
  if (formData.get("website")) {
    return { status: "success" };
  }

  const result = validateWaitlist(formData);
  if (!result.ok) {
    return {
      status: "error",
      fieldErrors: result.fieldErrors,
      values: result.values,
    };
  }

  const { name, email, company } = result.input;

  // The form sends an email to whatever address is typed in, so it is limited
  // per visitor to stop it being used to spam someone
  if (!allow(`waitlist:${await clientIp()}`, 10, 60 * 60 * 1000)) {
    return {
      status: "error",
      message: `Too many attempts. Try again later, or email ${SUPPORT_EMAIL}.`,
      values: { name, email, company: company ?? "" },
    };
  }

  try {
    // An address that is already on the list is left as it is, and still gets
    // the success message. That keeps this form from revealing who has signed
    // up, and stops anyone overwriting someone else's details.
    //
    // "on conflict do nothing" deliberately names no column. Naming one
    // ("on conflict (email)") makes Postgres check that column, which needs
    // SELECT permission, and the website's database user may only INSERT
    // (see db/setup-roles.sql). Email is the table's only unique rule, so the
    // result is the same.
    const insert = await getPool().query(
      `insert into waitlist_signups (name, email, company)
       values ($1, $2, $3)
       on conflict do nothing`,
      [name, email, company],
    );

    // Thank them once, when they are new. A repeat signup gets no email, so the
    // form can't be used to make us email the same person again and again. It
    // goes out after the response, so the visitor isn't kept waiting, and a
    // failure to send never undoes the signup.
    if (insert.rowCount === 1) {
      after(() =>
        sendEmail({
          to: { email, name },
          replyTo: { email: SUPPORT_EMAIL, name: "TransferLinkz support" },
          ...waitlistConfirmationEmail({ name }),
          automated: true,
        }),
      );
    }
  } catch (error) {
    console.error("Waitlist signup failed:", error);
    return {
      status: "error",
      message: `Something went wrong on our side. Try again in a moment, or email ${SUPPORT_EMAIL}.`,
      values: { name, email, company: company ?? "" },
    };
  }

  return { status: "success" };
}
