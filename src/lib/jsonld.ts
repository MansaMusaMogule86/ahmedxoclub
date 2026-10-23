/**
 * JSON-LD schema stack — NightClub, Organization, WebSite, FAQPage, HowTo,
 * BreadcrumbList, Event[] (real events only — never placeholders).
 * Phone +971503737162 everywhere. Verified facts only.
 */
import { BRAND } from "@/lib/brand";
import { FAQS } from "@/lib/faq";

const URL = BRAND.domain;

export function nightClubSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "NightClub",
    "@id": `${URL}/#nightclub`,
    name: BRAND.name,
    alternateName: BRAND.nameAr,
    description:
      "XO Club Dubai is the ultimate Khaliji and Arabic nightlife destination — Mezzanine Floor, Radisson Blu Hotel, Dubai Waterfront, Business Bay. Hip-Hop, R&B, Commercial and Arabic/Khaliji music, VIP bottle service, open daily 11 PM–4 AM. Verified 5.0★ Google rating. Bookings: +971503737162.",
    url: URL,
    telephone: BRAND.phoneRaw,
    image: [
      `${URL}/images/hero.png`,
      `${URL}/images/vip-table.png`,
      `${URL}/images/interior.png`,
    ],
    logo: `${URL}/logo.svg`,
    priceRange: "$$$$",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card, WhatsApp Booking",
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.area,
      addressCountry: BRAND.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: BRAND.geo.lat, longitude: BRAND.geo.lng },
    hasMap: BRAND.mapsDirections,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BRAND.hours.opens,
        closes: BRAND.hours.closes,
      },
    ],
    publicAccess: true,
    smokingAllowed: false,
    isAccessibleForFree: false,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BRAND.rating.value,
      bestRating: 5,
      worstRating: 1,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "VIP tables", value: true },
      { "@type": "LocationFeatureSpecification", name: "Bottle service", value: true },
      { "@type": "LocationFeatureSpecification", name: "VIP hostess service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hotel location", value: true },
      { "@type": "LocationFeatureSpecification", name: "Valet parking", value: true },
    ],
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${URL}/#organization`,
    name: BRAND.legalName,
    alternateName: BRAND.shortName,
    url: URL,
    logo: `${URL}/logo.svg`,
    telephone: BRAND.phoneRaw,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BRAND.phoneRaw,
      contactType: "reservations",
      areaServed: "Dubai",
      availableLanguage: ["en", "ar"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      addressCountry: BRAND.address.country,
    },
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${URL}/#website`,
    url: URL,
    name: BRAND.name,
    alternateName: `${BRAND.name} — Khaliji & Arabic Nightclub Dubai`,
    description:
      "The ultimate Khaliji and Arabic nightlife destination in Dubai. Book tables on WhatsApp +971503737162. Open daily 11 PM–4 AM at Radisson Blu Hotel, Dubai Waterfront, Business Bay. Verified 5.0★.",
    inLanguage: ["en", "ar"],
    publisher: { "@id": `${URL}/#organization` },
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${URL}/#faq`,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to book a VIP table at XO Club Dubai",
    description:
      "Book a VIP table at XO Club Dubai (Radisson Blu Hotel, Dubai Waterfront, Business Bay) in three steps via WhatsApp +971503737162.",
    totalTime: "PT3M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Send your request on WhatsApp",
        text: "Message +971503737162 with your date, guest count and preferred experience (XO Signature Table, Premium Booth or XO Royal Loft).",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Receive your written quote",
        text: "The XO reservations team confirms your minimum spend and table position in writing — the price you're told is the price you pay.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Arrive and walk in",
        text: "Arrive at the Mezzanine Floor of Radisson Blu Hotel, Dubai Waterfront from 11 PM, walk past the queue to your reserved table.",
      },
    ],
  };
}

export function breadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: URL },
      { "@type": "ListItem", position: 2, name: "Khaliji Nightlife Guides", item: `${URL}/#guides` },
      { "@type": "ListItem", position: 3, name: "VIP Table Booking", item: `${URL}/#booking` },
    ],
  };
}

export interface EventLike {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
}

/**
 * Event schema is emitted ONLY for real events stored by management.
 * Never for placeholder data.
 */
export function eventsSchema(events: EventLike[]) {
  return events.map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    startDate: e.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: e.description,
    image: [`${URL}/images/hero.png`],
    location: {
      "@type": "Place",
      name: BRAND.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: BRAND.address.street,
        addressLocality: BRAND.address.city,
        addressCountry: BRAND.address.country,
      },
      geo: { "@type": "GeoCoordinates", latitude: BRAND.geo.lat, longitude: BRAND.geo.lng },
    },
    organizer: { "@type": "Organization", name: BRAND.name, telephone: BRAND.phoneRaw, url: URL },
    offers: {
      "@type": "Offer",
      name: "VIP table reservation",
      description: "Written quote confirmed on WhatsApp +971503737162",
      priceCurrency: "AED",
      availability: "https://schema.org/InStock",
      url: URL,
    },
  }));
}
