import type { CSSProperties } from "react";
import { BackIcon, CheckIcon } from "./icons";
import ui from "./screen.module.css";
import styles from "./step-screens.module.css";

export function StepThreeScreen() {
  return (
    <div
      className={ui.root}
      role="img"
      aria-label="Tenify review screen: rooms are reviewed, the kitchen rating is edited to excellent, and landlord and tenant details are added"
    >
      <div className={ui.nav}>
        <BackIcon />
        Review report
      </div>
      <p className={`${ui.heading} ${ui.enter}`} style={{ "--i": 0 } as CSSProperties}>
        Review report
      </p>
      <p className={`${ui.label} ${ui.enter}`} style={{ "--i": 1 } as CSSProperties}>
        Rooms
      </p>
      <div className={`${styles.reviewRow} ${ui.enter}`} style={{ "--i": 2 } as CSSProperties}>
        <span>Living room</span>
        <span className={styles.rating}>Excellent</span>
      </div>
      <div
        className={`${styles.reviewRow} ${styles.kitchenRow} ${ui.enter}`}
        style={{ "--i": 3 } as CSSProperties}
      >
        <span>Kitchen</span>
        <span className={styles.editedTag}>Edited</span>
        <span className={styles.rating}>
          <span className={styles.swap}>
            <b className={styles.swapGood}>Good</b>
            <b className={styles.swapExcellent}>Excellent</b>
          </span>
        </span>
      </div>
      <div className={`${styles.reviewRow} ${ui.enter}`} style={{ "--i": 4 } as CSSProperties}>
        <span>Bathroom</span>
        <span className={styles.rating}>Good</span>
      </div>
      <p className={`${ui.label} ${ui.enter}`} style={{ "--i": 10 } as CSSProperties}>
        Parties
      </p>
      <div className={`${ui.field} ${ui.enter}`} style={{ "--i": 11 } as CSSProperties}>
        <span className={ui.label}>Landlord</span>
        James Whitfield
      </div>
      <div className={`${ui.field} ${ui.enter}`} style={{ "--i": 12 } as CSSProperties}>
        <span className={ui.label}>Tenant</span>
        Priya Nair
      </div>
      <div className={ui.enter} style={{ "--i": 13 } as CSSProperties}>
        <div className={styles.reviewButton}>
          Reviewed
          <CheckIcon />
        </div>
      </div>
    </div>
  );
}
