import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { getAllFAQs, getHomepageFAQs } from "./lib/faq-data.ts";
import { faqPage, plainFaqAnswer } from "./lib/schema.ts";

describe("FAQ schema parity", () => {
  it("every FAQ in the source has a non-empty answer", () => {
    const all = getAllFAQs();
    assert.ok(all.length >= 90, `expected ~92 FAQs, got ${all.length}`);
    for (const item of all) {
      assert.ok(item.question.trim(), "question must be non-empty");
      assert.ok(item.answer.trim(), `empty answer for: ${item.question}`);
    }
  });

  it("homepage FAQPage strings match source text", () => {
    const items = getHomepageFAQs(5);
    const page = faqPage(items);
    assert.equal(page.mainEntity.length, 5);

    for (let i = 0; i < items.length; i++) {
      const entity = page.mainEntity[i];
      assert.equal(entity.name, items[i].question);
      assert.equal(entity.acceptedAnswer.text, plainFaqAnswer(items[i].answer));
      assert.ok(entity.acceptedAnswer.text.length > 0);
      // Parity: schema answer text appears in the source answer string
      // (after stripping leading "- " bullets).
      for (const line of items[i].answer.split("\n")) {
        const plain = line.replace(/^-\s+/, "").trim();
        if (!plain) continue;
        assert.ok(
          entity.acceptedAnswer.text.includes(plain),
          `schema missing source fragment for "${items[i].question}": ${plain}`,
        );
      }
    }
  });

  it("help FAQPage covers every FAQ with non-empty answers", () => {
    const items = getAllFAQs();
    const page = faqPage(items);
    assert.equal(page.mainEntity.length, items.length);

    for (let i = 0; i < items.length; i++) {
      const entity = page.mainEntity[i];
      assert.equal(entity.name, items[i].question);
      assert.ok(entity.acceptedAnswer.text.trim().length > 0);
      assert.equal(entity.acceptedAnswer.text, plainFaqAnswer(items[i].answer));
    }
  });
});
