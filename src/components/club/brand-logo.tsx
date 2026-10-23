import Image from "next/image";
import { BRAND } from "@/lib/brand";

/**
 * XO Club Dubai brand mark — the approved gold "AHMED XO CLUB" crown lockup.
 *
 * Canonical assets live in public/images/branding/ (naming per the branding
 * spec). They are transparent, tightly-trimmed derivatives of the master
 * artwork: the master ships as a black-plate PNG, so the plate was keyed out to
 * keep the mark clean over the hero video, the glass header and the footer.
 *
 * No SVG variant exists on purpose — the artwork is a photorealistic gold
 * render and cannot be vectorised accurately (a renamed raster is not an SVG).
 *
 * Intrinsic 440x383 (ratio 1.149): always size with `h-*`; the component keeps
 * `w-auto` so the lockup never distorts. `sizes` is tuned to the real rendered
 * width so Next never ships an oversized candidate for the small header mark.
 */
export const BRAND_LOGO = "/images/branding/xo-logo-primary.png";
export const BRAND_LOGO_WEBP = "/images/branding/xo-logo-primary.webp";
export const BRAND_LOGO_SQUARE = "/images/branding/xo-logo-square.png";
export const BRAND_LOGO_SQUARE_WEBP = "/images/branding/xo-logo-square.webp";

export function BrandLogo({
  className = "h-12",
  priority = false,
  hover = false,
  sizes = "140px",
}: {
  className?: string;
  priority?: boolean;
  /** Subtle hover motion (header only) — disabled under reduced-motion via CSS. */
  hover?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={BRAND_LOGO}
      alt={`XO Club Dubai — AHMED XO CLUB crown logo. Reservations ${BRAND.phoneDisplay}`}
      width={440}
      height={383}
      priority={priority}
      sizes={sizes}
      className={`${className} w-auto object-contain${hover ? " logo-hover" : ""}`}
    />
  );
}

/** Square mark (512x512) — favicon, apple-touch-icon, PWA manifest, OG fallback. */
export function BrandLogoSquare({
  className = "h-12",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={BRAND_LOGO_SQUARE}
      alt={`XO Club Dubai monogram. Reservations ${BRAND.phoneDisplay}`}
      width={512}
      height={512}
      priority={priority}
      sizes="180px"
      className={`${className} w-auto object-contain`}
    />
  );
}
