import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Clock, Phone } from "lucide-react";
import type { BlogPost, PostSection } from "@/lib/blog/types";
import { BRAND } from "@/lib/brand";
import { Kicker, Ornament, WhatsAppButton } from "@/components/club/ui-bits";

/** Conversion band — used at the end of every article and inner page. */
export function CtaBand({
  headline,
  body,
  message,
}: {
  headline: string;
  body: string;
  message: string;
}) {
  return (
    <section className="mt-16 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-b from-gold/[0.10] to-night-card p-7 sm:p-9">
      <Ornament className="mb-6" />
      <h2 className="text-center font-display text-2xl font-black text-cream sm:text-3xl">{headline}</h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-cream/70">{body}</p>
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <WhatsAppButton size="lg" message={message} label="Reserve on WhatsApp" />
        <a
          href={`tel:${BRAND.phoneDial}`}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-6 text-[15px] font-semibold text-gold-light transition hover:border-gold hover:bg-gold/20"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          <span dir="ltr">Call {BRAND.phoneDisplay}</span>
        </a>
      </div>
      <p className="mt-4 text-center text-[11px] uppercase tracking-[0.2em] text-cream/40">
        The only booking line · {BRAND.phoneDisplay} · WhatsApp &amp; calls
      </p>
    </section>
  );
}

/** Article card for the /blog index and related-post strips. */
export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="card-hover-glow flex h-full flex-col overflow-hidden rounded-3xl border border-gold/15 bg-night-card">
      <Link href={`/blog/${post.slug}`} className="relative block h-40 overflow-hidden">
        <Image
          src={post.heroImage}
          alt={`${post.title} — XO Club Dubai. Bookings ${BRAND.phoneDisplay}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover opacity-70 transition duration-700 hover:scale-105 hover:opacity-90"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-night-card to-transparent" aria-hidden="true" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="inline-flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-gold/85">
          <Clock className="h-3 w-3" aria-hidden="true" />
          {post.readMinutes} min read
        </span>
        <h3 className="mt-3 font-display text-lg font-bold leading-snug text-cream">
          <Link href={`/blog/${post.slug}`} className="transition hover:text-gold-light">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-cream/60">{post.excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-light transition hover:text-gold"
        >
          Read the guide
          <ArrowRight className="h-4 w-4 rtl:rotate-180" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

/** Compact link list used for "related" strips on inner pages. */
export function RelatedLinks({ links }: { links: { name: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <nav aria-label="Related pages" className="mt-12 rounded-3xl border border-gold/15 bg-night-soft/50 p-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">Keep planning</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="flex items-start gap-2 text-sm text-cream/70 transition hover:text-gold">
              <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
              {l.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Breadcrumb trail (visible) — mirrors innerBreadcrumbSchema(). */
export function Crumb({ items }: { items: { name: string; href: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[12px] text-cream/50">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <Link href="/" className="transition hover:text-gold">
            Home
          </Link>
        </li>
        {items.map((it) => (
          <li key={it.href} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3 text-gold/50 rtl:rotate-180" aria-hidden="true" />
            <Link href={it.href} className="transition hover:text-gold">
              {it.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Page hero used by posts, /vs-* pages and silo pages. */
export function PageHero({
  kicker,
  title,
  subtitle,
  image,
  imageAlt,
  meta,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
  meta?: React.ReactNode;
}) {
  return (
    <header className="relative overflow-hidden border-b border-gold/15 pt-[72px]">
      <Image src={image} alt={imageAlt} fill priority sizes="100vw" className="object-cover opacity-30" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/85 to-night"
        aria-hidden="true"
      />
      <div className="pattern-arabesque absolute inset-0 opacity-[0.05]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-10 sm:px-6 lg:pb-16">
        <Kicker>{kicker}</Kicker>
        <h1 className="mt-5 max-w-3xl font-display text-3xl font-black leading-[1.15] text-cream sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-cream/70">{subtitle}</p>
        ) : null}
        {meta ? <div className="mt-6">{meta}</div> : null}
      </div>
    </header>
  );
}

/** On-page table of contents built from the H2 sections (AEO readability). */
export function Toc({ sections }: { sections: PostSection[] }) {
  if (sections.length < 2) return null;
  return (
    <nav aria-label="On this page" className="mt-6 rounded-3xl border border-gold/15 bg-night-soft/50 p-5">
      <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold/85">On this page</p>
      <ul className="mt-3 space-y-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className="flex items-start gap-2 text-sm text-cream/65 transition hover:text-gold">
              <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
              {s.heading}
            </a>
          </li>
        ))}
        <li>
          <a href="#faq" className="flex items-start gap-2 text-sm text-cream/65 transition hover:text-gold">
            <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
            Frequently asked questions
          </a>
        </li>
      </ul>
    </nav>
  );
}
