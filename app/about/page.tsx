import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { DownloadButton } from "@/components/home/download-button";
import { SampleReportDialog } from "@/components/home/sample-report-dialog";
import { Reveal } from "@/components/home/reveal";
import { SUPPORT_EMAIL } from "@/lib/site-config";
import sofaPhoto from "@/public/landing/about-sofa.jpg";
import yellowPhoto from "@/public/landing/hero-yellow.jpg";

export const metadata: Metadata = {
  title: "About | Tenify",
  description:
    "Tenify was founded with one mission in mind: to let tenants move into a new property with confidence. A note from the Tenify team.",
};

const shell = "mx-auto max-w-[1200px] px-5 sm:px-10";

const icon = "h-10 w-10 fill-none stroke-current stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]";
const stepIcon =
  "h-9 w-9 flex-none fill-none stroke-brand stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]";

const PROBLEMS: readonly { title: string; tone: string; icon: ReactNode }[] = [
  {
    title: "Photos get buried.",
    tone: "bg-navy-900",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="12" cy="12" r="3.5" />
      </svg>
    ),
  },
  {
    title: "Notes get lost in chat threads.",
    tone: "bg-brand",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} aria-hidden>
        <path d="M4 5h16v11H9l-5 4z" />
        <path d="M8 9h8M8 12h5" />
      </svg>
    ),
  },
  {
    title: "Professional inspections are priced for agencies, not for one flat.",
    tone: "bg-[#0b4f57]",
    icon: (
      <svg viewBox="0 0 24 24" className={icon} aria-hidden>
        <path d="M3 20h18M5 20V8l7-4 7 4v12" />
        <path d="M10 20v-6h4v6" />
      </svg>
    ),
  },
];

