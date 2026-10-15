import { CursorSpotlight } from "./cursor-spotlight";

// Six interleaved groups of dots (see .hero-dots in globals.css), each with its
// own twinkle rhythm, plus a glow that follows the cursor.
const DOT_GROUPS = [0, 1, 2, 3, 4, 5];

export function HeroBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {DOT_GROUPS.map((group) => (
        <div key={group} className={`hero-dots hero-dots-${group}`} />
      ))}
      <CursorSpotlight />
    </div>
  );
}
