"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { TenifyLogo } from "@/components/tenify-logo";
import { HERO_VARIANT } from "@/lib/site-config";

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
  /** Desktop action, e.g. the App Store download button. */
  cta?: ReactNode;
  /** Compact action shown below the desktop breakpoint. */
  mobileCta?: ReactNode;
};

/**
 * The one site header, rendered once from the root layout so it stays
 * mounted (and identical) across every page. On the home page it floats
 * over the full-bleed hero (`fixed`, transparent until scrolled); on
 * every other page the same header sits `sticky` in flow with a solid
 * surface so it never covers page content.
 */
export function SiteHeader({
  links = DEFAULT_NAV_LINKS,
  cta,
  mobileCta,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overlay = pathname === "/" && HERO_VARIANT !== "split";

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  // Close the mobile menu whenever navigation lands on a new page.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  return (
    <header
      className={`top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-200 ${
        overlay ? "fixed inset-x-0" : "sticky"
      } ${
        overlay && !scrolled && !open
          ? "border-b border-transparent bg-transparent"
          : "border-b border-neutral-200 bg-true-white/75 backdrop-blur-md"
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
          <nav aria-label="Primary" className="flex items-center gap-1 rounded-full bg-panel-grey p-1.5">
            {links.map((link) => {
              const active = link.href === pathname;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[15px] font-bold tracking-[-0.01em] transition-colors hover:bg-true-white hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    active ? "bg-true-white text-navy-900" : "text-navy-900/80"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="shrink-0">{cta}</div>
        </div>

        {/* ≤980px on the home hero: logo + compact download only (no nav links).
            Elsewhere: logo + menu, with the download inside the menu — the
            compact bar has no room for logo, download and menu together. */}
        <div className="ml-auto flex shrink-0 items-center gap-2 min-[981px]:hidden">
          {overlay ? (
            (mobileCta ?? cta)
          ) : (
            <button
              type="button"
              className="btn-ghost !min-h-10 px-1 text-sm font-semibold"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          )}
        </div>

        {open && !overlay ? (
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="absolute top-full right-0 left-0 flex flex-col border-b border-neutral-200 bg-true-white px-5 py-2 min-[981px]:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={link.href === pathname ? "page" : undefined}
                className="border-b border-neutral-300/70 py-3 text-base font-medium text-neutral-800 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 mb-2 [&>a]:w-full">{mobileCta ?? cta}</div>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
