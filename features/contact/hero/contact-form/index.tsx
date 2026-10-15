"use client";

import { useState, type SubmitEvent } from "react";
import { FormField } from "@/components/form-field";
import { CONTROL_CLASS } from "@/components/form-field/styles";
import { contactMessageHref } from "@/lib/contact";
import { HelpIcon } from "./help-icon";

const ROLES = [
  "Tour Operator",
  "Transfer Supplier",
  "Driver",
  "Travel Agency",
  "Other",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  // There is no backend yet: the answers open as an email draft to the team
  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();

    window.location.href = contactMessageHref({
      name: field("name"),
      email: field("email"),
      company: field("company"),
      role: field("role"),
      message: field("message"),
    });
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded bg-white px-5 py-8 min-[1180px]:h-[544px] min-[1180px]:px-[30px] min-[1180px]:pt-[38px] min-[1180px]:pb-0"
    >
      <h2 className="text-xl leading-7 font-semibold text-black">
        Send us a message
      </h2>

      <div className="mt-9 grid gap-x-5 gap-y-[22px] min-[640px]:grid-cols-2">
        <FormField label="Full Name" htmlFor="contact-name">
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Smith"
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField label="Work email" htmlFor="contact-email">
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@companymail.com"
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField label="Company" htmlFor="contact-company">
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Company name"
            className={`${CONTROL_CLASS} h-[37px]`}
          />
        </FormField>

        <FormField label="I am a" htmlFor="contact-role">
          <select
            id="contact-role"
            name="role"
            defaultValue={ROLES[0]}
            className={`${CONTROL_CLASS} h-[37px] appearance-none`}
          >
            {ROLES.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </FormField>

        <FormField
          label="How can we help?"
          htmlFor="contact-message"
          accessory={
            <HelpIcon hint="Share your transfer volumes, destinations and any dates you have in mind." />
          }
          gapClass="gap-[9px]"
          className="min-[640px]:col-span-2"
        >
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder="Tell us about your operations"
            className={`${CONTROL_CLASS} h-[81px] resize-y py-2.5`}
          />
        </FormField>
      </div>

      <p className="mt-[38px] text-xs leading-4 text-navy">
        We’ll only use your details to reply to your message.
      </p>

      <button
        type="submit"
        className="mt-[38px] h-[43px] w-full btn-lift btn-lift-brand cursor-pointer rounded-lg bg-brand text-sm text-white hover:bg-brand-hover"
      >
        Send message
      </button>

      <p
        role="status"
        className="mt-3 min-h-4 text-center text-xs leading-4 text-navy"
      >
        {sent
          ? "Your email app should open with your message ready to send."
          : ""}
      </p>
    </form>
  );
}
