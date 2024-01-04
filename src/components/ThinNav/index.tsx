import LoginButton from '@app/components/LoginButton';

const ThinNav = () => {
  return (
    <>
      <header
        id="NavThin"
        className="navbar navbar-dark mb-3 align-items-center px-md-4 border-bottom border-dark"
        style={{ background: 'rgba(8,0,17,1)' }}
      >
        <div className="container-fluid px-md-2">
          <a href="/" className="navbar-brand me-0">
            <img
              src="/img/ntv-logo_full.png"
              alt="logo"
              style={{ width: '7rem', height: 'auto' }}
              className="img-fluid"
            />
          </a>
          <ul className="navbar-nav me-auto mb-sm-0 d-flex flex-row">
            <div className="bg-light mx-2" style={{ width: ' 1px' }}></div>
            <li className="nav-item">
              <a href="/help" className="nav-link px-2 link-secondary">
                Help Centre
              </a>
            </li>
          </ul>
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
