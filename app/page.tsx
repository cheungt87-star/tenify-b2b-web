import type { Metadata } from "next";
import { DownloadButton } from "@/components/home/download-button";
import { HomeFaq } from "@/components/home/home-faq";
import { HeroDemo } from "@/components/home/hero-demo/hero-demo";
import { HeroSplit } from "@/components/home/hero-split";
import { HowItWorks } from "@/components/home/how-it-works/how-it-works";
import { OfferCountdown } from "@/components/home/offer-countdown";
import { ProblemSection } from "@/components/home/problem-section";
import { SampleReportDialog } from "@/components/home/sample-report-dialog";
import { Reveal } from "@/components/home/reveal";
import { GatedReportPreview } from "@/components/home/gated-report-preview";
import { HERO_VARIANT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tenify | Professional property condition reports",
  description:
    "Document the exact condition of your rental at move-in. Room by room, with photos, in one report you can share. Free until the end of 2026.",
};

const REPORT_INSIDE = [
  {
    title: "A professional property condition report",
    description: "Inspector, address and date up front, with a declaration that it's accurate.",
  },
  {
    title: "Room by room",
    description: "A clear section for each room.",
  },
  {
    title: "Every item inspected, rated and photographed",
    description: "Every item gets a condition rating. Faults come with photos.",
  },
  {
    title: "Summary of findings",
    description: "See what's flagged for repair or review at a glance.",
  },
] as const;

const REPORT_USES = [
  { lead: "Share it", rest: " with your landlord or agent on WhatsApp" },
  { lead: "Keep it", rest: " as your move-in record" },
  { lead: "Compare", rest: " against it when you move out" },
] as const;

function ListIcon({ className = "text-brand" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`mt-[3px] shrink-0 ${className}`}
    >
      <path d="M5 12l4.5 4.5L19 7" />
    </svg>
  );
}

const container = "mx-auto max-w-[1200px] px-5 sm:px-10";

export default function Home() {
  return (
      <main className="flex-1">
        {/* 1. Hero · phone-demo cream layout (split fallback behind HERO_VARIANT) */}
        {HERO_VARIANT === "split" ? <HeroSplit /> : <HeroDemo />}

        {/* 2. Problem, cost and pivot · white */}
        <ProblemSection />

        {/* 3. How it works · canvas */}
        <section id="how-it-works" className="bg-true-white">
          <div className={`${container} py-16 md:py-24`}>
            <HowItWorks />
          </div>
        </section>

        {/* 4. Sample report · white page, headline outside the cards */}
        <section id="sample-report" className="bg-true-white">
          <div className="mx-auto max-w-[1200px] px-5 pt-4 pb-12 sm:px-10 md:pt-8 md:pb-16">
            <Reveal className="max-w-[820px]">
              <h2 className="text-[clamp(34px,4.6vw,56px)] leading-[1.05] font-black tracking-[-0.025em] text-navy-900">
                See exactly what <span className="text-brand">you&apos;ll get.</span>
              </h2>
              <p className="mt-4 text-[clamp(17px,1.8vw,20px)] leading-[1.5] font-medium text-label-2">
                A property condition report is a dated record of your home on day one. You inspect room by
                room, rate every item, photograph every fault and confirm a declaration. Tenify builds one
                PDF both sides can read.
              </p>
            </Reveal>

            <Reveal className="mt-10 grid gap-3.5 md:mt-10 md:gap-4 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
              <div className="flex flex-col gap-3.5 md:gap-4">
                <div className="flex-1 rounded-[28px] bg-brand-soft p-7 md:rounded-[40px] md:px-9 md:py-9">
                  <h3 className="text-[clamp(22px,2vw,28px)] leading-[1.2] font-bold tracking-[-0.01em] text-navy-900">
                    What&apos;s inside
                  </h3>
                  <ul className="mt-5 flex flex-col gap-4">
                    {REPORT_INSIDE.map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <ListIcon />
                        <div>
                          <div className="text-[16px] leading-[1.4] font-bold text-navy-900 md:text-[17px]">
                            {item.title}
                          </div>
                          <div className="mt-0.5 text-[14px] leading-[1.45] text-label-2 md:text-[15px]">
                            {item.description}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 rounded-[28px] bg-navy-900 p-7 text-true-white md:rounded-[40px] md:px-9 md:py-9">
                  <h3 className="text-[clamp(22px,2vw,28px)] leading-[1.2] font-bold tracking-[-0.01em]">
                    What to do with it
                  </h3>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {REPORT_USES.map((item) => (
                      <li
                        key={item.lead}
                        className="flex gap-3 text-[16px] leading-[1.45] font-semibold text-white/90 md:text-[17px]"
                      >
                        <ListIcon className="text-brand-bright" />
                        <span>
                          <strong className="font-extrabold text-true-white">{item.lead}</strong>
                          {item.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative flex min-h-0 flex-col overflow-hidden rounded-[28px] bg-brand text-true-white md:rounded-[40px] lg:min-h-full">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_300px_300px_at_72%_62%,rgba(120,235,185,0.5),rgba(120,235,185,0)_100%),radial-gradient(ellipse_380px_300px_at_40%_38%,#1E8A68_0%,var(--color-brand)_100%)]"
                />
                <div className="relative z-10 flex flex-col items-stretch gap-2 px-6 pt-6 sm:items-start sm:px-9 sm:pt-9">
                  <h3 className="text-[clamp(22px,2vw,30px)] leading-[1.2] font-bold tracking-[-0.01em]">
                    See one for yourself
                  </h3>
                  <p className="text-[15px] leading-[1.5] text-brand-soft md:text-[16px]">
                    Preview a full sample report before you download the app.
                  </p>
                  <SampleReportDialog className="btn-primary mt-3 w-full justify-center sm:mt-4 sm:w-auto">
                    See a sample report
                  </SampleReportDialog>
                  <span className="mt-1 text-center text-[14px] font-medium text-brand-soft sm:text-left">
                    Free sample. Takes a few seconds.
                  </span>
                </div>
                <div className="relative z-[1] w-full px-2 pb-0 pt-4 sm:px-4 lg:mt-auto lg:pt-6">
                  <GatedReportPreview />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. Pricing · navy panel with countdown */}
        <OfferCountdown cta={<DownloadButton className="btn-primary" label="Download for iPhone" />} />

        {/* 6. FAQ · white */}
        <section id="faq" className="bg-true-white">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-20 sm:px-10 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <Reveal>
              <h2 className="h2-display">Frequently asked questions</h2>
            </Reveal>
            <HomeFaq />
          </div>
        </section>
      </main>
  );
}
