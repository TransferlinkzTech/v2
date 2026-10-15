import Image from "next/image";
import type { CSSProperties } from "react";
import { GuestMockup } from "@/components/guest-mockup";
import { Reveal } from "@/components/reveal";
import type { Role } from "../roles";

type RoleVisualProps = {
  role: Role;
};

// Remounts on every role change (keyed by the parent), so the reveal replays.
export function RoleVisual({ role }: RoleVisualProps) {
  const { visual } = role;

  return (
    <Reveal
      delay={150}
      className="mx-auto mt-10 w-full max-w-[var(--w)] min-[1180px]:absolute min-[1180px]:top-[var(--y)] min-[1180px]:right-[var(--r)] min-[1180px]:mx-0 min-[1180px]:mt-0 min-[1180px]:w-[var(--w)]"
      style={
        {
          "--w": `${visual.width}px`,
          "--r": `${visual.right}px`,
          "--y": `${visual.y}px`,
        } as CSSProperties
      }
    >
      {visual.kind === "image" ? (
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          unoptimized
          className={`h-auto w-full ${visual.frameClass ?? ""}`}
          style={
            visual.tilt ? { transform: `rotate(${visual.tilt}deg)` } : undefined
          }
        />
      ) : (
        <GuestMockup label={visual.label} />
      )}
    </Reveal>
  );
}
