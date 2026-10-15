import { Contact } from "@/features/contact";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact us",
  description:
    "Tell us about your business, transfer volumes and destinations. We reply within one working day.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
