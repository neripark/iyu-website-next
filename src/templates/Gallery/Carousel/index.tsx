import styles from "./style.module.scss";

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

export const Carousel: React.FC = () => (
  <div className={styles["pic"]}>
    {carouselImages.map((element) => (
      // todo: カルーセルできていけそうなら next/image を使う
      // eslint-disable-next-line @next/next/no-img-element
      <img
        alt={element.alt}
        className={styles["image"]}
        key={element.src}
        loading="lazy"
        src={element.src}
      />
    ))}
  </div>
);
