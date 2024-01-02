import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const HomeNavbar = () => {
  const [navTop, setShow] = useState(false);

  const scrollNav = () => {
    if (window.scrollY > 800) {
      // if scroll down hide the navbar
      setShow(true);
    } else {
      // if scroll up show the navbar
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollNav);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', scrollNav);
    };
  });

  return (
    <>
      <nav
        id="pre-sticky"
        className={`navbar navbar-dark bg-transparent fixed-top pre-sticky ${
          navTop && 'show-top-nav'
        }`}
      >
        <div className="container-fluid mx-md-4 align-items-center">
          <div className="d-flex w-100">
            <a className="text-dark me-auto text-decoration-none navbar-brand align-self-center">
              <img
                src="/img/nickflixtvlgpr.png"
                alt="logo"
                style={{ width: '7em', height: 'auto', opacity: '0' }}
                className="img-fluid"
              ></img>
            </a>
            <a id="join" className="align-self-center">
              <button
                type="button"
                className="btn btn-lg btn-outline-warning me-2 text-uppercase vartext d-none"
              >
                Sign up now
              </button>
            </a>
            <a href="/watch" id="login" className="align-self-center">
              <button
                type="button"
                className="btn btn-lg btn-purple me-md-2 text-uppercase vartext"
              >
                Log in <FontAwesomeIcon icon={faSignInAlt} />
              </button>
            </a>
          </div>
        </div>
      </nav>
      <nav
        id="post-sticky"
        className={`navbar navbar-dark fixed-top post-sticky ${
          navTop && 'show-top-nav'
        }`}
        style={{ background: 'rgba(8,0,17,1)' }}
      >
        <div className="container-fluid mx-md-4 align-items-center">
          <div className="d-flex w-100">
            <a
              href="#"
              className="text-dark me-auto text-decoration-none navbar-brand align-self-center"
            >
              <img
                src="/img/nickflixtvlgpr.png"
                alt="logo"
                style={{ width: '7em', height: 'auto' }}
                className="img-fluid"
              ></img>
            </a>
            <a href="/join" id="join" className="align-self-center">
              <button
                type="button"
                className="btn btn-lg btn-outline-warning me-2 text-uppercase vartext"
              >
                Sign up now
              </button>
            </a>
            <a href="/watch" id="login" className="align-self-center">
              <button
                type="button"
                className="btn btn-lg btn-purple me-md-2 text-uppercase vartext"
              >
                Log in <FontAwesomeIcon icon={faSignInAlt} />
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
