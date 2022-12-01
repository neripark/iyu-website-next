import { LiveInformationContext } from "@/providers/LiveInformationProvider";
import { useContext } from "react";
import styles from "./style.module.scss";

export const InformationText: React.FC = () => {
  const { lives } = useContext(LiveInformationContext);
  return (
    <div>
      {lives.length > 0 ? (
        <p className={styles["lead"]}>
          <span>チケットのお取置きは</span>
          <a
            // todo: アンカーリンク実装
            // v-scroll-to="scrollTo(anchorList.contact)"
            className={styles["text-link"]}
            href="`#${anchorList.profile.id}`"
          >
            こちらのフォーム
          </a>
          から。
          <br />
          <a
            className={styles["text-link"]}
            href="https://twitter.com/iyu_band"
            target="_blank"
            rel="noreferrer"
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
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          もぜひチェックしてくださいね。
        </p>
      )}
    </div>
  );
};
