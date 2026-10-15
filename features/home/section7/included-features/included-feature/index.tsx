import { CheckBadgeIcon } from "@/components/check-badge-icon";
import { Reveal } from "@/components/reveal";

type IncludedFeatureProps = {
  label: string;
  // Reveal delay in ms, to cascade the list
  delay?: number;
};

export function IncludedFeature({ label, delay }: IncludedFeatureProps) {
  return (
    <Reveal as="li" delay={delay} className="flex items-start gap-4">
      <CheckBadgeIcon className="-mt-px size-5 shrink-0 text-[#27a55a]" />
      <span className="text-sm leading-6 font-light text-navy">{label}</span>
    </Reveal>
  );
}
