"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { Modal } from "@/components/home/modal";
import { SampleReportForm } from "@/components/home/sample-report-form";

type SampleReportDialogProps = {
  className?: string;
  children?: ReactNode;
};

export function SampleReportDialog({
  className,
  children = "See a sample report",
}: SampleReportDialogProps) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const nameInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <button type="button" className={className} onClick={() => setOpen(true)}>
        {children}
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        labelledBy={titleId}
        initialFocusRef={nameInputRef}
      >
        <SampleReportForm
          variant="modal"
          nameInputRef={nameInputRef}
          titleId={titleId}
        />
      </Modal>
    </>
  );
}
