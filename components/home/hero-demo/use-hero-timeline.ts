"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type SceneId =
  | "s1"
  | "s2"
  | "s3"
  | "s6"
  | "s4"
  | "s5"
  | "s7"
  | "s8";

export type NotifIcon = "amber" | "camera" | "wa";

export type HeroNotif = {
  id: number;
  icon: NotifIcon;
  iconLabel: string;
  title: string;
  body: string;
  visible: boolean;
};

export type HeroTimelineState = {
  scene: SceneId;
  q1: "" | "y" | "n";
  q2: "" | "y" | "n";
  chipsVisible: boolean;
  chipSelected: boolean;
  camPan: boolean;
  ringOn: boolean;
  shutterPress: boolean;
  flashGo: boolean;
  thumbIn: boolean;
  barFill: boolean;
  btnvPress: boolean;
  shareVisible: boolean;
  sharePulse: number;
  items: [boolean, boolean, boolean, boolean];
  scrollUp: boolean;
  bubOn: boolean;
  ticksRead: boolean;
  notifs: HeroNotif[];
};

const INITIAL: HeroTimelineState = {
  scene: "s7",
  q1: "",
  q2: "",
  chipsVisible: false,
  chipSelected: false,
  camPan: false,
  ringOn: false,
  shutterPress: false,
  flashGo: false,
  thumbIn: false,
  barFill: false,
  btnvPress: false,
  shareVisible: false,
  sharePulse: 0,
  items: [false, false, false, false],
  scrollUp: false,
  bubOn: false,
  ticksRead: false,
  notifs: [],
};

const REPORT_SCENES: SceneId[] = ["s4", "s5", "s7"];

