import type { LegalDocumentContent } from "../types";
import { ContentsList } from "./contents-list";
import { LegalBlocks } from "./legal-section/legal-blocks";
import { LegalSection } from "./legal-section";

type LegalBodyProps = {
  content: LegalDocumentContent;
};

export function LegalBody({ content }: LegalBodyProps) {
  return (
    // overflow-x-clip, not hidden, so the contents list can stay sticky
    <section className="overflow-x-clip bg-white">
      <div className="mx-auto max-w-[1240px] border-x border-line-light px-[29px] py-14 lg:py-[90px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <aside className="lg:w-[260px] lg:shrink-0">
            <details className="rounded-lg border border-line-light px-4 py-3 lg:hidden">
              <summary className="cursor-pointer text-sm font-semibold text-navy">
                On this page
              </summary>
              <ContentsList sections={content.sections} className="mt-4" />
            </details>

            <nav
              aria-label="On this page"
              className="sticky top-8 hidden lg:block"
            >
              <p className="text-xs leading-5 font-light text-navy uppercase">
                On this page
              </p>
              <ContentsList sections={content.sections} className="mt-4" />
            </nav>
          </aside>

          <article className="text-navy lg:w-[720px]">
            <LegalBlocks blocks={content.intro} />
            {content.sections.map((section, index) => (
              <LegalSection
                key={section.title}
                number={index + 1}
                section={section}
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}
