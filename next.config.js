/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mgpericias.com.br",
      },
    ],
  },
  async rewrites() {
    return [
      { source: '/obra', destination: '/obra.html' },
      { source: '/app', destination: '/app.html' },
    ];
  },
  async redirects() {
    return [
      { source: '/inspecao-predial', destination: '/laudo-inspecao-predial', permanent: true },
      { source: '/auditoria-construcao', destination: '/laudo-auditoria-construcao', permanent: true },
      { source: '/parecer-tecnico', destination: '/parecer-tecnico-engenharia', permanent: true },
      { source: '/vistoria-cautelar', destination: '/', permanent: true },
      { source: '/mapeamento-fachadas', destination: '/mapeamento-de-fachadas', permanent: true },
      { source: '/analise-estrutural', destination: '/laudo-analise-estrutural', permanent: true },
      { source: '/fracao-ideal', destination: '/laudo-conferencia-fracao-ideal', permanent: true },
    ];
  },
};

module.exports = nextConfig;
