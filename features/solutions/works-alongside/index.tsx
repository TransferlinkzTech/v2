import { Reveal } from "@/components/reveal";
import { ReassuranceCard } from "./reassurance-card";
import { REASSURANCES } from "./reassurances";

export function WorksAlongside() {
  return (
    <section className="overflow-hidden bg-[#f4f6fa]">
      <div className="mx-auto max-w-[1240px] border-x border-[#e2e6f1] px-[29px] py-16 min-[1180px]:py-[100px]">
        <Reveal className="text-navy">
          <p className="text-xs leading-5 font-light uppercase">
            Works alongside what you already use
          </p>
          <h2 className="mt-3.5 text-[28px] leading-10 font-semibold lg:text-[40px] lg:leading-[48px]">
            Start with what you already have.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-3 min-[1180px]:mt-[72px]">
          {REASSURANCES.map((item, index) => (
            <ReassuranceCard key={item.title} item={item} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
