import type { Metadata } from "next";
import Image from "next/image";
import { WaitlistForm } from "@/components/for-businesses/waitlist-form";
import { DirhamSign } from "@/components/home/dirham-sign";
import keysPhoto from "@/public/landing/b2b-keys.jpg";

export const metadata: Metadata = {
  title: "Tenify for business: coming soon",
  description:
    "Turn property inspections into reasons clients come back. Branded, unlimited reports for your team. Join the waitlist.",
};

const POINTS = [
  "1 fixed price for your team",
  "Unlimited reports",
  "Your logo on the report",
] as const;

export default function ForBusinessesPage() {
  return (
    <main className="flex flex-1 flex-col p-2 md:p-3">
      {/* Desktop: one full-width photo panel with the card floating inside.
          Mobile: photo block on top, grey card below. */}
      <section className="relative flex flex-1 flex-col gap-2 md:grid md:min-h-[600px] md:grid-cols-[1.2fr_minmax(340px,0.62fr)] md:items-center md:gap-[clamp(24px,5vw,80px)] md:overflow-hidden md:rounded-[48px] md:bg-navy-900 md:px-[clamp(32px,6vw,96px)]">
        <div className="relative overflow-hidden rounded-[28px] bg-navy-900 px-4 pt-[150px] pb-6 md:contents">
          <div className="absolute inset-0 z-0">
            <Image
              src={keysPhoto}
              alt=""
              priority
              sizes="100vw"
              className="absolute inset-x-0 -top-[90px] h-[450px] w-full object-cover object-[52%_50%] md:inset-0 md:top-0 md:h-full md:object-[50%_50%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgb(15_31_46/0.05)_0,rgb(15_31_46/0.1)_120px,rgb(15_31_46/0.88)_250px,#0f1f2e_330px)] md:bg-[linear-gradient(90deg,rgb(15_31_46/0.94)_0%,rgb(15_31_46/0.82)_38%,rgb(15_31_46/0.15)_62%,rgb(15_31_46/0.1)_100%)]"
            />
          </div>

          <div className="relative z-[2]">
            <p className="inline-flex items-center gap-2.5 text-[12px] font-extrabold tracking-[0.22em] text-action uppercase md:gap-3.5 md:text-[15px]">
              <span aria-hidden="true" className="block h-0.5 w-6 rounded-full bg-action md:w-9" />
              Coming soon
            </p>
            <h1
              className="font-display mt-2.5 max-w-[11.5em] text-[32px] leading-[0.98] tracking-[-0.04em] text-balance text-true-white md:mt-[18px] md:text-[clamp(34px,4.6vw,68px)]"
              style={{ fontWeight: 900 }}
            >
              Do you run property inspections already, manually?
            </h1>
            <p className="mt-2.5 max-w-[500px] text-[16px] leading-[1.35] font-semibold text-white/90 md:mt-5 md:text-[clamp(17px,1.8vw,23px)]">
              Turn them into reasons why clients come back, time after time.
            </p>
          </div>
        </div>

        <aside
          id="waitlist"
          className="relative z-[2] w-full rounded-[28px] bg-panel-grey p-[22px] md:max-w-[430px] md:justify-self-end md:rounded-[32px] md:bg-true-white md:p-[clamp(24px,2.6vw,40px)] md:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
        >
          <p className="mb-3 text-[17px] leading-[1.3] font-extrabold tracking-[-0.01em] text-navy-900 md:mb-4 md:text-[clamp(17px,1.5vw,21px)]">
            With Tenify for your business you get all the benefits of Tenify, plus&hellip;
          </p>
          <ul className="flex flex-col gap-2 md:gap-3">
            {POINTS.map((point) => (
              <Check key={point}>{point}</Check>
            ))}
            <Check>
              Starting from{" "}
              <b className="font-black whitespace-nowrap text-navy-900">
                <DirhamSign className="mr-[0.2em]" />
                1,500
              </b>{" "}
              per month for up to 5 users
            </Check>
          </ul>
          <p className="mt-3.5 mb-3 text-[14px] leading-[1.45] text-neutral-600 md:mt-5 md:mb-3.5 md:text-[15px]">
            <b className="font-extrabold text-navy-900">Coming soon.</b> Enter your company and
            email below to be first to know when it launches.
          </p>
          <WaitlistForm />
        </aside>
      </section>
    </main>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-7 text-[15px] leading-[1.4] text-neutral-600 md:pl-8 md:text-[clamp(15px,1.3vw,18px)]">
      <span
        aria-hidden="true"
        className="absolute top-[0.4em] left-0.5 block h-[7px] w-3 -rotate-45 border-b-[3px] border-l-[3px] border-brand"
      />
      {children}
    </li>
  );
}
