import type { FAQItem } from "./faq-data";
import {
  APP_DESCRIPTION,
  APP_STORE_URL,
  CONTACT_EMAIL,
  FREE_OFFER_VALID_THROUGH,
  LOGO_URL,
  SITE_NAME,
  SITE_URL,
  hasRealAppStoreUrl,
} from "./site-config";

export type JsonLdNode = Record<string, unknown>;

export type BreadcrumbTrailItem = {
  name: string;
  path: string;
};

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const APP_ID = `${SITE_URL}/#app`;

/** Absolute URL from a site-relative path. */
export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "/" : normalized}`;
}

/** Plain-text FAQ answer for schema (bullets become readable lines). */
export function plainFaqAnswer(answer: string): string {
  return answer
    .split("\n")
    .map((line) => line.replace(/^-\s+/, "").trim())
    .filter(Boolean)
    .join(" ");
}

export function organization(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    email: CONTACT_EMAIL,
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
  };
}

export function webSite(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function softwareApplication(): JsonLdNode {
  const node: JsonLdNode = {
    "@type": "SoftwareApplication",
    "@id": APP_ID,
    name: SITE_NAME,
    operatingSystem: "iOS",
    applicationCategory: "LifestyleApplication",
    description: APP_DESCRIPTION,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AED",
      validThrough: FREE_OFFER_VALID_THROUGH,
    },
    publisher: { "@id": ORGANIZATION_ID },
  };

  if (hasRealAppStoreUrl) {
    node.downloadUrl = APP_STORE_URL;
    node.installUrl = APP_STORE_URL;
  }

  return node;
}

export function faqPage(items: ReadonlyArray<Pick<FAQItem, "question" | "answer">>): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: plainFaqAnswer(item.answer),
      },
    })),
  };
}

export function breadcrumbList(trail: ReadonlyArray<BreadcrumbTrailItem>): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function aboutPage(): JsonLdNode {
  return {
    "@type": "AboutPage",
    "@id": absoluteUrl("/about"),
    url: absoluteUrl("/about"),
    name: `About | ${SITE_NAME}`,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
  };
}

/** Stub for future guides/blog Article schema. Not used yet. */
export function article(_input: {
  headline: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  description?: string;
}): JsonLdNode {
  void _input;
  throw new Error("article() schema is not implemented yet");
}

export function graph(...nodes: JsonLdNode[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

/** Walk a schema tree and collect every key that appears. */
export function collectKeys(value: unknown, keys = new Set<string>()): Set<string> {
  if (Array.isArray(value)) {
    for (const item of value) collectKeys(item, keys);
    return keys;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value as Record<string, unknown>)) {
      keys.add(key);
      collectKeys(child, keys);
    }
  }
  return keys;
}

/** True if any nested value is strictly `undefined`. */
export function hasUndefined(value: unknown): boolean {
  if (value === undefined) return true;
  if (Array.isArray(value)) return value.some(hasUndefined);
  if (value && typeof value === "object") {
    return Object.values(value as Record<string, unknown>).some(hasUndefined);
  }
  return false;
}
