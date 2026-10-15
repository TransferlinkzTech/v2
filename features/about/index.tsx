import { CtaSection } from "@/components/cta-section";
import { FaqSection } from "@/components/faq-section";
import { AboutHero } from "./hero";
import { Section2 } from "./section2";
import { Section3 } from "./section3";

// Sections are added here one at a time as they are built, then composed in
// this file. The header and footer live in the root layout.
export function About() {
  return (
    <>
      <AboutHero />
      <Section2 />
      <Section3 />
      <FaqSection />
      <CtaSection />
    </>
  );
}
