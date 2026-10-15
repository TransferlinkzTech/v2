import { Reveal } from "@/components/reveal";
import { DestinationChip } from "./destination-chip";

const CHIP_ROWS = [
  [
    "Airport arrivals & departure",
    "Train-station transfers",
    "Hotel & venue transfers",
  ],
  [
    "Marina & cruise transfers",
    "Coach & bus collection",
    "Multi-stop guest journeys",
  ],
];

export function Destinations() {
  return (
    <div className="flex flex-col gap-8 text-white min-[1180px]:block">
      <Reveal className="min-[1180px]:absolute min-[1180px]:top-[1097px] min-[1180px]:left-[29px]">
        <p className="text-xs leading-5 font-light uppercase">
          Wherever the journey begins
        </p>
        <h3 className="mt-4 text-[26px] leading-[34px] font-bold min-[1180px]:text-[32px] min-[1180px]:leading-[38px]">
          Different destinations.
          <br />
          One connected workflow.
        </h3>
      </Reveal>

      <div className="flex flex-col gap-3 min-[1180px]:absolute min-[1180px]:top-[1104px] min-[1180px]:right-[29px]">
        {CHIP_ROWS.map((row, index) => (
          <Reveal
            key={row[0]}
            delay={150 + index * 120}
            className="flex flex-wrap gap-2.5"
          >
            {row.map((label) => (
              <DestinationChip key={label} label={label} />
            ))}
          </Reveal>
        ))}
      </div>
    </div>
  );
}
