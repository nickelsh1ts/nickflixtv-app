const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="footer mt-auto py-3 no-print"
        style={{ background: 'rgba(8,0,17,1)' }}
      >
        <div className="container mb-5">
          <button
            id="scrollToTopBtn"
            type="button"
            className="btn btn-outline-purple m-auto d-none"
          >
            Back up top <i className="fas fa-level-up-alt"></i>
          </button>
        </div>
        <div className="container text-white-50">
          <h3>
            <a
              className="link-secondary"
              rel="noreferrer"
              target="_blank"
              href="https://discord.gg/ZSTrRJMcDS"
            >
              <i className="fab fa-discord me-2 mb-1"></i>
            </a>
            <a
              rel="noreferrer"
              className="link-secondary"
              target="_blank"
              href="https://www.youtube.com/channel/UCV6I_2eeiaq1R6aiwRvHWKA"
            >
              <i className="fab fa-youtube mx-2"></i>
            </a>
          </h3>
        </div>
        <div className="container text-muted text-white-50">
          <div className="row">
            <div className="col-lg-3">
              <a
                className="d-inline-flex align-items-center link-secondary text-decoration-none fw-bold"
                target="_blank"
                href="https://www.nickelsh1ts.com"
                rel="noreferrer"
              >
                <img
                  style={{ width: '3rem' }}
                  alt="logo"
                  className="me-2"
                  src="https://static.wixstatic.com/media/b58370_0bc4b44da2844ab78f239dc721b6b6d0~mv2.png"
                />
                Nickelsh1ts.com
              </a>
              <ul className="list-unstyled small text-muted">
                Built and designed by Nickelshits with{' '}
                <a
                  rel="noreferrer"
                  className="d-inline-flex align-items-center link-secondary text-decoration-none"
                  target="_blank"
                  href="https://getbootstrap.com"
                  aria-label="Bootstrap"
                >
                  <i className="fab fa-bootstrap me-2 d-block align-content-center fs-4"></i>
                  <span className="fs-6">Bootstrap</span>
                </a>{' '}
                and{' '}
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://fontawesome.com/"
                  className="d-inline-flex align-items-center link-secondary text-decoration-none"
                >
                  <i className="fab fa-font-awesome me-2 d-block align-content-center fs-4"></i>
                  <span className="fs-6">Font Awesome</span>
                </a>
              </ul>
            </div>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 col-lg-8 offset-lg-1">
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    href="/help/termsofuse"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    href="/help/privacy"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    href="/help/"
                  >
                    Help Centre
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    href="//status.nickflixtv.com/status/services"
                  >
                    Status
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    href="mailto:info@nickflixtv.com"
                  >
                    Contact Us
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    href="/admin"
                  >
                    Admin Centre
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled lh-1">
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://overseerr.dev"
                  >
                    overseerr.dev
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://sonarr.tv"
                  >
                    sonarr.tv
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://radarr.video"
                  >
                    radarr.video
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://prowlarr.com/"
                  >
                    Prowlarr
                  </a>
                </li>
              </ul>
              <ul className="list-unstyled lh-1">
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.bazarr.media/"
                  >
                    Bazarr.media
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://home.tdarr.io/"
                  >
                    Tdarr.io
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://tautulli.com/"
                  >
                    Tautulli
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    className="link-secondary text-decoration-none"
                    target="_blank"
                    rel="noreferrer"
                    href="https://app.plex.tv"
                  >
                    app.plex
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p style={{ fontSize: '0.8rem' }}>© 2023 Nickelsh1ts.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
