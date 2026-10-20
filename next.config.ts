import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/districts',
        destination: '/areas',
        permanent: true,
      },
      {
        source: '/districts/:slug',
        destination: '/areas/:slug',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
