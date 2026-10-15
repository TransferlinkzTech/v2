import { Reveal } from "@/components/reveal";
import type { HowItWorksStep } from "../steps";

type StepProps = {
  number: number;
  step: HowItWorksStep;
  // Reveal delay in ms, to stagger the steps
  delay?: number;
};

export function Step({ number, step, delay }: StepProps) {
  return (
    <Reveal
      as="li"
      delay={delay}
      className="relative border-t border-frame/60 pt-10"
    >
      <span
        aria-hidden="true"
        className="absolute -top-[5px] left-0 size-2.5 rounded-full bg-brand ring-4 ring-ink-900"
      />
      <p className="text-sm leading-5 text-[#6ea4f7]">
        {String(number).padStart(2, "0")}
      </p>
      <h3 className="mt-3 text-xl leading-6 font-bold text-white">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 font-light text-muted">
        {step.description}
      </p>
    </Reveal>
  );
}
