import { readFile } from "node:fs/promises";
import { join } from "node:path";

// The share image renderer reads woff, not the woff2 that next/font serves, so
// one weight of Plus Jakarta Sans (SIL OFL) is kept next to this file.
export async function loadOgFont() {
  return readFile(join(process.cwd(), "lib/og/plus-jakarta-sans-600.woff"));
}

// The white-text logo, as a data URI the renderer can draw
export async function loadOgLogo() {
  const svg = await readFile(join(process.cwd(), "public/images/logo.svg"));
  return `data:image/svg+xml;base64,${svg.toString("base64")}`;
}
