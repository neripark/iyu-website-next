import { Heading } from "../../components/Heading";
import styles from "./style.module.scss";

const videoList = [
  { id: "t3nlPjiIQ60" },
  { id: "w46aUHg6nkk" },
  { id: "5Ji3VKWpWwg" },
  { id: "h4QUsVf9f0c" },
];

export const MusicVideo: React.FC = () => (
  <section className={styles["music-video"]}>
    <Heading color="blue">Music</Heading>
    {videoList.map((element, index) => (
      <div key={index} className={styles["wrap-video"]}>
        <div className={styles["inner"]}>
          <iframe
            className={styles["yt-embed"]}
            src={`https://www.youtube.com/embed/${element.id}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    ))}
  </section>
);
