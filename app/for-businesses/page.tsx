import type { Metadata } from "next";
import type { ReactNode } from "react";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroVideo } from "@/components/hero-video";
import { PricingSelector } from "@/components/pricing-selector";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StepCarousel } from "@/components/step-carousel";

export const metadata: Metadata = {
  title: "Tenify B2B — Branded move-in inspections for agencies",
  description:
    "Effortlessly complete inspections and turn them into detailed, branded reports landlords trust and tenants remember.",
};

const STEPS = [
  {
    id: "01",
    title: "Set up",
    heading: "Setup each inspection in seconds.",
    reverse: false,
    bullets: [
      ["Quick-Start.", "Tell us the building type and number of bedrooms, and we'll populate the checklist for you"],
      ["Flexible.", "Add or remove rooms and items as you need. Fully flexible and configurable."],
      ["Mobile.", "Inspect straight from your iPhone, no laptop needed (Android coming soon)"],
    ],
    slides: [
      {
        label: "Start a new report",
        src: "/screenshots/setup/start-report.png",
      },
      {
        label: "Pre-populated rooms",
        src: "/screenshots/setup/rooms.png",
      },
      {
        label: "Fixtures checklist",
        src: "/screenshots/setup/fixtures.png",
      },
      {
        label: "Furnishings list",
        src: "/screenshots/setup/furnishings.png",
      },
      {
        label: "Add a custom item",
        src: "/screenshots/setup/add-item.png",
      },
    ],
  },
  {
    id: "02",
    title: "Inspect",
    heading: "Begin inspection and we'll guide you through",
    reverse: true,
    bullets: [
      ["Guided.", "The app tells you exactly what to check in each room, and how to rate it"],
      ["Simple.", "No training needed — just follow the prompts"],
      ["Consistent.", "Every inspector follows the same standard, every time"],
    ],
    slides: [
      {
        label: "Living room guided inspection",
        src: "/screenshots/inspect/living-room.png",
      },
      {
        label: "Fixture check with photo evidence",
        src: "/screenshots/inspect/doors.png",
      },
      {
        label: "Furnishing condition ratings",
        src: "/screenshots/inspect/furnishings.png",
      },
      {
        label: "Multi-select to apply the same rating",
        src: "/screenshots/inspect/multi-select.png",
      },
    ],
  },
  {
    id: "03",
    title: "Report",
    heading: "Complete all and generate your report",
    reverse: false,
    bullets: [
      ["Branded.", "Your agency's name and logo on every report"],
      ["Clear.", "Every finding is explained, easy to understand for the reader"],
      ["Categorized.", "Each finding marked as action needed, review needed, or no action"],
    ],
    slides: [
      {
        label: "All rooms complete — generate report",
        src: "/screenshots/report/rooms-complete.png",
      },
      {
        label: "Report ready — success screen",
        src: "/screenshots/report/success.png",
      },
      {
        label: "Branded report cover",
        src: "/screenshots/report/cover.png",
      },
      {
        label: "Inspection report complete",
        src: "/screenshots/report/complete.png",
      },
    ],
  },
  {
    id: "04",
    title: "Share",
    heading: "Share the report. Use it to take action and make decisions.",
    reverse: true,
    bullets: [
      [
        "Branded.",
        "Lands in their inbox with your branding on it",
      ],
      [
        "Transparent.",
        "Shows exactly what was checked, by who, with photos as proof",
      ],
      [
        "Actionable.",
        "Sorted so landlords and maintenance know what to do next",
      ],
      [
        "Clear.",
        "Landlords get clarity, maintenance knows what to fix, tenants move in with confidence",
      ],
    ],
    slides: [
      {
        label: "Branded report cover",
        src: "/screenshots/report/cover.png",
      },
      {
        label: "Welcome and what we inspect",
        src: "/screenshots/report/welcome.png",
      },
      {
        label: "Assessment criteria",
        src: "/screenshots/report/criteria.png",
      },
      {
        label: "Executive summary",
        src: "/screenshots/report/executive-summary.png",
      },
      {
        label: "Master bedroom fixtures",
        src: "/screenshots/report/master-bedroom-fixtures.png",
      },
      {
        label: "En-suite bathroom fixtures",
        src: "/screenshots/report/ensuite-fixtures.png",
      },
    ],
  },
] as const;

