import { LanguageProvider } from "@/lib/i18n";
import { db } from "@/lib/db";
import {
  breadcrumbSchema,
  eventsSchema,
  faqSchema,
  howToSchema,
  nightClubSchema,
  organizationSchema,
  webSiteSchema,
} from "@/lib/jsonld";
import { Header } from "@/components/club/header";
import { Hero } from "@/components/club/hero";
import { EntranceSection } from "@/components/club/entrance";
import { TrustBar } from "@/components/club/trust-bar";
import { TonightAtXo } from "@/components/club/tonight";
import { Differentiators } from "@/components/club/differentiators";
import { Music } from "@/components/club/music";
import { Pricing } from "@/components/club/pricing";
import { ExperiencesSection } from "@/components/club/experiences";
import { EntertainmentSection } from "@/components/club/entertainment";
import { EventsSection, type EventCard } from "@/components/club/events";
import { SilosSection } from "@/components/club/silos";
import { HomeBlogBand } from "@/components/club/home-blog-band";
import { Compare } from "@/components/club/compare";
import { Gallery } from "@/components/club/gallery";
import { Reviews, type ReviewCard } from "@/components/club/reviews";
import { LocationSection } from "@/components/club/location";
import { BookingSection } from "@/components/club/booking-section";
import { FaqSection } from "@/components/club/faq";
import { FinalCta } from "@/components/club/cta";
import { Footer } from "@/components/club/footer";
import { FloatingCtas } from "@/components/club/floating";
import { ExitIntent } from "@/components/club/exit-intent";

export const dynamic = "force-dynamic";

async function getData(): Promise<{ events: EventCard[]; reviews: ReviewCard[] }> {
  try {
    const [events, reviews] = await Promise.all([
      db.event.findMany({ where: { date: { gte: new Date() } }, orderBy: { date: "asc" }, take: 9 }),
      db.review.findMany({
        where: { approved: true },
        orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
        take: 9,
      }),
    ]);
    return {
      events: events.map((e) => ({
        id: e.id,
        slug: e.slug,
        title: e.title,
        titleAr: e.titleAr,
        description: e.description,
        performer: e.performer,
        dateISO: e.date.toISOString(),
        coverCharge: e.coverCharge,
        offer: e.offer,
        featured: e.featured,
      })),
      reviews: reviews.map((r) => ({
        id: r.id,
        name: r.name,
        rating: r.rating,
        text: r.text,
        source: r.source,
      })),
    };
  } catch (err) {
    console.error("home data error", err);
    return { events: [], reviews: [] };
  }
}

export default async function Home() {
  const { events, reviews } = await getData();

  const jsonLd = [
    nightClubSchema(),
    organizationSchema(),
    webSiteSchema(),
    faqSchema(),
    howToSchema(),
    breadcrumbSchema(),
    // Event schema is emitted ONLY for real events added by management.
    // Placeholder data never gets structured data.
    ...eventsSchema(
      events.slice(0, 5).map((e) => ({
        slug: e.slug,
        title: e.title,
        description: e.description,
        date: e.dateISO,
      }))
    ),
  ];

  return (
    <LanguageProvider>
      {/* Schema.org JSON-LD stack */}
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }}
        />
      ))}

      <Header />

      <main className="flex-1">
        {/* LAYER 1 — THE ENTRANCE (full-screen video hero + approved entrance photo) */}
        <Hero />
        <EntranceSection />
        <TrustBar />

        {/* TONIGHT AT XO — dynamic placeholders */}
        <TonightAtXo />

        {/* WHY XO — the 5.0★ experience */}
        <Differentiators />
        <Music />

        {/* VIP TABLES & BOTTLE SERVICE */}
        <Pricing />

        {/* VIP & EXPERIENCES — 5 slots, each dimension-preserving */}
        <ExperiencesSection />

        {/* UPCOMING EXPERIENCES (management-fed; elegant placeholder empty state) */}
        <EventsSection events={events} />

        {/* ENTERTAINMENT — 6 prepared performer slots (unpublished until approved) */}
        <EntertainmentSection />

        {/* LAYER 2 — THE CORRIDORS (7 SEO silos as on-page authority hubs) */}
        <SilosSection />

        {/* THE CONTENT ENGINE — links the Maze into /blog, /vs-* and the silos */}
        <HomeBlogBand />

        {/* LAYER 3 — THE TRAPS (first-party published standards, no competitor claims) */}
        <Compare />

        {/* SOCIAL PROOF STACK */}
        <Gallery />
        <Reviews reviews={reviews} />

        {/* LOCAL SEO — map, NAP, hours */}
        <LocationSection />

        {/* LAYER 4 — THE EXIT (conversion) */}
        <BookingSection />
        <FaqSection />
        <FinalCta />
      </main>

      <Footer />
      {/* spacer so the mobile thumb-bar never covers footer content */}
      <div className="h-[76px] bg-night-soft md:hidden" aria-hidden="true" />

      <FloatingCtas />
      <ExitIntent />
    </LanguageProvider>
  );
}
