import { InstagramLink } from "./InstagramLink";
import { TwitterLink } from "./TwitterLink";
import { YouTubeLink } from "./YouTubeLink";
import styles from "./style.module.scss";

export const SiteFooter: React.FC = () => (
  <footer className={styles["site-footer"]}>
    <ul className={styles["contact-list"]}>
      <li className={styles["contact-item"]}>
        <TwitterLink />
      </li>
      <li className={styles["contact-item"]}>
        <YouTubeLink />
      </li>
      <li className={styles["contact-item"]}>
        <InstagramLink />
      </li>
    </ul>
    <div className={styles["wrap-copyright"]}>
      <p className={styles["copyright-text"]}>
        ©iyumusic.tokyo All Rights Reserved.
      </p>
    </div>
  </footer>
);
