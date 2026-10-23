import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { LanguageProvider } from "@/lib/i18n";
import { Header } from "@/components/club/header";
import { Footer } from "@/components/club/footer";
import { FloatingCtas } from "@/components/club/floating";
import { ExitIntent } from "@/components/club/exit-intent";
import { CtaBand, Crumb, PostCard, PageHero, Toc } from "@/components/blog/parts";
import { FaqList, KeyTakeaways, QuickAnswer, SectionView } from "@/components/blog/blocks";
import { BRAND, WA_MESSAGES } from "@/lib/brand";
import { PILLARS, getPillar, getRelated } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog/types";
import {
  blogPostingSchema,
  faqSchemaFor,
  innerBreadcrumbSchema,
  nightClubSchema,
  organizationSchema,
} from "@/lib/jsonld";

const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Dubai",
});

/** Full /blog/[slug] template. Server component. */
export function PostPage({ post }: { post: BlogPost }) {
  const pillar = getPillar(post.pillar);
  const related = getRelated(post, 3);

  const jsonLd = [
    nightClubSchema(),
    organizationSchema(),
    blogPostingSchema(post),
    faqSchemaFor(post),
    innerBreadcrumbSchema([
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];

  return (
    <LanguageProvider>
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }}
        />
      ))}

      <Header base="/" />

      <main className="flex-1">
        <PageHero
          kicker={pillar.name}
          title={post.title}
          image={post.heroImage}
          imageAlt={`${post.title} — XO Club Dubai, Radisson Blu Hotel Dubai Waterfront. Bookings ${BRAND.phoneDisplay}`}
          meta={
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.18em] text-cream/50">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {DATE_FMT.format(new Date(post.pubDate))}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-gold/70" aria-hidden="true" />
                {post.readMinutes} min read
              </span>
              <span className="text-gold/80">{BRAND.hours.short}</span>
            </div>
          }
        />

        <article className="mx-auto max-w-4xl px-4 pb-20 pt-8 sm:px-6">
          <Crumb items={[{ name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

          {/* AEO layer: direct answer first, then scannable takeaways */}
          <div className="mt-6">
            <QuickAnswer answer={post.quickAnswer} keyword={post.targetKeyword} />
            <KeyTakeaways items={post.keyTakeaways} />
            <Toc sections={post.sections} />
          </div>

          {post.sections.map((s) => (
            <SectionView key={s.id} section={s} />
          ))}

          <FaqList faqs={post.faqs} />

          <CtaBand
            headline="Book the night the article describes"
            body={`One WhatsApp message to ${BRAND.phoneDisplay} gets your written minimum spend, a confirmed table position and queue-free entry at Radisson Blu Hotel, Dubai Waterfront, Business Bay. Open daily 11 PM – 4 AM.`}
            message={post.ctaMessage || WA_MESSAGES.general}
          />

          {related.length > 0 ? (
            <section className="mt-16" aria-label="Related guides">
              <h2 className="font-display text-2xl font-bold text-cream">Keep reading</h2>
              <span
                className="mt-3 block h-px w-24 bg-gradient-to-e from-gold to-transparent"
                aria-hidden="true"
              />
              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          ) : null}

          {/* Pillar navigation — internal linking across the content engine */}
          <nav aria-label="Content pillars" className="mt-14 border-t border-gold/10 pt-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">
              Browse all guides
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {PILLARS.map((p) => (
                <li key={p.key}>
                  <Link
                    href={`/blog#${p.id}`}
                    className="rounded-full border border-gold/20 px-4 py-2 text-xs font-semibold text-cream/70 transition hover:border-gold/50 hover:text-gold"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>

      <Footer base="/" />
      <div className="h-[76px] bg-night-soft md:hidden" aria-hidden="true" />
      <FloatingCtas />
      <ExitIntent />
    </LanguageProvider>
  );
}
