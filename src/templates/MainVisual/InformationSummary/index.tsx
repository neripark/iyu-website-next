import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";
import styles from "./style.module.scss";

export const InformationSummary: React.FC = () => {
  const { lives } = useContext(LiveInformationContext);

  return (
    <div className={styles["information-summary"]}>
      <div className={styles["wrap"]}>
        <section className={styles["info-unit"]}>
          <h3 className={styles["head"]}>Live Schedule</h3>
          {lives.length > 0 ? (
            lives.map((element) => (
              <p className={styles["lead"]} key={element.date}>
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
