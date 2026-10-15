import Link from "next/link";
import { CheckBadgeIcon } from "@/components/check-badge-icon";

// Replaces the form once the signup is saved
export function WaitlistSuccess() {
  return (
    <div role="status" className="py-6 text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#eef4ff] text-brand">
        <CheckBadgeIcon className="size-6" />
      </div>
      <h2 className="mt-5 text-xl leading-7 font-semibold text-black">
        You’re on the list
      </h2>
      <p className="mx-auto mt-3 max-w-[340px] text-sm leading-6 font-light text-navy">
        Thanks for joining. We’ll be in touch about early access.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-lg border border-[#d0d6e8] px-6 py-3 text-sm text-navy btn-lift btn-lift-soft hover:bg-[#eef1fa]"
      >
        Back to home
      </Link>
    </div>
  );
}