function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useHeroTimeline(rootRef: React.RefObject<HTMLElement | null>) {
  const [state, setState] = useState<HeroTimelineState>(INITIAL);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const notifId = useRef(0);
  const running = useRef(false);
  const reduceRef = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const at = useCallback((ms: number, fn: () => void) => {
    timers.current.push(setTimeout(fn, ms));
  }, []);

  const pushNotif = useCallback(
    (
      icon: NotifIcon,
      iconLabel: string,
      title: string,
      body: string,
      hold = 2600,
    ) => {
      const id = ++notifId.current;
      setState((s) => ({
        ...s,
        notifs: [
          ...s.notifs,
          { id, icon, iconLabel, title, body, visible: false },
        ],
      }));
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setState((s) => ({
            ...s,
            notifs: s.notifs.map((n) =>
              n.id === id ? { ...n, visible: true } : n,
            ),
          }));
        });
      });
      at(hold, () => {
        setState((s) => ({
          ...s,
          notifs: s.notifs.map((n) =>
            n.id === id ? { ...n, visible: false } : n,
          ),
        }));
        at(450, () => {
          setState((s) => ({
            ...s,
            notifs: s.notifs.filter((n) => n.id !== id),
          }));
        });
      });
    },
    [at],
  );

  const setScene = useCallback((scene: SceneId) => {
    setState((s) => ({
      ...s,
      scene,
      shareVisible: REPORT_SCENES.includes(scene),
    }));
  }, []);

  const hardReset = useCallback(() => {
    clearTimers();
    setState({
      ...INITIAL,
      scene: "s1",
      notifs: [],
      shareVisible: false,
      sharePulse: 0,
      flashGo: false,
    });
  }, [clearTimers]);

  const roomPage = useCallback(
    (t0: number) => {
      at(t0, () => setScene("s7"));
      at(t0 + 300, () =>
        setState((s) => ({ ...s, items: [true, false, false, false] })),
      );
      at(t0 + 900, () => {
        setState((s) => ({ ...s, items: [true, true, false, false] }));
        pushNotif(
          "amber",
          "!",
          "Flagged for review",
          "Door: scuff marks, with photo",
          2300,
        );
      });
      at(t0 + 1500, () =>
        setState((s) => ({ ...s, items: [true, true, true, false] })),
      );
      at(t0 + 2000, () =>
        setState((s) => ({ ...s, items: [true, true, true, true] })),
      );
      at(t0 + 2400, () => setState((s) => ({ ...s, scrollUp: true })));
    },
    [at, pushNotif, setScene],
  );

  const process = useCallback(() => {
    hardReset();
    setScene("s1");

    at(500, () => setState((s) => ({ ...s, q1: "y" })));
    at(1100, () =>
      setState((s) => ({ ...s, q2: "n", chipsVisible: true })),
    );
    at(1700, () => {
      setState((s) => ({ ...s, chipSelected: true }));
      pushNotif(
        "amber",
        "!",
        "Damage noted on Door",
        "Add a photo to back it up",
        2200,
      );
    });
    at(3000, () => setScene("s2"));
    at(3200, () => setState((s) => ({ ...s, camPan: true })));
    at(4300, () => setState((s) => ({ ...s, ringOn: true })));
    at(5500, () => setState((s) => ({ ...s, shutterPress: true })));
    at(5650, () => {
      setState((s) => ({
        ...s,
        shutterPress: false,
        flashGo: false,
      }));
      // Retrigger flash animation
      requestAnimationFrame(() => {
        setState((s) => ({
          ...s,
          flashGo: true,
          thumbIn: true,
        }));
      });
      pushNotif("camera", "📷", "Scuff logged", "Timestamped, with photo", 2300);
    });
    at(6900, () => {
      setScene("s3");
      setState((s) => ({ ...s, barFill: false }));
      requestAnimationFrame(() => {
        setState((s) => ({ ...s, barFill: true }));
      });
    });
    at(8300, () => setScene("s6"));
    at(9100, () => setState((s) => ({ ...s, btnvPress: true })));
    at(9400, () => {
      setScene("s4");
      pushNotif("wa", "✓", "Report ready", "Itemised, with photos", 2400);
      setState((s) => ({ ...s, sharePulse: s.sharePulse + 1 }));
    });
    at(10300, () => setScene("s5"));
    roomPage(12300);
    at(17000, () =>
      setState((s) => ({ ...s, sharePulse: s.sharePulse + 1 })),
    );
    at(17900, () => setScene("s8"));
    at(18500, () => setState((s) => ({ ...s, bubOn: true })));
    at(19600, () => {
      setState((s) => ({ ...s, ticksRead: true }));
      pushNotif(
        "wa",
        "✓",
        "Sent",
        "Report delivered to your landlord",
        2200,
      );
    });
    at(22200, () => {
      if (running.current) process();
    });
  }, [at, hardReset, pushNotif, roomPage, setScene]);

  const first = useCallback(() => {
    clearTimers();
    setState({
      ...INITIAL,
      scene: "s7",
      items: [false, false, false, false],
      notifs: [],
      shareVisible: true,
    });
    roomPage(100);
    at(7000, () => {
      if (running.current) process();
    });
  }, [at, clearTimers, process, roomPage]);

  const showStatic = useCallback(() => {
    clearTimers();
    setState({
      ...INITIAL,
      scene: "s7",
      items: [true, true, true, true],
      shareVisible: true,
      notifs: [],
    });
  }, [clearTimers]);

  const start = useCallback(() => {
    if (reduceRef.current) {
      showStatic();
      return;
    }
    running.current = true;
    first();
  }, [first, showStatic]);

  const stop = useCallback(() => {
    running.current = false;
    clearTimers();
    setState((s) => ({ ...s, notifs: [] }));
  }, [clearTimers]);

  useEffect(() => {
    reduceRef.current = prefersReducedMotion();
    const root = rootRef.current;
    if (!root) return;

    let visible = true;
    let onScreen = true;

    const sync = () => {
      const shouldRun = visible && onScreen;
      if (shouldRun && !running.current) {
        start();
      } else if (!shouldRun && running.current) {
        stop();
        if (reduceRef.current) showStatic();
      }
    };

    if (reduceRef.current) {
      showStatic();
    } else {
      start();
    }

    const onVis = () => {
      visible = !document.hidden;
      if (visible && !reduceRef.current && onScreen) {
        // Restart cleanly when tab becomes visible again
        stop();
        start();
      } else {
        sync();
      }
    };
    document.addEventListener("visibilitychange", onVis);

    const io = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry?.isIntersecting ?? true;
        sync();
      },
      { threshold: 0.15 },
    );
    io.observe(root);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMq = () => {
      reduceRef.current = mq.matches;
      stop();
      if (mq.matches) showStatic();
      else if (visible && onScreen) start();
    };
    mq.addEventListener("change", onMq);

    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
      mq.removeEventListener("change", onMq);
    };
  }, [rootRef, showStatic, start, stop]);

  return state;
}
