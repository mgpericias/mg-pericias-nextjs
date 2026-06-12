import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://mgpericias.com.br/#organization",
  name: "MG Perícias",
  description:
    "Empresa de Engenharia Diagnóstica especializada em condomínios. Laudo de inspeção predial, fiscalização de obras, mapeamento de fachadas e pareceres técnicos na Grande Vitória, ES.",
  url: "https://mgpericias.com.br",
  logo: "https://mgpericias.com.br/images/logo-mgpericias.png",
  image: "https://mgpericias.com.br/images/TIME-MG-1.jpg",
  telephone: "+5527999704394",
  email: "contato@mgpericias.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Italina Pereira Mota, 440, Sala 107",
    addressLocality: "Vitória",
    addressRegion: "ES",
    postalCode: "29090-370",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -20.2581878,
    longitude: -40.2658304,
  },
  areaServed: [
    { "@type": "City", name: "Vitória" },
    { "@type": "City", name: "Vila Velha" },
    { "@type": "City", name: "Serra" },
    { "@type": "City", name: "Cariacica" },
    { "@type": "State", name: "Espírito Santo" },
  ],
  sameAs: [
    "https://www.linkedin.com/company/mg-perícias",
    "https://www.instagram.com/mgpericias",
    "https://www.facebook.com/profile.php?id=61590443963195",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços de Engenharia Diagnóstica",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laudo de Inspeção Predial",
          url: "https://mgpericias.com.br/laudo-inspecao-predial",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gestão e Fiscalização de Obras",
          url: "https://mgpericias.com.br/gestao-fiscalizacao-obras",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laudo de Auditoria da Construção",
          url: "https://mgpericias.com.br/laudo-auditoria-construcao",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Parecer Técnico de Engenharia",
          url: "https://mgpericias.com.br/parecer-tecnico-engenharia",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Inspeção Preliminar de Fachada",
          url: "https://mgpericias.com.br/inspecao-preliminar-fachada",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mapeamento de Fachadas",
          url: "https://mgpericias.com.br/mapeamento-de-fachadas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laudo de Análise Estrutural",
          url: "https://mgpericias.com.br/laudo-analise-estrutural",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laudo de Conferência de Fração Ideal",
          url: "https://mgpericias.com.br/laudo-conferencia-fracao-ideal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vistoria de Recebimento de Chaves",
          url: "https://mgpericias.com.br/vistoria-recebimento-chaves",
        },
      },
    ],
  },
};

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
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
