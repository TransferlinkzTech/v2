type RoleTabProps = {
  label: string;
  tabClass: string;
  selected: boolean;
  onSelect: () => void;
};

export function RoleTab({ label, tabClass, selected, onSelect }: RoleTabProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onSelect}
      className={`h-11 rounded-[4px] px-2 text-sm font-light tracking-[-0.01em] whitespace-nowrap transition-colors duration-300 lg:w-40 ${
        selected ? `${tabClass} text-white` : "text-black hover:bg-black/5"
      }`}
    >
      {label}
    </button>
  );
}
