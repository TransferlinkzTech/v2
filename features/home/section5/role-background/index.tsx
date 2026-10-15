import type { CSSProperties } from "react";
import { ROLES } from "../roles";

const RAYS = "url('/images/rays.svg')";
// The rays converge 380px from the frame's right edge, behind the product.
// Rays start in a ring around that point and fade out with distance.
const RAYS_FADE =
  "radial-gradient(circle at calc(100% - 380px) 770px, transparent 240px, #000 275px, #000 700px, rgba(0,0,0,0.65) 950px, transparent 1250px)";

function raysLayer(color: string): CSSProperties {
  return {
    background: color,
    WebkitMaskImage: `${RAYS}, ${RAYS_FADE}`,
    maskImage: `${RAYS}, ${RAYS_FADE}`,
    WebkitMaskSize: "1240px 1310px, 100% 100%",
    maskSize: "1240px 1310px, 100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "100% 0, 0 0",
    maskPosition: "100% 0, 0 0",
    WebkitMaskComposite: "source-in",
    maskComposite: "intersect",
  };
}

type RoleBackgroundProps = {
  activeId: string;
};

// Sits inside the section frame. Every role's background is always mounted and
// crossfaded with opacity, so switching tabs doesn't flash.
export function RoleBackground({ activeId }: RoleBackgroundProps) {
  const active = ROLES.find((role) => role.id === activeId) ?? ROLES[0];
  const showPattern = active.background === "pattern";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden min-[1180px]:block"
    >
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: showPattern ? 1 : 0 }}
      >
        <div className="absolute inset-0 bg-[url('/images/footer-pattern.svg')] bg-[length:7200px_4600px] bg-[position:30%_10%]" />
        <div className="role-pattern-glow absolute inset-0" />
      </div>

      {ROLES.filter((role) => role.background === "rays").map((role) => (
        <div
          key={role.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: role.id === activeId ? 0.2 : 0 }}
        >
          <div
            className="absolute inset-0"
            style={raysLayer(role.raysColor ?? "#fff")}
          />
        </div>
      ))}
    </div>
  );
}
