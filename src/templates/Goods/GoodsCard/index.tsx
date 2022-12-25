import Image from "next/image";
import { ComponentProps } from "react";
import styles from "./style.module.scss";

interface Props {
  className?: string;
  src: ComponentProps<typeof Image>["src"];
  href: string;
  label: string;
  price: number;
}

export const GoodsCard: React.FC<Props> = (props) => {
  return (
    <li>
      <a
        className={styles["anchor"]}
        href={props.href}
        target="_black"
        rel="noreferrer"
      >
        <Image
          className={styles["image"]}
          src={props.src}
          alt={props.label}
          // todo: あとで値を確認する
          sizes="(max-width: 600px) 100%,
                  (max-width: 700px) 100vw - 60px,
                  640px"
        />
        <div className={styles["overlay"]}>
          <p className={styles["overlay-title"]}>{props.label}</p>
          <p className={styles["overlay-price"]}>
            <span className={styles["unit"]}>¥</span>
            <span>{props.price.toLocaleString()}</span>
          </p>
        </div>
      </a>
    </li>
  );
};
