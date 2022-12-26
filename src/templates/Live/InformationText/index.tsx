import { TextAnchorLink, TextLink } from "@/components/TextLink";
import { useHooks } from "./hooks";
import styles from "./style.module.scss";

export const InformationText: React.FC = () => {
  const hooks = useHooks();
  return (
    <div>
      {hooks.lives.length > 0 ? (
        <p className={styles["lead"]}>
          チケットのお取置きは
          <TextAnchorLink
            href={`#${hooks.anchorList.contact.id}`}
            offset={hooks.anchorList.contact.offset}
          >
            こちらのフォーム
          </TextAnchorLink>
          から。
          <br />
          <TextLink
            href="https://twitter.com/iyu_band"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </TextLink>
          でも承っております。
        </p>
      ) : (
        <p className={styles["lead"]}>
          現在予定しているライブはありません。
          <br />
          発表をお待ち下さい！
          <br />
          <TextLink
            href="https://twitter.com/iyu_band"
            rel="noreferrer"
            target="_blank"
          >
            Twitter
          </TextLink>
          もぜひチェックしてくださいね。
        </p>
      )}
    </div>
  );
};
