import useSettings from '@app/hooks/useSettings';

const WatchingUs = () => {
  const settings = useSettings();
  const messages = {
    helpcentre: 'Help Centre',
    AppTitle: `${settings.currentSettings.applicationTitle}`,
  };

  return (
    <>
      <div className="col mt-4">
        <h5 className="fw-bold mb-4">
          <a className="text-decoration-none link-dark">
            Watching <span className="text-purple">{messages.AppTitle}</span>
          </a>
        </h5>
        <a href="help/watch-on-tv" className="text-decoration-none link-dark">
          <p>
            Watching <span className="text-purple">{messages.AppTitle}</span> on
            your TV
          </p>
        </a>
        <a
          href="help/download-offline"
          className="text-decoration-none link-dark"
        >
          <p>Downloading media to watch offline</p>
        </a>
        <a
          href="help/reporting-issues"
          className="text-decoration-none link-dark"
        >
          <p>Reporting an issue</p>
        </a>
      </div>
    </>
  );
};

export default WatchingUs;
