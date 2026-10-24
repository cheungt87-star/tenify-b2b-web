import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  APP_DESCRIPTION,
  FREE_OFFER_VALID_THROUGH,
  LOGO_URL,
  SITE_NAME,
  SITE_URL,
  hasRealAppStoreUrl,
} from "./site-config.ts";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  APP_ID,
  aboutPage,
  breadcrumbList,
  collectKeys,
  faqPage,
  graph,
  hasUndefined,
  organization,
  softwareApplication,
  webSite,
} from "./schema.ts";

function assertNoUndefined(value, label) {
  assert.equal(hasUndefined(value), false, `${label} must not contain undefined`);
}

describe("schema builders", () => {
  it("organization has required fields and stable @id", () => {
    const node = organization();
    assert.equal(node["@type"], "Organization");
    assert.equal(node["@id"], ORGANIZATION_ID);
    assert.equal(node.name, SITE_NAME);
    assert.equal(node.url, `${SITE_URL}/`);
    assert.equal(node.email, "hello@tenify.ae");
    assert.equal(node.logo?.url, LOGO_URL);
    assert.equal(node.areaServed?.name, "United Arab Emirates");
    assert.equal("sameAs" in node, false);
    assertNoUndefined(node, "organization");
  });

  it("webSite references organization by @id", () => {
    const node = webSite();
    assert.equal(node["@type"], "WebSite");
    assert.equal(node["@id"], WEBSITE_ID);
    assert.deepEqual(node.publisher, { "@id": ORGANIZATION_ID });
    assertNoUndefined(node, "webSite");
  });

  it("softwareApplication uses free offer and omits download when App Store is placeholder", () => {
    const node = softwareApplication();
    assert.equal(node["@type"], "SoftwareApplication");
    assert.equal(node["@id"], APP_ID);
    assert.equal(node.description, APP_DESCRIPTION);
    assert.equal(node.offers?.price, "0");
    assert.equal(node.offers?.priceCurrency, "AED");
    assert.equal(node.offers?.validThrough, FREE_OFFER_VALID_THROUGH);
    assert.equal(hasRealAppStoreUrl, false);
    assert.equal("downloadUrl" in node, false);
    assert.equal("installUrl" in node, false);
    assertNoUndefined(node, "softwareApplication");
  });

  it("faqPage maps questions and answers", () => {
    const node = faqPage([
      { question: "What is Tenify?", answer: "- Inspect room by room\n- Rate items" },
    ]);
    assert.equal(node["@type"], "FAQPage");
    assert.equal(node.mainEntity.length, 1);
    assert.equal(node.mainEntity[0].name, "What is Tenify?");
    assert.equal(
      node.mainEntity[0].acceptedAnswer.text,
      "Inspect room by room Rate items",
    );
    assertNoUndefined(node, "faqPage");
  });

  it("breadcrumbList builds absolute item URLs", () => {
    const node = breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Help", path: "/help" },
    ]);
    assert.equal(node["@type"], "BreadcrumbList");
    assert.equal(node.itemListElement[0].position, 1);
    assert.equal(node.itemListElement[0].item, `${SITE_URL}/`);
    assert.equal(node.itemListElement[1].item, `${SITE_URL}/help`);
    assertNoUndefined(node, "breadcrumbList");
  });

  it("aboutPage references organization and website by @id", () => {
    const node = aboutPage();
    assert.equal(node["@type"], "AboutPage");
    assert.deepEqual(node.about, { "@id": ORGANIZATION_ID });
    assert.deepEqual(node.isPartOf, { "@id": WEBSITE_ID });
    assertNoUndefined(node, "aboutPage");
  });

  it("graph wraps nodes with schema.org context", () => {
    const data = graph(organization(), webSite());
    assert.equal(data["@context"], "https://schema.org");
    assert.equal(data["@graph"].length, 2);
    assertNoUndefined(data, "graph");
  });

  it("lints banned review/rating keys and non-zero prices", () => {
    const home = graph(
      organization(),
      webSite(),
      softwareApplication(),
      faqPage([{ question: "Q?", answer: "A." }]),
    );
    const keys = collectKeys(home);
    assert.equal(keys.has("aggregateRating"), false);
    assert.equal(keys.has("review"), false);
    assert.equal(keys.has("ratingValue"), false);

    const json = JSON.stringify(home);
    const prices = [...json.matchAll(/"price"\s*:\s*"([^"]*)"/g)].map((m) => m[1]);
    assert.ok(prices.length > 0);
    for (const price of prices) {
      assert.equal(price, "0");
    }
  });
});
