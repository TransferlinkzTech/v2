import { Logo } from "@/components/logo";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";
import { FooterLinks, type FooterLink } from "./footer-links";

const COMPANY_LINKS: FooterLink[] = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Legal", href: "/terms" },
];

const SOCIAL_LINKS: FooterLink[] = [
  { label: "Twitter (X)", href: site.socialLinks.x, external: true },
  { label: "LinkedIn", href: site.socialLinks.linkedin, external: true },
  { label: "Instagram", href: site.socialLinks.instagram, external: true },
];

export function Footer() {
  return (
    <footer className="bg-ink-900 bg-[url('/images/footer-pattern.svg')] bg-top">
      <div className="mx-auto max-w-[1240px] border-x border-frame/25 px-[19px] pt-12 pb-12 sm:pt-[105px] sm:pb-[99px]">
        <Reveal
          variant="fade"
          className="flex flex-col gap-12 sm:flex-row sm:justify-between"
        >
          <div className="pt-1">
            <Logo width={166} />
            <p className="mt-7 max-w-[290px] text-base leading-8 text-white">
              Airport transfer coordination for tour operators and travel
              agencies.
            </p>
          </div>

          <nav aria-label="Footer" className="flex">
            <FooterLinks
              links={COMPANY_LINKS}
              className="w-[160px] sm:w-[232px]"
            />
            <FooterLinks links={SOCIAL_LINKS} className="sm:w-[107px]" />
          </nav>
        </Reveal>
      </div>
    </footer>
  );
}
