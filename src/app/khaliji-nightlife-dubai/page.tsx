import { SiloPage } from "@/components/blog/silo-page";
import { requireSilo } from "@/lib/silos";
import { siloMetadata } from "@/lib/seo-meta";

/** Content silo route — the pillar hub for Khaliji nightlife intent. */
const silo = requireSilo("khaliji-nightlife-dubai");

export const metadata = siloMetadata(silo);

export default function Page() {
  return <SiloPage silo={silo} />;
}
