import styles from "../../hero-demo.module.css";

type Props = {
  active: boolean;
};

export function ReportSummaryScene({ active }: Props) {
  return (
    <div
      className={`${styles.rep}${active ? ` ${styles.repOn}` : ""}`}
      aria-hidden={!active}
    >
      <div className={`${styles.hd} ${styles.hdSm}`}>
        <div className={styles.barTop}>
          <span>PROPERTY CONDITION REPORT</span>
          <span>Summary</span>
        </div>
        <h4 className={styles.hdTitle}>Executive summary</h4>
      </div>
      <div className={styles.tiles2}>
        <div>
          <b>3</b>
          <span>Rooms</span>
        </div>
        <div>
          <b>14 · 16</b>
          <span>Fix · Furn</span>
        </div>
        <div>
          <b className={styles.tilesRd}>0</b>
          <span>Action</span>
        </div>
        <div>
          <b className={styles.tilesAm}>1</b>
          <span>Review</span>
        </div>
      </div>
      <div className={styles.sh}>Inspection record</div>
      <table className={styles.tb}>
        <thead>
          <tr>
            <th>ROOM</th>
            <th>FIX</th>
            <th>FURN</th>
            <th>PHOTOS</th>
            <th>REVIEW</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Living room</td>
            <td>5</td>
            <td>4</td>
            <td>9</td>
            <td className={styles.tbAm}>1</td>
          </tr>
          <tr>
            <td>Kitchen</td>
            <td>6</td>
            <td>7</td>
            <td>13</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Bedroom</td>
            <td>3</td>
            <td>5</td>
            <td>8</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
