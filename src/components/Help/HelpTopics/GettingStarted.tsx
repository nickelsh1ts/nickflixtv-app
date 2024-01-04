import useSettings from '@app/hooks/useSettings';

const GettingStarted = () => {
  const settings = useSettings();
  const messages = {
    AppTitle: `${settings.currentSettings.applicationTitle}`,
  };

  return (
    <>
      <div className="col mt-4">
        <h5 className="fw-bold mb-4">
          <a
            href="help/getting-started"
            className="text-decoration-none link-dark"
          >
            Getting Started
          </a>
        </h5>
        <a
          href="help/getting-started#whatisNickflixTV"
          className="text-decoration-none link-dark"
        >
          <p>
            What is <span className="text-purple">{messages.AppTitle}</span>?
          </p>
        </a>
        <a
          href="help/getting-started#whatisPlex"
          className="text-decoration-none link-dark"
        >
          <p>
            What is Ple<span className="link-warning">x</span>&trade;?
          </p>
        </a>
        <a
          href="help/getting-started#downloadPlex"
          className="text-decoration-none link-dark"
        >
          <p>
            How to download the Ple<span className="link-warning">x</span>
            &trade; app
          </p>
        </a>
        <a
          href="help/getting-started#downloadNickflixTV"
          className="text-decoration-none link-dark"
        >
          <p>
            How to download the{' '}
            <span className="text-purple">{messages.AppTitle}</span> app
          </p>
        </a>
        <a
          href="help/getting-started#quickstartGuide"
          className="text-decoration-none link-dark"
        >
          <p>Quick Start Guide</p>
        </a>
      </div>
    </>
  );
};

export default GettingStarted;
