"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useIsClient, usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export type CarouselSlide = {
  label: string;
  src?: string;
};

type StepCarouselProps = {
  slides: readonly CarouselSlide[];
};

const SWIPE_THRESHOLD_PX = 48;
const AUTOPLAY_INTERVAL_MS = 4000;

const carouselArrow =
  "flex size-11 items-center justify-center rounded-full text-neutral-600 transition-colors hover:text-navy-900 focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-brand";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={direction === "left" ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
    </svg>
  );
}

export function StepCarousel({ slides }: StepCarouselProps) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [inViewport, setInViewport] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [userTookOver, setUserTookOver] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const isClient = useIsClient();
  const rootRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swipeAxis = useRef<"pending" | "horizontal" | "vertical">("pending");
  const suppressClick = useRef(false);
  const current = slides[index];
  const lightboxOpen = expanded && Boolean(current?.src);

  function go(next: number) {
    setUserTookOver(true);
    setIndex((next + slides.length) % slides.length);
  }

  function onTouchStart(event: React.TouchEvent) {
    if (slides.length < 2) return;
    const touch = event.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
    swipeAxis.current = "pending";
  }

  function onTouchMove(event: React.TouchEvent) {
    if (touchStartX.current === null || touchStartY.current === null) return;
    if (swipeAxis.current !== "pending") return;

    const touch = event.touches[0];
    const dx = touch.clientX - touchStartX.current;
    const dy = touch.clientY - touchStartY.current;

    if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;

    // Prefer vertical scroll when the gesture is mostly vertical.
    swipeAxis.current = Math.abs(dy) > Math.abs(dx) ? "vertical" : "horizontal";
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (touchStartX.current === null) return;

    const dx = event.changedTouches[0].clientX - touchStartX.current;
    const wasHorizontal =
      swipeAxis.current === "horizontal" ||
      (swipeAxis.current === "pending" && Math.abs(dx) >= SWIPE_THRESHOLD_PX);
    touchStartX.current = null;
    touchStartY.current = null;
    swipeAxis.current = "pending";

    if (!wasHorizontal || Math.abs(dx) < SWIPE_THRESHOLD_PX) return;

    suppressClick.current = true;
    if (dx > 0) go(index - 1);
    else go(index + 1);
  }

  function onExpandClick() {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setExpanded(true);
  }

  function onLightboxBackdropClick() {
    if (suppressClick.current) {
      suppressClick.current = false;
      return;
    }
    setExpanded(false);
  }

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInViewport(entry.isIntersecting),
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setExpanded(false);
      const step = event.key === "ArrowLeft" ? -1 : event.key === "ArrowRight" ? 1 : 0;
      if (!step) return;
      setUserTookOver(true);
      setIndex((prev) => (prev + step + slides.length) % slides.length);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, slides.length]);

  const autoplay =
    inViewport &&
    !lightboxOpen &&
    !hovered &&
    !focused &&
    !userTookOver &&
    !reducedMotion &&
    slides.length > 1;

  useEffect(() => {
    if (!autoplay) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [autoplay, slides.length]);

  return (
    <div
      ref={rootRef}
      className="flex w-full flex-col items-center gap-3"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setFocused(false);
        }
      }}
    >
      <div
        className="relative w-[68%] min-w-[188px] max-w-[292px] touch-pan-y md:w-[300px] md:max-w-[300px]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative rounded-[2.15rem] bg-neutral-900 p-[6px] shadow-[0_24px_50px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.22),inset_0_-1px_1px_rgba(0,0,0,0.55)]">
          <div className="relative overflow-hidden rounded-[1.7rem] bg-black ring-1 ring-white/10">
            <div className="relative aspect-[473/1024] bg-neutral-100">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slide.src ?? slide.label}
                  className={`absolute inset-0 transition-opacity duration-250 ${
                    slideIndex === index ? "opacity-100" : "pointer-events-none opacity-0"
                  }`}
                >
                  {slide.src ? (
                    <Image
                      src={slide.src}
                      alt={slide.label}
                      fill
                      sizes="(max-width: 768px) 220px, 300px"
                      className="object-contain"
                      draggable={false}
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-end bg-neutral-50 p-4">
                      <p className="text-[13px] leading-5 font-medium text-neutral-800">
                        {slide.label}
                      </p>
                    </div>
                  )}
                </div>
              ))}
              <div
                aria-hidden
                className="pointer-events-none absolute top-[8px] left-1/2 z-10 h-[18px] w-[68px] -translate-x-1/2 rounded-full bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
              />
              {current?.src ? (
                <button
                  type="button"
                  aria-label={`Expand ${current.label}`}
                  className="absolute inset-0 z-[15] cursor-zoom-in"
                  onClick={onExpandClick}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          type="button"
          aria-label="Previous screenshot"
          className={carouselArrow}
          onClick={() => go(index - 1)}
        >
          <ChevronIcon direction="left" />
        </button>
        <div className="flex" aria-label="Step screenshots" role="group">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src ?? slide.label}
              type="button"
              aria-current={slideIndex === index ? "true" : undefined}
              aria-label={`Show ${slide.label}`}
              className="group flex size-6 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand"
              onClick={() => go(slideIndex)}
            >
              <span
                className={`size-[7px] rounded-full transition-colors ${
                  slideIndex === index
                    ? "bg-navy-900"
                    : "bg-neutral-300 group-hover:bg-neutral-600"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="Next screenshot"
          className={carouselArrow}
          onClick={() => go(index + 1)}
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
      {isClient && lightboxOpen && current?.src
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex flex-col bg-black/85"
              style={{
                paddingTop: "env(safe-area-inset-top)",
                paddingBottom: "env(safe-area-inset-bottom)",
              }}
            >
              <div className="flex shrink-0 items-center justify-between px-3 py-2">
                <p className="min-w-0 flex-1 truncate pr-3 text-sm text-white/85">
                  {current.label}
                </p>
                <button
                  type="button"
                  aria-label="Close expanded screenshot"
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-true-white text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-true-white"
                  onClick={() => setExpanded(false)}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </button>
              </div>
              <div
                role="dialog"
                aria-modal="true"
                aria-label={current.label}
                className="relative flex min-h-0 flex-1 touch-pan-y items-center justify-center px-2 pb-3"
                onClick={onLightboxBackdropClick}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <Image
                  src={current.src}
                  alt={current.label}
                  width={946}
                  height={2048}
                  sizes="100vw"
                  className="h-auto max-h-full w-auto max-w-full rounded-[1rem] object-contain"
                  loading="eager"
                  draggable={false}
                  onClick={(event) => {
                    event.stopPropagation();
                    if (suppressClick.current) {
                      suppressClick.current = false;
                    }
                  }}
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
