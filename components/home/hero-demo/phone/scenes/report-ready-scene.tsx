import styles from "../../hero-demo.module.css";
import type { HeroTimelineState } from "../../use-hero-timeline";

type Props = {
  active: boolean;
  state: HeroTimelineState;
};

export function ReportReadyScene({ active, state }: Props) {
  return (
    <div
      className={`${styles.scene}${active ? ` ${styles.sceneOn}` : ""}`}
      aria-hidden={!active}
    >
      <div className={styles.readyLabel}>Inspection report</div>
      <div className={styles.gtitle} style={{ marginTop: 12 }}>
        Report ready
      </div>
      <div className={styles.badge}>✓ Ready for review</div>
      <div
        className={`${styles.btnv}${state.btnvPress ? ` ${styles.btnvPress}` : ""}`}
      >
        View report
      </div>
      <div className={styles.btno}>Edit inspection</div>
    </div>
  );
}
