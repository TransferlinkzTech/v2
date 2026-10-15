import type { Metadata } from "next";
import { Home } from "@/features/home";

// The title, description and share card come from the root layout
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return <Home />;
}
