import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuickLinks = () => {
  return (
    <>
      <div className="col mt-4">
        <h5 className="fw-bold mb-4">
          <a className="text-decoration-none link-dark">Quick Links</a>
        </h5>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none link-dark"
          href="https://app.plex.tv/auth#?resetPassword"
        >
          <p>
            Reset Password
            <FontAwesomeIcon
              icon={faArrowRight}
              className="link-danger float-end"
            />
          </p>
        </a>
        <a className="text-decoration-none link-dark" href="/request">
          <p>
            Request TV Shows or movies{' '}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="link-danger float-end"
            />
          </p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none link-dark"
          href="https://www.plex.tv"
        >
          <p>
            Visit Ple<span className="link-warning">x</span>.tv{' '}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="link-danger float-end"
            />
          </p>
        </a>
      </div>
    </>
  );
};

export default QuickLinks;
