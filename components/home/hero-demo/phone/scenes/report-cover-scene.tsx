import styles from "../../hero-demo.module.css";

type Props = {
  active: boolean;
};

export function ReportCoverScene({ active }: Props) {
  return (
    <div
      className={`${styles.rep} ${styles.repCover}${active ? ` ${styles.repOn}` : ""}`}
      aria-hidden={!active}
    >
      <div className={`${styles.hd} ${styles.hdSm}`}>
        <div className={styles.barTop}>
          <span>PROPERTY CONDITION REPORT</span>
          <span>REPORT #5D1A3077</span>
        </div>
        <h4 className={styles.hdTitle}>Property condition report</h4>
      </div>
      <div className={styles.repSheet}>
        <div className={styles.card2}>
          <div className={styles.ch}>1 · Address and building details</div>
          <div className={styles.g2}>
            <div>
              <small>Address</small>
              <b>Unit 123</b>
              <u>Dubai</u>
            </div>
            <div>
              <small>Property type</small>
              <b>Apartment</b>
            </div>
            <div>
              <small>Bedrooms</small>
              <b>2</b>
            </div>
            <div>
              <small>Furnishing</small>
              <b>Furnished</b>
            </div>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.ch}>2 · Inspection date</div>
          <div className={styles.dt}>
            <b>17 October 2026</b>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.ch}>3 · Inspection by</div>
          <div className={styles.dt}>
            <b>Tenant</b>
          </div>
        </div>
      </div>
    </div>
  );
}
