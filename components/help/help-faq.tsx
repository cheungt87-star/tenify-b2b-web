"use client";

import { useEffect, useState } from "react";
import { FaqAnswer } from "@/components/faq-answer";
import { FAQ_DATA } from "@/lib/faq-data";

export function HelpFaq() {
  const [openKey, setOpenKey] = useState<string | null>(
    FAQ_DATA[0]?.faqs[0] ? `${FAQ_DATA[0].id}-0` : null
  );
  const [activeId, setActiveId] = useState<string>(FAQ_DATA[0]?.id ?? "");

  // Highlight the section currently in view in the contents list.
  useEffect(() => {
    const sections = FAQ_DATA.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid min-w-0 gap-5 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
      <div className="min-w-0 lg:sticky lg:top-28 lg:self-start">
        <h2 className="h2-display">Frequently asked questions</h2>
        <nav aria-label="FAQ sections" className="mt-5 lg:mt-7">
          <ul className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-10 sm:px-10 lg:mx-0 lg:grid lg:gap-0.5 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
            {FAQ_DATA.map((section) => {
              const on = activeId === section.id;
              return (
                <li key={section.id} className="shrink-0">
                  <a
                    href={`#${section.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`flex items-center gap-3 rounded-full px-4 py-2.5 text-[15px] font-bold no-underline transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:rounded-none lg:bg-transparent lg:px-0 lg:py-2 lg:text-[17px] ${
                      on
                        ? "bg-navy-900 text-true-white lg:text-navy-900"
                        : "bg-panel-grey text-navy-900 lg:text-neutral-700"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`hidden h-2 w-2 rounded-full lg:block ${on ? "bg-brand" : "bg-neutral-300"}`}
                    />
                    {section.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex min-w-0 flex-col gap-9 lg:gap-12">
        {FAQ_DATA.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <h3 className="mb-4 text-[clamp(22px,2.2vw,28px)] font-extrabold tracking-[-0.01em] text-navy-900">
              {section.title}
            </h3>
            <div className="flex flex-col gap-3">
              {section.faqs.map((item, index) => {
                const itemKey = `${section.id}-${index}`;
                const open = openKey === itemKey;
                const panelId = `help-faq-panel-${itemKey}`;
                const buttonId = `help-faq-button-${itemKey}`;

                return (
                  <div key={item.question} className="overflow-hidden rounded-[24px] bg-panel-grey">
                    <h4>
                      <button
                        type="button"
                        id={buttonId}
                        aria-expanded={open}
                        aria-controls={panelId}
                        className="flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left text-[17px] font-extrabold text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:px-6 md:py-5 md:text-[18px]"
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
                      className="px-5 pb-5 text-[15px] leading-[1.6] text-label-2 md:px-6 md:pb-6"
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
    </div>
  );
}
