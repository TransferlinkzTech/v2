import { Waitlist } from "@/features/waitlist";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Join the waitlist",
  description:
    "TransferLinkz is onboarding a small group of pilot partners for 2026. Join the waitlist and we’ll be in touch about early access.",
  path: "/waitlist",
});

export default function WaitlistPage() {
  return <Waitlist />;
}
