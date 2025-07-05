import { Head, Html, Main, NextScript } from "next/document";
import { Meta } from "@/components/Meta";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <Meta />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
