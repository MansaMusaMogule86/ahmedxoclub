import { SiloPage } from "@/components/blog/silo-page";
import { requireSilo } from "@/lib/silos";
import { siloMetadata } from "@/lib/seo-meta";

const silo = requireSilo("business-bay-nightlife");

export const metadata = siloMetadata(silo);

export default function Page() {
  return <SiloPage silo={silo} />;
}
