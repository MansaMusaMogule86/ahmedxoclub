import { SiloPage } from "@/components/blog/silo-page";
import { requireSilo } from "@/lib/silos";
import { siloMetadata } from "@/lib/seo-meta";

/** First-party silo: Dubai nightclub entertainment (no competitor content). */
const silo = requireSilo("dubai-nightclub-entertainment");

export const metadata = siloMetadata(silo);

export default function Page() {
  return <SiloPage silo={silo} />;
}
