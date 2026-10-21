import QRCode from "qrcode";
import { APP_STORE_URL } from "@/lib/site-config";
import { DownloadButtonClient } from "@/components/home/download-button-client";

type DownloadButtonProps = {
  className?: string;
  label?: string;
};

export async function DownloadButton({
  className = "btn-primary",
  label = "Download on the App Store",
}: DownloadButtonProps) {
  const qrSvg = await QRCode.toString(APP_STORE_URL, {
    type: "svg",
    margin: 0,
    color: { dark: "#0f1f2e", light: "#ffffff" },
  });

  return (
    <DownloadButtonClient
      href={APP_STORE_URL}
      qrSvg={qrSvg}
      className={className}
      label={label}
    />
  );
}
