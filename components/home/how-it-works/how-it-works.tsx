import { DownloadButton } from "@/components/home/download-button";
import { HowItWorksClient } from "./how-it-works-client";

/** Server wrapper so the section can render its own App Store button. */
export function HowItWorks() {
  return (
    <HowItWorksClient
      stepFourCta={
        <DownloadButton className="btn-notch-outline" label="Download for iPhone" />
      }
    />
  );
}
