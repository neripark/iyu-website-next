import { IyuLogo } from "@/components/IyuLogo";
import { anchorList } from "@/constants/anchorList";
import { InformationSummary } from "./InformationSummary";
import styles from "./style.module.scss";

export const MainVisual: React.FC = () => {
  return (
    <section className={styles["main-visual"]} id={anchorList.mainVisual.id}>
      <h1 className={styles["heading"]}>
        <IyuLogo />
      </h1>
      <InformationSummary />
      <video
        autoPlay
        className={styles["bg-movie"]}
        loop
        muted
        src="/assets/videos/200109_iyu-webtop-video.mp4"
      />
    </section>
  );
};
