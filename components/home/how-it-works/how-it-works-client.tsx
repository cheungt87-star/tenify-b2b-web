"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { Reveal } from "@/components/home/reveal";
import { CheckIcon } from "./screens/icons";
import { StepPanel } from "./step-panel";
import { HOW_STEPS } from "./steps";
import styles from "./how-it-works.module.css";

const MOBILE_QUERY = "(max-width: 1023px)";

function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const media = window.matchMedia(query);
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    },
    [query],
  );
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function scrollBehaviour(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function HowItWorksClient({ stepFourCta }: { stepFourCta: ReactNode }) {
  const isMobile = useMediaQuery(MOBILE_QUERY);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeSteps, setActiveSteps] = useState<ReadonlySet<number>>(new Set());
  const [cycles, setCycles] = useState<Record<number, number>>({});
  const trackRef = useRef<HTMLOListElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);
  const activeRef = useRef<Set<number>>(new Set());
  const indexRef = useRef(0);
  const total = HOW_STEPS.length;

  useEffect(() => {
    indexRef.current = activeIndex;
  }, [activeIndex]);

  // One observer drives screen playback on both breakpoints: rows entering
  // the viewport on desktop, the centred card (carousel as root) on mobile.
  // Leaving view deactivates the step, so its animation replays on return.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    activeRef.current = new Set();
    setActiveSteps(activeRef.current);

    const setStepActive = (index: number, on: boolean) => {
      const current = activeRef.current;
      if (on === current.has(index)) return;
      if (on) {
        current.add(index);
        setCycles((prev) => ({ ...prev, [index]: (prev[index] ?? 0) + 1 }));
        if (isMobile) setActiveIndex(index);
      } else {
        current.delete(index);
      }
      setActiveSteps(new Set(current));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          setStepActive(Number((entry.target as HTMLElement).dataset.index), entry.isIntersecting);
        }
      },
      isMobile ? { root: track, threshold: 0.6 } : { threshold: 0.55 },
    );
    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [isMobile]);

  const goTo = useCallback(
    (index: number) => {
      const target = Math.max(0, Math.min(total - 1, index));
      setActiveIndex(target);
      const track = trackRef.current;
      const card = stepRefs.current[target];
      if (!track || !card) return;
      track.scrollTo({
        left: card.offsetLeft - (track.clientWidth - card.offsetWidth) / 2,
        behavior: scrollBehaviour(),
      });
    },
    [total],
  );

  function onCarouselKeyDown(event: KeyboardEvent<HTMLOListElement>) {
    if (!isMobile) return;
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    goTo(indexRef.current + (event.key === "ArrowRight" ? 1 : -1));
  }

  const activeStep = HOW_STEPS[activeIndex];

  return (
    <>
      <Reveal className={styles.header}>
        <p className="eyebrow">How it works</p>
        <h2 className={`h2-display ${styles.title}`}>
          From inspection to completed report in 4 simple steps.
        </h2>
        <p className={`body-lg ${styles.lede}`}>
          Tenify guides you through what to inspect, room by room, then turns it into a
          ready-to-share professional report. Simple.
        </p>
      </Reveal>

      <div className={styles.carouselWrap}>
        <ol
          ref={trackRef}
          className={styles.steps}
          onKeyDown={onCarouselKeyDown}
          {...(isMobile
            ? { role: "region", "aria-label": "How it works, four steps", tabIndex: 0 }
            : {})}
        >
          {HOW_STEPS.map((step, index) => (
            <li
              key={step.id}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              data-index={index}
              className={styles.step}
            >
              <StepPanel step={step} active={activeSteps.has(index)} cycle={cycles[index] ?? 0} />
              <div className={styles.stepText}>
                <p className={styles.stepLabel}>
                  Step {index + 1} of {total} · {step.label}
                </p>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <ul className={styles.bullets}>
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className={styles.bullet}>
                      <span className={styles.checkBadge}>
                        <CheckIcon />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                {index === total - 1 ? <div className={styles.stepCta}>{stepFourCta}</div> : null}
              </div>
            </li>
          ))}
        </ol>

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          aria-label="Previous step"
          data-hidden={activeIndex === 0 || undefined}
          tabIndex={activeIndex === 0 ? -1 : undefined}
          onClick={() => goTo(activeIndex - 1)}
        >
          <ChevronLeft />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          aria-label="Next step"
          data-hidden={activeIndex === total - 1 || undefined}
          tabIndex={activeIndex === total - 1 ? -1 : undefined}
          onClick={() => goTo(activeIndex + 1)}
        >
          <ChevronRight />
        </button>
      </div>

      <div className={styles.controls}>
        <div className={styles.dots}>
          {HOW_STEPS.map((step, index) => (
            <button
              key={step.id}
              type="button"
              aria-label={`Go to step ${index + 1}: ${step.title}`}
              aria-current={index === activeIndex ? "step" : undefined}
              onClick={() => goTo(index)}
              className={styles.dot}
            >
              <span />
            </button>
          ))}
        </div>
        <p className={styles.counter}>
          Step <b>{activeIndex + 1}</b> of {total}
          {activeIndex < total - 1 ? " · swipe" : ""}
        </p>
      </div>

      <p className={styles.live} aria-live="polite">
        {activeStep ? `Step ${activeIndex + 1} of ${total}: ${activeStep.title}` : ""}
      </p>
    </>
  );
}
