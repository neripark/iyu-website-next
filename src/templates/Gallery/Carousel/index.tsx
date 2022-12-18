import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
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
  <Splide
    aria-label="私のお気に入りの画像集"
    options={{
      type: "loop",
      perPage: 3,
      focus: "center",
      gap: 30,
      padding: 30,
      fixedWidth: "700px",
      breakpoints: {
        760: {
          // note: 画像の固定幅 700 + 左右 padding 30
          fixedWidth: "100%",
        },
        600: {
          padding: 15,
        },
      },
      // note: デフォルトでは方向はmaxだが、minに変更できる。CSS側で統一できたらこちらも統一する
      // mediaQuery: "min"
    }}
  >
    {carouselImages.map((element) => (
      // todo: カルーセルできていけそうなら next/image を使う
      <SplideSlide key={element.src}>
        <img
          alt={element.alt}
          className={styles["image"]}
          loading="lazy"
          src={element.src}
        />
      </SplideSlide>
    ))}
  </Splide>
);
