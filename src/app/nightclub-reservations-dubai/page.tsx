import { SiloPage } from "@/components/blog/silo-page";
import { requireSilo } from "@/lib/silos";
import { siloMetadata } from "@/lib/seo-meta";

/** First-party silo: nightclub reservations in Dubai (no competitor content). */
const silo = requireSilo("nightclub-reservations-dubai");

export const metadata = siloMetadata(silo);

export default function Page() {
  return <SiloPage silo={silo} />;
}
