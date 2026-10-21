"use client";

import { useId, useState } from "react";
import { Modal } from "@/components/home/modal";

const DESKTOP_QUERY = "(pointer: fine) and (min-width: 768px)";

type DownloadButtonClientProps = {
  href: string;
  qrSvg: string;
  className: string;
  label: string;
};

export function DownloadButtonClient({
  href,
  qrSvg,
  className,
  label,
}: DownloadButtonClientProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  return (
    <>
      <a
        href={href}
        className={className}
        onClick={(event) => {
          if (window.matchMedia(DESKTOP_QUERY).matches) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        <AppleIcon />
        {label}
      </a>
      <Modal open={open} onClose={() => setOpen(false)} labelledBy={titleId}>
        <AppLinkContent titleId={titleId} href={href} qrSvg={qrSvg} />
      </Modal>
    </>
  );
}

function AppLinkContent({
  titleId,
  href,
  qrSvg,
}: {
  titleId: string;
  href: string;
  qrSvg: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 id={titleId} className="font-display text-2xl leading-tight text-neutral-900">
        Download Tenify for iPhone
      </h2>
      <p className="mt-2 max-w-[32ch] text-[15px] leading-[1.5] text-neutral-600">
        Scan the code with your iPhone camera to open the App Store.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="Open Tenify on the App Store"
        className="mt-6 block size-44 rounded-[16px] border border-neutral-200 bg-true-white p-3 [&>svg]:size-full"
        dangerouslySetInnerHTML={{ __html: qrSvg }}
      />

      <p className="mt-6 text-xs text-neutral-600">
        iPhone only for now. Android is planned.
      </p>
    </div>
  );
}

function AppleIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="mr-2 -mt-0.5 shrink-0"
    >
      <path d="M16.37 12.62c-.02-2.35 1.92-3.48 2-3.54-1.09-1.6-2.79-1.82-3.4-1.84-1.45-.15-2.82.85-3.56.85-.73 0-1.86-.83-3.06-.81-1.58.02-3.03.92-3.84 2.33-1.64 2.84-.42 7.04 1.18 9.34.78 1.13 1.71 2.4 2.93 2.35 1.18-.05 1.62-.76 3.04-.76 1.42 0 1.82.76 3.06.74 1.27-.02 2.07-1.15 2.84-2.28.9-1.31 1.27-2.58 1.29-2.65-.03-.01-2.47-.95-2.48-3.73zM14.03 5.72c.65-.79 1.09-1.88.97-2.97-.94.04-2.07.62-2.74 1.41-.6.7-1.13 1.81-.99 2.88 1.04.08 2.11-.53 2.76-1.32z" />
    </svg>
  );
}
