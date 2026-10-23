/**
 * Shared metadata builders for the inner routes so every page ships a
 * consistent canonical, OpenGraph and Twitter card. Verified facts only.
 */
import type { Metadata } from "next";
import { BRAND } from "@/lib/brand";
import type { Competitor } from "@/lib/competitors";
import type { Silo } from "@/lib/silos";

export function vsMetadata(c: Competitor): Metadata {
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: [c.targetKeyword, ...c.secondaryKeywords],
    alternates: { canonical: `/vs-${c.slug}` },
    openGraph: {
      type: "website",
      url: `${BRAND.domain}/vs-${c.slug}`,
      title: c.metaTitle,
      description: c.metaDescription,
      images: [{ url: c.image, alt: `${c.title} — XO Club Dubai. Bookings ${BRAND.phoneDisplay}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.metaDescription,
      images: [c.image],
    },
  };
}

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
