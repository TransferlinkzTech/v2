import { Reveal } from "@/components/reveal";
import { FeatureCard } from "./feature-card";

const FEATURES = [
  {
    icon: { src: "/images/icon-organised.svg", width: 25, height: 29 },
    title: "Built to be organised",
    description:
      "Bring manifests, guest groups and operating locations into one clear view.",
    tint: "bg-[#eef4ff]",
  },
  {
    icon: { src: "/images/icon-connected.svg", width: 32, height: 24 },
    title: "Built to stay connected",
    description:
      "Bring manifests, guest groups and operating locations into one clear view.",
    tint: "bg-[#fff0e7]",
  },
  {
    icon: { src: "/images/icon-journey.svg", width: 26, height: 29 },
    title: "Built for the whole journey",
    description:
      "Bring manifests, guest groups and operating locations into one clear view.",
    tint: "bg-[#e3f3f8]",
  },
];

export function Section4() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-[1240px] border-x border-line-light px-[29px] pt-16 pb-16 lg:pt-[100px] lg:pb-[100px]">
        <Reveal className="mx-auto max-w-[680px] text-center">
          <h2 className="text-[28px] leading-10 font-semibold text-balance text-navy lg:text-[40px] lg:text-wrap lg:leading-[58px]">
            Flexible for the many ways guest journeys begin
          </h2>
          <p className="mt-3 text-sm leading-6 font-light text-navy lg:mt-1">
            Use the same connected workflow across different transportation
            hubs, transfer directions and service types.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-20 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={feature.title} delay={index * 120} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
