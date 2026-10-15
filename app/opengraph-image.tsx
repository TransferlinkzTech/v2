import { ImageResponse } from "next/og";
import { loadOgFont, loadOgLogo } from "@/lib/og/load-assets";
import { site } from "@/lib/site";

export const alt = site.ogTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Read once at module level so the image is generated at build time
const [font, logo] = await Promise.all([loadOgFont(), loadOgLogo()]);

// The default share image for every page (links, chat apps, social cards)
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#040a1a",
        padding: "72px",
        fontFamily: "Plus Jakarta Sans",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -220,
          bottom: -320,
          width: 760,
          height: 760,
          borderRadius: 380,
          background:
            "radial-gradient(circle, rgba(37,99,235,0.55) 0%, rgba(37,99,235,0) 70%)",
        }}
      />

      <img src={logo} width={290} height={63} alt="" />

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.1,
            color: "#ffffff",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          One connected operation behind every guest journey.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#a7a9b7" }}>
          Airport transfer coordination for tour operators.
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: font, weight: 600, style: "normal" },
      ],
    },
  );
}
