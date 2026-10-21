import type { CSSProperties } from "react";
import { BackIcon, CheckIcon } from "./icons";
import ui from "./screen.module.css";
import styles from "./step-screens.module.css";

export function StepFourScreen() {
  return (
    <div
      className={ui.root}
      role="img"
      aria-label="Tenify report ready: a seven page property condition report PDF is saved to the device and shared, delivered on WhatsApp"
    >
      <div className={ui.nav}>
        <BackIcon />
        Your report
      </div>
      <div className={`${styles.readyCard} ${ui.enter}`} style={{ "--i": 0 } as CSSProperties}>
        <span className={styles.readyTick}>
          <CheckIcon />
        </span>
        Your report is ready.
      </div>
      <div className={`${ui.field} ${ui.enter}`} style={{ "--i": 1 } as CSSProperties}>
        <b>Property condition report</b>
        <span className={styles.pdfMeta}>7 pages · PDF</span>
      </div>
      <div className={ui.enter} style={{ "--i": 2 } as CSSProperties}>
        <div className={styles.downloadSwap}>
          <span className={styles.downloadFirst}>Download</span>
          <span className={styles.downloadSaved}>
            Saved to device
            <CheckIcon />
          </span>
        </div>
      </div>
      <div className={`${styles.waBox} ${ui.enter}`} style={{ "--i": 7 } as CSSProperties}>
        <p className={ui.label} style={{ marginBottom: 6 }}>
          To · James Whitfield
        </p>
        <div className={styles.waBubble}>
          <b>Move-in condition report</b>
          <span>PDF · 7 pages</span>
        </div>
        <p className={styles.delivered}>
          Delivered
          <CheckIcon />
          <CheckIcon />
        </p>
      </div>
    </div>
  );
}
