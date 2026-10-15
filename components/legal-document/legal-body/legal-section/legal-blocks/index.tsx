import type { LegalBlock } from "../../../types";
import { RichText } from "../rich-text";

type LegalBlocksProps = {
  blocks: LegalBlock[];
  className?: string;
};

// Paragraphs and bullet lists
export function LegalBlocks({ blocks, className }: LegalBlocksProps) {
  return (
    <div className={`space-y-4 ${className ?? ""}`}>
      {blocks.map((block, index) =>
        block.type === "p" ? (
          <p key={index} className="text-base leading-7 font-light">
            <RichText text={block.text} />
          </p>
        ) : (
          <ul
            key={index}
            className="list-disc space-y-2 pl-5 text-base leading-7 font-light marker:text-brand"
          >
            {block.items.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
