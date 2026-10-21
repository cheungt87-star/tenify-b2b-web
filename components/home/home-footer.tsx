import { DownloadButton } from "@/components/home/download-button";
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
      { href: "#how-it-works", label: "How it works" },
      { href: "#faq", label: "FAQ" },
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

function ChevronIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="footer-acc-chevron shrink-0 text-[#9aa6b5] transition-transform duration-200"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function HomeFooter() {
  return (
    <footer
      className="on-dark relative z-10 bg-navy-900"
      style={{
        color: TEXT,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-5 pt-8 pb-5 sm:px-8 min-[700px]:px-8 min-[700px]:pt-10 min-[700px]:pb-6">
        <div className="flex flex-col justify-between gap-7 min-[700px]:flex-row min-[700px]:gap-12">
          <div className="flex flex-col items-start">
            {/* eslint-disable-next-line @next/next/no-img-element -- static brand asset; fixed height, auto width */}
            <img
              src="/assets/tenify-logo-footer.png"
              alt="Tenify"
              height={44}
              className="block h-11 w-auto"
            />
            <p
              className="mt-3 max-w-[320px] text-[15px] leading-[1.5]"
              style={{ color: MUTED }}
            >
              Professional property condition reports, room by room.
            </p>
            <div className="mt-5 w-full min-[700px]:w-auto">
              <DownloadButton className="btn-primary w-full justify-center min-[700px]:w-auto" />
            </div>
          </div>

          <nav
            aria-label="Footer"
            className="hidden gap-16 min-[700px]:flex"
          >
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h4
                  className="mb-3.5 mt-1 text-xs font-bold uppercase tracking-[0.1em]"
                  style={{ color: MUTED }}
                >
                  {section.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...("external" in link
                          ? { target: "_blank", rel: "noreferrer" }
                          : {})}
                        className="block text-[15px] no-underline transition-colors hover:text-true-white hover:underline"
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
          className="mt-7 border-t min-[700px]:hidden"
          style={{ borderColor: DIVIDER }}
        >
          {SECTIONS.map((section) => (
            <details
              key={section.title}
              className="border-b"
              style={{ borderColor: DIVIDER }}
            >
              <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between py-4 pe-0.5 ps-0.5 text-base font-bold [&::-webkit-details-marker]:hidden">
                <span style={{ color: TEXT }}>{section.title}</span>
                <ChevronIcon />
              </summary>
              <div className="flex flex-col px-0.5 pb-3">
                {section.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...("external" in link
                      ? { target: "_blank", rel: "noreferrer" }
                      : {})}
                    className="flex min-h-11 items-center text-[15px] no-underline"
                    style={{ color: MUTED }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </details>
          ))}
        </div>

        <div
          className="mt-7 border-t pt-5"
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
