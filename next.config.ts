import type { NextConfig } from "next";
import { SITE_HOST, SITE_URL } from "./lib/site-config";

const nextConfig: NextConfig = {
  // Tokens live in packages/tokens (vendored). Do not set turbopack.root to the
  // parent folder — on Vercel that nests the app under path0 and serves platform 404s.
  images: {
    formats: ["image/avif", "image/webp"],
    // 85 is reserved for the full-bleed hero photo; everything else stays at the 75 default.
    qualities: [75, 85],
  },
  async redirects() {
    return [
      {
        // One canonical host. Also set in Vercel domain settings; this is the fallback.
        source: "/:path*",
        has: [{ type: "host", value: `www.${SITE_HOST}` }],
        destination: `${SITE_URL}/:path*`,
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Any host other than the canonical one (vercel.app alias, previews) stays out of search.
        source: "/:path*",
        has: [{ type: "host", value: `(?!${SITE_HOST.replace(".", "\\.")}$).*` }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
