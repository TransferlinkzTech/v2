import { JoinWaitlistButton } from "@/components/join-waitlist-button";
import { Reveal } from "@/components/reveal";
import { SeeFeaturesButton } from "@/components/see-features-button";
import { CtaIllustration } from "./cta-illustration";

// Shared by the home, About and Contact pages
export function CtaSection() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative mx-auto flex max-w-[1240px] flex-col border-x border-line-light px-[29px] pt-16 min-[1180px]:h-[614px] min-[1180px]:pt-[101px]">
        <div className="relative z-10 text-center text-navy">
          <Reveal
            as="h2"
            className="mx-auto max-w-[860px] text-[28px] leading-10 font-semibold text-balance text-black min-[1180px]:text-[48px] min-[1180px]:leading-[58px] min-[1180px]:text-wrap"
          >
            Ready to take your operations to the next level?
          </Reveal>
          <Reveal
            as="p"
            delay={100}
            className="mx-auto mt-4 max-w-[700px] text-sm leading-6 font-light min-[1180px]:mt-[9px]"
          >
            Bring bookings, suppliers, drivers, manifests, and guest journeys
            together in one connected platform.
          </Reveal>

          <Reveal
            delay={200}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 min-[1180px]:mt-[19px] min-[1180px]:gap-10"
          >
            <JoinWaitlistButton />
            <SeeFeaturesButton />
          </Reveal>
        </div>

        <Reveal
          delay={300}
          className="mt-2 min-[1180px]:absolute min-[1180px]:inset-x-[29px] min-[1180px]:bottom-0 min-[1180px]:mt-0"
        >
          <CtaIllustration />
        </Reveal>
      </div>
    </section>
  );
}
