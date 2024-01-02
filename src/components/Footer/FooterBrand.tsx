import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

const FooterBrand = () => {
  return (
    <>
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
            src="/icon/nickelsh1ts-192x192.png"
          />
          Nickelsh1ts.com
        </a>
        <ul className="list-unstyled small text-muted">
          <p className="align-middle justify-content-center">Built and designed by Nickelshits with{' '}
          <a
            rel="noreferrer"
            className="d-inline-flex align-items-center link-secondary text-decoration-none"
            target="_blank"
            href="https://getbootstrap.com"
            aria-label="Bootstrap"
          >
            <FontAwesomeIcon
              icon={faBootstrap}
              className="me-2 d-block align-content-center fs-4"
            />
            <span className="fs-6">Bootstrap</span>
          </a>
          {' '} and{' '}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://fontawesome.com/"
            className="d-inline-flex align-items-center link-secondary text-decoration-none"
          >
            <FontAwesomeIcon
              icon={faFontAwesome}
              className="me-2 d-block align-content-center fs-4"
            />
            <span className="fs-6">Font Awesome</span>
          </a>
          </p>
        </ul>
      </div>
    </>
  );
};

export default FooterBrand;
