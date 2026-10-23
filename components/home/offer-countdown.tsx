"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./offer-countdown.module.css";
import { DirhamSign } from "@/components/home/dirham-sign";

/** Free period ends 31 Dec 2026, 23:59:59 UAE time (UTC+4). */
const DEADLINE = Date.parse("2026-12-31T23:59:59+04:00");

const UNITS = ["Days", "Hours", "Mins", "Secs"] as const;
/** Highest value each reel shows while spinning. */
const RANGE = [99, 59, 59, 59] as const;
/** When each reel stops, in ms after the intro starts: days, hours, mins, secs. */
const LOCK_MS = [1300, 1950, 2600, 3250] as const;
const STEP_MS = 45;

const pad = (n: number) => String(n).padStart(2, "0");

function split(ms: number): number[] {
  let t = Math.floor(ms / 1000);
  const d = Math.floor(t / 86400);
  t -= d * 86400;
  const h = Math.floor(t / 3600);
  t -= h * 3600;
  const m = Math.floor(t / 60);
  return [d, h, m, t - m * 60];
}

function spinValue(i: number, elapsed: number): number {
  const size = RANGE[i] + 1;
  return (((RANGE[i] - Math.floor(elapsed / STEP_MS) - i * 17) % size) + size) % size;
}

const same = <T,>(a: readonly T[], b: readonly T[]) => a.length === b.length && a.every((v, i) => v === b[i]);

type OfferCountdownProps = {
  /** Download button (server component), passed in so this file can stay client-only. */
  cta: ReactNode;
};

export function OfferCountdown({ cta }: OfferCountdownProps) {
  const ref = useRef<HTMLElement>(null);
  const [values, setValues] = useState<number[] | null>(null);
  const [locked, setLocked] = useState<boolean[]>([false, false, false, false]);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let interval = 0;
    let t0 = 0;
    let started = false;

    const live = () => {
      const ms = DEADLINE - Date.now();
      if (ms <= 0) {
        window.clearInterval(interval);
        setEnded(true);
        return;
      }
      const next = split(ms);
      setValues((prev) => (prev && same(prev, next) ? prev : next));
    };

    const goLive = () => {
      setLocked([true, true, true, true]);
      live();
      interval = window.setInterval(live, 1000);
    };

    const frame = (now: number) => {
      const ms = DEADLINE - Date.now();
      if (ms <= 0) {
        setEnded(true);
        return;
      }
      const real = split(ms);
      const elapsed = now - t0;
      const nextLocked = LOCK_MS.map((l) => elapsed >= l);
      const next = real.map((v, i) => (nextLocked[i] ? v : spinValue(i, elapsed)));
      setLocked((prev) => (same(prev, nextLocked) ? prev : nextLocked));
      setValues((prev) => (prev && same(prev, next) ? prev : next));
      if (nextLocked.every(Boolean)) {
        interval = window.setInterval(live, 1000);
        return;
      }
      raf = requestAnimationFrame(frame);
    };

    const begin = () => {
      if (started) return;
      started = true;
      if (reduce) {
        goLive();
        return;
      }
      t0 = performance.now();
      raf = requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          begin();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="pricing"
      ref={ref}
      aria-labelledby="offer-heading"
      className={`panel-lg mx-3 mt-3 bg-navy-900 text-true-white md:mx-auto md:mt-6 md:w-[calc(100%-3rem)] md:max-w-[1100px] ${styles.section}`}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col items-center px-5 py-14 text-center sm:px-10 md:px-14 md:py-20">
        <p className="inline-flex items-center gap-2 text-[13px] font-extrabold tracking-[0.14em] text-mint uppercase">
          <span className={styles.dot} aria-hidden="true" />
          {ended ? "Offer ended" : "Limited-time offer"}
        </p>

        <h2
          id="offer-heading"
          className={
            ended
              ? "mt-4 text-[clamp(34px,4.6vw,56px)] leading-[1.04] font-black tracking-[-0.025em] text-balance"
              : "mt-3.5 text-[clamp(24px,3vw,34px)] leading-[1.15] font-extrabold tracking-[-0.01em] text-balance"
          }
        >
          {ended ? "The free period has ended." : "Try Tenify free until the end of 2026."}
        </h2>

        {!ended && (
          <div
            role="timer"
            aria-label="Time left on the free offer. It ends 31 December 2026, 23:59 UAE time."
            className={styles.grid}
          >
            {UNITS.map((unit, i) => (
              <div key={unit} className={styles.cell}>
                <b
                  key={locked[i] ? `v${values?.[i]}` : "spin"}
                  aria-hidden="true"
                  className={`${styles.num} ${locked[i] ? styles.tick : styles.spin}`}
                >
                  {values ? pad(values[i]) : "--"}
                </b>
                <span className={styles.unit}>{unit}</span>
              </div>
            ))}
          </div>
        )}

        <p className={`text-[clamp(17px,2vw,20px)] font-bold ${ended ? "mt-3" : ""}`}>
          {ended ? "Reports are now " : "From 2027, every report is "}
          <span className="font-black text-mint">
            <DirhamSign className="mr-[0.2em]" />
            400
          </span>
          {ended ? " each." : "."}
        </p>
        <p className="mt-1.5 text-[15px] font-semibold text-white/65">
          {ended
            ? "Reports created during the free period stay unlocked."
            : "Reports you create before then stay unlocked."}
        </p>

        <div className="mt-8 flex w-full flex-col items-center gap-3">
          {cta}
          <p className="text-[14px] font-semibold text-white/60">
            Free to download. Tenify is on iPhone for now.
          </p>
        </div>
      </div>
    </section>
  );
}
