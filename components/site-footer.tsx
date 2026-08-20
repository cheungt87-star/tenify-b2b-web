"use client";

import { useState } from "react";
import { TenifyLogo } from "@/components/tenify-logo";

const FOOTER_SECTIONS = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How it works" },
      { href: "#how-it-works", label: "Features" },
      { href: "#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "#", label: "Terms" },
      { href: "#", label: "Privacy" },
      { href: "#", label: "Cookie Policy" },
    ],
  },
  {
    title: "Follow",
    links: [
      { href: "#", label: "LinkedIn" },
      { href: "#", label: "Twitter" },
    ],
  },
] as const;

function FooterLinkColumns({
  onNavigate,
  className,
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={className}>
      {FOOTER_SECTIONS.map((section) => (
        <div key={section.title} className="flex flex-col gap-3">
          <p className="text-sm font-semibold text-neutral-900">{section.title}</p>
          {section.title === "Follow" ? (
            <div className="flex gap-3">
              {section.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-neutral-600 hover:text-jade-700"
                  onClick={onNavigate}
                >
                  {link.label}
                </a>
              ))}
            </div>
          ) : (
            section.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-neutral-600 hover:text-jade-700"
                onClick={onNavigate}
              >
                {link.label}
              </a>
            ))
          )}
        </div>
      ))}
    </div>
  );
}

export function SiteFooter() {
  const [open, setOpen] = useState(false);

  return (
    <footer
      className="relative z-10 bg-neutral-100"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Desktop */}
      <div className="mx-auto hidden max-w-[1200px] grid-cols-5 gap-8 px-5 pt-12 pb-0 sm:px-10 md:grid">
        <div className="flex min-w-[160px] flex-col gap-3">
          <TenifyLogo variant="full" className="h-11 w-auto" />
        </div>
        <FooterLinkColumns className="contents" />
      </div>

      {/* Mobile */}
      <div className="mx-auto max-w-[1200px] px-5 pt-8 sm:px-10 md:hidden">
        <div className="relative flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-3">
            <TenifyLogo variant="full" className="h-10 w-auto" />
          </div>

          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] shrink-0 select-none items-center justify-center rounded-[var(--radius-md)] text-neutral-800 [-webkit-tap-highlight-color:transparent] hover:bg-neutral-200/70"
            aria-expanded={open}
            aria-controls="footer-mobile-nav"
            aria-label={open ? "Close footer menu" : "Open footer menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {open ? (
          <nav
            id="footer-mobile-nav"
            aria-label="Footer"
            className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-neutral-200 pt-6"
          >
            <FooterLinkColumns
              className="contents"
              onNavigate={() => setOpen(false)}
            />
          </nav>
        ) : null}
      </div>

      <p className="mx-auto mt-8 max-w-[1200px] border-t border-neutral-200 px-5 py-8 text-center text-xs text-neutral-400 sm:px-10">
        Tenify © 2026. All rights reserved.
      </p>
    </footer>
  );
}
