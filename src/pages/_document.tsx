import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        {/* note: https://nextjs.org/docs/messages/no-page-custom-font の対策のためここに書いている */}
        <link
          href="https://fonts.googleapis.com/css?family=Sawarabi+Gothic&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Heebo:700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
