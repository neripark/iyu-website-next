import { AppHead } from "@/components/AppHead";
import { LiveInformationProvider } from "@/providers/LiveInformationProvider";
import "@/styles/base.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LiveInformationProvider>
      <AppHead />
      <Component {...pageProps} />
    </LiveInformationProvider>
  );
}
