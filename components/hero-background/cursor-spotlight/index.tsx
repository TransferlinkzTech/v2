"use client";

import { useEffect, useRef, type CSSProperties } from "react";

const SIZE = 520; // glow diameter in px
const TILE = 180; // tile size of public/images/hero-dots.svg
const DOTS = "url('/images/hero-dots.svg')";
const FADE =
  "radial-gradient(circle closest-side, #000 0%, rgba(0,0,0,0.55) 35%, transparent 100%)";

const STYLE: CSSProperties = {
  width: SIZE,
  height: SIZE,
  background: "#e6ecff",
  WebkitMaskImage: `${DOTS}, ${FADE}`,
  maskImage: `${DOTS}, ${FADE}`,
  WebkitMaskSize: `${TILE}px ${TILE}px, 100% 100%`,
  maskSize: `${TILE}px ${TILE}px, 100% 100%`,
  WebkitMaskRepeat: "repeat, no-repeat",
  maskRepeat: "repeat, no-repeat",
  WebkitMaskComposite: "source-in",
  maskComposite: "intersect",
};

// Lights up the dot grid around the cursor. The glow box moves with a GPU
// transform while its mask is offset the other way, so the dots stay fixed
// to the page grid instead of sliding with the glow.
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.closest("section");
    if (!el || !host) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let clientX = 0;
    let clientY = 0;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let active = false;
    let frame = 0;
    let last = 0;

    const paint = () => {
      const pos = `${SIZE / 2 - x}px ${SIZE / 2 - y}px, 0 0`;
      el.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
      el.style.maskPosition = pos;
      el.style.webkitMaskPosition = pos;
    };

    const tick = (now: number) => {
      const dt = Math.min(Math.max(now - last, 0), 50);
      last = now;
      const k = reduceMotion ? 1 : 1 - Math.exp(-dt / 80);
      x += (targetX - x) * k;
      y += (targetY - y) * k;
      paint();
      if (Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = 0;
      }
    };

    const follow = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const updateTarget = () => {
      const rect = host.getBoundingClientRect();
      targetX = clientX - rect.left;
      targetY = clientY - rect.top;
    };

    const onMove = (e: Event) => {
      const pointer = e as PointerEvent;
      if (pointer.pointerType === "touch") return;
      clientX = pointer.clientX;
      clientY = pointer.clientY;
      updateTarget();
      if (!active) {
        active = true;
        x = targetX;
        y = targetY;
        paint();
        el.style.opacity = "1";
      }
      follow();
    };

    const onLeave = () => {
      active = false;
      el.style.opacity = "0";
    };

    // Keep the glow under a stationary cursor while the page scrolls.
    const onScroll = () => {
      if (!active) return;
      updateTarget();
      follow();
    };

    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={STYLE}
      className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 will-change-transform"
    />
  );
}
