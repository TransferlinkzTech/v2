import { Solutions } from "@/features/solutions";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Solutions",
  description:
    "One operation, the right tools for every role. See how TransferLinkz works for tour operators, transfer suppliers, drivers and guests.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <Solutions />;
}
