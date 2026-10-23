"use client";

import { useId, useRef, useState } from "react";
import { Modal } from "@/components/home/modal";
import { AppWaitlistForm } from "@/components/home/app-waitlist-form";

type DownloadButtonClientProps = {
  className: string;
  label: string;
};

export function DownloadButtonClient({
  className,
  label,
}: DownloadButtonClientProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const nameInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        <AppleIcon />
        {label}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy={titleId}
        initialFocusRef={nameInputRef}
      >
        <AppWaitlistForm nameInputRef={nameInputRef} titleId={titleId} />
      </Modal>
    </>
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
