import Image from "next/image";
import styles from "./style.module.scss";

export const TwitterLink: React.FC = () => (
  <div className={styles["twitter"]}>
    <a className={styles["link"]} href="https://twitter.com/iyu_band">
      <Image
        alt="iyu twitter"
        className={styles["icon"]}
        height={54}
        src="/assets/images/Twitter_Logo_WhiteOnImage.svg"
        width={54}
      />
    </a>
  </div>
);
