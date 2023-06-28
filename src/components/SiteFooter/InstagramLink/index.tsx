// import Image from "next/image";
import styles from "./style.module.scss";

export const InstagramLink: React.FC = () => (
  <div className={styles["instagram"]}>
    <a
      className={styles["link"]}
      href="https://www.instagram.com/iyu_musictokyo/"
    >
      <img
        alt="iyu instagram account"
        className={styles["icon"]}
        height={30}
        src="/assets/images/instagram_icon.svg"
        width={30}
      />
    </a>
  </div>
);
