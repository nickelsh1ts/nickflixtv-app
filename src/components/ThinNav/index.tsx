import LoginButton from '@app/components/LoginButton';

const ThinNav = () => {
  return (
    <>
      <header
        id="NavThin"
        className="navbar navbar-expand navbar-dark mb-3 align-items-center px-2 px-md-0"
        style={{ background: 'rgba(8,0,17,1);' }}
      >
        <div className="container-fluid mx-md-4">
          <button
            className="navbar-toggler me-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navthin"
            aria-controls="navbarsExample09"
            aria-expanded="false"
            aria-label="Toggle navigation"
            id="navToggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a
            href="/"
            className="text-dark text-decoration-none navbar-brand align-self-center me-auto"
          >
            <img
              src="/img/ntv-logo_full.png"
              alt="logo"
              style={{ width: '7rem;', height: 'auto;' }}
              className="img-fluid"
            />
          </a>

          <div
            className="collapse navbar-collapse navbar-nav-scroll order-2 order-md-2"
            id="navthin"
            aria-expanded="false"
            style={{ maxHeight: '80vh', zIndex: 1082 }}
          >
            <ul className="navbar-nav me-auto mb-sm-0">
              <div className="bg-light mx-2" style={{ width: ' 1px' }}></div>
              <li className="nav-item">
                <a href="/help" className="nav-link px-2 link-secondary">
                  Help Centre
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row order-2 order-sm-3 no-print me-md-2 me-0">
            <div className="navbar-nav flex-row m-0 p-0 ms-auto">
              <LoginButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ThinNav;
