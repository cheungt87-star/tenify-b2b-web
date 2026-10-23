import type { ReactNode } from "react";
import { PhoneScreen } from "./phone-screen";
import type { HowStep, StepPanelTone } from "./steps";
import styles from "./how-it-works.module.css";

const PANEL_CLASS: Record<StepPanelTone, string> = {
  "brand-soft": styles.panelSoft,
  brand: styles.panelBrand,
  navy: styles.panelNavy,
  warm: styles.panelWarm,
};

/**
 * Device frame only: bezel, dynamic island and status bar around whatever
 * screen is passed in. Decorative — the step text beside it carries the
 * meaning, so the whole phone is hidden from assistive technology.
 */
export function PhoneFrame({
  showStatusBar,
  children,
}: {
  showStatusBar: boolean;
  children: ReactNode;
}) {
  return (
    <div className={styles.phoneBox} aria-hidden="true">
      <div className={styles.phone}>
        <div className={styles.glass} data-status={showStatusBar ? undefined : "hidden"}>
          <div className={styles.statusBar} aria-hidden="true">
            <span className={styles.time}>9:41</span>
            <span className={styles.signal}>
              <i style={{ height: 4 }} />
              <i style={{ height: 7 }} />
              <i style={{ height: 10 }} />
            </span>
          </div>
          <span className={styles.island} />
          {children}
        </div>
      </div>
    </div>
  );
}

/** Rounded colour panel holding a phone cropped by the panel's bottom edge. */
export function StepPanel({
  step,
  active,
  cycle,
}: {
  step: HowStep;
  active: boolean;
  cycle: number;
}) {
  return (
    <div className={`${styles.panel} ${PANEL_CLASS[step.panel]}`}>
      <PhoneFrame showStatusBar={step.media.type === "component"}>
        <PhoneScreen
          media={step.media}
          placeholder={step.placeholder}
          active={active}
          cycle={cycle}
          loopMs={step.loopMs}
        />
      </PhoneFrame>
    </div>
  );
}
