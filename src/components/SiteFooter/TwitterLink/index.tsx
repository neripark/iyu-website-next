import styles from "./style.module.scss";
import Image from "next/image";

export const TwitterLink: React.FC = () => (
  <div className={styles["twitter"]}>
    <a className={styles["link"]} href="https://twitter.com/iyu_band">
      <Image
        className={styles["icon"]}
        src="/assets/images/Twitter_Logo_WhiteOnImage.svg"
        alt="iyu twitter"
        width={54}
        height={54}
      />
    </a>
  </div>
);
