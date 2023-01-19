import { AppHead } from "@/components/AppHead";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import "@/styles/base.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      {/* note: Next.js の使用で head 内に置けない */}
      <GoogleTagManager
        containerId={process.env.GOOGLE_TAG_MANAGER_CONTAINER_ID}
      />
      <Component {...pageProps} />
    </>
  );
}
