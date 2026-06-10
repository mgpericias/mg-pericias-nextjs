import { listarPosts } from "@/lib/supabase";
import type { MetadataRoute } from "next";

const BASE = "https://mgpericias.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listarPosts();
  const postUrls = posts.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.criado_em),
  }));

  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/blog`, lastModified: new Date() },
    ...postUrls,
  ];
}
