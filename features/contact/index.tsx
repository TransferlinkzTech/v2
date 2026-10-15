import { CtaSection } from "@/components/cta-section";
import { ContactHero } from "./hero";

// Sections are added here one at a time as they are built, then composed in
// this file. The header and footer live in the root layout.
export function Contact() {
  return (
    <>
      <ContactHero />
      <CtaSection />
    </>
  );
}
