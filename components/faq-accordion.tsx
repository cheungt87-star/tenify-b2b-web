"use client";

import { useState } from "react";

const FAQS = [
  {
    question: "How long does setup take?",
    answer:
      "Sign up on the web, invite your team, upload your logo. 15 minutes and you're ready to run your first inspection.",
  },
  {
    question: "Does this work with our existing process?",
    answer:
      "Yes. Tenify replaces the paper checklist and camera roll, not your workflow. Your inspectors still walk the property the same way.",
  },
  {
    question: "Can we use our own branding?",
    answer: "Every report carries your agency's logo and name, not Tenify's.",
  },
  {
    question: "What if we don't have 5+ inspectors?",
    answer: "Plans start small. Add seats as you grow.",
  },
  {
    question: "Is there a contract?",
    answer: "No. Month to month, cancel anytime.",
  },
  {
    question: "How is this priced?",
    answer: "Per seat, per month. You know your cost before you commit.",
  },
  {
    question: "Do tenants or landlords need an account?",
    answer: "No. They just receive the finished report.",
  },
  {
    question: "What happens to our data?",
    answer:
      "Reports and photos stay tied to your agency account and are available for as long as you're a customer.",
  },
] as const;

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      {FAQS.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

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
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600"
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-lg text-neutral-600 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
                >
                  ›
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="px-5 pb-5 text-[15px] leading-[1.6] text-neutral-600"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
