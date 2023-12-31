import type { AppProps } from 'next/app';
import '@app/styles/css/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
