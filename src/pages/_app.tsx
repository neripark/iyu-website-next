import { AppHead } from "@/components/AppHead";
import "@/styles/base.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
}
