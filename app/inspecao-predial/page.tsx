import { getAvaliacoes } from "@/lib/avaliacoes";
import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";
import { inspecaoPredialConfig } from "./config";

export const metadata: Metadata = {
  title: "Inspeção Predial em Condomínios | MG Perícias",
  description:
    "Laudo de inspeção predial para condomínios na Grande Vitória. Identifique riscos, planeje manutenções e resguarde o síndico. Avaliação inicial gratuita.",
};

export default async function InspecaoPredialPage() {
  const avaliacoes = await getAvaliacoes();

  return (
    <LandingTemplate config={inspecaoPredialConfig} avaliacoes={avaliacoes} />
  );
}
