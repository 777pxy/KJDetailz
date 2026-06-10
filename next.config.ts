import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      }
    ]
  },
  cacheComponents: true,
    cacheLife: {
      halfDay: {
        stale: 0,
        revalidate: 60 * 60 * 12, // 12 hours
        expire: 60 * 60 * 24,
      }
    }
};

export default nextConfig;
