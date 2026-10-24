import type { MetadataRoute } from "next";
import { INDEXABLE_PATHS } from "@/lib/seo-routes";
import { absoluteUrl } from "@/lib/schema";

// No lastModified: pages have no tracked content dates yet, and an
// inaccurate lastmod is worse than none.
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_PATHS.map((path) => ({ url: absoluteUrl(path) }));
}
