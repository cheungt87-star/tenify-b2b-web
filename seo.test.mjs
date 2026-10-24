import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "node:test";
import { pageMetadata } from "./lib/seo.ts";
import { INDEXABLE_PATHS, NON_INDEXED_PATHS } from "./lib/seo-routes.ts";
import { SITE_HOST, SITE_URL } from "./lib/site-config.ts";
import { absoluteUrl } from "./lib/schema.ts";

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === ".git") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

describe("canonical host", () => {
  it("is the apex over https", () => {
    assert.equal(SITE_URL, `https://${SITE_HOST}`);
    assert.ok(!SITE_HOST.startsWith("www."));
  });

  it("no source file hard-codes the www host", () => {
    const offenders = [...walk("app"), ...walk("lib"), ...walk("components")]
      .filter((f) => /\.(ts|tsx|mjs|md)$/.test(f) && !f.endsWith("seo.test.mjs"))
      .filter((f) => readFileSync(f, "utf8").includes("www.tenify.ae"));
    assert.deepEqual(offenders, []);
  });

  it("absoluteUrl never emits www", () => {
    for (const p of INDEXABLE_PATHS) assert.ok(!absoluteUrl(p).includes("www."));
  });
});

describe("pageMetadata", () => {
  const m = pageMetadata({ path: "/help", title: "Help & Support | Tenify", description: "d" });
  it("sets canonical to the page path", () => {
    assert.equal(m.alternates.canonical, "/help");
  });
  it("sets complete Open Graph and Twitter data", () => {
    assert.equal(m.openGraph.url, "/help");
    assert.equal(m.openGraph.locale, "en_AE");
    assert.equal(m.openGraph.siteName, "Tenify");
    assert.equal(m.openGraph.images.length, 1);
    assert.equal(m.twitter.card, "summary_large_image");
    assert.equal(m.twitter.images.length, 1);
  });
});

describe("sitemap coverage", () => {
  it("every page route is either in the sitemap or explicitly excluded", () => {
    const routes = walk("app")
      .filter((f) => /(^|\/)page\.tsx$/.test(f))
      .map((f) => "/" + f.replace(/^app\/?/, "").replace(/\/?page\.tsx$/, ""))
      .map((r) => (r === "/" ? "/" : r.replace(/\/$/, "")));
    for (const r of routes) {
      assert.ok(
        INDEXABLE_PATHS.includes(r) || NON_INDEXED_PATHS.includes(r),
        `route ${r} is in neither INDEXABLE_PATHS nor NON_INDEXED_PATHS`,
      );
    }
  });
  it("sitemap has no duplicates", () => {
    assert.equal(new Set(INDEXABLE_PATHS).size, INDEXABLE_PATHS.length);
  });
});
