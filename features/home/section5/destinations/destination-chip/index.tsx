type DestinationChipProps = {
  label: string;
};

export function DestinationChip({ label }: DestinationChipProps) {
  return (
    <span className="rounded-[4px] border border-edge bg-white/[0.04] px-2.5 py-[9px] text-sm leading-5 font-light tracking-[-0.01em] whitespace-nowrap text-white">
      {label}
    </span>
  );
}
