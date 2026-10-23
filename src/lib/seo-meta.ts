/**
 * Shared metadata builder for the content silo routes.
 *
 * NOTE: `vsMetadata()` (named-competitor comparison pages) was retired with the
 * competitor comparison content — archived at archive/competitor-comparison/.
 * Only first-party silo metadata remains.
 */
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import type { Silo } from "@/lib/silos";

export function siloMetadata(silo: Silo): Metadata {
  const description = `${silo.en.subtitle} ${silo.en.intro}`.slice(0, 300);
  return {
    title: `${silo.en.title} | XO Club Dubai | Book ${BRAND.phoneRaw}`,
    description,
    keywords: [silo.tab, `${silo.tab} Dubai`, "XO Club Dubai", "khaliji nightlife dubai"],
    alternates: { canonical: `/${silo.slug}` },
    openGraph: {
      type: "website",
      url: `${BRAND.domain}/${silo.slug}`,
      title: `${silo.en.title} | XO Club Dubai`,
      description,
      images: [
        { url: silo.image, alt: `${silo.tab} — XO Club Dubai. Bookings ${BRAND.phoneDisplay}` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: silo.en.title,
      description,
      images: [silo.image],
    },
  };
}
