import { CtaSection } from "@/components/cta-section";
import { LegalDocument } from "@/components/legal-document";
import { PRIVACY_POLICY } from "./content";

export function Privacy() {
  return (
    <>
      <LegalDocument content={PRIVACY_POLICY} path="/privacy" />
      <CtaSection />
    </>
  );
}
