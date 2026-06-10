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
};

module.exports = nextConfig;
