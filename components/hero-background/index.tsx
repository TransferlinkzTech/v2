import { CursorSpotlight } from "./cursor-spotlight";

// Six interleaved groups of dots (see .hero-dots in globals.css), each with its
// own twinkle rhythm, plus a glow that follows the cursor. "warm" tints the
// dots salmon and gathers them at the bottom centre, as on the About page.
const DOT_GROUPS = [0, 1, 2, 3, 4, 5];

type HeroBackgroundProps = {
  tone?: "cool" | "warm";
};

export function HeroBackground({ tone = "cool" }: HeroBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${tone === "warm" ? "hero-dots-warm" : ""}`}
    >
      {DOT_GROUPS.map((group) => (
        <div key={group} className={`hero-dots hero-dots-${group}`} />
      ))}
      <CursorSpotlight />
    </div>
  );
}
