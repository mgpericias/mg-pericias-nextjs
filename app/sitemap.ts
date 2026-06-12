import { listarPosts } from "@/lib/supabase";
import type { MetadataRoute } from "next";

const BASE = "https://mgpericias.com.br";

const LANDING_PAGES = [
  "/laudo-inspecao-predial",
  "/laudo-auditoria-construcao",
  "/parecer-tecnico-engenharia",
  "/inspecao-preliminar-fachada",
  "/mapeamento-de-fachadas",
  "/laudo-analise-estrutural",
  "/laudo-conferencia-fracao-ideal",
  "/gestao-fiscalizacao-obras",
  "/vistoria-recebimento-chaves",
  "/obra",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listarPosts();
  const postUrls = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.criado_em),
  }));

  const landingUrls = LANDING_PAGES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));

  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/blog`, lastModified: new Date() },
    ...landingUrls,
    ...postUrls,
  ];
}
