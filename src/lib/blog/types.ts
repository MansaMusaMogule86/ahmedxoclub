/**
 * Blog engine — content model for the XO Club Dubai content silos.
 * AEO: every post opens with a `quickAnswer` (2–3 sentences, direct answer).
 * GEO: `sections` carry citable data points (address, hours, phone, rating, tiers).
 * Nothing here may invent DJs, events, prices, review counts or awards.
 */

/** A single renderable content block inside a section. */
export type Block =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "steps"; items: { name: string; text: string }[] }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] }
  | { kind: "callout"; label: string; text: string }
  | { kind: "quote"; text: string; cite?: string };

export interface PostSection {
  /** Anchor id — used by the on-page table of contents. */
  id: string;
  /** H2 — written as a question wherever possible (AEO). */
  heading: string;
  blocks: Block[];
}

/** AEO question/answer pair. Feeds visible FAQ + FAQPage JSON-LD. */
export interface FaqPair {
  q: string;
  a: string;
}

/**
 * Pillar keys. NOTE: the former "comparisons" pillar (named-competitor posts)
 * was retired for legal review — see archive/competitor-comparison/README.md.
 */
export type PillarKey = "planning" | "trust" | "khaliji" | "practical";

export interface BlogPost {
  slug: string;
  pillar: PillarKey;
  /** H1 */
  title: string;
  /** <title> — pattern: "[Primary KW] | XO Club Dubai | Book: +971503737162" */
  metaTitle: string;
  metaDescription: string;
  /** Semrush-style primary target keyword. */
  targetKeyword: string;
  secondaryKeywords: string[];
  /** Card teaser (1–2 sentences). */
  excerpt: string;
  /** ISO date — used for BlogPosting.datePublished + sitemap lastmod. */
  pubDate: string;
  updated?: string;
  readMinutes: number;
  heroImage: string;
  /** The AEO "Quick Answer" — 2–3 sentences, snippet/voice optimised. */
  quickAnswer: string;
  /** Scannable bullet summary rendered above the fold. */
  keyTakeaways: string[];
  sections: PostSection[];
  faqs: FaqPair[];
  /** Related post slugs for internal linking (min 3 per the internal-link rule). */
  related: string[];
  /** Pre-filled WhatsApp message for this post's CTA. */
  ctaMessage: string;
}

export interface Pillar {
  key: PillarKey;
  /** Anchor id on /blog */
  id: string;
  name: string;
  nameAr: string;
  /** One-line description of the content intent served. */
  intent: string;
}
