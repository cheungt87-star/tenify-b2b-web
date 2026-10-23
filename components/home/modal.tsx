"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";

const MOBILE_SHEET_MQ = "(max-width: 520px)";
/** Leave a little room above the sheet so it doesn’t kiss the status bar. */
const MOBILE_TOP_INSET_PX = 8;

type ModalProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  /** Optional element to focus when the dialog opens (e.g. first field). */
  initialFocusRef?: RefObject<HTMLElement | null>;
  /** Extra classes on the inner panel. */
  className?: string;
};

function isFormControl(target: EventTarget | null): target is HTMLElement {
  return (
    target instanceof HTMLInputElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  );
}

export function Modal({
  open,
  onClose,
  labelledBy,
  children,
  initialFocusRef,
  className = "",
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const [mounted, setMounted] = useState(false);
  const [panelMaxHeight, setPanelMaxHeight] = useState<string | undefined>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      lastFocusRef.current = document.activeElement as HTMLElement | null;
      dialog.showModal();
      // Native dialog focuses the first tabbable (Close); override to the field.
      queueMicrotask(() => {
        const target = initialFocusRef?.current;
        if (target) target.focus();
      });
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open, initialFocusRef]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    function handleClose() {
      onCloseRef.current();
      const previous = lastFocusRef.current;
      if (previous && typeof previous.focus === "function") {
        requestAnimationFrame(() => previous.focus());
      }
    }

    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  // Keep the mobile bottom sheet inside the visual viewport (above the keyboard).
  useEffect(() => {
    if (!open) {
      setPanelMaxHeight(undefined);
      return;
    }

    const mq = window.matchMedia(MOBILE_SHEET_MQ);

    function updateMaxHeight() {
      if (!mq.matches) {
        setPanelMaxHeight(undefined);
        return;
      }
      const vv = window.visualViewport;
      const visibleHeight = vv?.height ?? window.innerHeight;
      const maxPx = Math.max(0, Math.floor(visibleHeight - MOBILE_TOP_INSET_PX));
      setPanelMaxHeight(`${maxPx}px`);
    }

    updateMaxHeight();
    mq.addEventListener("change", updateMaxHeight);
    const vv = window.visualViewport;
    vv?.addEventListener("resize", updateMaxHeight);
    vv?.addEventListener("scroll", updateMaxHeight);
    window.addEventListener("resize", updateMaxHeight);

    return () => {
      mq.removeEventListener("change", updateMaxHeight);
      vv?.removeEventListener("resize", updateMaxHeight);
      vv?.removeEventListener("scroll", updateMaxHeight);
      window.removeEventListener("resize", updateMaxHeight);
    };
  }, [open]);

  // Scroll focused form controls into view inside the sheet after the keyboard moves.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;

    function handleFocusIn(event: FocusEvent) {
      if (!isFormControl(event.target)) return;
      const el = event.target;
      requestAnimationFrame(() => {
        el.scrollIntoView({ block: "nearest", inline: "nearest" });
      });
    }

    panel.addEventListener("focusin", handleFocusIn);
    return () => panel.removeEventListener("focusin", handleFocusIn);
  }, [open]);

  // Portal so parent layout CSS (e.g. hero CTA width:100% on buttons) cannot
  // leak into the dialog chrome.
  if (!mounted) return null;

  const panelStyle: CSSProperties | undefined = panelMaxHeight
    ? { maxHeight: panelMaxHeight }
    : undefined;

  return createPortal(
    <dialog
      ref={ref}
      aria-labelledby={labelledBy}
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          event.currentTarget.close();
        }
      }}
      className={[
        // Do not set display here — closed <dialog> must stay display:none (UA).
        "fixed inset-0 m-0 h-full max-h-none w-full max-w-none",
        "border-0 bg-transparent p-4",
        "backdrop:bg-navy-900/45 backdrop:backdrop-blur-[6px]",
        "open:flex open:items-center open:justify-center",
        "max-[520px]:open:items-end max-[520px]:open:p-0",
      ].join(" ")}
    >
      <div
        ref={panelRef}
        style={panelStyle}
        className={[
          "relative w-full max-w-[480px] max-h-[calc(100dvh-32px)] overflow-y-auto overscroll-contain",
          "rounded-[28px] bg-true-white text-left text-navy-900",
          "shadow-[0_20px_60px_rgba(0,0,0,0.3)]",
          "px-6 pt-7 pb-10 sm:px-8 sm:pt-8 sm:pb-10",
          "max-[520px]:max-h-[92dvh] max-[520px]:max-w-none",
          "max-[520px]:rounded-b-none max-[520px]:rounded-t-[28px]",
          "max-[520px]:px-6 max-[520px]:pt-7",
          "max-[520px]:pb-[max(2.5rem,env(safe-area-inset-bottom))]",
          "motion-safe:animate-[modal-rise_0.2s_ease-out]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <button
          type="button"
          onClick={() => ref.current?.close()}
          aria-label="Close"
          className="absolute top-5 right-5 z-10 inline-flex size-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-navy-900 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-900 max-[520px]:top-[22px]"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>
        {children}
      </div>
    </dialog>,
    document.body,
  );
}
