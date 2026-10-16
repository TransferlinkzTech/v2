// Deliberately loose: one "@" with something either side and a dot in the
// domain. The real check is whether the address receives our reply.
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A text field from a submitted form, trimmed ("" when missing)
export function readText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}
