import Head from "next/head";

export const AppHead: React.FC = () => {
  return (
    <Head>
      <title>iyu</title>
      <meta
        name="description"
        content="都内で活動中の新宿系お散歩ポップバンド、iyuの公式Webサイトです。バンドに関するすべての情報を掲載しています。"
      />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta property="og:url" content="https://iyumusic.tokyo" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="iyu" />
      <meta property="og:site_name" content="iyu" />
      <meta
        property="og:description"
        content="都内で活動中の新宿系お散歩ポップバンド、iyuの公式Webサイトです。バンドに関するすべての情報を掲載しています。"
      />
      <meta property="og:image" content="https://iyumusic.tokyo/og_image.png" />
      <meta property="twitter:site" content="@iyu_band" />
      <meta property="twitter:card" content="summary_large_image" />
      {/* images */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
    </Head>
  );
};
