import type { Metadata } from "next";
import type { LandingData } from "@/components/LandingTemplate";
import { LP_BASE } from "@/lib/landing-shared";

export function buildLandingMetadata(
  data: LandingData,
  meta: { title: string; description: string }
): Metadata {
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `${LP_BASE}/${data.slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [{ url: `${LP_BASE}${data.cardImg}` }],
    },
  };
}
