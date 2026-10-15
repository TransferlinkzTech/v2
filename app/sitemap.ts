import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Add a route here when a page is added. lastModified is left out on purpose:
// there is no honest per-page date to report yet, and a wrong one is worse
// than none.
const ROUTES = [
  "/",
  "/solutions",
  "/waitlist",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({ url: absoluteUrl(path) }));
}
