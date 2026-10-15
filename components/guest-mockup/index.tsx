type GuestMockupProps = {
  label: string;
};

const STATS = [
  { label: "Pickup", value: "17:20" },
  { label: "Driver", value: "Omar H." },
  { label: "Vehicle", value: "Toyota Van" },
];

// What a guest sees on their trip link, tilted like the other product art.
// Everything is sized in em against the card's own width (1em = 10px at the
// full 414px), so it scales as one piece.
export function GuestMockup({ label }: GuestMockupProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className="w-full [container-type:inline-size]"
    >
      <div
        className="relative h-[55.8em] w-full"
        style={{ fontSize: "calc(100cqw / 41.4)" }}
      >
        <div className="absolute inset-x-[2.2em] inset-y-[1.4em] flex -rotate-[3.5deg] flex-col rounded-[2.8em] border-[0.4em] border-[#dfe3f2] bg-[#f3f5fb] p-[1.8em] shadow-[0_2em_6em_rgba(124,58,237,0.28)]">
          <div className="rounded-[2em] bg-white p-[1.8em] shadow-[0_0.2em_1em_rgba(49,56,88,0.08)]">
            <span className="inline-block rounded-full border border-[#7c3aed]/50 bg-[#f3edff] px-[1em] py-[0.35em] text-[1.15em] leading-none font-medium text-[#7c3aed]">
              Driver on the way
            </span>
            <p className="mt-[1.2em] text-[1.15em] leading-none text-[#9aa0b4]">
              TRF-1001
            </p>
            <p className="mt-[0.5em] text-[1.8em] leading-tight font-semibold text-black">
              Pickup at Dubai Airport
            </p>
            <div className="mt-[1.6em] grid grid-cols-3 gap-[1em]">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="text-[1.1em] leading-none text-[#9aa0b4]">
                    {stat.label}
                  </p>
                  <p className="mt-[0.6em] text-[1.45em] leading-none font-semibold whitespace-nowrap text-black">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[1.8em] flex flex-1 flex-col rounded-[2.2em] bg-[#2563eb] p-[2em] text-white">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-[0.8em] text-[1.9em] leading-none font-semibold">
                TRF-1001
                <span className="size-[0.9em] rounded-full bg-[#4ade80] ring-[0.35em] ring-white/30" />
              </p>
              <p className="text-[1.25em] leading-none">Arrives in 12 min</p>
            </div>

            <p className="mt-[1.8em] text-[1.3em] leading-none">
              Flight EK204 <span className="px-[0.3em] text-[#fbbf24]">•</span>{" "}
              landed 14:05
            </p>

            <div className="mt-[1.8em] space-y-[1.2em] text-[1.5em] leading-none">
              <p>Meet at Arrivals, Door 4</p>
              <p>Marina Gulf Hotel</p>
            </div>

            <div className="mt-auto mb-[2.2em] flex items-center pt-[1.6em]">
              <span className="size-[1.1em] rounded-full bg-white" />
              <span className="h-[0.25em] flex-1 bg-[#f59e0b]" />
              <span className="size-[1.1em] rounded-full bg-[#f59e0b]" />
              <span className="h-[0.25em] flex-1 bg-[#f59e0b]" />
              <span className="size-[1.9em] rounded-full border-[0.45em] border-[#f59e0b]" />
              <span className="h-0 flex-[1.4] border-t-[0.25em] border-dashed border-white/60" />
              <span className="size-[1.1em] rounded-full bg-[#f59e0b]" />
            </div>

            <div className="rounded-full bg-white py-[1.3em] text-center text-[1.8em] leading-none font-medium text-[#2563eb]">
              Contact driver
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
