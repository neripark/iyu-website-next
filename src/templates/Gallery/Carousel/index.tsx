import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { images } from "./images";
import styles from "./style.module.scss";

interface Props {
  className?: string;
}

export const Carousel: React.FC<Props> = (props) => (
  <Splide
    aria-label="私のお気に入りの画像集"
    hasTrack={false}
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
          arrows: false,
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
    <SplideTrack>
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
    </SplideTrack>
    {/* note: カスタマイズする場合は `<SplideTrack />` と描画位置を指定するための div.splide__arrows が必要 */}
    <div className="splide__arrows">
      <button
        className={`splide__arrow ${styles["custom__arrow"]} splide__arrow--prev ${styles["custom__arrow--prev"]}`}
      >
        <img
          className={styles["arrow-image"]}
          src="/assets/images/gallery-button-L.png"
          alt="to Previous Slide"
        />
      </button>
      <button
        className={`splide__arrow ${styles["custom__arrow"]} splide__arrow--next ${styles["custom__arrow--next"]}`}
      >
        <img
          className={styles["arrow-image"]}
          src="/assets/images/gallery-button-R.png"
          alt="to Next Slide"
        />
      </button>
    </div>
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
