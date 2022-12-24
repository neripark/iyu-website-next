import { Heading } from "@/components/Heading";
import { anchorList } from "@/constants/anchorList";
import { GoodsCard } from "./GoodsCard";
import { goodsData } from "./goodsData";
import styles from "./style.module.scss";

export const Goods: React.FC = () => {
  return (
    <section className={styles["root"]} id={anchorList.goods.id}>
      {/* todo: Heading のテキスト色を確認する */}
      <Heading color="blue">{anchorList.goods.label}</Heading>
      <ul className={styles["card-group"]}>
        {goodsData.map((element) => (
          <GoodsCard {...element} />
        ))}
      </ul>
    </section>
  );
};
