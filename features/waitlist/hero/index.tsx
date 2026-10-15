import { HeroBackground } from "@/components/hero-background";
import { Reveal } from "@/components/reveal";
import { WaitlistForm } from "./waitlist-form";

// Plays its intro on load, like the other heroes.
export function WaitlistHero() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <HeroBackground tone="warm" />

      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-10 border-x border-line px-4 py-16 min-[1180px]:min-h-[635px] min-[1180px]:flex-row min-[1180px]:items-center min-[1180px]:justify-between min-[1180px]:gap-0 min-[1180px]:px-[29px] min-[1180px]:py-16">
        <div className="text-white">
          <Reveal
            as="p"
            immediate
            className="text-xs leading-5 uppercase min-[1180px]:pl-[17px]"
          >
            Early access
          </Reveal>

          <Reveal
            as="h1"
            immediate
            delay={100}
            className="mt-[11px] text-[34px] leading-[1.2] font-semibold text-balance min-[1180px]:max-w-[500px] min-[1180px]:text-[48px] min-[1180px]:leading-[58px] min-[1180px]:text-wrap"
          >
            Join the waitlist.
          </Reveal>

          <Reveal
            as="p"
            immediate
            delay={200}
            className="mt-3 max-w-[500px] text-base leading-8 font-light"
          >
            We’re onboarding a small group of pilot partners for 2026. Tell us
            who you are and we’ll be in touch about early access.
          </Reveal>
        </div>

        <Reveal immediate delay={150} className="min-[1180px]:w-[570px]">
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
