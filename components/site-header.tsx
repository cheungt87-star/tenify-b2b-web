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
      className="sticky top-0 z-50 w-full border-b border-neutral-300/30 bg-neutral-200/35 backdrop-blur-xl"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative mx-auto flex max-w-[1100px] items-center justify-between gap-3 px-5 py-1 sm:gap-4 sm:px-10 sm:py-1.5">
        <a
          href="#top"
          className="inline-flex shrink-0 select-none items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 [-webkit-tap-highlight-color:transparent]"
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
          <a href="#pricing" className="btn-navy !min-h-9 !px-4 !py-1.5">
            Join Waitlist
          </a>
        </nav>

        <button
          type="button"
          className="btn-ghost !min-h-10 px-1 text-sm font-semibold md:hidden"
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
            className="absolute top-full right-0 left-0 flex flex-col border-b border-neutral-300/30 bg-neutral-200/35 backdrop-blur-xl px-5 py-2 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border-b border-neutral-300/70 py-3 text-base font-medium text-neutral-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="border-b border-neutral-300/70 py-3 text-base font-medium text-neutral-600"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
            <a
              href="#pricing"
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
