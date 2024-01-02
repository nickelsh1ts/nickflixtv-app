const RequestSection = () => {
  return (
    <>
      <section id="requesting" className="min-vh-100">
        <div className="container-fluid col-xxl-11 px-4 pt-4 min-vh-100">
          <div className="row flex-lg-row-reverse align-items-center pt-5 min-vh-100">
            <div className="col-12 col-lg mx-auto text-light text-center text-lg-start">
              <h1 className="fw-bold lh-1 mb-3 mt-2">
                Introducing{' '}
                <img
                  className="img-fluid"
                  src="/img/os-logo_full.svg"
                  style={{ width: '12rem' }}
                  alt="overseerr"
                ></img>
              </h1>
              <div className="col">
                <p className="lead mb-0">
                  Request almost any Movie or TV Show and watch it directly on{' '}
                  <span className="text-purple">Nickflix</span>TV in no time
                  with Overseerr. Enjoy Overseerr as part of your{' '}
                  <span className="text-purple">Nickflix</span>TV membership.
                </p>
                <p className="text-muted mt-0 mb-4">
                  Limits apply. Please see the{' '}
                  <a className="link-warning text-capitalize" href="/help">
                    Help Centre
                  </a>{' '}
                  for more.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg mx-auto p-5">
              <img
                src="/img/request-promo.png"
                className="d-block mx-auto img-fluid"
                alt="overseer promo"
                width="100%"
                height="auto"
                loading="lazy"
              ></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestSection;
