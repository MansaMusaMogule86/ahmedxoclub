import { VsPage } from "@/components/blog/vs-page";
import { requireCompetitor } from "@/lib/competitors";
import { vsMetadata } from "@/lib/seo-meta";

const competitor = requireCompetitor("avenue-club");

export const metadata = vsMetadata(competitor);

export default function Page() {
  return <VsPage competitor={competitor} />;
}
