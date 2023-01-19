import { AppHead } from "@/components/AppHead";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import "@/styles/base.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <GoogleTagManager
        containerId={process.env.GOOGLE_TAG_MANAGER_CONTAINER_ID}
      />
      <Component {...pageProps} />
    </>
  );
}
