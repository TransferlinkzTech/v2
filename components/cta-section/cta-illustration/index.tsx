import Image from "next/image";
import { RouteArcs } from "./route-arcs";

// A 1155 x 348 window onto the artwork: it keeps its natural proportions and is
// cropped from the bottom, so the road runs off the section's edge as designed.
// On narrow screens the artwork stays at least 600px wide and is centred, so
// the middle of the scene is cropped instead of the whole thing shrinking.
// The animated routes between the pins are drawn over the picture (the image
// itself no longer has them), in a box that is the same size as the picture.
export function CtaIllustration() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-[1155px] [container-type:inline-size]"
    >
      <div className="relative h-[calc(max(100cqw,600px)*348/1155)] overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[max(100cqw,600px)] -translate-x-1/2">
          <Image
            src="/images/cta-illustration-scene.webp"
            alt=""
            width={1155}
            height={348}
            unoptimized
            className="h-auto w-full max-w-none"
          />
          <RouteArcs />
        </div>
      </div>
    </div>
  );
}
