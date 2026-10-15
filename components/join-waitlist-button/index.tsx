import Link from "next/link";

export function JoinWaitlistButton() {
  return (
    <Link
      href="#"
      className="rounded-lg bg-brand px-3 py-2.5 text-xs whitespace-nowrap text-white transition-colors hover:bg-brand-hover sm:px-6 sm:py-3 sm:text-sm"
    >
      Join Waitlist
    </Link>
  );
}
