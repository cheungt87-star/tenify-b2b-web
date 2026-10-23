"use client";

import { useState } from "react";

type FooterLink = { href: string; label: string };

export function FooterMobileMenu({ links }: { links: FooterLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close footer menu" : "Open footer menu"}
        aria-expanded={open}
        aria-controls="footer-mobile-links"
        onClick={() => setOpen((v) => !v)}
        className="-me-2 flex h-11 w-11 items-center justify-center text-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
      {open && (
        <ul
          id="footer-mobile-links"
          className="order-last mt-4 w-full border-t border-[#2a3646]"
        >
          {links.map((link) => (
            <li key={link.label} className="border-b border-[#2a3646]">
              <a
                href={link.href}
                className="flex min-h-12 items-center text-[15px] text-white no-underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
