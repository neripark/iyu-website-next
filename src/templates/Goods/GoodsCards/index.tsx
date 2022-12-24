import { Card } from "./Card";
import { goodsData } from "./goodsData";
import styles from "./style.module.scss";

export const GoodsCards: React.FC = () => {
  return (
    <ul className={styles["root"]}>
      {goodsData.map((element) => (
        <Card {...element} />
      ))}
    </ul>
  );
};
