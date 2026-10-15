import Link from "next/link";

export type FooterLink = {
  label: string;
  href: string;
};

type FooterLinksProps = {
  links: FooterLink[];
  className?: string;
};

export function FooterLinks({ links, className }: FooterLinksProps) {
  return (
    <ul className={`flex flex-col gap-7 ${className ?? ""}`}>
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-base whitespace-nowrap text-white transition-colors hover:text-white/70"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
