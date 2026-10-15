import Image from "next/image";
import { Reveal } from "@/components/reveal";

type FeatureCardProps = {
  icon: { src: string; width: number; height: number };
  title: string;
  description: string;
  // Tailwind background class for the card tint
  tint: string;
  // Reveal delay in ms, to stagger the cards
  delay?: number;
};

export function FeatureCard({
  icon,
  title,
  description,
  tint,
  delay,
}: FeatureCardProps) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className={`card-interactive rounded-[5px] p-6 lg:h-[244px] lg:p-10 ${tint}`}
    >
      <div className="flex size-8 items-center justify-center">
        <Image
          src={icon.src}
          alt=""
          width={icon.width}
          height={icon.height}
          aria-hidden="true"
        />
      </div>
      <h3 className="mt-[18px] text-2xl leading-8 font-semibold text-black">
        {title}
      </h3>
      <p className="mt-[17px] text-sm leading-6 font-light text-navy">
        {description}
      </p>
    </Reveal>
  );
}
