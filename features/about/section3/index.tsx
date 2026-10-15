import { Reveal } from "@/components/reveal";
import { AudienceCard } from "./audience-card";
import { AUDIENCES } from "./audiences";

export function Section3() {
  return (
    <section className="overflow-hidden bg-[#f4f6fa]">
      <div className="mx-auto max-w-[1240px] border-x border-[#e2e6f1] px-[29px] py-16 min-[1180px]:pt-[107px] min-[1180px]:pb-[100px]">
        <Reveal className="text-navy">
          <p className="text-xs leading-5 font-light uppercase">
            Who it&rsquo;s for
          </p>
          <h2 className="mt-3.5 text-[28px] leading-10 font-semibold lg:text-[40px] lg:leading-[48px]">
            Built for everyone on the journey
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 min-[640px]:grid-cols-2 min-[1180px]:mt-[85px] min-[1180px]:grid-cols-4">
          {AUDIENCES.map((audience, index) => (
            <AudienceCard
              key={audience.title}
              audience={audience}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
