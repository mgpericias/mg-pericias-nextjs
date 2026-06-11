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
    ];
  },
};

module.exports = nextConfig;
