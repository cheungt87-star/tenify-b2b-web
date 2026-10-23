import styles from "../../hero-demo.module.css";
import type { HeroTimelineState } from "../../use-hero-timeline";

type Props = {
  active: boolean;
  state: HeroTimelineState;
};

export function CameraScene({ active, state }: Props) {
  return (
    <div
      className={`${styles.scene} ${styles.sceneFlush}${active ? ` ${styles.sceneOn}` : ""}`}
      aria-hidden={!active}
    >
      <div
        className={`${styles.cam2}${state.camPan ? ` ${styles.cam2Pan}` : ""}`}
      />
      <div className={styles.gbn}>Check the handle area</div>
      <div
        className={`${styles.ring}${state.ringOn ? ` ${styles.ringOn}` : ""}`}
      />
      <div
        className={`${styles.rlab}${state.ringOn ? ` ${styles.rlabOn}` : ""}`}
      >
        Scuff mark
      </div>
      <div
        className={`${styles.shutter}${state.shutterPress ? ` ${styles.shutterPress}` : ""}`}
      />
      <div
        className={`${styles.thumb}${state.thumbIn ? ` ${styles.thumbIn}` : ""}`}
      />
      <div
        key={state.flashGo ? "flash-on" : "flash-off"}
        className={`${styles.flash}${state.flashGo ? ` ${styles.flashGo}` : ""}`}
      />
    </div>
  );
}
