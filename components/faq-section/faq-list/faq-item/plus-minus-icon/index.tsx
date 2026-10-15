type PlusMinusIconProps = {
  open: boolean;
};

// A plus that collapses to a minus: the vertical bar rotates flat and fades.
export function PlusMinusIcon({ open }: PlusMinusIconProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        d="M0.75 7H13.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 0.75V13.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="origin-center transition-[transform,opacity] duration-300"
        style={{
          transform: open ? "rotate(90deg)" : "rotate(0deg)",
          opacity: open ? 0 : 1,
        }}
      />
    </svg>
  );
}
