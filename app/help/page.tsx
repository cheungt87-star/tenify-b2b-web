import type { Metadata } from "next";
import { HelpFaq } from "@/components/help/help-faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SUPPORT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Help & Support | Tenify",
  description:
    "Answers to common questions about Tenify, and how to contact our support team.",
};

const container = "mx-auto max-w-[860px] px-5 sm:px-10";

export default function HelpPage() {
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
        <section className="bg-true-white">
          <div className={`${container} flex flex-col gap-6 py-20 md:py-28`}>
            <p className="eyebrow">Help &amp; Support</p>
            <h1 className="h2-display text-balance">How can we help?</h1>
            <p className="body-lg">
              Find quick answers below, or email us and a real person will get
              back to you.
            </p>
            <div>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="btn-navy">
                Email {SUPPORT_EMAIL}
              </a>
            </div>
          </div>
        </section>

        <section className="bg-true-white">
          <div className={`${container} py-16 md:py-20`}>
            <h2 className="h2-display mb-10">Frequently asked questions</h2>
            <HelpFaq />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
