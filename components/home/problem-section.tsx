import type { ReactNode } from "react";
import { DirhamSign } from "@/components/home/dirham-sign";
import { Reveal } from "@/components/home/reveal";

const ICONS = {
  coin: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M9.5 9.5c0-1 1.1-1.7 2.5-1.7s2.5.7 2.5 1.7-1.1 1.5-2.5 2-2.5 1-2.5 2 1.1 1.7 2.5 1.7 2.5-.7 2.5-1.7" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  noProof: (
    <>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7z" />
      <path d="M14 3v4h4M9.5 12.5l5 5M14.5 12.5l-5 5" />
    </>
  ),
} as const;

const STAKE = "You could pay for damage you didn't cause.";

const RISKS = [
  { icon: "coin", label: "Your deposit", body: "Withheld at move-out for damage that was already there." },
  {
    icon: "receipt",
    label: "Your repair bill",
    body: "Billed on top when the claimed damage costs more than your deposit.",
  },
  { icon: "noProof", label: "Your proof", body: "None. No dated record to show otherwise." },
] as const;

type Cost = { label: string; figure: ReactNode; body: string };

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
  },
  {
    label: "Money",
    figure: (
      <span className="inline-flex items-center">
        <DirhamSign className="mr-2" />
        500+
      </span>
    ),
    body: "RDC filing fee: 3.5% of the claim, minimum Dh500. Plus translation, Trustee centre and other government fees. It all adds up.",
  },
  {
    label: "Time",
    figure: (
      <>
        30+<small className={unit}>days</small>
      </>
    ),
    body: "Of back and forth before a decision, once everything is filed.",
  },
];

const ROW_LAYOUT = {
  left: {
    row: "lg:grid-cols-[clamp(170px,17vw,230px)_1fr]",
    figure: "lg:col-start-1",
    body: "lg:col-start-2",
  },
  right: {
    row: "lg:grid-cols-[1fr_clamp(170px,17vw,230px)]",
    figure: "lg:col-start-2 lg:text-right",
    body: "lg:col-start-1",
  },
} as const;

function RiskIcon({ name }: { name: keyof typeof ICONS }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="size-[22px]"
      >
        {ICONS[name]}
      </svg>
    </span>
  );
}

export function ProblemSection() {
  return (
    <section aria-label="Why a move-in report matters" className="bg-true-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-24 pb-24 sm:px-10">
        <div className="grid items-stretch gap-12 min-[820px]:grid-cols-2">
          <Reveal>
            <h2 className="text-[clamp(34px,4.2vw,52px)] leading-[1.08] font-black tracking-[-0.025em] text-navy-900">
              Without a <span className="whitespace-nowrap">move-in</span> report, it&apos;s{" "}
              <span className="text-brand">your word against theirs.</span>
            </h2>
            <p className="mt-6 text-[clamp(20px,2.2vw,26px)] leading-[1.3] font-bold text-navy-900">
              {STAKE}
            </p>
            <ul className="mt-6 grid gap-[18px]">
              {RISKS.map((risk) => (
                <li key={risk.label} className="flex items-start gap-4">
                  <RiskIcon name={risk.icon} />
                  <div>
                    <p className="text-[19px] leading-[1.3] font-extrabold text-navy-900">{risk.label}</p>
                    <p className="mt-0.5 text-[16px] leading-[1.45] text-label-2">{risk.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="flex flex-col overflow-hidden rounded-[24px] bg-navy-900 text-true-white">
            <div className="flex flex-1 flex-col justify-center px-6 pt-11 pb-4 min-[820px]:px-9 min-[820px]:pt-10">
              <h2 className="text-[clamp(28px,3.4vw,40px)] leading-[1.08] font-black tracking-[-0.025em]">
                And fighting it <span className="text-mint">costs</span>
              </h2>
              <dl className="mt-5">
                {COSTS.map((cost, i) => {
                  const layout = ROW_LAYOUT[i % 2 === 0 ? "left" : "right"];
                  return (
                    <div
                      key={cost.label}
                      className={`grid gap-x-8 border-t border-white/14 py-5 lg:grid-rows-[auto_auto] ${layout.row}`}
                    >
                      <dt
                        className={`text-[17px] font-extrabold text-mint lg:row-start-1 lg:self-end ${layout.figure}`}
                      >
                        {cost.label}
                      </dt>
                      <dd
                        className={`mt-1 text-[clamp(44px,4.6vw,60px)] leading-none font-black tracking-[-0.03em] whitespace-nowrap lg:row-start-2 lg:self-start ${layout.figure}`}
                      >
                        {cost.figure}
                      </dd>
                      <dd
                        className={`mt-3 text-[15px] leading-[1.45] text-white/72 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:self-center ${layout.body}`}
                      >
                        {cost.body}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
            <p className="bg-brand px-6 py-6 text-[clamp(18px,1.8vw,21px)] leading-[1.35] font-extrabold text-true-white min-[820px]:px-9">
              And the cost you can&apos;t invoice: weeks of stress over an avoidable dispute.
            </p>
          </Reveal>
        </div>

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
