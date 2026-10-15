import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CardGlow } from "@/components/card-glow";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL(site.url),
	title: { default: site.title, template: `%s | ${site.name}` },
	description: site.description,
	keywords: [...site.keywords],
	applicationName: site.name,
	openGraph: {
		type: "website",
		siteName: site.name,
		title: site.ogTitle,
		description: site.ogDescription,
		url: "/",
		locale: site.locale,
	},
	twitter: {
		card: "summary_large_image",
		title: site.ogTitle,
		description: site.ogDescription,
	},
	// Indexing is the default; only the Google-specific extra is set here, so a
	// page's own noindex (the 404) is not contradicted
	robots: {
		googleBot: { "max-image-preview": "large" },
	},
};

export const viewport: Viewport = {
	themeColor: site.themeColor,
};

// Tells search engines who runs the site; the Organization is referenced by id
const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": absoluteUrl("/#organization"),
			name: site.name,
			url: site.url,
			email: site.email,
			logo: absoluteUrl("/icon.svg"),
			description: site.description,
			...(site.socials.length > 0 ? { sameAs: site.socials } : {}),
		},
		{
			"@type": "WebSite",
			"@id": absoluteUrl("/#website"),
			name: site.name,
			url: site.url,
			publisher: { "@id": absoluteUrl("/#organization") },
		},
	],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${plusJakartaSans.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col">
				{/* Scroll-reveal content starts hidden; without JS, show it as is */}
				<noscript>
					<style>
						{".reveal-hidden{opacity:1!important;translate:none!important}"}
					</style>
				</noscript>
				<Header />
				<main className="flex-1">{children}</main>
				<Footer />
				<JsonLd data={structuredData} />
				<CardGlow />
			</body>
		</html>
	);
}
