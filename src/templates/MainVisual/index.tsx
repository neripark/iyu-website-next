import styles from "./style.module.scss";

export const MainVisual: React.FC = () => {
  return (
    <section className={styles["main-visual"]}>
      <h1 className={styles["iyu-logo"]}>
        <img src="/assets/images/iyu-logo-RGB.svg" alt="iyu-logo" />
      </h1>
      {/* todo: */}
      {/* <information-summary :live-details="liveDetails" /> */}
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
