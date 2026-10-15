import Link from "next/link";

export type FooterLink = {
  label: string;
  href: string;
  // Another site: opens in a new tab
  external?: boolean;
};

type FooterLinksProps = {
  links: FooterLink[];
  className?: string;
};

const LINK_CLASS =
  "text-base whitespace-nowrap text-white transition-colors hover:text-white/70";

export function FooterLinks({ links, className }: FooterLinksProps) {
  return (
    <ul className={`flex flex-col gap-7 ${className ?? ""}`}>
      {links.map((link) => (
        <li key={link.label}>
          {link.external ? (
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={LINK_CLASS}
            >
              {link.label}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link href={link.href} className={LINK_CLASS}>
              {link.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
