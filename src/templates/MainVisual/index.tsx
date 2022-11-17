import { InformationSummary } from "./InformationSummary";
import styles from "./style.module.scss";
import { anchorList } from "@/containers/CommonNavigation/anchorList";
import Image from "next/image";

export const MainVisual: React.FC = () => {
  return (
    <section className={styles["main-visual"]} id={anchorList.mainVisual.id}>
      <h1 className={styles["heading"]}>
        <Image
          src="/assets/images/iyu-logo-RGB.svg"
          alt="iyu-logo"
          width={267}
          height={150}
          className={styles["iyu-logo"]}
        />
      </h1>
      <InformationSummary />
      {/* todo: PCのときだけ動画をロードできているか確認。なぜかローカルだとNetworkタブに出てこない */}
      {/* できていなければ OnlyClient 的なコンポーネントを実装する or 使う */}
      {typeof window !== undefined && (
        <video
          className={styles["bg-movie"]}
          src="/assets/videos/200109_iyu-webtop-video.mp4"
          muted
          autoPlay
          loop
        />
      )}
    </section>
  );
};
