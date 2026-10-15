import Link from "next/link";
import type { RoleNavItem } from "..";

type RolePillProps = {
  item: RoleNavItem;
  active: boolean;
};

export function RolePill({ item, active }: RolePillProps) {
  return (
    <Link
      href={`#${item.id}`}
      aria-current={active ? "location" : undefined}
      style={active ? { backgroundColor: item.accent } : undefined}
      className={`block rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors ${
        active ? "text-white" : "text-navy hover:bg-[#eef1fa]"
      }`}
    >
      {item.label}
    </Link>
  );
}
