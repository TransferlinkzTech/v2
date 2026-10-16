import { EMAIL_PATTERN, readText } from "@/lib/validation";
import type { WaitlistField, WaitlistValues } from "./state";

const MAX_LENGTH = { name: 120, email: 254, company: 160 } as const;

export type WaitlistInput = {
  name: string;
  // Lower-cased, so "Ana@X.com" and "ana@x.com" are the same person
  email: string;
  // null when left blank
  company: string | null;
};

type ValidationResult =
  | { ok: true; input: WaitlistInput }
  | {
      ok: false;
      fieldErrors: Partial<Record<WaitlistField, string>>;
      values: WaitlistValues;
    };

// Checks the submitted form. Runs on the server: the browser's own checks
// are a convenience and can't be trusted.
export function validateWaitlist(formData: FormData): ValidationResult {
  const values: WaitlistValues = {
    name: readText(formData, "name"),
    email: readText(formData, "email"),
    company: readText(formData, "company"),
  };
  const fieldErrors: Partial<Record<WaitlistField, string>> = {};

  if (!values.name) {
    fieldErrors.name = "Enter your name";
  } else if (values.name.length > MAX_LENGTH.name) {
    fieldErrors.name = `Keep your name under ${MAX_LENGTH.name} characters`;
  }

  if (!values.email) {
    fieldErrors.email = "Enter your email";
  } else if (
    values.email.length > MAX_LENGTH.email ||
    !EMAIL_PATTERN.test(values.email)
  ) {
    fieldErrors.email = "Enter a valid email, like you@company.com";
  }

  if (values.company.length > MAX_LENGTH.company) {
    fieldErrors.company = `Keep the company name under ${MAX_LENGTH.company} characters`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, values };
  }

  return {
    ok: true,
    input: {
      name: values.name,
      email: values.email.toLowerCase(),
      company: values.company || null,
    },
  };
}
