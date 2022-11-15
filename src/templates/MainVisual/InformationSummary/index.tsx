import styles from "./style.module.scss";
// todo: 共通化してモック化する
import { dummyLives } from "src/templates/Live/CardGroup/dummyLives";

export const InformationSummary: React.FC = () => {
  const liveDetails = dummyLives;

  return (
    <div className={styles["information-summary"]}>
      <div className={styles["wrap"]}>
        <section className={styles["info-unit"]}>
          <h3 className={styles["head"]}>Live Schedule</h3>
          {liveDetails.length > 0 ? (
            liveDetails.map((element) => (
              <p className={styles["lead"]}>
                {/* {{ $dayjs(live.date).format('YYYY/M/D (ddd)') }}<br />{{ live.place }} */}
                {/* todo: フォーマットする */}
                {element.date} <br />
                {element.place}
              </p>
            ))
          ) : (
            <p className={styles["lead"]}>
              現在予定しているライブはありません。
            </p>
          )}
        </section>
      </div>
    </div>
  );
};
