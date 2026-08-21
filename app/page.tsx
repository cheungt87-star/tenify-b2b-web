import type { ReactNode } from "react";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroVideo } from "@/components/hero-video";
import { PricingSelector } from "@/components/pricing-selector";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StepCarousel } from "@/components/step-carousel";
import { WaitlistForm } from "@/components/waitlist-form";

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

function GoldIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="text-gold-600"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export default function Home() {
  return (
    <div
      className="flex min-h-full flex-1 flex-col overflow-x-hidden bg-true-white text-neutral-900"
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <SiteHeader />

      <main>
        <section
          id="waitlist"
          className="relative overflow-hidden bg-true-white"
        >
          <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-4 px-5 pt-6 pb-24 text-center sm:px-10 md:pt-8 md:pb-28">
            <div className="relative flex flex-col items-center gap-2">
              <p className="relative text-[13px] font-bold tracking-[0.14em] text-gold-600">
                Stand out from your competitors
              </p>
              <h1 className="relative flex w-full flex-col items-center gap-0.5">
                <span className="font-display max-w-full whitespace-nowrap text-[clamp(16px,calc((100vw-2.5rem)/14.7),60px)] leading-[1.05] tracking-[-0.02em] text-neutral-900 uppercase sm:text-[clamp(16px,calc((100vw-5rem)/14.7),60px)]">
                  Turn every handover inspection into
                </span>
                <span className="font-display max-w-full whitespace-nowrap text-[clamp(16px,calc((100vw-2.5rem)/14.7),60px)] leading-[1.05] tracking-[-0.02em] text-neutral-900 uppercase sm:text-[clamp(16px,calc((100vw-5rem)/14.7),60px)]">
                  why clients stay
                </span>
              </h1>
              <p className="relative max-w-[560px] text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-neutral-600">
                Branded, detailed reports landlords trust and tenants remember.
              </p>
            </div>
            <WaitlistForm />
            <HeroVideo />
          </div>
        </section>

        <section className="relative z-[2] -my-10 rounded-[40px] bg-gold-600">
          <blockquote className="px-5 py-16 sm:px-[60px] sm:py-20">
            <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center">
              <p className="flex flex-col items-center gap-2">
                <span className="font-display text-[clamp(16px,2vw,22px)] leading-[1.2] tracking-[-0.02em] text-jade-900 uppercase">
                  You&apos;re already doing inspections.
                </span>
                <span className="font-editorial text-[clamp(36px,7vw,80px)] italic leading-[1.05] tracking-[-0.02em] text-jade-700">
                  Why not get seen for it?
                </span>
              </p>
              <p className="max-w-[640px] text-base leading-[1.55] text-jade-900/70 sm:text-lg">
                Right now it&apos;s a checklist. Notes, some photos, done.
                Nobody sees the work you put in.
              </p>
              <cite className="not-italic font-display text-[clamp(20px,2.5vw,28px)] leading-[1.15] tracking-[-0.02em] text-jade-900 uppercase">
                Tenify changes that.
              </cite>
            </div>
          </blockquote>
        </section>

        <section
          id="how-it-works"
          className="relative z-[1] bg-neutral-50 pt-20 pb-16 md:pt-24 md:pb-20"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-[60px]">
            <p className="mb-3 text-[13px] font-bold tracking-[0.14em] text-gold-600">
              Inspections. Simplified
            </p>
            <h2 className="mb-14 font-display text-[clamp(28px,5vw,60px)] leading-[1.05] tracking-[-0.02em] text-neutral-900 uppercase">
              Inspection report in 4 steps
            </h2>
            <div className="flex flex-col gap-12">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
                >
                  <div
                    className={`flex min-w-0 flex-col gap-5 ${step.reverse ? "md:order-2" : ""}`}
                  >
                    <p className="inline-flex w-fit items-center rounded-full bg-jade-900 px-3 py-1 font-mono text-xs font-bold text-gold-600">
                      {step.id} {step.title}
                    </p>
                    <h3 className="text-[clamp(22px,2.6vw,28px)] font-bold text-neutral-900">
                      {step.heading}
                    </h3>
                    <ul className="flex list-disc flex-col gap-3.5 pl-5">
                      {step.bullets.map(([lead, rest]) => (
                        <li
                          key={lead}
                          className="pl-1 text-base leading-[1.5] text-neutral-600"
                        >
                          <span className="font-bold text-jade-900">{lead}</span>{" "}
                          {rest}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={step.reverse ? "md:order-1" : ""}>
                    <StepCarousel slides={step.slides} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="navy-slab">
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-[60px] md:py-24">
            <p className="mb-3 text-[13px] font-bold tracking-[0.14em] text-gold-600">
              Why use Tenify
            </p>
            <h2 className="mb-8 font-display text-[clamp(28px,5vw,60px)] leading-[1.05] tracking-[-0.02em] text-true-white uppercase">
              1 report, everyone benefits
            </h2>
            <div className="flex flex-col gap-6">
              <article className="audience-card flex flex-col gap-3.5">
                <GoldIcon>
                  <path
                    d="M4 21V7l7-4 7 4v14"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                  <path d="M9 21v-6h4v6M9 11h1M9 15h1M14 11h1M14 15h1" />
                </GoldIcon>
                <h3 className="text-lg font-bold text-true-white">For you</h3>
                <ul className="grid gap-2 md:grid-cols-3 md:gap-x-6">
                  <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                    <span className="shrink-0 text-gold-600">•</span>
                    Enhance and differentiate your value proposition. Stand out
                    against the competition.
                  </li>
                  <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                    <span className="shrink-0 text-gold-600">•</span>
                    Bring your brand front and centre. Another touchpoint to
                    engage your clients.
                  </li>
                  <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                    <span className="shrink-0 text-gold-600">•</span>
                    New revenue stream by monetising the service.
                  </li>
                </ul>
              </article>
              <div className="grid gap-6 md:grid-cols-2">
                <article className="audience-card flex flex-col gap-3.5">
                  <GoldIcon>
                    <path d="M7 15a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 7 15z" />
                    <path
                      d="M9.3 12.7L19 3m-3 1 2 2m-5 1 2 2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </GoldIcon>
                  <h3 className="text-lg font-bold text-true-white">
                    For your landlords
                  </h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      Confidence in their investment&apos;s exact condition.
                    </li>
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      Photo-backed proof of what needs fixing or replacing.
                    </li>
                  </ul>
                </article>
                <article className="audience-card flex flex-col gap-3.5">
                  <GoldIcon>
                    <circle cx="12" cy="8" r="3.4" />
                    <path
                      d="M5.2 20c0-4 3-6.4 6.8-6.4s6.8 2.4 6.8 6.4"
                      strokeLinecap="round"
                    />
                  </GoldIcon>
                  <h3 className="text-lg font-bold text-true-white">
                    For your tenants
                  </h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      Moves in knowing exactly what they&apos;re getting.
                    </li>
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      Reduce nervousness about their deposit at move out.
                    </li>
                  </ul>
                </article>
                <article className="audience-card flex flex-col gap-3.5">
                  <GoldIcon>
                    <rect x="5" y="4" width="14" height="17" rx="2" strokeLinejoin="round" />
                    <path d="M9 3.2h6v2.6H9z" strokeLinejoin="round" />
                    <path d="M8.2 11h7.6M8.2 15h5" strokeLinecap="round" />
                  </GoldIcon>
                  <h3 className="text-lg font-bold text-true-white">
                    For your inspectors
                  </h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      No more paper notes or camera-roll write-ups.
                    </li>
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      Same professional process, every inspection.
                    </li>
                  </ul>
                </article>
                <article className="audience-card flex flex-col gap-3.5">
                  <GoldIcon>
                    <path
                      d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.1 2.1-2.1-.6-.6-2.1z"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </GoldIcon>
                  <h3 className="text-lg font-bold text-true-white">
                    For your maintenance team
                  </h3>
                  <ul className="flex flex-col gap-2">
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      Knows exactly what to fix, no guesswork.
                    </li>
                    <li className="flex gap-2 text-[15px] leading-[1.6] text-white/70">
                      <span className="shrink-0 text-gold-600">•</span>
                      No more &quot;have you checked this?&quot; chasing.
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="relative z-[1] bg-neutral-50 pt-16 pb-16 md:pt-20 md:pb-20"
        >
          <div className="mx-auto max-w-[1200px] px-5 sm:px-10">
            <div className="mb-10 flex max-w-[640px] flex-col items-start gap-3">
              <p className="text-[13px] font-bold tracking-[0.14em] text-gold-600">
                Unlimited reports. No bill shock.
              </p>
              <h2 className="font-display text-[clamp(28px,5vw,60px)] leading-[1.05] tracking-[-0.02em] text-neutral-900 uppercase">
                Simple transparent pricing
              </h2>
            </div>
            <PricingSelector />
            <p className="mt-8 text-center text-sm text-neutral-600">
              No long-term contracts. Cancel anytime. Questions? We&apos;ll
              answer them — see below.
            </p>
          </div>
        </section>

        <div className="relative h-10 overflow-hidden bg-true-white">
          <div className="absolute inset-0 rounded-t-[32px] bg-neutral-100" />
        </div>

        <section id="faq" className="bg-neutral-100">
          <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-10 md:py-20">
            <h2 className="mb-10 text-center font-display text-[clamp(28px,5vw,60px)] leading-[1.05] tracking-[-0.02em] text-neutral-900 uppercase">
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
