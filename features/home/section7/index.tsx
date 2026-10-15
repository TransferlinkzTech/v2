import { Reveal } from "@/components/reveal";
import { IncludedFeatures } from "./included-features";
import { PLANS } from "./plans";
import { PlanCard } from "./plan-card";

export function Section7() {
  return (
    <section className="overflow-hidden border-y border-[#dfe5f3] bg-[#eef4ff]">
      <div className="mx-auto max-w-[1240px] border-x border-[#dfe5f3] px-[29px] pt-14 pb-12 lg:pt-[55px] lg:pb-[49px]">
        <Reveal className="text-center text-navy">
          <p className="text-xs leading-5 font-light uppercase">Pricing</p>
          <h2 className="mt-[30px] text-[28px] leading-10 font-semibold text-black lg:text-[40px] lg:leading-[48px]">
            Simple pricing, no surprises
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 font-light">
            All plans include unlimited users, full API access, and dedicated
            onboarding support.
          </p>
        </Reveal>

        {/* gap-px over a divider-coloured background draws the hairlines
            between cards at every column count, so the grid is revealed as one
            unit (revealing cards one by one would flash that background) */}
        <Reveal
          delay={100}
          className="mt-10 grid gap-px bg-[#dfe5f3] min-[640px]:grid-cols-2 min-[1180px]:mt-[50px] min-[1180px]:grid-cols-4"
        >
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </Reveal>

        <div className="mt-8 min-[1180px]:mt-[50px]">
          <IncludedFeatures />
        </div>
      </div>
    </section>
  );
}
