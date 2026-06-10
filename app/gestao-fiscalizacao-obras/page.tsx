import { getAvaliacoes } from "@/lib/avaliacoes";
import type { Metadata } from "next";
import LandingTemplate from "@/components/LandingTemplate";
import { gestaoFiscalizacaoObrasConfig } from "./config";

export const metadata: Metadata = {
  title: "Gestão e Fiscalização de Obras em Condomínios | MG Perícias",
  description:
    "Acompanhamento técnico independente para condomínios na Grande Vitória. Garanta que a obra saia como contratada e o orçamento seja respeitado.",
};

export default async function GestaoFiscalizacaoObrasPage() {
  const avaliacoes = await getAvaliacoes();

  return (
    <LandingTemplate
      config={gestaoFiscalizacaoObrasConfig}
      avaliacoes={avaliacoes}
    />
  );
}
