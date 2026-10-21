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

function RiskIcon({ name }: { name: keyof typeof ICONS }) {
  return (
    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-true-white text-brand">
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
      <div className="mx-auto max-w-[1200px] px-5 pt-20 pb-20 sm:px-10 md:pt-28 md:pb-24">
        <Reveal className="max-w-[860px]">
          <h2 className="text-[clamp(34px,4.6vw,56px)] leading-[1.05] font-black tracking-[-0.025em] text-navy-900">
            Without a <span className="whitespace-nowrap">move-in</span> report, it&apos;s{" "}
            <span className="text-brand">your word against theirs.</span>
          </h2>
          <p className="mt-5 text-[clamp(20px,2.2vw,26px)] leading-[1.3] font-bold text-navy-900">
            {STAKE}
          </p>
        </Reveal>

        <Reveal>
          <ul className="mt-10 grid gap-3 md:mt-12 md:grid-cols-3 md:gap-6">
            {RISKS.map((risk) => (
              <li
                key={risk.label}
                className="panel flex flex-col gap-3 bg-brand-soft p-6 md:min-h-[260px] md:p-9"
              >
                <RiskIcon name={risk.icon} />
                <p className="mt-2 text-[21px] leading-[1.2] font-extrabold text-navy-900 md:mt-6 md:text-[26px]">
                  {risk.label}
                </p>
                <p className="text-[15px] leading-[1.45] font-semibold text-label-2 md:text-[17px]">
                  {risk.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="panel-lg mt-3 bg-navy-900 p-6 text-true-white md:mt-6 md:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr_1fr_1fr] lg:gap-8">
            <h2 className="text-[clamp(28px,3.2vw,36px)] leading-[1.08] font-black tracking-[-0.02em]">
              And fighting it <span className="text-mint">costs</span>
            </h2>
            <dl className="contents">
              {COSTS.map((cost) => (
                <div key={cost.label} className="flex flex-col gap-2">
                  <dt className="text-[13px] font-extrabold tracking-[0.1em] text-mint uppercase">
                    {cost.label}
                  </dt>
                  <dd className="flex h-[64px] items-end text-[clamp(44px,4.4vw,56px)] leading-none font-black tracking-[-0.03em] whitespace-nowrap">
                    <span className="inline-flex items-baseline">{cost.figure}</span>
                  </dd>
                  <dd className="text-[15px] leading-[1.45] font-semibold text-white/75">
                    {cost.body}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-8 border-t border-white/15 pt-6 text-[clamp(17px,1.8vw,20px)] leading-[1.35] font-extrabold md:mt-10">
            And the cost you can&apos;t invoice: weeks of stress over an avoidable dispute.
          </p>
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
