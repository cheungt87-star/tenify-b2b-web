import { DownloadButton } from "@/components/home/download-button";
import { SampleReportDialog } from "@/components/home/sample-report-dialog";
import { HeroDemoClient } from "./hero-demo-client";

export function HeroArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export async function HeroDemo() {
  return (
    <HeroDemoClient
      primaryCta={
        <DownloadButton
          className="btn-primary"
          label="Download for iPhone"
        />
      }
      secondaryCta={
        <SampleReportDialog className="btn-notch-outline">
          See a sample report
          <HeroArrowIcon />
        </SampleReportDialog>
      }
    />
  );
}
