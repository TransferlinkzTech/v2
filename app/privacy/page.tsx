import { Privacy } from "@/features/privacy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How TransferLinkz collects, uses and protects personal data across the platform.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <Privacy />;
}
