import type { LegalSection } from "../../types";
import { slugify } from "../../slugify";

type ContentsListProps = {
  sections: LegalSection[];
  className?: string;
};

export function ContentsList({ sections, className }: ContentsListProps) {
  return (
    <ol className={`flex flex-col gap-3 ${className ?? ""}`}>
      {sections.map((section, index) => (
        <li key={section.title}>
          <a
            href={`#${slugify(section.title)}`}
            className="flex gap-2 text-sm leading-5 font-light text-navy transition-colors hover:text-brand"
          >
            <span className="w-5 shrink-0 tabular-nums">{index + 1}.</span>
            {section.title}
          </a>
        </li>
      ))}
    </ol>
  );
}
