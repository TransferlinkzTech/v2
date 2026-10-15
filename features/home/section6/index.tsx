import { Reveal } from "@/components/reveal";
import { FaqList } from "./faq-list";

export function Section6() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1240px] border-x border-line-light px-[29px] py-16 lg:pt-[90px] lg:pb-[100px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-0">
          <Reveal className="text-navy lg:mt-4">
            <p className="text-xs leading-5 font-light uppercase">
              A few things you might be wondering
            </p>
            <h2 className="mt-2 text-[28px] leading-10 font-semibold lg:mt-[9px] lg:text-[40px] lg:leading-[58px]">
              Good questions.
              <br />
              Clear answers.
            </h2>
          </Reveal>

          <div className="lg:w-[673px] lg:shrink-0">
            <FaqList />
          </div>
        </div>
      </div>
    </section>
  );
}
