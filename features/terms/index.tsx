import { CtaSection } from "@/components/cta-section";
import { LegalDocument } from "@/components/legal-document";
import { TERMS_OF_SERVICE } from "./content";

export function Terms() {
  return (
    <>
      <LegalDocument content={TERMS_OF_SERVICE} path="/terms" />
      <CtaSection />
    </>
  );
}
