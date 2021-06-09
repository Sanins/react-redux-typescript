import '../styles/global.css';
import { AppProps } from 'next/app';
import { Navigation } from '../components/Navigation/Navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
