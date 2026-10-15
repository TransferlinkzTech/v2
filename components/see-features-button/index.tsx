import Link from "next/link";
import { ArrowRightIcon } from "./arrow-right-icon";

export function SeeFeaturesButton() {
  return (
    <Link
      href="/solutions"
      className="group btn-lift btn-lift-soft inline-flex items-center gap-2 rounded-lg border border-[#d0d6e8] bg-white px-3 py-[9px] text-xs whitespace-nowrap text-[#313858] hover:bg-[#eef1fa] sm:gap-3.5 sm:px-6 sm:py-3 sm:text-sm"
    >
      See features
      <ArrowRightIcon className="size-4 text-[#7983a7] transition-transform duration-200 motion-safe:group-hover:translate-x-1 sm:size-5" />
    </Link>
  );
}
