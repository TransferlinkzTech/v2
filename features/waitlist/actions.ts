"use server";

import { getPool } from "@/lib/db";
import { SUPPORT_EMAIL } from "@/lib/contact";
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
    await getPool().query(
      `insert into waitlist_signups (name, email, company)
       values ($1, $2, $3)
       on conflict do nothing`,
      [name, email, company],
    );
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
