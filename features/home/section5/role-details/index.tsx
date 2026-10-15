import { CheckBadgeIcon } from "@/components/check-badge-icon";
import { Reveal } from "@/components/reveal";
import type { Role } from "../roles";

type RoleDetailsProps = {
  role: Role;
};

// Remounts on every role change (keyed by the parent), so the reveal replays.
export function RoleDetails({ role }: RoleDetailsProps) {
  const { copy, iconColor } = role;

  return (
    <Reveal className="text-white">
      <p className="text-xs leading-5 font-light uppercase">{copy.eyebrow}</p>
      <h3 className="mt-[26px] text-[26px] leading-[34px] font-bold min-[1180px]:text-[32px] min-[1180px]:leading-[38px]">
        {/* Lines are hand-broken on desktop; on phones they flow as one sentence */}
        {copy.heading.map((line) => (
          <span key={line} className="min-[1180px]:block min-[1180px]:whitespace-nowrap">
            {line}{" "}
          </span>
        ))}
      </h3>
      <p className="mt-5 max-w-[445px] text-sm leading-6 font-light">
        {copy.paragraph}
      </p>

      <ul className="mt-9 flex flex-col gap-8 pl-4">
        {copy.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3.5">
            <span
              className="-mt-0.5 shrink-0"
              style={{ color: iconColor }}
            >
              <CheckBadgeIcon className="size-[22px]" />
            </span>
            <span className="text-sm leading-6 font-light">{bullet}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}
