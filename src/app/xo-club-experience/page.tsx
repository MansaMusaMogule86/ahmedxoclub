import { SiloPage } from "@/components/blog/silo-page";
import { requireSilo } from "@/lib/silos";
import { siloMetadata } from "@/lib/seo-meta";

/** First-party silo: the XO Club experience (self-descriptive, no comparisons). */
const silo = requireSilo("xo-club-experience");

export const metadata = siloMetadata(silo);

export default function Page() {
  return <SiloPage silo={silo} />;
}
