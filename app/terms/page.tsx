import { Terms } from "@/features/terms";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "The terms that govern access to and use of the TransferLinkz platform.",
  path: "/terms",
});

export default function TermsPage() {
  return <Terms />;
}
