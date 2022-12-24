import { Card } from "./Card";
import styles from "./style.module.scss";

interface Props {
  className?: string;
}

export const GoodsCards: React.FC<Props> = (props) => {
  return (
    <ul
      className={`${styles["root"]} ${props.className ? props.className : ""}`}
    >
      <Card className={styles["card"]} />
    </ul>
  );
};
