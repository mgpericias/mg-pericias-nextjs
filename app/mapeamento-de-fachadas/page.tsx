import LandingTemplate from "@/components/LandingTemplate";
import { buildLandingMetadata } from "@/lib/landing-metadata";
import { data, metadata as meta } from "@/lib/landing-configs/mapeamento-de-fachadas";

export const metadata = buildLandingMetadata(data, meta);

export default function Page() {
  return <LandingTemplate data={data} />;
}
