"use client";

import { useState } from "react";
import { TenifyLogo } from "@/components/tenify-logo";

const NAV_LINKS = [
  { href: "#how-it-works", label: "Product" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-4 left-1/2 z-50 w-[calc(100%-32px)] max-w-[1100px] -translate-x-1/2 rounded-full border border-white/40 bg-white/75 shadow-[0_8px_24px_rgba(15,31,46,0.12)] backdrop-blur-[14px]"
      style={{ marginTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative flex items-center justify-between gap-4 px-4 py-2 sm:px-7">
        <a
          href="#waitlist"
          className="inline-flex select-none items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 [-webkit-tap-highlight-color:transparent]"
          aria-label="Tenify"
        >
          <TenifyLogo variant="mark" priority />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="btn-ghost">
              {link.label}
            </a>
          ))}
          <a href="#" className="btn-ghost text-neutral-600">
            Login
          </a>
          <a href="#waitlist" className="btn-navy">
            Join Waitlist
          </a>
        </nav>

        <button
          type="button"
          className="btn-ghost font-semibold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>

        {open ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="absolute top-[calc(100%+8px)] right-0 left-0 flex flex-col rounded-[var(--radius-md)] border border-neutral-200 bg-true-white px-5 py-2 shadow-[0_-8px_24px_rgba(26,28,28,0.12)] md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-neutral-100 py-3.5 text-base font-medium text-neutral-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="border-b border-neutral-100 py-3.5 text-base font-medium text-neutral-400"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
            <a
              href="#waitlist"
              className="btn-navy mt-3 mb-2 w-full"
              onClick={() => setOpen(false)}
            >
              Join Waitlist
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
