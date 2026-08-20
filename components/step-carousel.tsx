"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export type CarouselSlide = {
  label: string;
  src?: string;
};

type StepCarouselProps = {
  slides: readonly CarouselSlide[];
};

export function StepCarousel({ slides }: StepCarouselProps) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const current = slides[index];

  function go(next: number) {
    setIndex((next + slides.length) % slides.length);
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (expanded && !current?.src) {
      setExpanded(false);
    }
  }, [current, expanded]);

  useEffect(() => {
    if (!expanded) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setExpanded(false);
      if (event.key === "ArrowLeft") go(index - 1);
      if (event.key === "ArrowRight") go(index + 1);
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [expanded, index, slides.length]);

  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="relative w-[68%] min-w-[188px] max-w-[292px]">
        <div className="relative rounded-[2.15rem] bg-[#1c1c1e] p-[6px] shadow-[0_24px_50px_rgba(15,31,46,0.28),inset_0_1px_1px_rgba(255,255,255,0.22),inset_0_-1px_1px_rgba(0,0,0,0.55)]">
          <div className="relative overflow-hidden rounded-[1.7rem] bg-black ring-1 ring-white/10">
            <div className="relative aspect-[473/1024] bg-[#f4f4f5]">
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
                      sizes="(max-width: 768px) 220px, 292px"
                      className="object-contain"
                      priority={slideIndex === 0}
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
                  onClick={() => setExpanded(true)}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous screenshot"
          className="flex h-11 w-11 items-center justify-center text-lg text-neutral-400"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <div className="flex gap-1.5" role="tablist" aria-label="Step screenshots">
          {slides.map((slide, slideIndex) => (
            <button
              key={slide.src ?? slide.label}
              type="button"
              role="tab"
              aria-selected={slideIndex === index}
              aria-label={slide.label}
              className={`h-[7px] w-[7px] rounded-full ${
                slideIndex === index ? "bg-jade-900" : "bg-neutral-300"
              }`}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next screenshot"
          className="flex h-11 w-11 items-center justify-center text-lg text-neutral-400"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>
      {mounted && expanded && current?.src
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-black/70 px-4 py-4"
              style={{
                paddingTop: "max(1rem, env(safe-area-inset-top))",
                paddingBottom: "max(1rem, env(safe-area-inset-bottom))",
              }}
              onClick={() => setExpanded(false)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={current.label}
                className="relative flex w-full max-w-[420px] flex-col items-center"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  aria-label="Close expanded screenshot"
                  className="mb-3 ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/95 text-xl text-neutral-900"
                  onClick={() => setExpanded(false)}
                >
                  ×
                </button>
                <Image
                  src={current.src}
                  alt={current.label}
                  width={473}
                  height={1024}
                  className="h-auto max-h-[calc(100dvh-9rem)] w-auto max-w-full rounded-[1.5rem] object-contain"
                />
                <p className="mt-3 text-center text-sm text-white/85">{current.label}</p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
