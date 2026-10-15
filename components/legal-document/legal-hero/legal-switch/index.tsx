import Link from "next/link";
import { LEGAL_PAGES } from "../../pages";

type LegalSwitchProps = {
  path: string;
};

// Links between the legal documents
export function LegalSwitch({ path }: LegalSwitchProps) {
  return (
    <nav
      aria-label="Legal documents"
      className="inline-flex flex-wrap justify-center gap-3"
    >
      {LEGAL_PAGES.map((page) => {
        const current = page.href === path;
        return (
          <Link
            key={page.href}
            href={page.href}
            aria-current={current ? "page" : undefined}
            className={`rounded-lg border px-5 py-2.5 text-sm transition-colors ${
              current
                ? "border-brand bg-brand text-white"
                : "border-frame text-white hover:border-white"
            }`}
          >
            {page.label}
          </Link>
        );
      })}
    </nav>
  );
}
