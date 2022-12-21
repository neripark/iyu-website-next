import AnchorLink from "react-anchor-link-smooth-scroll";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const InformationText: React.FC = () => {
  const hooks = useHooks();
  return (
    <div>
      {hooks.lives.length > 0 ? (
        <p className={styles["lead"]}>
          <span>チケットのお取置きは</span>
          <AnchorLink
            className={styles["text-link"]}
            href={`#${hooks.anchorList.contact.id}`}
            offset={hooks.anchorList.contact.offset}
          >
            こちらのフォーム
          </AnchorLink>
          から。
          <br />
          <a
            className={styles["text-link"]}
            href="https://twitter.com/iyu_band"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          でも承っております。
        </p>
      ) : (
        <p className={styles["lead"]}>
          現在予定しているライブはありません。
          <br />
          発表をお待ち下さい！
          <br />
          <a
            className={styles["text-link"]}
            href="https://twitter.com/iyu_band"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          もぜひチェックしてくださいね。
        </p>
      )}
    </div>
  );
};
