"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { TenifyLogo } from "@/components/tenify-logo";

type NavLink = { href: string; label: string };

const DEFAULT_NAV_LINKS: readonly NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/for-businesses", label: "For businesses" },
  { href: "/help", label: "Help & Support" },
];

type SiteHeaderProps = {
  links?: readonly NavLink[];
  /** Replaces the default "Join Waitlist" action on desktop. */
  cta?: ReactNode;
  /** Replaces the default "Join Waitlist" action in the mobile menu. */
  mobileCta?: ReactNode;
  /** Background utility while at the top of the page; blurs to white once scrolled. */
  topSurface?: string;
  /** "overlay" is a fixed light header that floats over the full-bleed hero. */
  variant?: "default" | "overlay";
};

export function SiteHeader({
  links = DEFAULT_NAV_LINKS,
  cta,
  mobileCta,
  topSurface = "bg-true-white",
  variant = "default",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlay = variant === "overlay";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const mobileNav = open ? (
    <nav
      id="mobile-nav"
      aria-label="Mobile"
      className={`absolute top-full right-0 left-0 flex flex-col border-b border-neutral-200 bg-true-white px-5 py-2 ${
        overlay ? "min-[761px]:hidden" : "md:hidden"
      }`}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="border-b border-neutral-300/70 py-3 text-base font-medium text-neutral-800"
          onClick={() => setOpen(false)}
        >
          {link.label}
        </a>
      ))}
      {mobileCta ?? (
        <a
          href="/for-businesses#pricing"
          className="btn-navy mt-3 mb-2 w-full"
          onClick={() => setOpen(false)}
        >
          Join Waitlist
        </a>
      )}
    </nav>
  ) : null;

  if (overlay) {
    return (
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-[background-color,backdrop-filter] duration-200 ${
          scrolled
            ? "border-b border-neutral-200 bg-true-white/75 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="relative mx-auto flex h-[60px] max-w-[1360px] items-center justify-between gap-5 px-5 min-[981px]:h-[72px] min-[981px]:px-10">
          <Link
            href="/"
            className="inline-flex min-h-10 shrink-0 select-none items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [-webkit-tap-highlight-color:transparent]"
            aria-label="Tenify"
          >
            <TenifyLogo variant="mark" priority />
          </Link>

          <div className="ml-auto hidden items-center gap-8 min-[981px]:flex">
            <nav aria-label="Primary" className="flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[15px] font-semibold tracking-[-0.01em] text-navy-900/80 transition-colors hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="shrink-0">{cta}</div>
          </div>

          {/* ≤980px: logo + compact download only (no nav links) */}
          <div className="ml-auto flex shrink-0 items-center min-[981px]:hidden">
            {mobileCta ?? cta}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-[background-color,border-color,backdrop-filter] duration-200 ${
        scrolled || open
          ? "border-neutral-200 bg-true-white/75 backdrop-blur-md"
          : `border-transparent ${topSurface}`
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="relative mx-auto flex max-w-[1200px] items-center justify-between gap-3 px-5 py-1 sm:gap-4 sm:px-10">
        <Link
          href="/"
          className="inline-flex min-h-10 shrink-0 select-none items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand [-webkit-tap-highlight-color:transparent]"
          aria-label="Tenify"
        >
          <TenifyLogo variant="mark" priority />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="btn-ghost">
              {link.label}
            </a>
          ))}
          {cta ?? (
            <a href="/for-businesses#pricing" className="btn-navy !min-h-9 !px-4 !py-1.5">
              Join Waitlist
            </a>
          )}
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

        {mobileNav}
      </div>
    </header>
  );
}
