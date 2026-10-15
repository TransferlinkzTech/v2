import { LegalBody } from "./legal-body";
import { LegalHero } from "./legal-hero";
import type { LegalDocumentContent } from "./types";

type LegalDocumentProps = {
  content: LegalDocumentContent;
  // Route of this document, so the switcher can mark it as current
  path: string;
};

// Shared by the Privacy Policy and Terms of Service pages
export function LegalDocument({ content, path }: LegalDocumentProps) {
  return (
    <>
      <LegalHero
        title={content.title}
        effective={content.effective}
        path={path}
      />
      <LegalBody content={content} />
    </>
  );
}
