"use client";

import { useState, type ReactNode } from "react";
import { SUPPORT_EMAIL } from "@/lib/site-config";
import { getHomepageFAQs } from "@/lib/faq-data";

const VISIBLE_COUNT = 5;

const inlineLink =
  "font-bold text-brand underline underline-offset-4 hover:underline-offset-[6px]";

// Format answer text, converting support email references to links
function formatAnswer(answer: string): ReactNode {
  // Handle the support email case
  if (answer.includes("hello@tenify.ae")) {
    return (
      <>
        Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={inlineLink}>
          {SUPPORT_EMAIL}
        </a>
        . We reply within 24 hours.
      </>
    );
  }
  return answer;
}

export function HomeFaq() {
  const allFAQs = getHomepageFAQs(10);
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const items = showAll ? allFAQs : allFAQs.slice(0, VISIBLE_COUNT);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `home-faq-panel-${index}`;
        const buttonId = `home-faq-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[var(--radius-md)] border border-neutral-200 bg-true-white"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{item.question}</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className={`shrink-0 text-label-2 transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-90" : ""}`}
                >
                  <path d="m9 6 6 6-6 6" />
                </svg>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5 text-[15px] leading-[1.6] text-label-2"
            >
              {formatAnswer(item.answer)}
            </div>
          </div>
        );
      })}

      <button
        type="button"
        aria-expanded={showAll}
        className="mx-auto mt-4 inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border-2 border-navy-900 px-5 text-[0.9375rem] font-semibold text-navy-900 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
        onClick={() => {
          if (showAll && openIndex >= VISIBLE_COUNT) setOpenIndex(-1);
          setShowAll((value) => !value);
        }}
      >
        {showAll ? "Show fewer questions" : "See more questions"}
      </button>
    </div>
  );
}
