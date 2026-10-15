import Link from "next/link";

type NavLinkProps = {
  label: string;
  href: string;
};

export function NavLink({ label, href }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-xs whitespace-nowrap text-white transition-colors hover:text-white/70 sm:text-sm"
    >
      {label}
    </Link>
  );
}
