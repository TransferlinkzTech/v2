import { CheckBadgeIcon } from "@/components/check-badge-icon";
import { Reveal } from "@/components/reveal";
import type { Reassurance } from "../reassurances";

type ReassuranceCardProps = {
  item: Reassurance;
  // Reveal delay in ms, to stagger the cards
  delay?: number;
};

export function ReassuranceCard({ item, delay }: ReassuranceCardProps) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="card-interactive rounded-[3px] border border-line-light bg-white p-8"
    >
      <div className="flex size-[41px] items-center justify-center rounded-full border border-[#5c8af0] text-brand">
        <CheckBadgeIcon className="size-5" />
      </div>
      <h3 className="mt-5 text-xl leading-6 font-bold text-black">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 font-light text-navy">
        {item.description}
      </p>
    </Reveal>
  );
}
