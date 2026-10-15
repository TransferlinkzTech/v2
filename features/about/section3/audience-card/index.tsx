import Image from "next/image";
import { Reveal } from "@/components/reveal";
import type { Audience } from "../audiences";

type AudienceCardProps = {
  audience: Audience;
  // Reveal delay in ms, to stagger the cards
  delay?: number;
};

export function AudienceCard({ audience, delay }: AudienceCardProps) {
  const { icon, title, description } = audience;

  return (
    <Reveal
      as="article"
      delay={delay}
      className="card-interactive rounded-[3px] border border-line-light bg-white p-[39px] min-[1180px]:h-[329px]"
    >
      <div className="flex size-[41px] items-center justify-center rounded-full border border-[#5c8af0]">
        <Image
          src={icon.src}
          alt=""
          width={icon.width}
          height={icon.height}
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-5 text-xl leading-6 font-bold text-black min-[1180px]:min-h-12">
        {title}
      </h3>
      <p className="mt-5 text-sm leading-6 font-light text-navy">
        {description}
      </p>
    </Reveal>
  );
}
