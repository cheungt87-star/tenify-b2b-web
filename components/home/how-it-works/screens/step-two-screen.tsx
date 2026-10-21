import type { CSSProperties } from "react";
import { BackIcon, CameraIcon, CheckIcon } from "./icons";
import ui from "./screen.module.css";
import styles from "./step-screens.module.css";

const ROOMS = [
  "Living room",
  "Kitchen",
  "Bathroom",
  "Bedroom 2",
  "Balcony",
  "Master bedroom",
] as const;

export function StepTwoScreen() {
  return (
    <div
      className={ui.root}
      role="img"
      aria-label="Tenify inspecting the living room: a note is typed, a photo is added and rooms are ticked off one by one"
    >
      <div className={ui.nav}>
        <BackIcon />
        Living room
      </div>
      <div className={`${ui.meta} ${ui.enter}`} style={{ "--i": 0 } as CSSProperties}>
        <span>Living room</span>
        <span>1 OF 6</span>
      </div>
      <div className={`${ui.progress} ${ui.enter}`} style={{ "--i": 0 } as CSSProperties}>
        <i className={styles.progressFill} />
      </div>
      <p className={`${ui.label} ${ui.enter}`} style={{ "--i": 1 } as CSSProperties}>
        Notes
      </p>
      <div className={`${ui.field} ${ui.enter}`} style={{ "--i": 1 } as CSSProperties}>
        <span className={styles.typing}>Marks on wall by sofa</span>
        <i className={styles.caret} />
      </div>
      <div className={`${styles.photoRow} ${ui.enter}`} style={{ "--i": 7 } as CSSProperties}>
        <span className={styles.photoThumb}>
          <CameraIcon />
        </span>
        Photo added
      </div>
      <div className={`${styles.roomList} ${ui.enter}`} style={{ "--i": 8 } as CSSProperties}>
        {ROOMS.map((room, index) => (
          <div key={room} className={styles.roomRow}>
            <span>{room}</span>
            <span
              className={styles.roomCheck}
              style={{ "--t": `${2.6 + index * 0.8}s` } as CSSProperties}
            >
              <CheckIcon />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
