interface PWAHeaderProps {
  applicationTitle?: string;
}

const PWAHeader = ({ applicationTitle = 'NickflixTV' }: PWAHeaderProps) => {
  return (
    <>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        sizes="192x192"
        href="/icon/nickflixtv-logo-192x192.png"
      />
      <link
        rel="icon"
        type="image/icon"
        sizes="32x32"
        href="/icon/favicon.ico"
      />
      <link
        rel="icon"
        type="image/icon"
        sizes="16x16"
        href="/icon/favicon.ico"
      />
      <link
        rel="mask-icon"
        href="/icon/nickflixtv-logo_maskable-192x192.png"
        color="#2b0b53"
      />
      <link
        rel="manifest"
        href="/ntv.webmanifest"
        crossOrigin="use-credentials"
      />
      <meta name="theme-color" content="#1f1f1f" />
      <meta name="application-name" content={applicationTitle} />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content={applicationTitle} />
      <meta name="description" content="Privately hosted streaming" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
    </>
  );
};

export default PWAHeader;
