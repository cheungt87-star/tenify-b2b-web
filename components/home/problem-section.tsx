import type { ReactNode } from "react";
import { DirhamSign } from "@/components/home/dirham-sign";
import { EffortVisual, MoneyVisual, TimeVisual } from "@/components/home/cost-visuals";
import { Reveal } from "@/components/home/reveal";

type Cost = {
  label: string;
  figure: ReactNode;
  body: string;
  visual: ReactNode;
  /** Card backing + label colour. Time uses deep brand green so the row has contrast. */
  tone: string;
  labelTone: string;
};

const unit = "ml-1.5 text-[0.38em] font-extrabold tracking-normal text-white/60";

const COSTS: readonly Cost[] = [
  {
    label: "Effort",
    figure: (
      <>
        4+<small className={unit}>steps</small>
      </>
    ),
    body: "Gather your documents. Get them translated (mandatory). File online. Visit Trustee centres. All before a hearing.",
    visual: <EffortVisual />,
    tone: "bg-navy-900",
    labelTone: "text-brand-bright",
  },
  {
    label: "Time",
    figure: (
      <>
        30+<small className={unit}>days</small>
      </>
    ),
    body: "Of back and forth before a decision, once everything is filed.",
    visual: <TimeVisual />,
    tone: "bg-brand",
    labelTone: "text-true-white",
  },
  {
    label: "Money",
    figure: (
      <span className="inline-flex items-center">
        <DirhamSign className="mr-2" />
        500+
      </span>
    ),
    body: "RDC filing fees alone start at AED 500. Translation, trustee centre and other fees come on top.",
    visual: <MoneyVisual />,
    tone: "bg-navy-900",
    labelTone: "text-brand-bright",
  },
];

export function ProblemSection() {
  return (
    <section aria-label="Why a move-in report matters" className="bg-true-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-20 pb-20 sm:px-10 md:pt-28 md:pb-24">
        <Reveal className="max-w-[860px]">
          <h2 className="text-[clamp(34px,4.6vw,56px)] leading-[1.05] font-black tracking-[-0.025em] text-navy-900">
            Without a <span className="whitespace-nowrap">move-in</span> report, it&apos;s{" "}
            <span className="text-brand">your word against theirs.</span>
          </h2>
          <p className="mt-5 text-[clamp(18px,2vw,22px)] leading-[1.3] font-bold text-navy-900">
            Deposit withheld. Repair bill on top. Nothing to show them.
          </p>
        </Reveal>

        <Reveal className="mt-10 rounded-[28px] bg-brand-bright p-3 pt-7 md:mt-14 md:rounded-[40px] md:p-5 md:pt-9">
          <h3 className="px-3 text-[clamp(24px,2.8vw,34px)] leading-[1.1] font-extrabold tracking-[-0.01em] text-navy-900">
            And fighting it costs.
          </h3>
          <ul className="mt-6 grid gap-3 md:mt-7 md:gap-4 lg:grid-cols-3">
            {COSTS.map((cost) => (
              <li
                key={cost.label}
                className={`flex flex-col overflow-hidden rounded-[24px] px-[var(--pad)] pt-8 pb-[var(--pad)] text-true-white [--pad:24px] md:rounded-[28px] md:[--pad:28px] ${cost.tone}`}
              >
                <p className={`text-[13px] font-extrabold tracking-[0.1em] uppercase ${cost.labelTone}`}>
                  {cost.label}
                </p>
                <p className="mt-2 flex items-end text-[clamp(52px,5.6vw,80px)] leading-none font-black tracking-[-0.03em] whitespace-nowrap">
                  <span className="inline-flex items-baseline">{cost.figure}</span>
                </p>
                <p className="mt-4 mb-6 max-w-[300px] text-[15px] leading-[1.45] font-semibold text-white/85">
                  {cost.body}
                </p>
                <div className="mt-auto -mx-[var(--pad)] -mb-[var(--pad)] h-[320px] overflow-hidden rounded-t-2xl md:h-[340px]">
                  {cost.visual}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-right text-[14px] leading-[1.5] text-label-2">
            *Figures are illustrative. For the latest fees and timelines, please refer to the official RDC
            website.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
