import Image from "next/image";
import Link from "next/link";

// Intrinsic ratio of public/images/logo.svg (403 x 87)
const LOGO_RATIO = 87 / 403;

type LogoProps = {
  width?: number;
  className?: string;
};

export function Logo({ width = 122, className }: LogoProps) {
  return (
    <Link href="/" aria-label="TransferLinkz home" className="block w-fit shrink-0">
      <Image
        src="/images/logo.svg"
        alt="TransferLinkz"
        width={width}
        height={Math.round(width * LOGO_RATIO)}
        priority
        className={className}
      />
    </Link>
  );
}
