"use client";

import { useState } from "react";
import { FaqAnswer } from "@/components/faq-answer";
import { FAQ_DATA } from "@/lib/faq-data";

export function HelpFaq() {
  const [openKey, setOpenKey] = useState<string | null>(
    FAQ_DATA[0]?.faqs[0] ? `${FAQ_DATA[0].id}-0` : null
  );

  return (
    <div className="flex flex-col gap-14">
      {FAQ_DATA.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h3 className="mb-5 text-xl font-bold tracking-tight text-neutral-900 md:text-2xl">
            {section.title}
          </h3>
          <div className="flex flex-col gap-3">
            {section.faqs.map((item, index) => {
              const itemKey = `${section.id}-${index}`;
              const open = openKey === itemKey;
              const panelId = `help-faq-panel-${itemKey}`;
              const buttonId = `help-faq-button-${itemKey}`;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[var(--radius-md)] border border-neutral-200 bg-true-white"
                >
                  <h4>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={open}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      onClick={() => setOpenKey(open ? null : itemKey)}
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
                  </h4>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!open}
                    className="px-5 pb-5 text-[15px] leading-[1.6] text-label-2"
                  >
                    <FaqAnswer answer={item.answer} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
