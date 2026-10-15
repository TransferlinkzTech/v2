"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { ARCS, DASH, LINE_WIDTH, PINS, VIEW } from "./routes";

// The routes between the pins on the closing illustration. They draw
// themselves in the first time the scene scrolls into view, then dashes keep
// flowing along them and the pins pulse, pausing whenever it is off screen.
//
// The animation lives in CSS (see "Route arcs" in globals.css) and the state
// is a data attribute, set straight on the element: "waiting" (hidden, until
// seen), "playing" and "paused". With no attribute at all (no JavaScript, or
// reduced motion) the routes are simply there, fully drawn and still.
export function RouteArcs() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    svg.dataset.state = "waiting";
    const observer = new IntersectionObserver(
      ([entry]) => {
        svg.dataset.state = entry.isIntersecting ? "playing" : "paused";
      },
      { threshold: 0.35 },
    );
    observer.observe(svg);
    return () => observer.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      aria-hidden="true"
      viewBox={`0 0 ${VIEW.width} ${VIEW.height}`}
      preserveAspectRatio="none"
      fill="none"
      className="route-arcs absolute inset-0 size-full"
    >
      <defs>
        {/* Each route is a dashed line seen through a mask. The mask is a
            solid line that gets drawn in, which uncovers the dashes. */}
        {ARCS.map((arc) => (
          <mask
            key={arc.id}
            id={`${arc.id}-mask`}
            maskUnits="userSpaceOnUse"
            x={0}
            y={0}
            width={VIEW.width}
            height={VIEW.height}
          >
            <path
              d={arc.d}
              pathLength={1}
              stroke="#fff"
              strokeWidth={20}
              strokeLinecap="round"
              strokeLinejoin="round"
              data-reveal=""
              style={
                {
                  "--draw-delay": `${arc.delay}s`,
                  "--draw-duration": `${arc.duration}s`,
                } as CSSProperties
              }
            />
          </mask>
        ))}
      </defs>

      {ARCS.map((arc) => (
        <g key={arc.id} mask={`url(#${arc.id}-mask)`}>
          <path
            d={arc.d}
            stroke={arc.color}
            strokeWidth={LINE_WIDTH}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={DASH}
            data-flow=""
          />
        </g>
      ))}

      {PINS.map((pin) => (
        <circle
          key={pin.id}
          cx={pin.x}
          cy={pin.y}
          r={16}
          stroke={pin.color}
          strokeWidth={3}
          className="route-ring"
          style={{ "--ring-delay": `${pin.delay}s` } as CSSProperties}
        />
      ))}
    </svg>
  );
}
