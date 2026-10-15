import type { Metadata } from "next";
import { NotFoundPage } from "@/features/not-found";

// Next adds noindex and the 404 status to this page itself
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return <NotFoundPage />;
}