const AUDIENCES: { title: string; icon: ReactNode; points: string[] }[] = [
  {
    title: "For your landlords",
    icon: (
      <>
        <path d="M7 15a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 7 15z" />
        <path d="M9.3 12.7L19 3m-3 1 2 2m-5 1 2 2" />
      </>
    ),
    points: [
      "Confidence in their investment\u2019s exact condition.",
      "Photo-backed proof of what needs fixing or replacing.",
    ],
  },
  {
    title: "For your tenants",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.4" />
        <path d="M5.2 20c0-4 3-6.4 6.8-6.4s6.8 2.4 6.8 6.4" />
      </>
    ),
    points: [
      "Moves in knowing exactly what they\u2019re getting.",
      "Reduce nervousness about their deposit at move out.",
    ],
  },
  {
    title: "For your inspectors",
    icon: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 3.2h6v2.6H9z" />
        <path d="M8.2 11h7.6M8.2 15h5" />
      </>
    ),
    points: [
      "No more paper notes or camera-roll write-ups.",
      "Same professional process, every inspection.",
    ],
  },
  {
    title: "For your maintenance team",
    icon: (
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.1-.6-.6-2.1z" />
    ),
    points: [
      "Knows exactly what to fix, no guesswork.",
      "No more \u201chave you checked this?\u201d chasing.",
    ],
  },
];

const audiencePoint = "pl-1 text-[15px] leading-[1.6] text-white/75";

function AudienceIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 text-true-white"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function ForBusinessesPage() {
  return (
    <div
      className="flex min-h-full flex-1 flex-col overflow-x-clip bg-true-white text-neutral-900"
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <SiteHeader />

      <main>
        <section id="top" className="relative overflow-hidden bg-true-white">
          <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-6 px-5 pt-12 pb-20 text-center sm:px-10 md:pt-16 md:pb-24">
            <div className="flex flex-col items-center gap-4">
              <h1 className="flex flex-col items-center gap-4">
                <span className="text-base font-semibold text-navy-900">
                  Stand out from your competitors
                </span>
                <span className="font-display max-w-[20ch] text-[clamp(32px,6vw,56px)] leading-[1.05] tracking-[-0.02em] text-balance text-navy-900">
                  Turn every handover inspection into why clients stay
                </span>
              </h1>
              <p className="max-w-[560px] text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-neutral-600">
                Branded, detailed reports landlords trust and tenants remember.
              </p>
            </div>
            <div className="flex w-full max-w-[420px] items-stretch justify-center gap-3">
              <a href="#pricing" className="btn-lime min-w-0 flex-[1.2]">
                Join now
              </a>
              <a
                href="#how-it-works"
                className="inline-flex min-h-12 min-w-0 flex-1 items-center justify-center rounded-[var(--radius-md)] border-2 border-navy-900 px-4 py-3.5 text-[0.9375rem] font-semibold text-navy-900 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand active:scale-[0.98]"
              >
                Find out more
              </a>
            </div>
            <div className="mt-6 w-full max-w-[900px] md:mt-8">
              <HeroVideo />
            </div>
          </div>
        </section>

        <section className="bg-brand">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center gap-6 px-5 py-16 text-center sm:px-10 md:py-20">
            <h2 className="flex flex-col items-center gap-3">
              <span className="text-[clamp(18px,2vw,22px)] font-bold leading-[1.3] text-true-white">
                You&apos;re already doing inspections.
              </span>
              <span className="font-display text-[clamp(36px,6vw,64px)] leading-[1.05] tracking-[-0.02em] text-balance text-true-white">
                Why not get seen for it?
              </span>
            </h2>
            <p className="max-w-[640px] text-base leading-[1.55] text-true-white sm:text-lg">
              Right now it&apos;s a checklist. Notes, some photos, done.
              Nobody sees the work you put in.
            </p>
            <p className="text-[clamp(20px,2.5vw,28px)] font-extrabold leading-[1.2] tracking-[-0.01em] text-true-white">
              Together with Tenify, we change that!
            </p>
          </div>
        </section>

        <section
          id="how-it-works"
          className="bg-true-white pt-20 pb-16 md:pt-24 md:pb-20"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-[60px]">
            <div className="mb-14 flex flex-col gap-3">
              <h2 className="font-display text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-0.02em] text-navy-900">
                Inspection report in 4 steps
              </h2>
              <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-neutral-600">
                Inspections. Simplified.
              </p>
            </div>
            <div className="flex flex-col gap-12">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className={`mx-auto flex w-full max-w-[920px] flex-col items-stretch gap-10 md:flex-row md:items-center md:justify-center md:gap-14 ${
                    step.reverse ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex min-w-0 flex-1 flex-col gap-5 md:max-w-[440px]">
                    <p className="font-mono text-sm font-bold text-brand">
                      {step.id}
                    </p>
                    <h3 className="text-[clamp(22px,2.6vw,28px)] font-extrabold leading-[1.25] text-navy-900">
                      {step.heading}
                    </h3>
                    <ul className="flex list-disc flex-col gap-3.5 pl-5">
                      {step.bullets.map(([lead, rest]) => (
                        <li
                          key={lead}
                          className="pl-1 text-base leading-[1.5] text-neutral-600"
                        >
                          <span className="font-bold text-navy-900">{lead}</span>{" "}
                          {rest}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:shrink-0">
                    <StepCarousel slides={step.slides} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="navy-slab">
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-[60px] md:py-24">
            <div className="mb-12 flex flex-col gap-3">
              <h2 className="font-display text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-0.02em] text-true-white">
                1 report, everyone benefits
              </h2>
              <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-white/75">
                Why use Tenify
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <article className="audience-card flex flex-col gap-4">
                <h3 className="flex items-center gap-3 text-lg font-bold text-true-white">
                  <AudienceIcon>
                    <path d="M4 21V7l7-4 7 4v14" />
                    <path d="M9 21v-6h4v6M9 11h1M9 15h1M14 11h1M14 15h1" />
                  </AudienceIcon>
                  For you
                </h3>
                <ul className="grid list-disc gap-2 pl-5 marker:text-white/50 md:grid-cols-3 md:gap-x-10">
                  <li className={audiencePoint}>
                    Enhance and differentiate your value proposition. Stand out
                    against the competition.
                  </li>
                  <li className={audiencePoint}>
                    Bring your brand front and centre. Another touchpoint to
                    engage your clients.
                  </li>
                  <li className={audiencePoint}>
                    New revenue stream by monetising the service.
                  </li>
                </ul>
              </article>
              <div className="grid gap-10 md:grid-cols-2 md:gap-x-10">
                {AUDIENCES.map((audience) => (
                  <article
                    key={audience.title}
                    className="audience-card flex flex-col gap-4"
                  >
                    <h3 className="flex items-center gap-3 text-lg font-bold text-true-white">
                      <AudienceIcon>{audience.icon}</AudienceIcon>
                      {audience.title}
                    </h3>
                    <ul className="flex list-disc flex-col gap-2 pl-5 marker:text-white/50">
                      {audience.points.map((point) => (
                        <li key={point} className={audiencePoint}>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="bg-true-white py-16 md:py-20">
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="mx-auto mb-10 flex max-w-[640px] flex-col items-center gap-3 text-center">
              <h2 className="font-display text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-0.02em] text-navy-900">
                Simple transparent pricing
              </h2>
              <p className="text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-neutral-600">
                Unlimited reports. No bill shock.
              </p>
            </div>
            <PricingSelector />
            <p className="mt-8 text-center text-sm text-neutral-600">
              No long-term contracts. Cancel anytime. Questions? We&apos;ll
              answer them — see below.
            </p>
          </div>
        </section>

        <section id="faq" className="bg-true-white">
          <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-10 md:py-20">
            <h2 className="mb-10 text-center font-display text-[clamp(28px,4vw,48px)] leading-[1.08] tracking-[-0.02em] text-navy-900">
              Frequently asked questions
            </h2>
            <FaqAccordion />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
