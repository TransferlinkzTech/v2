import { Reveal } from "@/components/reveal";
import { PlusMinusIcon } from "./plus-minus-icon";

type FaqItemProps = {
  id: string;
  question: string;
  answer: string;
  open: boolean;
  // Reveal delay in ms, to cascade the list
  delay?: number;
  onToggle: () => void;
};

export function FaqItem({
  id,
  question,
  answer,
  open,
  delay,
  onToggle,
}: FaqItemProps) {
  return (
    <Reveal delay={delay} className="border-b border-[#d0d6e8]">
      <h3>
        <button
          type="button"
          id={`${id}-trigger`}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="flex w-full items-start justify-between gap-6 pt-6 pb-[13px] text-left text-base leading-6 font-semibold text-navy"
        >
          <span>{question}</span>
          <span className="mt-1 mr-1.5 shrink-0">
            <PlusMinusIcon open={open} />
          </span>
        </button>
      </h3>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="pb-5 text-sm leading-6 font-light text-navy">{answer}</p>
        </div>
      </div>
    </Reveal>
  );
}
