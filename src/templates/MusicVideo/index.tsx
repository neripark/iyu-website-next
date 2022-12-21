import { Heading } from "@/components/Heading";
import { anchorList } from "@/constants/anchorList";
import styles from "./style.module.scss";

const videoList = [
  { id: "t3nlPjiIQ60" },
  { id: "w46aUHg6nkk" },
  { id: "5Ji3VKWpWwg" },
  { id: "h4QUsVf9f0c" },
];

export const MusicVideo: React.FC = () => (
  <section className={styles["music-video"]} id={anchorList.musicVideo.id}>
    <Heading color="blue">Music</Heading>
    {videoList.map((element, index) => (
      <div className={styles["wrap-video"]} key={index}>
        <div className={styles["inner"]}>
          <iframe
            allowFullScreen
            className={styles["yt-embed"]}
            frameBorder="0"
            src={`https://www.youtube.com/embed/${element.id}`}
          />
        </div>
      </div>
    ))}
  </section>
);
