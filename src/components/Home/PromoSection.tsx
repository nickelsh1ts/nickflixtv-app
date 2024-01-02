import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const PromoSection = () => {
  return (
    <>
      <section
        id="promo"
        className="container-fluid min-vh-100 text-light promocard"
        style={{
          background: "url('img/promo-card.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="row row-cols-1 min-vh-100 ps-md-5 promobg text-md-start text-center"
          style={{
            background:
              'linear-gradient(90deg, rgba(8,0,17,1) 17%, rgba(43,11,83,0.8) 35%, rgba(43,11,83,0) 60%, rgba(43,11,83,0) 100%)',
          }}
        >
          <div className="col ps-md-4 mt-auto pt-5">
            <img
              src="/img/ntv-logo_full.png"
              alt="logo"
              style={{ width: '20em', height: 'auto' }}
              className="mb-4 img-fluid mt-5"
            ></img>
            <h1 className="h2 fw-bold lh-1 mb-2">
              Unlimited movies and TV shows
            </h1>
            <p className="lead mb-5">
              Watch anywhere, anytime for free. The future is now.
            </p>
            <div className="mb-5 pb-3 mb-md-0 pb-md-0 col">
              <span className="form-label">
                Currently by invite only. Enter an invite code to join us!
              </span>
              <div
                className="col mx-auto mx-md-0"
                style={{ maxWidth: '24rem' }}
              >
                <div className="input-group needs-validation my-2 mx-auto mx-md-0 px-4 px-md-0">
                  <input
                    id="icode"
                    type="text"
                    className="form-control border-0 bg-dark text-light text-uppercase validate"
                    maxLength={6}
                    placeholder="Invite Code"
                    aria-label="Invite Code"
                    aria-describedby="invcode"
                  ></input>
                  <button
                    type="button"
                    className="btn btn-lg btn-warning"
                    id="invBtn"
                  >
                    Let&apos;s Get started!
                  </button>
                </div>
              </div>
            </div>
            <div className="lead p-0 mt-3 mt-md-5 mb-3">
              <div className="col">
                <div className="col">
                  <strong>Movies: </strong>200{' '}
                  <span className="plex-orange-text">&#124; </span>
                  <strong>TV Shows: </strong>150{' '}
                  <span className="plex-orange-text">&#124; </span>
                  <strong>Kids Shows: </strong>50{' '}
                  <span className="plex-orange-text">&#124; </span>
                  <strong>Retro Movies: </strong>350{' '}
                  <span className="plex-orange-text">&#124; </span>
                  <strong>Retro TV Shows: </strong>85{' '}
                  <span className="plex-orange-text">&#124; </span>
                  <strong>Retro Kids Shows: </strong>30
                </div>
              </div>
            </div>
          </div>
          <div
            className="col col-md-1 ps-md-4 align-self-end"
            style={{ marginBottom: '6rem' }}
          >
            <a href="#requesting" className="link-light">
              <FontAwesomeIcon
                icon={faChevronDown}
                bounce
                size="2xl"
                className="bounce"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PromoSection;
