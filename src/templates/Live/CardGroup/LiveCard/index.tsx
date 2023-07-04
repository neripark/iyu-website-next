import { LabeledLive } from "@/types";
import styles from "./style.module.scss";

interface Props extends LabeledLive {}

export const LiveCard: React.FC<Props> = (props) => (
  // todo: 各項目が undefined の場合の表示を実装する
  <li className={styles["live-card"]}>
    <div className={styles["date"]}>
      <p className={styles["ymd"]}>{props.date}</p>
    </div>
    <div className={styles["detail"]}>
      <p className={styles["title"]}>{props.title}</p>
      <p className={styles["place"]}>@{props.place}</p>
      <p className={styles["time"]}>
        open {props.timeOpen ? props.timeOpen : "未定"} / start{" "}
        {props.timeStart ? props.timeStart : "未定"}
      </p>
      {props.timeIyu && (
        <p className={styles["iyu-time"]}>
          ※iyuの出演は{props.timeIyu}頃の予定です。
        </p>
      )}
      <p className={styles["ticket"]}>{props.ticket}</p>
      <p className={styles["with"]}>
        w) {props.with ? props.with.join(" / ") : "未定"}
      </p>
    </div>
  </li>
);
