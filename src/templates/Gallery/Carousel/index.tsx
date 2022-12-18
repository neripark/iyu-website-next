import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { images } from "./images";
import styles from "./style.module.scss";

export const Carousel: React.FC = () => (
  <Splide
    aria-label="私のお気に入りの画像集"
    options={{
      classes: {
        pagination: `splide__pagination ${styles["custom__pagination"]}`,
        page: `splide__pagination__page ${styles["custom__pagination__page"]}`,
      },
      pagination: true,
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
    {images.map((element) => (
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
    {/* note:
        アクティブなページネーションボタンのみにclassを渡すことができないため、 module.css で scoped にできない。
        scoped ではないCSSファイルを読み込もうとすると、 `App.tsx` 以外の場所から読み込まないでねという趣旨のエラーが
        Next.js から出力されるためここに書いている。
     */}
    <style>
      {`
      .${styles["custom__pagination__page"]}.is-active {
        background: #36afca;
        transform: none;
      }
    `}
    </style>
  </Splide>
);
