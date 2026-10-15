"use client";

import { useEffect, useRef, useState } from "react";
import { RolePill } from "./role-pill";

export type RoleNavItem = {
  id: string;
  label: string;
  accent: string;
};

type RoleNavProps = {
  items: RoleNavItem[];
};

// Pinned to the top of the viewport while the role sections scroll past. The
// pill for the section on screen is highlighted in that role's colour.
export function RoleNav({ items }: RoleNavProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // A thin band around the upper-middle of the viewport: whichever section
    // crosses it is the one being read
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  // On a phone the strip scrolls sideways, so keep the active pill in view.
  // Scrolling the list itself (not scrollIntoView) leaves the page where it is.
  useEffect(() => {
    const list = listRef.current;
    const active = list?.querySelector<HTMLElement>("[aria-current]");
    if (!list || !active) return;
    list.scrollTo({
      left: active.offsetLeft - (list.clientWidth - active.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav
      aria-label="Solutions by role"
      className="sticky top-0 z-20 border-y border-line-light bg-white"
    >
      <div className="mx-auto max-w-[1240px] border-x border-line-light px-4 py-3">
        <ul
          ref={listRef}
          className="relative flex gap-2 overflow-x-auto [scrollbar-width:none] min-[640px]:justify-center [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <li key={item.id} className="shrink-0">
              <RolePill item={item} active={item.id === activeId} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
