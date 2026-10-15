import { About } from "@/features/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About us",
  description:
    "TransferLinkz is the connected operating layer for guest transfers, bringing tour operators, transfer suppliers, drivers and guests into one live workflow.",
  path: "/about",
});

export default function AboutPage() {
  return <About />;
}
