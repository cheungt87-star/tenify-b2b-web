"use client";

import { usePathname } from "next/navigation";
import { FooterMobileMenu } from "@/components/footer-mobile-menu";
import {
  PRIVACY_URL,
  SUPPORT_EMAIL,
  TERMS_URL,
} from "@/lib/site-config";

const DIVIDER = "#2a3646";
const TEXT = "#e8edf3";
const MUTED = "#9aa6b5";

const SECTIONS = [
  {
    title: "Explore",
    links: [
      { href: "/#how-it-works", label: "How it works" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: PRIVACY_URL, label: "Privacy" },
      { href: TERMS_URL, label: "Terms" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: `mailto:${SUPPORT_EMAIL}`, label: SUPPORT_EMAIL },
    ],
  },
] as const;

/**
 * The one site footer, rendered once from the root layout so the same
 * navy footer closes every page — except `/for-businesses`, a standalone
 * landing page with no footer.
 */
export function SiteFooter() {
  const pathname = usePathname();
  if (pathname === "/for-businesses" || pathname.startsWith("/for-businesses/")) {
    return null;
  }

  const allLinks = SECTIONS.flatMap((section) => [...section.links]);

  return (
    <footer
      className="on-dark relative z-10 bg-navy-900"
      style={{
        color: TEXT,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6 pt-8 pb-5 sm:px-10 min-[700px]:pt-10">
        <div className="flex flex-wrap items-center justify-between min-[700px]:flex-nowrap min-[700px]:items-start min-[700px]:gap-12">
          {/* eslint-disable-next-line @next/next/no-img-element -- static brand asset; fixed height, auto width */}
          <img
            src="/assets/tenify-logo-footer.png"
            alt="Tenify"
            height={32}
            className="block h-8 w-auto"
          />

          <div className="contents min-[700px]:hidden">
            <FooterMobileMenu links={allLinks} />
          </div>

          <nav
            aria-label="Footer"
            className="hidden gap-14 min-[700px]:flex"
          >
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h4
                  className="mb-3 text-xs font-bold uppercase tracking-[0.1em]"
                  style={{ color: MUTED }}
                >
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block text-sm no-underline transition-colors hover:text-true-white hover:underline"
                        style={{ color: TEXT }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div
          className="mt-6 border-t pt-4"
          style={{ borderColor: DIVIDER }}
        >
          <p className="text-[12.5px] leading-[1.6]" style={{ color: MUTED }}>
            © 2026 Tenify
          </p>
        </div>
      </div>
    </footer>
  );
}
