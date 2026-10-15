import type { LegalSection as LegalSectionContent } from "../../types";
import { slugify } from "../../slugify";
import { LegalBlocks } from "./legal-blocks";

type LegalSectionProps = {
  number: number;
  section: LegalSectionContent;
};

export function LegalSection({ number, section }: LegalSectionProps) {
  const id = slugify(section.title);

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mt-10 scroll-mt-8 border-t border-line-light pt-10"
    >
      <h2
        id={`${id}-heading`}
        className="text-2xl leading-8 font-semibold text-black"
      >
        <span className="text-brand">{number}.</span> {section.title}
      </h2>

      <LegalBlocks blocks={section.blocks} className="mt-4" />

      {section.subsections?.map((subsection) => (
        <div key={subsection.title} className="mt-8">
          <h3 className="text-base leading-7 font-semibold text-black">
            {subsection.title}
          </h3>
          <LegalBlocks blocks={subsection.blocks} className="mt-3" />
        </div>
      ))}
    </section>
  );
}
