"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import styles from "./cost-visuals.module.css";

/* Decorative wireframe loops for the cost cards. Each loop only runs while its
   card is on screen and never runs under reduced motion (final state is shown). */

const REDUCED_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReduced(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReduced,
    () => window.matchMedia(REDUCED_QUERY).matches,
    () => false,
  );
}

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return [ref, inView] as const;
}

type Wait = (ms: number) => Promise<void>;

/** Repeats `body` while enabled. After cleanup, pending waits never resolve. */
function useLoop(enabled: boolean, body: (wait: Wait) => Promise<void>) {
  useEffect(() => {
    if (!enabled) return;
    let alive = true;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const wait: Wait = (ms) =>
      new Promise<void>((resolve) => {
        if (!alive) return;
        const timer = setTimeout(() => {
          timers.delete(timer);
          resolve();
        }, ms);
        timers.add(timer);
      });
    void (async () => {
      while (alive) await body(wait);
    })();
    return () => {
      alive = false;
      timers.forEach(clearTimeout);
    };
  }, [enabled, body]);
}

/* Effort */

const STEPS = [
  "Prepare the evidence",
  "Translate your case",
  "Submit on the portal",
  "Visit the Trustee centre",
  "Wait for a court date",
  "Attend the court hearing",
] as const;

export function EffortVisual() {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [lit, setLit] = useState(0);

  const run = useCallback(async (wait: Wait) => {
    setLit(0);
    await wait(800);
    for (let i = 1; i <= STEPS.length; i++) {
      setLit(i);
      await wait(1400);
    }
    await wait(2800);
  }, []);
  useLoop(inView && !reduced, run);

  const shown = reduced ? STEPS.length : lit;
  const progress = shown <= 1 ? 0 : (shown - 1) / (STEPS.length - 1);

  return (
    <div ref={ref} className={styles.viz} aria-hidden="true">
      <ol className={styles.tl} style={{ "--p": progress } as CSSProperties}>
        <span className={styles.fill} />
        {STEPS.map((step, i) => (
          <li key={step} className={`${styles.step} ${i < shown ? styles.stepOn : ""}`}>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

/* Time */

const DAYS = Array.from({ length: 30 }, (_, i) => i + 1);

export function TimeVisual() {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [crossed, setCrossed] = useState(0);
  const [night, setNight] = useState(false);
  const active = inView && !reduced;

  const run = useCallback(async (wait: Wait) => {
    setCrossed(0);
    await wait(900);
    for (let i = 1; i <= DAYS.length; i++) {
      setCrossed(i);
      await wait(260);
    }
    await wait(2800);
  }, []);
  useLoop(active, run);

  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setNight((n) => !n), 3000);
    return () => clearInterval(id);
  }, [active]);

  const shown = reduced ? DAYS.length : crossed;
  const isNight = !reduced && night;

  return (
    <div ref={ref} className={styles.viz} aria-hidden="true">
      <div className={styles.cal} data-night={isNight}>
        <div className={styles.calTop}>
          <span>{shown >= DAYS.length ? "Day 30+" : `Day ${shown}`}</span>
          <div className={styles.orb}>
            <svg className={styles.sun} viewBox="0 0 26 26">
              <circle cx="13" cy="13" r="5" />
              <path d="M13 2v3M13 21v3M2 13h3M21 13h3M5.2 5.2l2 2M18.8 18.8l2 2M5.2 20.8l2-2M18.8 7.2l2-2" />
            </svg>
            <svg className={styles.moon} viewBox="0 0 26 26">
              <path d="M19 17A8.5 8.5 0 0 1 10 4a8.5 8.5 0 1 0 9 13z" />
            </svg>
          </div>
        </div>
        <div className={styles.days}>
          {DAYS.map((d) => (
            <div key={d} className={`${styles.day} ${d <= shown ? styles.dayX : ""}`}>
              {d}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Money. Row amounts are animation weights only and are never shown.
   The visible total ends on "AED 500+", matching the sourced minimum filing fee. */

const TRANSACTIONS = [
  { name: "RDC filing fee", note: "Online portal", amount: 300 },
  { name: "Translation", note: "Legal translator", amount: 100 },
  { name: "Trustee centre", note: "Service charge", amount: 60 },
  { name: "Government fees", note: "Other charges", amount: 40 },
] as const;

const formatTotal = (n: number) => `−AED ${n.toLocaleString("en-US")}${n >= 500 ? "+" : ""}`;

export function MoneyVisual() {
  const reduced = usePrefersReducedMotion();
  const [ref, inView] = useInView<HTMLDivElement>();
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const run = useCallback(async (wait: Wait) => {
    setCount(0);
    setTotal(0);
    await wait(900);
    let sum = 0;
    for (let i = 1; i <= TRANSACTIONS.length; i++) {
      const from = sum;
      sum += TRANSACTIONS[i - 1].amount;
      setCount(i);
      for (let s = 1; s <= 14; s++) {
        setTotal(Math.round(from + ((sum - from) * s) / 14));
        await wait(35);
      }
      await wait(1100);
    }
    await wait(2800);
  }, []);
  useLoop(inView && !reduced, run);

  const shownCount = reduced ? TRANSACTIONS.length : count;
  const shownTotal = reduced ? TRANSACTIONS.reduce((s, t) => s + t.amount, 0) : total;
  const visible = TRANSACTIONS.slice(0, shownCount).slice(-4);

  return (
    <div ref={ref} className={styles.viz} aria-hidden="true">
      <div className={styles.phoneWrap}>
        <div className={styles.phone}>
          <div className={styles.phoneLabel}>Spent on your dispute</div>
          <div className={styles.phoneTotal}>{formatTotal(shownTotal)}</div>
          <div className={styles.rows}>
            {visible.map((t) => (
              <div key={t.name} className={styles.row}>
                <span>
                  {t.name}
                  <small>{t.note}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
