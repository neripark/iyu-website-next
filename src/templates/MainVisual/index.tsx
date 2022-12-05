import { anchorList } from "@/containers/CommonNavigation/anchorList";
import Image from "next/image";
import { InformationSummary } from "./InformationSummary";
import styles from "./style.module.scss";

export const MainVisual: React.FC = () => {
  return (
    <section className={styles["main-visual"]} id={anchorList.mainVisual.id}>
      <h1 className={styles["heading"]}>
        <Image
          alt="iyu-logo"
          className={styles["iyu-logo"]}
          height={150}
          src="/assets/images/iyu-logo-RGB.svg"
          width={267}
        />
      </h1>
      <InformationSummary />
      {/* todo: PCのときだけ動画をロードできているか確認。なぜかローカルだとNetworkタブに出てこない */}
      {/* できていなければ OnlyClient 的なコンポーネントを実装する or 使う */}
      {typeof window !== undefined && (
        <video
          autoPlay
          className={styles["bg-movie"]}
          loop
          muted
          src="/assets/videos/200109_iyu-webtop-video.mp4"
        />
      )}
    </section>
  );
};
