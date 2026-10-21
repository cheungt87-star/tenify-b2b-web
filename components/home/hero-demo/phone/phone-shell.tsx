"use client";

import { useEffect, useRef } from "react";
import styles from "../hero-demo.module.css";
import { useHeroTimeline } from "../use-hero-timeline";
import { HeroNotifications } from "../notifications";
import { DoorItemScene } from "./scenes/door-item-scene";
import { CameraScene } from "./scenes/camera-scene";
import { GeneratingScene } from "./scenes/generating-scene";
import { ReportReadyScene } from "./scenes/report-ready-scene";
import { ReportCoverScene } from "./scenes/report-cover-scene";
import { ReportSummaryScene } from "./scenes/report-summary-scene";
import { LivingRoomScene } from "./scenes/living-room-scene";
import { WhatsappScene } from "./scenes/whatsapp-scene";

type Props = {
  heroRef: React.RefObject<HTMLElement | null>;
};

export function PhoneShell({ heroRef }: Props) {
  const state = useHeroTimeline(heroRef);
  const shareRef = useRef<HTMLDivElement>(null);

  // Retrigger share pulse animation when sharePulse increments
  useEffect(() => {
    const el = shareRef.current;
    if (!el || state.sharePulse === 0) return;
    el.classList.remove(styles.sharePulse);
    void el.offsetWidth;
    el.classList.add(styles.sharePulse);
  }, [state.sharePulse]);

  // Preload phone images after hero paint
  useEffect(() => {
    const urls = [
      "/landing/hero-demo/photo-cam-door.webp",
      "/landing/hero-demo/photo-door.webp",
      "/landing/hero-demo/photo-sofa.webp",
      "/landing/hero-demo/photo-floor.webp",
    ];
    const idle =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? window.requestIdleCallback
        : (cb: () => void) => setTimeout(cb, 200);
    const id = idle(() => {
      urls.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(id as number);
      } else {
        clearTimeout(id as ReturnType<typeof setTimeout>);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.phoneClip}>
        <div className={styles.phone} aria-hidden="true">
          <div className={styles.screen}>
            <DoorItemScene active={state.scene === "s1"} state={state} />
            <CameraScene active={state.scene === "s2"} state={state} />
            <GeneratingScene active={state.scene === "s3"} state={state} />
            <ReportReadyScene active={state.scene === "s6"} state={state} />
            <ReportCoverScene active={state.scene === "s4"} />
            <ReportSummaryScene active={state.scene === "s5"} />
            <LivingRoomScene active={state.scene === "s7"} state={state} />
            <WhatsappScene active={state.scene === "s8"} state={state} />
            <div
              ref={shareRef}
              className={`${styles.share}${state.shareVisible ? ` ${styles.shareOn}` : ""}`}
            >
              Share on WhatsApp
            </div>
          </div>
          <span className={styles.phoneHome} />
        </div>
      </div>
      <HeroNotifications notifs={state.notifs} />
    </>
  );
}
