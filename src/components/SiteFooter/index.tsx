import { InstagramLink } from "./InstagramLink";
import styles from "./style.module.scss";
import { TwitterLink } from "./TwitterLink";
import { YouTubeLink } from "./YouTubeLink";

export const SiteFooter: React.FC = () => (
  <footer className={styles["site-footer"]}>
    <ul className={styles["contact-list"]}>
      <li>
        <TwitterLink />
      </li>
      <li>
        <YouTubeLink />
      </li>
      <li>
        <InstagramLink />
      </li>
    </ul>
    <div className={styles["wrap-copyright"]}>
      <p>©iyumusic.tokyo All Rights Reserved.</p>
    </div>
  </footer>
);
