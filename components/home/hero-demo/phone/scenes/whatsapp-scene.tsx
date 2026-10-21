import styles from "../../hero-demo.module.css";
import type { HeroTimelineState } from "../../use-hero-timeline";

type Props = {
  active: boolean;
  state: HeroTimelineState;
};

export function WhatsappScene({ active, state }: Props) {
  return (
    <div
      className={`${styles.wa}${active ? ` ${styles.waOn}` : ""}`}
      aria-hidden={!active}
    >
      <div className={styles.wh}>
        <div className={styles.av}>L</div>
        <div>
          Landlord
          <small>online</small>
        </div>
      </div>
      <div className={`${styles.bub}${state.bubOn ? ` ${styles.bubOn}` : ""}`}>
        <div className={styles.doc}>
          <i className={styles.docIcon}>PDF</i>
          <div>
            <b>Property condition report</b>
            <span>7 pages · PDF</span>
          </div>
        </div>
        <div className={styles.bubMsg}>Move-in condition report attached</div>
        <div className={styles.bubTm}>
          now{" "}
          <span
            className={`${styles.tk}${state.ticksRead ? ` ${styles.tkRd}` : ""}`}
          >
            ✓✓
          </span>
        </div>
      </div>
    </div>
  );
}
