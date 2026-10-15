import Image from "next/image";

export function HeroDashboard() {
  return (
    <Image
      src="/images/hero-dashboard.webp"
      alt="TransferLinkz operator dashboard showing pending assignments, active jobs and a live map"
      width={1006}
      height={574}
      priority
      unoptimized
      className="mx-auto h-auto w-full max-w-[1006px]"
    />
  );
}
