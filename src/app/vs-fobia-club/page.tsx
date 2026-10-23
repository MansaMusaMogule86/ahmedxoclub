import { VsPage } from "@/components/blog/vs-page";
import { requireCompetitor } from "@/lib/competitors";
import { vsMetadata } from "@/lib/seo-meta";

/** Competitor interception route — see docs/strategy/08 for the tone contract. */
const competitor = requireCompetitor("fobia-club");

export const metadata = vsMetadata(competitor);

export default function Page() {
  return <VsPage competitor={competitor} />;
}
