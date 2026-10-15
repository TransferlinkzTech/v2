import { Reveal } from "@/components/reveal";
import { Step } from "./step";
import { STEPS } from "./steps";

export function HowItWorks() {
  return (
    <section className="overflow-hidden bg-ink-900">
      <div className="mx-auto max-w-[1240px] border-x border-line px-[29px] py-16 min-[1180px]:py-[100px]">
        <Reveal className="text-white">
          <p className="text-xs leading-5 font-light text-muted uppercase">
            How it works
          </p>
          <h2 className="mt-3.5 max-w-[640px] text-[28px] leading-10 font-semibold lg:text-[40px] lg:leading-[48px]">
            From spreadsheet to drop-off in three steps.
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-10 min-[900px]:grid-cols-3 min-[900px]:gap-8 min-[1180px]:mt-[72px]">
          {STEPS.map((step, index) => (
            <Step
              key={step.title}
              number={index + 1}
              step={step}
              delay={index * 120}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
