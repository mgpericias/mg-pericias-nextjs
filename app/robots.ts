import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/app", "/app.html"] },
    sitemap: "https://mgpericias.com.br/sitemap.xml",
  };
}
