import type { Metadata } from "next";
import { HelpFaq } from "@/components/help/help-faq";
import { SUPPORT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Help & Support | Tenify",
  description:
    "Answers to common questions about Tenify, and how to contact our support team.",
};

const shell = "mx-auto max-w-[1200px] px-5 sm:px-10";

export default function HelpPage() {
  return (
    <main className="flex-1 bg-true-white">
      <section className={`${shell} pt-14 pb-12 md:pt-24 md:pb-20`}>
        <p className="eyebrow">Help &amp; Support</p>
        <h1 className="mt-4 text-[clamp(46px,7vw,88px)] leading-none font-black tracking-[-0.035em] text-navy-900">
          How can we <span className="text-brand">help?</span>
        </h1>
        <p className="mt-5 max-w-[520px] text-[clamp(18px,2vw,22px)] leading-[1.4] font-bold text-navy-900">
          Find quick answers below, or email us and a real person will get back to you.
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="btn-primary mt-8 w-full sm:w-auto"
        >
          Email {SUPPORT_EMAIL}
        </a>
      </section>

      <section className={`${shell} pb-20 md:pb-28`}>
        <HelpFaq />
      </section>
    </main>
  );
}
