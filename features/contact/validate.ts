import { EMAIL_PATTERN, readText } from "@/lib/validation";
import { CONTACT_ROLES } from "./roles";
import type { ContactField, ContactValues } from "./state";

const MAX_LENGTH = {
  name: 120,
  email: 254,
  company: 160,
  message: 4000,
} as const;

export type ContactInput = {
  name: string;
  // Lower-cased
  email: string;
  // "" when left blank
  company: string;
  role: string;
  message: string;
};

type ValidationResult =
  | { ok: true; input: ContactInput }
  | {
      ok: false;
      fieldErrors: Partial<Record<ContactField, string>>;
      values: ContactValues;
    };

// Checks the submitted form. Runs on the server: the browser's own checks
// are a convenience and can't be trusted.
export function validateContact(formData: FormData): ValidationResult {
  const values: ContactValues = {
    name: readText(formData, "name"),
    email: readText(formData, "email"),
    company: readText(formData, "company"),
    role: readText(formData, "role"),
    message: readText(formData, "message"),
  };
  const fieldErrors: Partial<Record<ContactField, string>> = {};

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

  if (!CONTACT_ROLES.includes(values.role)) {
    fieldErrors.role = "Choose one of the options";
  }

  if (!values.message) {
    fieldErrors.message = "Tell us how we can help";
  } else if (values.message.length > MAX_LENGTH.message) {
    fieldErrors.message = `Keep your message under ${MAX_LENGTH.message} characters`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors, values };
  }

  return { ok: true, input: { ...values, email: values.email.toLowerCase() } };
}
