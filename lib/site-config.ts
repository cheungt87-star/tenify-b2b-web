// Placeholder values. Replace with the real links and assets before launch.
export const APP_STORE_URL = "https://apps.apple.com/app/tenify/id0000000000";
export const SAMPLE_REPORT_PDF = "/sample/tenify-sample-report.pdf";
export const SUPPORT_EMAIL = "hello@tenify.ae";
export const PRIVACY_URL = "/privacy";
export const TERMS_URL = "/terms";

/** Default = phone-demo cream hero (opt2 v5). Set NEXT_PUBLIC_HERO_VARIANT=split for the older two-column fallback. */
export const HERO_VARIANT: "full-bleed" | "split" =
  process.env.NEXT_PUBLIC_HERO_VARIANT === "split" ? "split" : "full-bleed";
