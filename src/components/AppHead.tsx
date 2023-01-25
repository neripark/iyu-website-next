import Head from "next/head";

export const AppHead: React.FC = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta content="width=device-width,initial-scale=1" name="viewport" />
      <title>iyu</title>
      <meta
        content="都内で活動中の新宿系お散歩ポップバンド、iyuの公式Webサイトです。バンドに関するすべての情報を掲載しています。"
        name="description"
      />
      <meta content="https://iyumusic.tokyo" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="iyu" property="og:title" />
      <meta content="iyu" property="og:site_name" />
      <meta
        content="都内で活動中の新宿系お散歩ポップバンド、iyuの公式Webサイトです。バンドに関するすべての情報を掲載しています。"
        property="og:description"
      />
      <meta
        content="https://iyumusic.tokyo/assets/images/og_image.png"
        property="og:image"
      />
      <meta content="@iyu_band" property="twitter:site" />
      <meta content="summary_large_image" property="twitter:card" />
      {/* images */}
      <link href="/favicon.ico" rel="icon" type="image/x-icon" />
      <link href="/apple-touch-icon.jpg" rel="apple-touch-icon" />
    </Head>
  );
};
