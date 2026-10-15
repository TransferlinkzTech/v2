import { JoinWaitlistButton } from "@/components/join-waitlist-button";
import { Logo } from "@/components/logo";
import { AnnouncementBar } from "./announcement-bar";
import { NavLink } from "./nav-link";

const NAV_LINKS = [
  { label: "Contact Us", href: "#" },
  { label: "About us", href: "#" },
];

export function Header() {
  return (
    <header>
      <AnnouncementBar />
      <div className="border-b border-line bg-ink-900">
        <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between px-4">
          <Logo width={122} className="h-auto w-[92px] sm:w-[122px]" />

          <nav aria-label="Main" className="flex items-center gap-3 sm:gap-12">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.label} label={link.label} href={link.href} />
            ))}
            <JoinWaitlistButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
