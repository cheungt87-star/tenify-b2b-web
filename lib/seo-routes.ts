/** Pages that belong in sitemap.xml. Add new indexable routes here. */
export const INDEXABLE_PATHS = [
  "/",
  "/help",
  "/about",
  "/privacy",
  "/terms",
  "/for-businesses",
] as const;

/** App routes deliberately kept out of the sitemap (checked by seo.test.mjs). */
export const NON_INDEXED_PATHS: readonly string[] = [];
