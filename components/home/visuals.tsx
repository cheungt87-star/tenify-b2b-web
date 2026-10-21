import Image from "next/image";
import type { ReactNode } from "react";
import { SampleReportDialog } from "@/components/home/sample-report-dialog";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: ReactNode;
};

export function SampleTag({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-navy-900 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-true-white uppercase ${className}`}
    >
      Sample
    </span>
  );
}

/**
 * A single A4 report page, cropped out of a phone screenshot of the PDF viewer.
 * Fixed intrinsic size plus a skeleton so nothing shifts or flashes blank while loading.
 */
export function ReportPage({
  src,
  alt,
  className = "",
  sizes = "280px",
  priority,
  children,
}: ImageProps) {
  return (
    <div
      className={`skeleton relative aspect-[473/670] overflow-hidden rounded-[8px] shadow-card ring-1 ring-navy-900/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={473}
        height={1024}
        sizes={sizes}
        priority={priority}
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      {children}
    </div>
  );
}

/**
 * Two overlapping report pages floating on white. The room page is blurred below its header,
 * with a chip that opens the sample report form.
 */
export function ReportFan() {
  return (
    <div className="mx-auto w-full max-w-[600px] p-2 sm:p-6 lg:max-w-[780px] lg:p-0">
      <div className="relative aspect-[1/0.95] w-full lg:aspect-[1/1.02]">
        <ReportPage
          src="/screenshots/report/executive-summary.png"
          alt="Sample report executive summary page"
          sizes="(min-width: 1024px) 290px, 50vw"
          className="!absolute top-[6%] left-[2%] w-[56%] lg:top-[13%] lg:left-0 lg:w-[58%] !shadow-[0_20px_44px_rgba(19,31,46,0.22)]"
        />
        <ReportPage
          src="/screenshots/report/master-bedroom-fixtures.png"
          alt="Sample report room page with photos and ratings"
          sizes="(min-width: 1024px) 290px, 50vw"
          className="!absolute top-0 right-[2%] w-[56%] lg:right-0 lg:w-[58%] !shadow-[0_26px_52px_rgba(19,31,46,0.28)]"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[38%] bottom-0 bg-true-white/10 backdrop-blur-[6px]"
          />
        </ReportPage>
        <div className="pointer-events-none absolute top-[62%] right-[2%] flex w-[56%] justify-center lg:right-0 lg:w-[58%]">
          <SampleReportDialog className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-navy-900 px-3.5 py-2 text-[12px] font-bold whitespace-nowrap text-true-white shadow-card transition-colors hover:bg-navy-700 sm:px-5 sm:py-2.5 sm:text-[14px]">
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" />
              <path d="M5 7V5a3 3 0 016 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
            See every item and photo
          </SampleReportDialog>
        </div>
        <SampleTag className="absolute top-[-10px] right-[2%] lg:right-0" />
      </div>
    </div>
  );
}
