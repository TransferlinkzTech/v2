"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { TickerItem } from "./ticker-item";

const INTERVAL_MS = 2400;
const VISIBLE_OFFSETS = [-3, -2, -1, 0, 1, 2, 3];

type WordTickerProps = {
  words: string[];
};

// A vertical list that steps up one word at a time, highlighting the middle
// row. It starts on the third word (the layout in the design), only runs
// while on screen, and stays still for people who prefer reduced motion.
export function WordTicker({ words }: WordTickerProps) {
  const [active, setActive] = useState(2);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: number | undefined;
    const start = () => {
      timer ??= window.setInterval(() => setActive((a) => a + 1), INTERVAL_MS);
    };
    const stop = () => {
      window.clearInterval(timer);
      timer = undefined;
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) start();
      else stop();
    });
    observer.observe(el);

    return () => {
      observer.disconnect();
      stop();
    };
  }, []);

  const count = words.length;

  return (
    <>
      <ul className="sr-only">
        {words.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>

      <Reveal delay={200} className="min-w-0 min-[1100px]:flex-1">
        <div
          ref={ref}
          aria-hidden="true"
          className="relative h-[calc(var(--row)*5)] w-full text-[28px] leading-[var(--row)] font-medium [--row:40px] min-[1100px]:text-5xl min-[1100px]:[--row:62px]"
        >
          {VISIBLE_OFFSETS.map((offset) => {
            const index = active + offset;
            const word = words[((index % count) + count) % count];
            return <TickerItem key={index} label={word} offset={offset} />;
          })}
        </div>
      </Reveal>
    </>
  );
}
