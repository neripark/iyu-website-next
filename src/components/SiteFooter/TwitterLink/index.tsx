import styles from "./style.module.scss";

export const TwitterLink: React.FC = () => (
  <div className={styles["twitter"]}>
    <a className={styles["link"]} href="https://twitter.com/iyu_band">
      <img
        className={styles["icon"]}
        src="/assets/images/Twitter_Logo_WhiteOnImage.svg"
        alt="iyu twitter"
      />
    </a>
  </div>
);
