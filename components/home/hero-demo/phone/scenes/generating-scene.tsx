import styles from "../../hero-demo.module.css";
import type { HeroTimelineState } from "../../use-hero-timeline";

type Props = {
  active: boolean;
  state: HeroTimelineState;
};

export function GeneratingScene({ active, state }: Props) {
  return (
    <div
      className={`${styles.scene}${active ? ` ${styles.sceneOn}` : ""}`}
      aria-hidden={!active}
    >
      <div className={styles.gtitle}>Generating your report…</div>
      <div className={styles.track}>
        <i
          className={`${styles.bar}${state.barFill ? ` ${styles.barFill}` : ""}`}
        />
      </div>
      <div className={styles.hint}>Pulling in your ratings and photos</div>
    </div>
  );
}
