import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About | Tenify",
  description:
    "Tenify helps tenants and landlords in the UAE record the exact condition of a rental, room by room, in one shareable report.",
};

const container = "mx-auto max-w-[860px] px-5 sm:px-10";

export default function AboutPage() {
  return (
    <div
      className="flex min-h-full flex-1 flex-col overflow-x-clip bg-true-white text-neutral-900"
      style={{
        paddingLeft: "env(safe-area-inset-left)",
        paddingRight: "env(safe-area-inset-right)",
      }}
    >
      <SiteHeader />

      <main className="flex-1">
        <section className="bg-canvas">
          <div className={`${container} flex flex-col gap-6 py-20 md:py-28`}>
            <p className="eyebrow">About Tenify</p>
            <h1 className="h2-display text-balance">
              Fair move-ins and move-outs, backed by a clear record.
            </h1>
            <p className="body-lg">
              Deposit disputes usually come down to one question: what did the
              home look like on day one? Tenify answers it with a guided,
              room-by-room condition report, complete with photos and ratings,
              that everyone can see and share.
            </p>
          </div>
        </section>

        <section className="bg-true-white">
          <div className={`${container} flex flex-col gap-5 py-16 md:py-20`}>
            <h2 className="text-[24px] font-extrabold text-navy-900">Our story</h2>
            <p className="body-lg">
              Placeholder copy. Share how Tenify started, who is behind it and
              why property condition reports matter to tenants, landlords and
              agencies across the UAE.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
