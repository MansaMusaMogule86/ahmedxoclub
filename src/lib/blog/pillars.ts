import type { Pillar } from "@/lib/blog/types";

/** The 4 content pillars. Each one maps to a search-intent cluster. */
export const PILLARS: Pillar[] = [
  {
    key: "comparisons",
    id: "comparisons",
    name: "Competitor Comparisons",
    nameAr: "مقارنات مع النوادي الأخرى",
    intent: "Capture decision-stage queries from guests comparing Dubai venues.",
  },
  {
    key: "trust",
    id: "trust",
    name: "Transparency & Trust",
    nameAr: "الشفافية والثقة",
    intent: "Answer cost, safety and scam concerns before the guest ever books.",
  },
  {
    key: "khaliji",
    id: "khaliji",
    name: "The Khaliji Experience Guide",
    nameAr: "دليل التجربة الخليجية",
    intent: "Own the 'what is authentic Khaliji nightlife' knowledge graph.",
  },
  {
    key: "practical",
    id: "practical",
    name: "Practical FAQs",
    nameAr: "أسئلة عملية",
    intent: "Convert long-tail FAQ intent into same-night reservations.",
  },
];

export function getPillar(key: Pillar["key"]): Pillar {
  return PILLARS.find((p) => p.key === key) ?? PILLARS[0];
}
