import { ROLES } from "../roles";
import { RoleTab } from "./role-tab";

type RoleTabsProps = {
  activeId: string;
  onChange: (id: string) => void;
};

export function RoleTabs({ activeId, onChange }: RoleTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="Choose a role"
      className="mx-auto grid max-w-[688px] grid-cols-2 gap-1.5 rounded-[4px] bg-white p-1.5 lg:flex lg:gap-3"
    >
      {ROLES.map((role) => (
        <RoleTab
          key={role.id}
          label={role.label}
          tabClass={role.tabClass}
          selected={role.id === activeId}
          onSelect={() => onChange(role.id)}
        />
      ))}
    </div>
  );
}
