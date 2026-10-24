// Placeholder values. Replace with the real links and assets before launch.
export const APP_STORE_URL = "https://apps.apple.com/app/tenify/id0000000000";
export const SAMPLE_REPORT_PDF = "/sample/tenify-sample-report.pdf";
export const SUPPORT_EMAIL = "hello@tenify.ae";
export const CONTACT_EMAIL = SUPPORT_EMAIL;
export const PRIVACY_URL = "/privacy";
export const TERMS_URL = "/terms";

/** Canonical origin. All schema `@id` and `url` values derive from this. */
export const SITE_URL = "https://tenify.ae";
/** Hostname of the canonical origin. Anything else (www, vercel.app, previews) is noindex. */
export const SITE_HOST = "tenify.ae";
export const SITE_NAME = "Tenify";
export const LOGO_URL = `${SITE_URL}/brand/tenify-logo-schema.png`;

/**
 * Softened SoftwareApplication description — matches home metadata.
 * Avoid "evidenced", "proof", "protected", or legal-standing claims.
 */
export const APP_DESCRIPTION =
  "Document the exact condition of your rental at move-in. Room by room, with photos, in one report you can share. Free until the end of 2026.";

/**
 * Free offer end date for schema Offer.validThrough.
 * Owner task: by 31 Dec 2026 remove or replace the free Offer in schema.
 */
export const FREE_OFFER_VALID_THROUGH = "2026-12-31";

/** True only when APP_STORE_URL has a real App Store ID (not the placeholder). */
export const hasRealAppStoreUrl =
  !APP_STORE_URL.includes("id0000000000");

/** Default = phone-demo cream hero (opt2 v5). Set NEXT_PUBLIC_HERO_VARIANT=split for the older two-column fallback. */
export const HERO_VARIANT: "full-bleed" | "split" =
  process.env.NEXT_PUBLIC_HERO_VARIANT === "split" ? "split" : "full-bleed";
