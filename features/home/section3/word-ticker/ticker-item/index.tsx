const GRADIENT =
  "linear-gradient(90deg, #d92b2b 0%, #f5a623 30%, #7d0080 50%, #2563eb 100%)";

// Opacity by distance from the highlighted row: the row itself and its
// neighbours are solid, the next ones fade out, anything further is hidden.
const OPACITY_BY_DISTANCE = [1, 1, 0.3, 0];

type TickerItemProps = {
  label: string;
  // Row position relative to the highlighted row: 0 is the highlight,
  // negative is above it, positive is below it.
  offset: number;
};

export function TickerItem({ label, offset }: TickerItemProps) {
  const distance = Math.abs(offset);
  const isActive = offset === 0;

  return (
    <div
      className="absolute inset-x-0 top-[calc(var(--row)*2)] h-[var(--row)] whitespace-nowrap transition-[transform,opacity] duration-700 ease-in-out"
      style={{
        transform: `translateY(calc(var(--row) * ${offset}))`,
        opacity: OPACITY_BY_DISTANCE[Math.min(distance, 3)],
      }}
    >
      <span
        className="relative inline-block text-muted transition-opacity duration-700 ease-in-out"
        style={{ opacity: isActive ? 0 : 1 }}
      >
        {label}
      </span>
      {/* The highlighted row is bold and gradient-filled, so it is its own layer */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 bg-clip-text font-bold text-transparent transition-opacity duration-700 ease-in-out"
        style={{ backgroundImage: GRADIENT, opacity: isActive ? 1 : 0 }}
      >
        {label}
      </span>
    </div>
  );
}
