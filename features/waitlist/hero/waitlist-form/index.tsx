"use client";

import Link from "next/link";
import { useActionState } from "react";
import { FormField } from "@/components/form-field";
import { CONTROL_CLASS } from "@/components/form-field/styles";
import { joinWaitlist } from "../../actions";
import { INITIAL_WAITLIST_STATE } from "../../state";
import { WaitlistSuccess } from "./waitlist-success";

const CARD_CLASS =
  "rounded bg-white px-5 py-8 min-[1180px]:px-[30px] min-[1180px]:py-[38px]";

export function WaitlistForm() {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    INITIAL_WAITLIST_STATE,
  );

  if (state.status === "success") {
    return (
      <div className={CARD_CLASS}>
        <WaitlistSuccess />
      </div>
    );
  }

  // After an error React clears the form, so what was typed comes back from
  // the server and is put into the fields as their starting value
  const values =
    state.status === "error"
      ? state.values
      : { name: "", email: "", company: "" };
  const errors = state.status === "error" ? (state.fieldErrors ?? {}) : {};

  return (
    <form action={formAction} className={`relative ${CARD_CLASS}`}>
      <h2 className="text-xl leading-7 font-semibold text-black">
        Join the waitlist
      </h2>

      <div className="mt-9 grid gap-x-5 gap-y-[22px] min-[640px]:grid-cols-2">
        <FormField
          label="Full name"
          htmlFor="waitlist-name"
          error={errors.name}
        >
          <input
            id="waitlist-name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Jane Smith"
            defaultValue={values.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "waitlist-name-error" : undefined}
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField
          label="Work email"
          htmlFor="waitlist-email"
          error={errors.email}
        >
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            maxLength={254}
            autoComplete="email"
            placeholder="you@companymail.com"
            defaultValue={values.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "waitlist-email-error" : undefined}
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField
          label="Company (optional)"
          htmlFor="waitlist-company"
          error={errors.company}
          className="min-[640px]:col-span-2"
        >
          <input
            id="waitlist-company"
            name="company"
            type="text"
            maxLength={160}
            autoComplete="organization"
            placeholder="Company name"
            defaultValue={values.company}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={
              errors.company ? "waitlist-company-error" : undefined
            }
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>
      </div>

      {/* A trap for bots: people never see or fill this in (see the action) */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="mt-6 text-xs leading-4 text-navy">
        We’ll only use your details to contact you about early access. Read our{" "}
        <Link href="/privacy" className="underline underline-offset-2">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={pending}
        className="mt-6 h-[43px] w-full btn-lift btn-lift-brand cursor-pointer rounded-lg bg-brand text-sm text-white hover:bg-brand-hover disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Joining…" : "Join waitlist"}
      </button>

      <p
        role="status"
        className="mt-3 min-h-4 text-center text-xs leading-4 text-[#d92d20]"
      >
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  );
}
