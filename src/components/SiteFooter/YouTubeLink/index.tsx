// import Image from "next/image";
import styles from "./style.module.scss";

export const YouTubeLink: React.FC = () => (
  <div className={styles["youtube"]}>
    <a
      className={styles["link"]}
      href="https://www.youtube.com/channel/UCOhjr68zt5bWJo8cLKs2YAw"
    >
      <img
        alt="iyu youtube channel"
        className={styles["icon"]}
        height={24}
        src="/assets/images/yt_icon_mono_dark.png"
        width={34}
      />
    </a>
  </div>
);
