import { LiveCard } from "./LiveCard";
import { dummyLives } from "./dummyLives";
import styles from "./style.module.scss";

export const CardGroup: React.FC = () => (
  // todo: contentful から取得するコードを書く
  <ul className={styles["live-cards"]}>
    {dummyLives.map((element, index) => (
      <LiveCard key={index} {...element} />
    ))}
  </ul>
);
