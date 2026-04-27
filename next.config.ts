import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  // Isolate dev output from production output to prevent stale chunk cross-contamination.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [384, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    /** Longer cache for optimized images (public filenames are content-addressed by deploy). */
    minimumCacheTTL: 60 * 60 * 24 * 7,
  },
  // Avoid corrupted webpack filesystem cache in dev (fixes intermittent "Cannot find module './NNN.js'").
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/download",
        destination: "/p67-download/",
        permanent: true,
      },
      {
        source: "/download/",
        destination: "/p67-download/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
