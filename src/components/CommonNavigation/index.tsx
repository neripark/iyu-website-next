import styles from "./style.module.scss";

export const CommonNavigation: React.FC = () => {
  return (
    <ul className={styles["anchor-list"]}>
      <li className={styles["anchor-item"]}>
        <a
          // v-scroll-to="scrollTo(anchorList.profile)"
          className={styles["anchor"]}
          // :href="`#${anchorList.profile.id}`"
        >
          <span className={styles["string"]}>Profile</span>
        </a>
      </li>
      <li className={styles["anchor-item"]}>
        <a
          v-scroll-to="scrollTo(anchorList.music)"
          className={styles["anchor"]}
          // :href="`#${anchorList.music.id}`"
        >
          <span className={styles["string"]}>Music</span>
        </a>
      </li>
      <li className={styles["anchor-item"]}>
        <a
          // v-scroll-to="scrollTo(anchorList.live)"
          className={styles["anchor"]}
          // :href="`#${anchorList.live.id}`"
        >
          <span className={styles["string"]}>Live</span>
        </a>
      </li>
      <li className={styles["anchor-item"]}>
        <a
          // v-scroll-to="scrollTo(anchorList.gallery)"
          className={styles["anchor"]}
          // :href="`#${anchorList.gallery.id}`"
        >
          <span className={styles["string"]}>Gallery</span>
        </a>
      </li>
      <li className={styles["anchor-item"]}>
        <a
          v-scroll-to="scrollTo(anchorList.contact)"
          className={styles["anchor"]}
          // :href="`#${anchorList.contact.id}`"
        >
          <span className={styles["string"]}>Contact</span>
        </a>
      </li>
    </ul>
  );
};
