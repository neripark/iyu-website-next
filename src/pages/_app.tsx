import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppHead } from '../components/AppHead'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHead />
      <Component {...pageProps} />
    </>
  );
}
