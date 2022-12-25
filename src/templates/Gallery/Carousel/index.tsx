import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Image from "next/image";
import { images } from "./images";
import styles from "./style.module.scss";

interface Props {
  className?: string;
}

export const Carousel: React.FC<Props> = (props) => (
  <Splide
    aria-label="iyu gallery"
    className={props.className}
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
  >
    <SplideTrack>
      {images.map((element) => (
        <SplideSlide key={element.key}>
          <Image
            alt={element.alt}
            className={styles["image"]}
            loading="lazy"
            sizes="(max-width: 600px) 100vw - 30px,
                   (max-width: 700px) 100vw - 60px,
                   640px"
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
        <Image
          alt="to Previous Slide"
          className={styles["arrow-image"]}
          height="30"
          src="/assets/images/gallery-button-L.png"
          width="30"
        />
      </button>
      <button
        className={`splide__arrow ${styles["custom__arrow"]} splide__arrow--next ${styles["custom__arrow--next"]}`}
      >
        <Image
          alt="to Next Slide"
          className={styles["arrow-image"]}
          height="30"
          src="/assets/images/gallery-button-R.png"
          width="30"
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
