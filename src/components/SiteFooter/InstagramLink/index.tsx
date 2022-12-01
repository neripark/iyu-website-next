import Image from "next/image";
import styles from "./style.module.scss";

export const InstagramLink: React.FC = () => (
  <div className={styles["instagram"]}>
    <a
      className={styles["link"]}
      href="https://www.instagram.com/iyu_musictokyo/"
    >
      <Image
        className={styles["icon"]}
        src="/assets/images/instagram_icon.svg"
        alt="iyu instagram account"
        width={30}
        height={30}
      />
    </a>
  </div>
);
