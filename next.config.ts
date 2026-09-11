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
    ],
    // No layout on the site ever renders an image wider than ~700px (the
    // max-w-[1400px] container splits into at most 2 columns), and Sanity
    // sources are already downscaled to 600-900px server-side. The Next.js
    // defaults go up to 3840px, which just upscales those small sources and
    // multiplies the number of distinct cached variants a visitor can miss.
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [64, 96, 128, 256, 384],
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
