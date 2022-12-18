import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { images } from "./images";
import styles from "./style.module.scss";

interface Props {
  className?: string;
}

export const Carousel: React.FC<Props> = (props) => (
  <Splide
    aria-label="私のお気に入りの画像集"
    options={{
      classes: {
        pagination: `splide__pagination ${styles["custom__pagination"]}`,
        page: `splide__pagination__page ${styles["custom__pagination__page"]}`,
      },
      pagination: true,
      type: "loop",
      focus: "center",
      gap: 60,
      padding: 60,
      fixedWidth: 640,
      breakpoints: {
        700: {
          fixedWidth: "100%",
          padding: 30,
        },
        600: {
          padding: 15,
        },
      },
      // note: デフォルトでは方向はmaxだが、minに変更できる。CSS側で統一できたらこちらも統一する
      // mediaQuery: "min"
    }}
    className={props.className}
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
