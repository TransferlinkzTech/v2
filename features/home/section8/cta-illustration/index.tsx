import Image from "next/image";

// A 1155 x 348 window onto the artwork: it keeps its natural proportions and is
// cropped from the bottom, so the road runs off the section's edge as designed.
// On narrow screens the artwork stays at least 600px wide and is centred, so
// the middle of the scene is cropped instead of the whole thing shrinking.
export function CtaIllustration() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto w-full max-w-[1155px] [container-type:inline-size]"
    >
      <div className="relative h-[calc(max(100cqw,600px)*348/1155)] overflow-hidden">
        <Image
          src="/images/cta-illustration.webp"
          alt=""
          width={1155}
          height={348}
          unoptimized
          className="absolute top-0 left-1/2 h-auto w-[max(100cqw,600px)] max-w-none -translate-x-1/2"
        />
      </div>
    </div>
  );
}
