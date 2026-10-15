import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadataOptions = {
  // Used as the page title; the layout's template adds "| TransferLinkz"
  title: string;
  description: string;
  // Route path, for example "/about"
  path: string;
};

// The default share image (app/opengraph-image.tsx). A child route's openGraph
// and twitter replace the layout's, including the file-based image, so every
// page points at it explicitly.
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: site.ogTitle,
};

// A child route's openGraph and twitter replace the layout's rather than
// merging with them, so each page restates the shared parts here.
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: socialTitle,
      description,
      url: path,
      locale: site.locale,
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [shareImage],
    },
  };
}
