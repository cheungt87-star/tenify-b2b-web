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
    heading: "Set up in seconds, not from scratch",
    reverse: false,
    bullets: [
      ["Quick-Start.", "Tell us the building you're inspecting and we'll pre-populate what to inspect"],
      ["Flexible.", "Add or remove anything specific to the property in a couple of taps"],
      ["Mobile.", "Native iOS app, inspect straight from your iPhone (Android coming soon)"],
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
    heading: "Guided, consistent inspections",
    reverse: true,
    bullets: [
      ["Guided.", "App tells inspectors exactly what to check and how to rate it, room by room"],
      ["Simple.", "No training needed, no guesswork"],
      ["Consistent.", "Same standard every time, regardless of who's inspecting"],
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
    heading: "Every action captured. Every finding categorized.",
    reverse: false,
    bullets: [
      ["Branded.", "Puts your agency's name in front of landlords and tenants, every time."],
      ["Clear.", "Itemized room by room, with a photo for every entry."],
      ["Categorized.", "Every finding flagged as action needed, review needed, or no action required."],
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
    heading: "The hero output: a report that tells the whole story",
    reverse: true,
    bullets: [
      [
        "Branded.",
        "Carries your agency's logo, building recognition every time it lands in a landlord or tenant's inbox",
      ],
      [
        "Transparent.",
        "Full clarity on what was inspected, by whom, and how, with photo evidence backing every rating",
      ],
      [
        "Actionable.",
        "Items sorted into action needed, action recommended, and no action needed",
      ],
      [
        "Clear.",
        "Landlords know where to decide, maintenance teams know what to fix, tenants move in with confidence",
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
      <div className="h-20" />

      <main>
        <section
          id="waitlist"
          className="relative overflow-hidden bg-linear-to-br from-true-white via-true-white to-gold-100"
        >
          <div className="relative mx-auto flex max-w-[1100px] flex-col items-center gap-8 px-5 py-16 text-center sm:px-10 md:py-20">
            <div className="pointer-events-none absolute -top-[120px] -right-[100px] z-0 h-[360px] w-[360px] rounded-full bg-gold-100 opacity-70 blur-[10px]" />
            <div className="pointer-events-none absolute -bottom-[140px] -left-[120px] z-0 h-[320px] w-[320px] rounded-full bg-jade-100 opacity-60 blur-[10px]" />
            <p className="relative text-[13px] font-bold tracking-[0.14em] text-gold-600 uppercase">
              Stand out from your competitors
            </p>
            <h1 className="relative flex flex-col items-center gap-0.5">
              <span className="text-[clamp(28px,5vw,60px)] leading-[1.1] font-extrabold tracking-tight text-neutral-600">
                Turn every inspection into
              </span>
              <span className="text-[clamp(28px,5vw,60px)] leading-[1.1] font-extrabold tracking-tight text-jade-900">
                why clients stay
              </span>
            </h1>
            <p className="relative max-w-[560px] text-[clamp(17px,1.6vw,20px)] leading-[1.5] text-neutral-600">
              Effortlessly complete inspections and turn them into detailed,
              branded reports landlords trust and tenants remember.
            </p>
            <WaitlistForm />
            <HeroVideo />
          </div>
        </section>

        <section className="relative z-[2] my-[-24px] w-full">
          <blockquote className="bg-[#03313A] px-5 py-7 sm:px-[60px] sm:py-8">
            <div className="mx-auto flex max-w-[1400px] flex-col gap-3.5">
              <p className="font-editorial text-[clamp(22px,3.2vw,32px)] leading-[1.2] tracking-[-0.02em] text-true-white">
                You&apos;re already doing inspections.{" "}
                <span className="text-gold-600 italic">
                  Why not get credit for it?
                </span>
              </p>
              <p className="max-w-[640px] text-[15px] leading-[1.55] text-white/65 sm:text-base">
                Right now it&apos;s a checklist. Notes, some photos, done.
                Nobody sees the work you put in.{" "}
                <cite className="not-italic font-semibold text-true-white">
                  Tenify changes that.
                </cite>
              </p>
            </div>
          </blockquote>
        </section>

        <section
          id="how-it-works"
          className="relative z-[1] bg-neutral-50 pt-16 pb-16 md:pt-20 md:pb-20"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-[60px]">
            <p className="mb-3 text-[13px] font-bold tracking-[0.14em] text-gold-600 uppercase">
              Inspections. Simplified
            </p>
            <h2 className="mb-14 text-[clamp(28px,4vw,40px)] leading-[1.2] font-extrabold text-neutral-900">
              Inspection to branded report in 4 steps
            </h2>
            <div className="flex flex-col gap-16">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className="grid items-start gap-10 md:grid-cols-2 md:gap-16"
                >
                  <div
                    className={`flex min-w-0 flex-col gap-5 ${step.reverse ? "md:order-2" : ""}`}
                  >
                    <p className="font-mono text-sm font-bold text-gold-600">
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
            <p className="mb-3 text-[13px] font-bold tracking-[0.14em] text-gold-600 uppercase">
              Why use Tenify
            </p>
            <h2 className="mb-8 text-[clamp(28px,4vw,40px)] leading-[1.2] font-extrabold text-true-white">
              Built for everyone in the process.
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
              <p className="text-[13px] font-bold tracking-[0.14em] text-gold-600 uppercase">
                Unlimited reports. No bill shock.
              </p>
              <h2 className="text-[clamp(28px,4vw,40px)] leading-[1.2] font-extrabold text-neutral-900">
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
            <h2 className="mb-10 text-center text-[clamp(28px,4vw,40px)] leading-[1.2] font-extrabold text-neutral-900">
              Frequently asked questions
            </h2>
            <FaqAccordion />
          </div>
        </section>
      </main>

      <div className="relative h-10 overflow-hidden bg-neutral-100">
        <div className="absolute inset-[-1px] rounded-t-[32px] bg-true-white" />
      </div>
      <SiteFooter />
    </div>
  );
}
