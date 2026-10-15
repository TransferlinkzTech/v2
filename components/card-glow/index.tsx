"use client";

import { useEffect } from "react";

// Tells every `.card-interactive` where the pointer is, so its glowing edge
// (see globals.css) can follow the cursor. One listener for the whole page,
// not one per card, and nothing at all on touch screens.
export function CardGlow() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const card = (event.target as Element | null)?.closest<HTMLElement>(
        ".card-interactive",
      );
      if (!card) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = card.getBoundingClientRect();
        card.style.setProperty("--glow-x", `${event.clientX - box.left}px`);
        card.style.setProperty("--glow-y", `${event.clientY - box.top}px`);
      });
    };

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
