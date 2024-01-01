import PWAHeader from '@app/components/PWAHeader';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '@app/styles/scss/bootstrap.scss';
import '@app/styles/css/globals.css';

const CoreApp = ({ Component, pageProps }: AppProps) => {
  const component = <Component {...pageProps} />;

  const currentSettings = {
    initialized: false,
    applicationTitle: 'NickflixTV',
    applicationUrl: '',
    localLogin: true,
    region: '',
    originalLanguage: '',
    cacheImages: false,
    enablePushRegistration: false,
    locale: 'en',
    newPlexLogin: true,
  };

  return (
    <div>
      <Head>
        <title>
          Stream the greatest Movies, Series, Classics and more |{' '}
          {currentSettings.applicationTitle}
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, viewport-fit=cover, width=device-width"
        ></meta>
        <PWAHeader />
      </Head>
      {component}
    </div>
  );
};

export default CoreApp;
