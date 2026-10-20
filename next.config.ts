import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'gremutoprvrtujeybpcl.supabase.co',
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
      {
        source: '/residency/golden-visa',
        destination: '/residency',
        permanent: true,
      },
      {
        source: '/guides/buying',
        destination: '/buying-guide',
        permanent: true,
      },
      {
        source: '/guides/renting',
        destination: '/rent',
        permanent: true,
      },
      {
        source: '/investment/calculator',
        destination: '/investment/calculators',
        permanent: true,
      },
      {
        source: '/calculators',
        destination: '/investment/calculators',
        permanent: true,
      },
      {
        source: '/tools',
        destination: '/investment/calculators',
        permanent: true,
      },
      {
        source: '/corporate-tax',
        destination: '/tax',
        permanent: true,
      },
      {
        source: '/tax-guide',
        destination: '/tax',
        permanent: true,
      },
      {
        source: '/legal/framework',
        destination: '/legal',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/private-client',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
