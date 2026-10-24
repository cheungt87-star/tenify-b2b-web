"use client";

import Link from "next/link";
import { useState } from "react";
import { FaqAnswer } from "@/components/faq-answer";
import { getHomepageFAQs } from "@/lib/faq-data";

const VISIBLE_COUNT = 5;

export function HomeFaq() {
  const items = getHomepageFAQs(VISIBLE_COUNT);
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `home-faq-panel-${index}`;
        const buttonId = `home-faq-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[24px] bg-panel-grey"
          >
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[17px] font-extrabold text-navy-900 md:text-[18px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
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
              className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-6 pb-6 text-[15px] leading-[1.6] text-label-2">
                  <FaqAnswer answer={item.answer} />
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <Link
        href="/help"
        className="mt-4 inline-flex min-h-11 items-center justify-center self-start rounded-full border-2 border-navy-900 px-6 text-[0.9375rem] font-semibold text-navy-900 no-underline transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
      >
        See more questions
      </Link>
    </div>
  );
}
