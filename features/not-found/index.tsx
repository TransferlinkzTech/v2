import Link from "next/link";
import { HeroBackground } from "@/components/hero-background";
import { Reveal } from "@/components/reveal";

// Shown for any address that has no page. Plays its intro on load, like the
// heroes, and keeps the header and footer from the root layout.
export function NotFoundPage() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[520px] max-w-[1240px] flex-col items-center justify-center border-x border-line px-4 py-20 text-center lg:min-h-[640px]">
        <Reveal
          as="p"
          immediate
          aria-hidden="true"
          className="text-[88px] leading-none font-semibold text-[#6ea4f7] lg:text-[144px]"
        >
          404
        </Reveal>

        <Reveal
          as="p"
          immediate
          delay={100}
          className="mt-4 text-xs leading-5 text-white uppercase"
        >
          Page not found
        </Reveal>

        <Reveal
          as="h1"
          immediate
          delay={150}
          className="mt-2.5 text-[34px] leading-[1.2] font-semibold text-balance text-white lg:text-[48px] lg:leading-[58px]"
        >
          We can’t find that page.
        </Reveal>

        <Reveal
          as="p"
          immediate
          delay={250}
          className="mx-auto mt-[11px] max-w-[560px] text-base leading-8 font-light text-white"
        >
          The link may be out of date, or the page may have moved. Head back
          home, or contact us if you were expecting something to be here.
        </Reveal>

        <Reveal
          immediate
          delay={350}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-10"
        >
          <Link
            href="/"
            className="rounded-lg btn-lift btn-lift-brand bg-brand px-3 py-2.5 text-xs whitespace-nowrap text-white hover:bg-brand-hover sm:px-6 sm:py-3 sm:text-sm"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-frame px-3 py-2.5 text-xs whitespace-nowrap text-white btn-lift hover:border-white sm:px-6 sm:py-3 sm:text-sm"
          >
            Contact us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
