import styles from "./style.module.scss";
import { Heading } from "@/components/Heading";

const carouselImages = [
  {
    src: "/assets/images/gallery-sky.jpg",
    alt: "gallery sky",
  },
  {
    src: "/assets/images/gallery-setasu-last.jpg",
    alt: "setagaya suside last scene",
  },
  {
    src: "/assets/images/gallery-daniel-mv.jpg",
    alt: "daniel mv offshot",
  },
  {
    src: "/assets/images/gallery-car-beam.jpg",
    alt: "gallery car beam",
  },
  {
    src: "/assets/images/gallery-car-light.jpg",
    alt: "gallery car light",
  },
];

export const Gallery: React.FC = () => (
  <section className={styles["gallery"]}>
    <Heading color="blue">Gallery</Heading>
    {/* todo: カルーセル選定する */}
    {/* <client-only>
      <carousel
        :center-mode="true"
        :loop="true"
        :per-page="1"
        :navigation-enabled="true"
        :navigate-to="[2, false]"
        pagination-color="#ccc"
        pagination-active-color="#36afca"
        navigation-prev-label='&lt;image class="arrow" src="/images/gallery-button-L.png" alt="left" /&gt;'
        navigation-next-label='&lt;image class="arrow" src="/images/gallery-button-R.png" alt="left" /&gt;'
      >
        <slide v-for="image in images" :key="image.src">
          <p className="pic">
            <img v-lazy="image" className="image" :alt="image.alt" />
          </p>
        </slide>
      </carousel>
    </client-only> */}
    <div className={styles["pic"]}>
      {carouselImages.map((element) => (
        // todo: カルーセルできていけそうなら next/image を使う
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={element.src}
          loading="lazy"
          className={styles["image"]}
          src={element.src}
          alt={element.alt}
        />
      ))}
    </div>
  </section>
);
