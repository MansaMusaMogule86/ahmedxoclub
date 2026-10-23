import Image from "next/image";
import { BRAND } from "@/lib/brand";

/**
 * XO Club Dubai brand mark — the gold "AHMED XO CLUB" crown lockup.
 *
 * Served from /images/xo-club-logo.png: a transparent, tightly-trimmed
 * derivative of the master artwork (the master is a black-plate PNG, so the
 * plate was keyed out to keep it clean over the hero, the glass header and the
 * footer). Intrinsic 440x383 (ratio 1.149) — always size with `h-*` and the
 * component keeps `w-auto` so the lockup never distorts.
 *
 * Alt text carries the booking number per the technical SEO spec.
 */
export function BrandLogo({
  className = "h-12",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/images/xo-club-logo.png"
      alt={`XO Club Dubai — AHMED XO CLUB crown logo. Reservations ${BRAND.phoneDisplay}`}
      width={440}
      height={383}
      priority={priority}
      className={`${className} w-auto object-contain`}
    />
  );
}

/** Square variant (512x512) — schema.org logo, apple-touch-icon, PWA manifest. */
export const BRAND_LOGO_SQUARE = "/images/xo-club-logo-square.png";
export const BRAND_LOGO = "/images/xo-club-logo.png";
