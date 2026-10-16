// Pasting a certificate often adds blank lines or stray spaces, and a PEM with
// either is rejected. Turn "\n" into real line breaks and keep only the lines
// with content.
export function normalisePem(value: string | undefined) {
  if (!value) return undefined;
  return value
    .replace(/\\n/g, "\n")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join("\n");
}
