import type { HeroNotif } from "./use-hero-timeline";
import styles from "./hero-demo.module.css";

type Props = {
  notifs: HeroNotif[];
};

export function HeroNotifications({ notifs }: Props) {
  return (
    <div className={styles.notifs} aria-hidden="true">
      {notifs.map((n) => (
        <div
          key={n.id}
          className={`${styles.notif}${n.visible ? ` ${styles.notifIn}` : ""}`}
        >
          <div
            className={`${styles.notifIc}${
              n.icon === "amber"
                ? ` ${styles.notifIcAmber}`
                : n.icon === "wa"
                  ? ` ${styles.notifIcWa}`
                  : ""
            }`}
          >
            {n.iconLabel}
          </div>
          <div>
            <b>{n.title}</b>
            <span>{n.body}</span>
          </div>
          <em>now</em>
        </div>
      ))}
    </div>
  );
}
