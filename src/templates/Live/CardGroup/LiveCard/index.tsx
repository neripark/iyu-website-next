import styles from "./style.module.scss";

interface Props {
  date: string;
  title: string;
  place: string;
  timeOpen: string;
  timeStart: string;
  timeIyu?: string;
  ticket: string;
  with: string[];
}

export const LiveCard: React.FC<Props> = (props) => (
  <li className={styles["live-card"]}>
    <div className={styles["date"]}>
      <p className={styles["ymd"]}>
        {/* todo: 日付変換する */}
        {/* { $dayjs(props.date).format('YYYY/M/D (ddd)') } */}
        {props.date}
      </p>
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