const STEPS: readonly { title: string; sub: string; icon: ReactNode }[] = [
  {
    title: "Walk your home, room by room.",
    sub: "No expertise needed.",
    icon: (
      <svg viewBox="0 0 24 24" className={stepIcon} aria-hidden>
        <path d="M3 11l9-7 9 7v9H3z" />
        <path d="M9 20v-6h6v6" />
      </svg>
    ),
  },
  {
    title: "Photograph each item. Rate it 1 to 5.",
    sub: "Works on site, even when the signal doesn’t.",
    icon: (
      <svg viewBox="0 0 24 24" className={stepIcon} aria-hidden>
        <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
      </svg>
    ),
  },
  {
    title: "Share a clear report in one tap.",
    sub: "A dated record both sides can read.",
    icon: (
      <svg viewBox="0 0 24 24" className={stepIcon} aria-hidden>
        <path d="M12 15V3M7 8l5-5 5 5" />
        <path d="M5 13v7h14v-7" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-true-white">
      {/* Hero */}
      <section className="panel-inset pt-3 md:pt-5">
        <div className="panel-lg relative flex min-h-[520px] items-end bg-navy-900 md:min-h-[580px]">
          <Image
            src={sofaPhoto}
            alt=""
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full -scale-x-100 object-cover object-[35%_60%] md:left-auto md:-right-[24%] md:w-[118%] md:object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/55 to-navy-900/20 md:bg-gradient-to-r md:from-navy-900/90 md:via-navy-900/60 md:to-navy-900/0"
          />
          <div className="relative z-10 max-w-[760px] px-6 py-10 md:p-14">
            <p className="text-[13px] font-extrabold tracking-[0.14em] text-action uppercase">
              A note from the Tenify team
            </p>
            <h1 className="mt-4 text-[clamp(38px,6vw,68px)] leading-[1.05] font-black tracking-[-0.025em] text-balance text-true-white">
              Tenify was founded with one mission: move into a new home{" "}
              <span className="text-action">with confidence.</span>
            </h1>
            <p className="mt-5 text-[clamp(18px,2vw,20px)] text-white/85">
              It began with a first apartment in Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className={`${shell} grid gap-8 pt-16 pb-6 md:grid-cols-[1fr_1.1fr] md:gap-14 md:pt-24`}>
        <Reveal>
          <p className="eyebrow">How it began</p>
          <h2 className="mt-3 text-[clamp(30px,4vw,44px)] leading-[1.08] font-black tracking-[-0.02em] text-navy-900">
            Back home, nobody takes offence.
          </h2>
        </Reveal>
        <Reveal className="text-[18px] leading-[1.65] text-neutral-700">
          <div className="mb-7 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[20px] bg-gold-100 p-5 text-[16px] leading-[1.5] text-brand">
              <p className="text-[13px] font-extrabold tracking-[0.12em] uppercase">UK</p>
              <p className="mt-2 text-[20px] leading-tight font-extrabold">Walk the home together.</p>
              <p className="mt-1.5">A detailed inventory report is standard. Even welcomed.</p>
            </div>
            <div className="rounded-[20px] bg-navy-900 p-5 text-[16px] leading-[1.5] text-true-white">
              <p className="text-[13px] font-extrabold tracking-[0.12em] text-action uppercase">Dubai</p>
              <p className="mt-2 text-[20px] leading-tight font-extrabold">Nothing to show.</p>
              <p className="mt-1.5">No report. At move-out, word against word.</p>
            </div>
          </div>
          <p className="text-[22px] leading-[1.4] font-bold text-navy-900">
            One of the Tenify team moved to Dubai from the UK and was shocked it isn&apos;t a thing here.
          </p>
          <p className="mt-5">
            The apartment went undocumented too. Then came move-out, and disputes over several items that were
            there on day one.
          </p>
          <p className="mt-5">
            Taking it to court was an option. But it would have cost money, time and a lot of mental energy.
            Over a deposit. It didn&apos;t feel right to be in that position simply because there was nothing to
            show.
          </p>
        </Reveal>
      </section>

      {/* Pull quote */}
      <section className="panel-inset mt-12">
        <Reveal className="panel-lg bg-navy-900 px-6 py-16 text-center md:px-14 md:py-24">
          <p className="text-[13px] font-extrabold tracking-[0.14em] text-action uppercase">
            That&apos;s when it clicked
          </p>
          <p className="mx-auto mt-5 max-w-[860px] text-[clamp(32px,5.4vw,64px)] leading-[1.08] font-black tracking-[-0.02em] text-balance text-true-white">
            Most deposit disputes aren&apos;t about damage. They&apos;re about{" "}
            <span className="text-action">evidence.</span>
          </p>
        </Reveal>
      </section>

      {/* Same story */}
      <section className={`${shell} pt-16 md:pt-24`}>
        <Reveal>
          <p className="eyebrow">Same story, different flats</p>
          <h2 className="mt-3 max-w-[640px] text-[clamp(28px,4vw,40px)] leading-[1.1] font-black tracking-[-0.02em] text-navy-900">
            Friends told the same story. Same argument.
          </h2>
          <p className="mt-3 text-[clamp(18px,2vw,20px)] text-neutral-700">Here&apos;s why nobody had proof.</p>
        </Reveal>
        <Reveal as="ul" className="mt-8 grid gap-3 md:grid-cols-3">
          {PROBLEMS.map((p) => (
            <li
              key={p.title}
              className={`flex min-h-[200px] flex-col justify-between gap-8 rounded-[24px] p-7 text-true-white ${p.tone}`}
            >
              {p.icon}
              <h3 className="text-[24px] leading-[1.2] font-extrabold">{p.title}</h3>
            </li>
          ))}
        </Reveal>
      </section>

      {/* Solution */}
      <section className={`${shell} grid gap-3 py-12 md:grid-cols-2 md:py-16`}>
        <Reveal className="rounded-[28px] bg-gold-100 p-8 md:rounded-[32px] md:p-12">
          <p className="eyebrow">So we built it</p>
          <h2 className="mt-3 text-[clamp(28px,3.8vw,42px)] leading-[1.08] font-black tracking-[-0.02em] text-navy-900">
            The inventory report the team wished existed on day one.
          </h2>
          <p className="mt-4 text-[18px] leading-[1.65] text-neutral-700">
            Built for tenants first, because tenants put down the deposit. Landlords get the same report and the
            same benefit: one record both sides can read.
          </p>
        </Reveal>
        <Reveal as="ul" className="grid gap-3">
          {STEPS.map((s) => (
            <li key={s.title} className="flex items-center gap-4 rounded-[24px] border border-neutral-300/60 px-6 py-5">
              {s.icon}
              <div>
                <p className="text-[19px] leading-snug font-extrabold text-navy-900">{s.title}</p>
                <p className="text-[15px] text-neutral-600">{s.sub}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="panel-inset">
        <Reveal className="panel-lg relative bg-navy-900">
          <Image
            src={yellowPhoto}
            alt=""
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-navy-900/60 md:bg-gradient-to-r md:from-navy-900/90 md:via-navy-900/60 md:to-navy-900/10"
          />
          <div className="relative z-10 max-w-[640px] px-6 py-10 md:p-16">
            <h2 className="text-[clamp(32px,4.6vw,52px)] leading-[1.08] font-black tracking-[-0.02em] text-balance text-true-white">
              A dated condition record, as normal here as <span className="text-action">back home.</span>
            </h2>
            <p className="mt-4 text-[clamp(18px,2vw,20px)] text-white/90">
              A small step that spares people a big argument. Try it on your own home. Free until the end of 2026.
            </p>
            <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
              <DownloadButton className="btn-primary w-full sm:w-auto" label="Download for iPhone" />
              <SampleReportDialog className="btn-notch-outline w-full sm:w-auto">
                See a sample report
              </SampleReportDialog>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sign-off */}
      <section className={`${shell} pt-12 pb-16 md:pb-24`}>
        <div className="max-w-[620px] text-[18px] leading-[1.65] text-neutral-700">
          <p>
            We&apos;re always looking to improve the experience, so if you have any feedback, drop us an email:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-navy-900 underline underline-offset-4 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p className="mt-6 font-bold text-navy-900">
            Warmly,
            <br />
            <span className="font-semibold text-neutral-600">The Tenify team</span>
          </p>
        </div>
      </section>
    </main>
  );
}
