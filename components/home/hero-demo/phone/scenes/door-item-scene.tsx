import styles from "../../hero-demo.module.css";
import type { HeroTimelineState } from "../../use-hero-timeline";

type Props = {
  active: boolean;
  state: HeroTimelineState;
};

export function DoorItemScene({ active, state }: Props) {
  return (
    <div
      className={`${styles.scene}${active ? ` ${styles.sceneOn}` : ""}`}
      aria-hidden={!active}
    >
      <div className={styles.gTop}>
        <span>Living room</span>
        <span>Item 3 of 9</span>
      </div>
      <div className={styles.gName}>Door</div>
      <div className={styles.gSub}>Fixture</div>
      <div className={styles.guide}>✨ Tenify: check the handle area</div>
      <div className={styles.q}>
        <span className={styles.qLabel}>Functions as expected?</span>
        <div className={styles.seg}>
          <span
            className={`${styles.segBtn}${state.q1 === "y" ? ` ${styles.segYes}` : ""}`}
          >
            Yes
          </span>
          <span
            className={`${styles.segBtn}${state.q1 === "n" ? ` ${styles.segNo}` : ""}`}
          >
            No
          </span>
        </div>
      </div>
      <div className={styles.q}>
        <span className={styles.qLabel}>Free of visible damage?</span>
        <div className={styles.seg}>
          <span
            className={`${styles.segBtn}${state.q2 === "y" ? ` ${styles.segYes}` : ""}`}
          >
            Yes
          </span>
          <span
            className={`${styles.segBtn}${state.q2 === "n" ? ` ${styles.segNo}` : ""}`}
          >
            No
          </span>
        </div>
      </div>
      <div
        className={`${styles.chips}${state.chipsVisible ? ` ${styles.chipsOn}` : ""}`}
      >
        <span
          className={`${styles.chip}${state.chipSelected ? ` ${styles.chipSel}` : ""}`}
        >
          Scuffs or marks
        </span>
        <span className={styles.chip}>Chipped</span>
        <span className={styles.chip}>Cracked</span>
      </div>
    </div>
  );
}
