import type { CSSProperties } from "react";
import { BackIcon } from "./icons";
import ui from "./screen.module.css";
import styles from "./step-screens.module.css";

const TYPES = ["Apartment", "Villa", "Townhouse"] as const;

export function StepOneScreen() {
  return (
    <div
      className={ui.root}
      role="img"
      aria-label="Tenify new inspection setup: apartment type selected, two bedrooms, furnished on, ready to start"
    >
      <div className={ui.nav}>
        <BackIcon />
        New inspection
      </div>
      <p className={`${ui.heading} ${ui.enter}`} style={{ "--i": 0 } as CSSProperties}>
        New inspection
      </p>
      <p className={`${ui.label} ${ui.enter}`} style={{ "--i": 1 } as CSSProperties}>
        Property type
      </p>
      <div className={`${styles.chipsRow} ${ui.enter}`} style={{ "--i": 2 } as CSSProperties}>
        {TYPES.map((type) => (
          <span
            key={type}
            className={`${styles.typeChip} ${type === "Apartment" ? styles.typeChipSelected : ""}`}
          >
            {type}
          </span>
        ))}
      </div>
      <div
        className={`${ui.field} ${styles.rowCard} ${ui.enter}`}
        style={{ "--i": 3 } as CSSProperties}
      >
        <span>Bedrooms</span>
        <span className={styles.stepper}>
          <b className={styles.stepperFirst}>– 1 +</b>
          <b className={styles.stepperSecond}>– 2 +</b>
        </span>
      </div>
      <div
        className={`${ui.field} ${styles.rowCard} ${ui.enter}`}
        style={{ "--i": 4 } as CSSProperties}
      >
        <span>Furnished</span>
        <span className={styles.toggle}>
          <i />
        </span>
      </div>
      <div className={`${styles.summaryCard} ${ui.enter}`} style={{ "--i": 9 } as CSSProperties}>
        <b>Marina Gate 1</b>
        <span>Apartment · 2 bed · Furnished</span>
      </div>
      <div className={`${ui.button} ${ui.enter}`} style={{ "--i": 10 } as CSSProperties}>
        Start inspection
      </div>
    </div>
  );
}
