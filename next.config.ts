import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shared design system is a linked sibling folder (../tenify-design-system).
  // Turbopack only resolves files inside its root, so the root is the parent of both.
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // 85 is reserved for the full-bleed hero photo; everything else stays at the 75 default.
    qualities: [75, 85],
  },
};

export default nextConfig;
