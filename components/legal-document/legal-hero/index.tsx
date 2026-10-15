import { HeroBackground } from "@/components/hero-background";
import { Reveal } from "@/components/reveal";
import { LegalSwitch } from "./legal-switch";

type LegalHeroProps = {
  title: string;
  effective: string;
  path: string;
};

// Plays its intro on load, like the other heroes.
export function LegalHero({ title, effective, path }: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <HeroBackground tone="warm" />

      <div className="relative mx-auto max-w-[1240px] border-x border-line px-4 pt-20 pb-20 text-center lg:pt-[120px] lg:pb-[96px]">
        <Reveal
          as="p"
          immediate
          className="text-xs leading-5 text-white uppercase"
        >
          Legal
        </Reveal>

        <Reveal
          as="h1"
          immediate
          delay={100}
          className="mt-2.5 text-[34px] leading-[1.2] font-semibold text-balance text-white lg:text-[48px] lg:leading-[58px]"
        >
          {title}
        </Reveal>

        <Reveal
          as="p"
          immediate
          delay={200}
          className="mt-[11px] text-base leading-8 font-light text-white"
        >
          Effective date: {effective}
        </Reveal>

        <Reveal immediate delay={300} className="mt-8">
          <LegalSwitch path={path} />
        </Reveal>
      </div>
    </section>
  );
}
