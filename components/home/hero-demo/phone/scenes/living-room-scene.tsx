import styles from "../../hero-demo.module.css";
import type { HeroTimelineState } from "../../use-hero-timeline";

type Props = {
  active: boolean;
  state: HeroTimelineState;
};

export function LivingRoomScene({ active, state }: Props) {
  const [i1, i2, i3, i4] = state.items;

  return (
    <div
      className={`${styles.rep}${active ? ` ${styles.repOn}` : ""}`}
      aria-hidden={!active}
    >
      <div className={`${styles.hd} ${styles.hdSm}`}>
        <div className={styles.barTop}>
          <span>LIVING ROOM</span>
          <span>Page 3</span>
        </div>
        <h4 className={styles.hdTitle}>Living room</h4>
      </div>
      <div className={styles.rooms}>
        <span className={styles.roomsOn}>Living room</span>
        <span>Kitchen</span>
        <span>Bedroom</span>
      </div>
      <div className={styles.scrollWrap}>
        <div
          className={`${styles.scroll}${state.scrollUp ? ` ${styles.scrollUp}` : ""}`}
        >
          <div
            className={`${styles.it} ${styles.itOk}${i1 ? ` ${styles.itOn}` : ""}`}
          >
            <div className={styles.itBn}>No action needed</div>
            <div className={styles.itBd}>
              <div className={styles.itTx}>
                <h5>
                  Sofa <span className={styles.rt}>4</span> Very good
                </h5>
                <p>
                  Light creasing on the seat cushions. No stains or tears.
                </p>
              </div>
              <div
                className={styles.itIm}
                style={{
                  backgroundImage: "url(/landing/hero-demo/photo-sofa.webp)",
                }}
              />
            </div>
          </div>

          <div
            className={`${styles.it} ${styles.itRv}${i2 ? ` ${styles.itOn}` : ""}`}
          >
            <div className={styles.itBn}>Review needed</div>
            <div className={styles.itBd}>
              <div className={styles.itTx}>
                <h5>
                  Door{" "}
                  <span className={`${styles.rt} ${styles.rtFair}`}>!</span>
                </h5>
                <p>
                  <b>Functions:</b> Yes
                  <br />
                  <b>Damage:</b> Scuffs or marks
                </p>
                <p>Scuff marks below the handle.</p>
              </div>
              <div
                className={styles.itIm}
                style={{
                  backgroundImage: "url(/landing/hero-demo/photo-door.webp)",
                }}
              />
            </div>
          </div>

          <div
            className={`${styles.it} ${styles.itOk}${i3 ? ` ${styles.itOn}` : ""}`}
          >
            <div className={styles.itBn}>No action needed</div>
            <div className={styles.itBd}>
              <div className={styles.itTx}>
                <h5>Floor</h5>
                <p>
                  <b>Functions:</b> Yes
                  <br />
                  <b>Damage:</b> None
                </p>
              </div>
              <div
                className={styles.itIm}
                style={{
                  backgroundImage: "url(/landing/hero-demo/photo-floor.webp)",
                }}
              />
            </div>
          </div>

          <div
            className={`${styles.it} ${styles.itOk}${i4 ? ` ${styles.itOn}` : ""}`}
          >
            <div className={styles.itBn}>No action needed</div>
            <div className={styles.itBd}>
              <div className={styles.itTx}>
                <h5>Windows</h5>
                <p>
                  <b>Functions:</b> Yes
                  <br />
                  <b>Damage:</b> None
                </p>
              </div>
              <div
                className={styles.itIm}
                style={{
                  backgroundImage: "url(/landing/hero-demo/photo-sofa.webp)",
                  backgroundPosition: "left",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
