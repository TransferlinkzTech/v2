"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Destinations } from "./destinations";
import { RoleBackground } from "./role-background";
import { RoleDetails } from "./role-details";
import { RoleTabs } from "./role-tabs";
import { RoleVisual } from "./role-visual";
import { RolesHeader } from "./roles-header";
import { ROLES } from "./roles";

// Below 1180px the frame is too narrow for the side-by-side layout (text left,
// product right), so everything stacks. Above it, blocks are pinned to the
// frame: text to the left edge, product and chips to the right edge.
export function Section5() {
  const [activeId, setActiveId] = useState(ROLES[0].id);
  const role = ROLES.find((r) => r.id === activeId) ?? ROLES[0];

  return (
    <section
      className="overflow-hidden border-y border-edge transition-colors duration-700"
      style={{ backgroundColor: role.base }}
    >
      <div className="relative mx-auto max-w-[1240px] overflow-hidden border-x border-edge px-[29px] py-16 min-[1180px]:h-[1308px] min-[1180px]:py-0 min-[1180px]:pt-[109px]">
        <RoleBackground activeId={activeId} />

        <div className="relative">
          <RolesHeader />
          <Reveal delay={100} className="mt-10 min-[1180px]:mt-[62px]">
            <RoleTabs activeId={activeId} onChange={setActiveId} />
          </Reveal>
        </div>

        <div
          role="tabpanel"
          className="relative mt-14 min-[1180px]:absolute min-[1180px]:top-[513px] min-[1180px]:left-[29px] min-[1180px]:mt-0"
        >
          <RoleDetails key={role.id} role={role} />
        </div>

        <div className="relative min-[1180px]:contents">
          <RoleVisual key={role.id} role={role} />
        </div>

        <div className="relative mt-16 min-[1180px]:contents">
          <Destinations />
        </div>
      </div>
    </section>
  );
}
