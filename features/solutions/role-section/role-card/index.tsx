import type { CSSProperties } from "react";
import { CheckBadgeIcon } from "@/components/check-badge-icon";
import { Reveal } from "@/components/reveal";
import type { SolutionCard } from "../../roles";

type RoleCardProps = {
  card: SolutionCard;
  accent: string;
  tint: string;
  // Cards are white on a grey section and grey on a white one
  onGrey: boolean;
  // Reveal delay in ms, to stagger the cards
  delay?: number;
};

export function RoleCard({ card, accent, tint, onGrey, delay }: RoleCardProps) {
  return (
    <Reveal
      as="article"
      delay={delay}
      style={{ "--glow-color": accent } as CSSProperties}
      className={`card-interactive rounded-[3px] border p-8 ${
        onGrey ? "border-line-light bg-white" : "border-[#e2e6f1] bg-[#f4f6fa]"
      }`}
    >
      <div
        className="flex size-10 items-center justify-center rounded-full"
        style={{ backgroundColor: tint, color: accent }}
      >
        <CheckBadgeIcon className="size-5" />
      </div>
      <h3 className="mt-5 text-xl leading-6 font-bold text-black">
        {card.title}
      </h3>
      <p className="mt-3 text-sm leading-6 font-light text-navy">
        {card.description}
      </p>
    </Reveal>
  );
}
