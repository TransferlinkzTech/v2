import { SUPPORT_EMAIL } from "@/lib/contact";

// Profile pages, without the tracking parameters the share links carry
const socialLinks = {
  x: "https://x.com/transferlinkz",
  linkedin: "https://www.linkedin.com/company/transferlinkz",
  instagram: "https://www.instagram.com/transferlinkz",
} as const;

// One place for the site's identity. Page metadata, the share image, the
// sitemap and the structured data all read from here.
export const site = {
  name: "TransferLinkz",
  // Set NEXT_PUBLIC_SITE_URL on the host; the fallback is the planned domain
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://transferlinkz.com",
  email: SUPPORT_EMAIL,
  locale: "en_GB",
  title: "TransferLinkz: Airport Transfer Coordination for Tour Operators",
  description:
    "One connected operation behind every guest journey. TransferLinkz brings tour operators, transfer suppliers, vehicles, drivers and guests into one live workflow.",
  ogTitle: "TransferLinkz: one connected operation behind every guest journey",
  ogDescription:
    "Bring tour operators, transfer suppliers, drivers and guests into one live workflow, from the first manifest to the final drop-off.",
  keywords: [
    "airport transfer software",
    "transfer management platform",
    "tour operator software",
    "DMC transfer coordination",
    "guest transfer management",
    "transfer supplier platform",
  ],
  themeColor: "#040a1a",
  socialLinks,
  // Listed in the Organization structured data (sameAs)
  socials: Object.values(socialLinks),
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
