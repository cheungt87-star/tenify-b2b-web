import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Tokens live in packages/tokens (vendored). Do not set turbopack.root to the
  // parent folder — on Vercel that nests the app under path0 and serves platform 404s.
  images: {
    formats: ["image/avif", "image/webp"],
    // 85 is reserved for the full-bleed hero photo; everything else stays at the 75 default.
    qualities: [75, 85],
  },
};

export default nextConfig;
