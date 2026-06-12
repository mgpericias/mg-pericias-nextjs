import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Engenharia Diagnóstica para Condomínios | MG Perícias ES",
  description:
    "Engenharia diagnóstica para condomínios na Grande Vitória. Laudo de inspeção predial, fiscalização de obras e parecer técnico. Equipe com +13 anos de experiência. Fale conosco!",
  openGraph: {
    title: "Engenharia Diagnóstica para Condomínios | MG Perícias ES",
    description:
      "Engenharia diagnóstica para condomínios na Grande Vitória. Laudo de inspeção predial, fiscalização de obras e parecer técnico.",
    type: "website",
    locale: "pt_BR",
    url: "https://mgpericias.com.br",
    images: [
      {
        url: "https://mgpericias.com.br/icon.png",
        width: 512,
        height: 512,
        alt: "MG Perícias",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MG Perícias",
              description:
                "Empresa capixaba de Engenharia Diagnóstica especializada em condomínios e administradoras.",
              telephone: "+5527999704394",
              email: "contato@mgpericias.com.br",
              url: "https://mgpericias.com.br",
              logo: "https://mgpericias.com.br/icon.png",
              image: "https://mgpericias.com.br/icon.png",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Italina Pereira Mota, 440 - Sala 107",
                addressLocality: "Vitória",
                addressRegion: "ES",
                postalCode: "29090-370",
                addressCountry: "BR",
              },
              areaServed: ["Vitória", "Vila Velha", "Serra", "Cariacica"],
            }),
          }}
        />
      </head>
      <body>
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
