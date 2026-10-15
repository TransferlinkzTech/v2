type HelpIconProps = {
  hint: string;
};

// The small "?" beside a label; the hint shows as a tooltip
export function HelpIcon({ hint }: HelpIconProps) {
  return (
    <span
      role="img"
      aria-label={hint}
      title={hint}
      className="flex size-[15px] shrink-0 items-center justify-center rounded-full border border-[#707ba0] text-[9px] leading-none font-medium text-[#707ba0]"
    >
      ?
    </span>
  );
}
