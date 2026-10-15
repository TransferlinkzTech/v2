import { HeroBackground } from "@/components/hero-background";
import { Reveal } from "@/components/reveal";

// Plays its intro on load, like the home hero.
export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <HeroBackground tone="warm" />

      <div className="relative mx-auto max-w-[1240px] border-x border-line px-4 pt-24 pb-24 text-center lg:h-[635px] lg:pt-[166px] lg:pb-0">
        <Reveal
          as="p"
          immediate
          className="text-xs leading-5 text-white uppercase"
        >
          About us
        </Reveal>

        <Reveal
          as="h1"
          immediate
          delay={100}
          className="mt-2.5 text-[34px] leading-[1.2] font-semibold text-balance text-white lg:text-[48px] lg:leading-[58px] lg:text-wrap"
        >
          Guest transfers deserve
          <br className="hidden lg:block" /> better than spreadsheets.
        </Reveal>

        <Reveal
          as="p"
          immediate
          delay={200}
          className="mx-auto mt-[11px] max-w-[680px] text-base leading-8 font-light text-white"
        >
          TransferLinkz is the connected operating layer for guest transfers. We
          bring tour operators, transfer suppliers, drivers and guests into one
          live workflow, from the first manifest to the final drop-off.
        </Reveal>
      </div>
    </section>
  );
}
