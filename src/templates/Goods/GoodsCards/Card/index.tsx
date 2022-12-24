import Image from "next/image";
import { goodsData } from "./goodsData";
import styles from "./style.module.scss";

interface Props {
  className?: string;
}

export const Card: React.FC<Props> = (_props) => {
  const props = {
    ..._props,
    href: "",
  };

  return (
    <li className={`${props.className ? props.className : ""}`}>
      <a
        className={styles["anchor"]}
        href={goodsData[0].href}
        target="_black"
        rel="noreferrer"
      >
        <Image
          className={styles["image"]}
          src={goodsData[0].src}
          alt={goodsData[0].label}
          // todo: あとで値を確認する
          sizes="(max-width: 600px) 100%,
                  (max-width: 700px) 100vw - 60px,
                  640px"
        />
        <div className={styles["overlay"]}>
          <p className={styles["overlay-title"]}>{goodsData[0].label}</p>
          <p className={styles["overlay-price"]}>
            {`¥${goodsData[0].price.toLocaleString()}`}
          </p>
        </div>
      </a>
    </li>
  );
};
