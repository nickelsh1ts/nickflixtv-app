import LoginButton from '@app/components/LoginButton';

const HelpBanner = () => {
  return (
    <>
      <header
        id="top"
        className="navbar-dark mb-3 shadow-sm"
        style={{
          backgroundImage: "url('/img/promo-card.png')",
          backgroundPosition: '0px',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="p-0 m-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(8,0,17,0.9) 0%, rgba(43,11,83,0.7) 100%)',
          }}
        >
          <div className="container p-3">
            <div className="d-flex flex-wrap flex-column flex-sm-row align-items-center justify-content-center justify-content-sm-start">
              <a
                href="/"
                className="d-flex link-dark text-decoration-none navbar-brand align-items-center mx-0"
              >
                <img
                  src="/img/sm-logo_full.png"
                  alt="logo"
                  style={{ width: '15rem', height: 'auto' }}
                  className="img-fluid"
                />
              </a>
              <ul className="nav ms-0 ms-sm-auto">
                <LoginButton />
              </ul>
            </div>
            <h2 className="container-fluid text-center text-white fw-bold my-4 my-sm-0 ms-auto">
              <a href="/help" className="text-decoration-none link-light">
                Help Centre
              </a>
            </h2>
          </div>
        </div>
      </header>
    </>
  );
};

export default HelpBanner;
