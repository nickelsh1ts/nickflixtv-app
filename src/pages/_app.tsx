import PWAHeader from '@app/components/PWAHeader';
import { InteractionProvider } from '@app/context/InteractionContext';
import { SettingsProvider } from '@app/context/SettingsContext';
import type { PublicSettingsResponse } from '@server/interfaces/api/settingsInterfaces';
import type { AppInitialProps, AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import '@app/styles/scss/bootstrap.scss';
import '@app/styles/css/globals.css';
import BootstrapClient from '@app/components/BootstrapClient.js';

interface ExtendedAppProps extends AppProps {
  currentSettings: PublicSettingsResponse;
}

type NextAppComponentType = typeof App;

const CoreApp: Omit<NextAppComponentType, 'origGetInitialProps'> = ({
  Component,
  pageProps,
  currentSettings,
}: ExtendedAppProps) => {
  const component = <Component {...pageProps} />;

  return (
    <>
      <SettingsProvider currentSettings={currentSettings}>
        <InteractionProvider>
          <Head>
            <title>{currentSettings.applicationTitle}</title>
            <meta
              name="viewport"
              content="initial-scale=1, viewport-fit=cover, width=device-width"
            ></meta>
            <PWAHeader />
          </Head>
          {component}
        </InteractionProvider>
      </SettingsProvider>
      <BootstrapClient />
    </>
  );
};

CoreApp.getInitialProps = async (initialProps) => {
  const currentSettings: PublicSettingsResponse = {
    initialized: false,
    applicationTitle: 'Streamarr',
    companyTitle: 'Nickelsh1ts',
    applicationUrl: '',
    hideAvailable: false,
    movie4kEnabled: false,
    series4kEnabled: false,
    localLogin: true,
    region: '',
    originalLanguage: '',
    partialRequestsEnabled: true,
    cacheImages: false,
    vapidPublic: '',
    enablePushRegistration: false,
    locale: 'en',
    emailEnabled: false,
    newPlexLogin: true,
    discord: 'https://discord.gg/ZSTrRJMcDS',
    supportEmail: 'support@streamarr.com',
  };

  // Run the default getInitialProps for the main nextjs initialProps
  const appInitialProps: AppInitialProps =
    await App.getInitialProps(initialProps);

  return { ...appInitialProps, currentSettings };
};

export default CoreApp;
