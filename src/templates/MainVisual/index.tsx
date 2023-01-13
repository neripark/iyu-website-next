import { IyuLogo } from "@/components/IyuLogo";
import { anchorList } from "@/constants/anchorList";
import { useHooks } from "./hooks";
import { InformationSummary } from "./InformationSummary";
import styles from "./style.module.scss";

export const MainVisual: React.FC = () => {
  const hooks = useHooks();
  return (
    <section className={styles["main-visual"]} id={anchorList.mainVisual.id}>
      <h1 className={styles["heading"]}>
        <IyuLogo />
      </h1>
      <InformationSummary />
      {/* 両方ダウンロードされるのを防ぐためJSで出し分け */}
      {hooks._isSp ? (
        <Video src="/assets/videos/230113_iyu-webtop-video-pc-3000bit.mp4" />
      ) : (
        <Video src="/assets/videos/230113_iyu-webtop-video-sp-1700bit.mp4" />
      )}
    </section>
  );
};

const Video: React.FC<{ src: string }> = (props) => (
  <video
    autoPlay
    className={styles["bg-movie"]}
    loop
    muted
    playsInline
    src={props.src}
  ></video>
);
