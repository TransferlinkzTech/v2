import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { WordTicker } from "./word-ticker";

const PAIN_POINTS = [
  "Excel manifest",
  "Lost email threads",
  "Hours wasted sorting",
  "Missed transfers",
  "Zero visibility",
];

export function Section3() {
  return (
    <section className="overflow-hidden border-y border-line-light bg-white">
      <div className="relative mx-auto flex max-w-[1240px] flex-col gap-6 border-x border-line-light px-[30px] py-20 min-[1100px]:h-[604px] min-[1100px]:flex-row min-[1100px]:items-center min-[1100px]:gap-[82px] min-[1100px]:py-0">
        <Reveal
          as="h2"
          className="shrink-0 text-[28px] leading-[40px] font-medium text-black min-[1100px]:text-5xl min-[1100px]:leading-[62px]"
        >
          Wave goodbye to
        </Reveal>

        <Reveal
          delay={700}
          variant="fade"
          className="absolute top-[180px] left-[370px] hidden min-[1100px]:block"
        >
          <Image
            src="/images/wave-arrow.svg"
            alt=""
            width={154}
            height={72}
            aria-hidden="true"
          />
        </Reveal>

        <WordTicker words={PAIN_POINTS} />
      </div>
    </section>
  );
}
