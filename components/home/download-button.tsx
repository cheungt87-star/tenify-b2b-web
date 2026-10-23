import { DownloadButtonClient } from "@/components/home/download-button-client";

type DownloadButtonProps = {
  className?: string;
  label?: string;
};

export function DownloadButton({
  className = "btn-primary",
  label = "Download on the App Store",
}: DownloadButtonProps) {
  return (
    <DownloadButtonClient className={className} label={label} />
  );
}
