import Image from "next/image";
import { DownloadButton } from "@/components/home/download-button";
import { HeroArrowIcon } from "@/components/home/hero-demo/hero-demo";
import { SampleReportDialog } from "@/components/home/sample-report-dialog";
import heroPhoto from "@/public/landing/hero-yellow.jpg";

/** Fallback hero (HERO_VARIANT=split) for photos that can't carry the full-bleed treatment. */
export function HeroSplit() {
  return (
    <section id="top" className="relative overflow-hidden bg-true-white">
      <div className="grid min-[900px]:min-h-[min(780px,calc(100vh-4rem))] min-[900px]:grid-cols-[1.1fr_1fr]">
        <div className="hero-rise flex flex-col justify-center px-5 pt-10 pb-12 sm:px-10 min-[900px]:py-16 min-[900px]:pr-6 min-[900px]:pl-[max(40px,calc((100vw-1200px)/2+40px))]">
          <p className="eyebrow mb-5">Professional property condition reports</p>
          <h1 className="hero-headline text-[clamp(48px,5.4vw,84px)] text-navy-900">
            <span className="block">Move in with</span>{" "}
            <span className="block text-brand">confidence.</span>
          </h1>
          <p className="body-lg mt-[22px] max-w-[540px]">
            Document the exact condition of your rental at move-in. Room by
            room, with photos, in one report you can share. Free until the end
            of 2026.
          </p>
          <div className="mt-7 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap">
            <DownloadButton className="btn-primary w-full sm:w-auto" label="Download for iPhone" />
            <SampleReportDialog className="btn-notch-outline btn-notch-outline-light w-full sm:w-auto">
              See a sample report
              <HeroArrowIcon />
            </SampleReportDialog>
          </div>
        </div>
        <div className="hero-split-photo relative min-h-[340px] sm:min-h-[460px]">
          <Image
            src={heroPhoto}
            alt=""
            fill
            sizes="(min-width: 900px) 48vw, 100vw"
            quality={85}
            fetchPriority="high"
            loading="eager"
            placeholder="blur"
            className="object-cover object-[12%_22%] brightness-[1.06] contrast-[1.05] saturate-[1.16]"
          />
        </div>
      </div>
    </section>
  );
}
