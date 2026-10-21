import type { Metadata } from "next";
import { DownloadButton } from "@/components/home/download-button";
import { HomeFaq } from "@/components/home/home-faq";
import { HomeFooter } from "@/components/home/home-footer";
import { HeroDemo } from "@/components/home/hero-demo/hero-demo";
import { HeroSplit } from "@/components/home/hero-split";
import { HowItWorks } from "@/components/home/how-it-works/how-it-works";
import { ProblemSection } from "@/components/home/problem-section";
import { SampleReportDialog } from "@/components/home/sample-report-dialog";
import { Reveal } from "@/components/home/reveal";
import { ReportFan } from "@/components/home/visuals";
import { SiteHeader } from "@/components/site-header";
import { HERO_VARIANT } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tenify | Professional property condition reports",
  description:
    "Document the exact condition of your rental at move-in. Room by room, with photos, in one report you can share. Free until the end of 2026.",
};

const OFFER_POINTS = [
  "Free to download.",
  "Create and save reports at no charge.",
  "Share on WhatsApp or by link.",
] as const;

const REPORT_INSIDE = [
  "Property details and cover",
  "Room-by-room fixtures and furnishings",
  "Photos of any faults",
  "A rating for every item",
  "A summary of what needs action",
] as const;

const REPORT_USES = [
  { label: "Share it with your landlord or agent on WhatsApp", path: "M14 2L7 9M14 2l-4.5 12-2-5-5-2L14 2z" },
  { label: "Keep it as your move-in record", path: "M4 2.5h8v11L8 10.5l-4 3z" },
  { label: "Compare against it when you move out", path: "M2 5h11M10 2l3 3-3 3M14 11H3M6 8l-3 3 3 3" },
] as const;

function ListIcon({ path, strokeWidth }: { path: string; strokeWidth: number }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-[3px] shrink-0 text-brand"
    >
      <path d={path} />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-mint"
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

const container = "mx-auto max-w-[1200px] px-5 sm:px-10";

export default function Home() {
  return (
    <div
      className="flex min-h-full flex-1 flex-col overflow-x-clip bg-true-white text-neutral-900"
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <SiteHeader
        variant={HERO_VARIANT === "split" ? "default" : "overlay"}
        topSurface="bg-canvas"
        cta={
          <DownloadButton
            className="btn-primary btn-primary-sm !min-h-11"
            label="Download for iPhone"
          />
        }
        mobileCta={
          <DownloadButton
            className="btn-primary btn-primary-sm !min-h-11"
            label="Download"
          />
        }
      />

      <main>
        {/* 1. Hero · phone-demo cream layout (split fallback behind HERO_VARIANT) */}
        {HERO_VARIANT === "split" ? <HeroSplit /> : <HeroDemo />}

        {/* 2. Problem, cost and pivot · white */}
        <ProblemSection />

        {/* 3. How it works · canvas */}
        <section id="how-it-works" className="bg-canvas">
          <div className={`${container} py-16 md:py-24`}>
            <HowItWorks />
          </div>
        </section>

        {/* 4. Sample report · white */}
        <section id="sample-report" className="panel-lg panel-inset mt-12 bg-brand-soft md:mt-20">
          <div className="mx-auto grid max-w-[1200px] items-center gap-x-16 gap-y-10 px-6 py-14 sm:px-10 md:px-14 md:py-20 lg:grid-cols-[1fr_1.1fr]">
            <Reveal className="flex flex-col gap-5 lg:col-start-1 lg:row-start-1 lg:self-end">
              <p className="eyebrow">Sample report</p>
              <h2 className="h2-display">See exactly what you&apos;ll get.</h2>
              <p className="body-lg max-w-[540px]">
                Preview a full sample report before you download the app.
              </p>
            </Reveal>
            <Reveal className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <figure className="flex flex-col items-center">
                <ReportFan />
              </figure>
            </Reveal>
            <Reveal className="flex flex-col gap-8 lg:col-start-1 lg:row-start-2 lg:self-start">
              <div className="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
                <div className="flex flex-col gap-3 rounded-[24px] bg-true-white p-6">
                  <p className="text-[13px] font-extrabold tracking-[0.12em] text-navy-900 uppercase">
                    What&apos;s inside
                  </p>
                  <ul className="flex flex-col gap-3">
                    {REPORT_INSIDE.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[16px] leading-[1.35] text-label-2">
                        <ListIcon path="M3 8.5l3.2 3L13 4.5" strokeWidth={2.2} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 rounded-[24px] bg-true-white p-6">
                  <p className="text-[13px] font-extrabold tracking-[0.12em] text-navy-900 uppercase">
                    What to do with it
                  </p>
                  <ul className="flex flex-col gap-3">
                    {REPORT_USES.map((item) => (
                      <li key={item.label} className="flex gap-2.5 text-[16px] leading-[1.35] text-label-2">
                        <ListIcon path="M3 8.5l3.2 3L13 4.5" strokeWidth={2.2} />
                        {item.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
                <SampleReportDialog className="btn-primary w-full sm:w-auto">
                  See the full sample report
                </SampleReportDialog>
                <span className="text-[14px] text-label-2">Free. Takes a few seconds.</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. Pricing · navy panel */}
        <section id="pricing" className="panel-lg panel-inset mt-3 bg-navy-900 text-true-white md:mt-6">
          <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-14 sm:px-10 md:px-14 md:py-20 lg:grid-cols-2 lg:gap-14">
            <Reveal className="flex flex-col gap-6">
              <h2 className="text-[clamp(34px,4.6vw,56px)] leading-[1.04] font-black tracking-[-0.025em] text-balance">
                Try Tenify free until the end of 2026.
              </h2>
              <ul className="flex flex-col gap-3">
                {OFFER_POINTS.map((point) => (
                  <li key={point} className="flex gap-3 text-[18px] font-semibold">
                    <CheckIcon />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <DownloadButton
                  className="btn-primary bg-mint text-navy-900 hover:bg-mint/85 active:bg-mint/85"
                  label="Download for iPhone"
                />
                <p className="text-[14px] font-semibold text-white/65">
                  iPhone only for now. Android is planned.
                </p>
              </div>
            </Reveal>
            <Reveal className="grid gap-3 sm:grid-cols-2 md:gap-4">
              <div className="panel flex flex-col gap-2 bg-true-white p-7 text-navy-900 md:p-9">
                <p className="text-[13px] font-extrabold tracking-[0.12em] text-brand uppercase">
                  Until end of 2026
                </p>
                <p className="text-[clamp(48px,6vw,64px)] leading-none font-black tracking-[-0.03em]">Free</p>
                <p className="text-[15px] font-semibold text-label-2">Try it on your own home first.</p>
              </div>
              <div className="panel flex flex-col gap-2 bg-white/10 p-7 md:p-9">
                <p className="text-[13px] font-extrabold tracking-[0.12em] text-mint uppercase">From 2027</p>
                <p className="text-[clamp(40px,5vw,48px)] leading-none font-black tracking-[-0.03em]">AED 400</p>
                <p className="text-[15px] font-semibold text-white/70">per report</p>
              </div>
            </Reveal>
          </div>
        </section>

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

      {/* 7. Footer · navy */}
      <HomeFooter />
    </div>
  );
}
