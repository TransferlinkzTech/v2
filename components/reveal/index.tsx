"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  // The element to render, so no extra wrapper is needed (default: div)
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  // Milliseconds to wait before playing, for staggering siblings
  delay?: number;
  // Play on load instead of on scroll (used above the fold, no JS needed)
  immediate?: boolean;
  variant?: "up" | "fade";
};

// Fades (and lifts) an element in the first time it scrolls into view.
// It animates `translate`/`opacity` only and leaves the element's own styles
// alone afterwards, so it can wrap anything that has a `transform`.
export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  style,
  delay = 0,
  immediate = false,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(immediate);

  useEffect(() => {
    if (immediate) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const state = shown ? `reveal-in reveal-${variant}` : "reveal-hidden";

  return (
    <Tag
      ref={ref}
      className={`${className} ${state}`.trim()}
      style={
        shown && delay ? { ...style, animationDelay: `${delay}ms` } : style
      }
    >
      {children}
    </Tag>
  );
}
