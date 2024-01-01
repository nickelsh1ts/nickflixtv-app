const Setup = () => {
  return (
    <>
      <nav
        id="pre-sticky"
        className="navbar navbar-dark bg-transparent fixed-top pre-sticky"
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
                Log in <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
              </button>
            </a>
          </div>
        </div>
      </nav>
      <nav
        id="post-sticky"
        className="navbar navbar-dark fixed-top post-sticky"
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
                Log in <i className="fas fa-sign-in-alt" aria-hidden="true"></i>
              </button>
            </a>
          </div>
        </div>
      </nav>
      <main className="m-0 p-0">
        <div
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
                src="/img/nickflixtvlgpr.png"
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
                    <span className="plex-orange-text">&#124;</span>
                    <strong>TV Shows: </strong>150{' '}
                    <span className="plex-orange-text">&#124;</span>
                    <strong>Kids Shows: </strong>50{' '}
                    <span className="plex-orange-text">&#124;</span>
                    <strong>Retro Movies: </strong>350{' '}
                    <span className="plex-orange-text">&#124;</span>
                    <strong>Retro TV Shows: </strong>85{' '}
                    <span className="plex-orange-text">&#124;</span>
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
                <i className="fas fa-chevron-down fa-2xl fa-bounce"></i>
              </a>
            </div>
          </div>
        </div>
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
        <section id="watching" className="min-vh-100">
          <div className="container-fluid col-xxl-11 px-4 pt-4 min-vh-100">
            <div className="row flex-lg-row align-items-center pt-5 min-vh-100">
              <div className="col-12 col-lg mx-auto p-1">
                <img
                  src="/img/devices-to-watch.png"
                  className="d-block mx-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col-12 col-lg mx-auto text-light text-lg-start">
                <h1 className="fw-bold lh-1 mb-3 mt-2 text-center text-lg-start">
                  Watch the way you want
                </h1>
                <div className="col">
                  <ul>
                    <li>
                      <p>
                        Host virtual movie nights with Watch Together. Pause,
                        rewind and react with your friends. To invite or be
                        invited to join Watch Together, membership is required.
                      </p>
                    </li>
                    <li>
                      <p>Download any movie or series and watch on-the-go.</p>
                    </li>
                    <li>
                      <p>
                        Limit your experience to{' '}
                        <span className="text-purple">Nickflix</span>TV or
                        leverage all Plex has to offer.
                      </p>
                    </li>
                    <li>
                      <p>
                        An ever-growing range of titles in 720p/1080p and Dolby
                        Atmos sound on compatible devices.
                      </p>
                    </li>
                    <li>
                      <p>Stream on up to two devices at the same time.</p>
                    </li>
                    <li>
                      <p>
                        Request anything new, anywhere on the go with the
                        Overseerr app.
                      </p>
                    </li>
                    <li>
                      <p>
                        Invite up to 5 of your closest friends to join the fun.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="favs" className="min-vh-100 pt-5">
          <div className="container-fluid p-3 p-lg-5 text-center text-light">
            <h1 className="p-2">
              <span className="text-purple">Nickflix</span>TV has all your
              favourites in one place
            </h1>
            <p className="lead py-2">
              An ever evolving collection of the world&apos;s most beloved
              movies and TV shows.
            </p>
            <div className="row row-cols-2 row-cols-lg-3 g-4 px-lg-5">
              <div className="col">
                <img
                  alt="provider"
                  src="/img/netflix.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col">
                <img
                  alt="provider"
                  src="/img/disneyplus.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col">
                <img
                  alt="provider"
                  src="/img/primevideo.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col">
                <img
                  alt="provider"
                  src="/img/appletv.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col">
                <img
                  alt="provider"
                  src="/img/hulu.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col">
                <img
                  alt="provider"
                  src="/img/hbomax.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col">
                <img
                  alt="provider"
                  src="/img/paramountplus.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col">
                <img
                  alt="provider"
                  src="/img/peacock.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
              <div className="col mx-auto">
                <img
                  alt="provider"
                  src="/img/evenmore.png"
                  className="img img-fluid"
                  width="100%"
                  height="auto"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        <section id="devices" className="min-vh-100">
          <div className="container-fluid col-xxl-11 px-4 min-vh-100">
            <div className="row align-items-center text-center text-light pt-5 min-vh-100">
              <div className="container">
                <div className="row pb-5">
                  <h1>Available on all your favourite devices</h1>
                </div>
                <div className="row row-cols-2 row-cols-lg-4 g-4 px-lg-5">
                  <div className="col">
                    <img
                      alt="provider"
                      src="https://cnbl-cdn.bamgrid.com/assets/00fb59319fa715222100d8a84d11bc7e23a42970b4f413c9e85166d0cfba9346/original"
                      className="img img-fluid"
                      loading="lazy"
                      width="100%"
                      height="auto"
                    ></img>
                    <h3 className="py-4">TV</h3>
                    <p className="mb-0">Amazon Fire TV</p>
                    <p className="mb-0">Android TV devices</p>
                    <p className="mb-0">Apple TV</p>
                    <p className="mb-0">Chromecast</p>
                    <p className="mb-0">Roku</p>
                    <p className="mb-0">Samsung</p>
                  </div>
                  <div className="col">
                    <img
                      alt="provider"
                      src="https://cnbl-cdn.bamgrid.com/assets/d73b7c534afd2af2a454dbd47bd6c766c70e334ce8137084e9cd25c2644dd267/original"
                      className="img img-fluid"
                      loading="lazy"
                      width="100%"
                      height="auto"
                    ></img>
                    <h3 className="py-4">Computer</h3>
                    <p className="mb-0">Windows PC</p>
                    <p className="mb-0">MacOS</p>
                    <p className="mb-0">Chrome OS</p>
                  </div>
                  <div className="col">
                    <img
                      alt="provider"
                      src="https://cnbl-cdn.bamgrid.com/assets/66475056e769443ef9a491a48dfa44059c8964890ae9ef7c4f69f322693c59d8/original"
                      className="img img-fluid"
                      loading="lazy"
                      width="100%"
                      height="auto"
                    ></img>
                    <h3 className="py-4">Mobile & Tablet</h3>
                    <p className="mb-0">Android Phones & Tablets</p>
                    <p className="mb-0">iPhones & iPads</p>
                    <p className="mb-0">Amazon Fire Tablets</p>
                  </div>
                  <div className="col">
                    <img
                      alt="provider"
                      src="https://cnbl-cdn.bamgrid.com/assets/51b639d2ebe97ee175975c29d42a90b0e043713856db8e5d6d9fb87b2b3a48c0/original"
                      className="img img-fluid"
                      loading="lazy"
                      style={{ width: '22em' }}
                    ></img>
                    <h3 className="py-4">Game Consoles</h3>
                    <p className="mb-0">Xbox One</p>
                    <p className="mb-0">Xbox X/S</p>
                    <p className="mb-0">Playstation 4/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faqs" className="min-vh-100">
          <div className="container-fluid text-light min-vh-100">
            <div className="row align-items-center min-vh-100">
              <div className="container-fluid col-12 col-md-10 mt-5">
                <h1 className="py-5 text-center">Frequently Asked Questions</h1>
                <div
                  className="accordion accordion-flush mb-5 text-white"
                  id="accordionFlushExample"
                >
                  <div
                    className="accordion-item mb-2 text-white"
                    style={{ background: 'rgba(8,0,17,1)' }}
                  >
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button
                        className="btn accordion-button collapsed fw-bold text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        What is
                        <span className="text-purple ms-1"> Nickflix</span>TV?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        <p>
                          <span className="text-purple">Nickflix</span>TV allows
                          you to watch all your favourites in one place. With
                          entertainment from Netflix, Disney+, Prime Video, HBO
                          Max, and more, there&apos;s always something exciting
                          to watch. Watch the latest releases before anyone
                          else.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item mb-2"
                    style={{ background: 'rgba(8,0,17,1)' }}
                  >
                    <h2
                      className="accordion-header text-white"
                      id="flush-headingTwo"
                    >
                      <button
                        className="btn accordion-button collapsed fw-bold text-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        What is Ple<span className="link-warning">x</span>
                        &trade;?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        <p>
                          Plex gives you one place to find and access all the
                          media that matters to you. From personal media on your
                          own server, to free and on-demand Movies &amp; Shows,
                          live TV, podcasts, and web shows, to streaming music,
                          you can enjoy it all in one app, on any device.
                        </p>
                        <p>
                          If you are streaming only third-party content (
                          <span className="text-purple">Nickflix</span>TV, live
                          TV, web shows), then you are good to go as soon as you
                          have an account, just install an app on your phone,
                          Smart TV, computer, or simply open up our web app on
                          your browser!
                        </p>
                        <p>
                          Watch thousands of free, on-demand Movies &amp; Shows
                          streaming service or over 100 channels of live TV.
                          Listen to your favorite podcasts at home or on your
                          commute. Watch your favorite web shows from talented
                          creators around the world. You can even access over 60
                          million streaming music tracks and videos, provided by
                          TIDAL!
                        </p>
                        <p>
                          Find more feature information{' '}
                          <a
                            href="https://plex.tv"
                            target="_blank"
                            rel="noreferrer"
                            className="link plex-orange-text"
                          >
                            on their website.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item mb-2"
                    style={{ background: 'rgba(8,0,17,1)' }}
                  >
                    <h2
                      className="accordion-header text-white"
                      id="flush-headingThree"
                    >
                      <button
                        className="btn accordion-button collapsed fw-bold link-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        How can I join
                        <span className="text-purple ms-1">Nickflix</span>TV?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        <p>
                          Joining <span className="text-purple">Nickflix</span>
                          TV is by invite only. Current active members can
                          invite up to 5 of their friends.
                        </p>
                        <p>
                          To invite a friend simply log into your account,
                          select options from the menu and click invite a
                          friend. Share the generated code with your friend and
                          send them to{' '}
                          <span className="text-purple">Nickflix</span>
                          TV.com/join or click the share button!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item mb-2"
                    style={{ background: 'rgba(8,0,17,1)' }}
                  >
                    <h2
                      className="accordion-header text-white"
                      id="flush-headingFour"
                    >
                      <button
                        className="btn accordion-button collapsed fw-bold link-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        Where can I watch{' '}
                        <span className="text-purple ms-1">Nickflix</span>TV?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        <p>
                          <span className="text-purple">Nickflix</span>TV is
                          available via the Plex app on compatible mobile
                          devices, web browsers, game consoles, set-top boxes,
                          and smart TVs or at{' '}
                          <span className="text-purple">Nickflix</span>TV.com.
                          For a complete list of supported and compatible
                          devices, click{' '}
                          <a
                            href="/help/node/devices.php"
                            className="link-warning"
                          >
                            here.
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item"
                    style={{ background: 'rgba(8,0,17,1)' }}
                  >
                    <h2
                      className="accordion-header text-white"
                      id="flush-headingFive"
                    >
                      <button
                        className="btn accordion-button collapsed fw-bold link-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        What can I watch on{' '}
                        <span className="text-purple ms-1">Nickflix</span>TV?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div
                        className="accordion-body"
                        style={{ background: 'rgba(8,0,17,1)' }}
                      >
                        <p>
                          With <span className="text-purple">Nickflix</span>
                          TV, you can choose from an ever-evolving collection of
                          movies and TV shows. From new releases and timeless
                          classNameics to nostalgic throwbacks available on{' '}
                          <span className="text-purple">Nickflix</span>TV Retro.
                        </p>
                        <p>
                          Using Overseerr, you can request almost anything
                          that&apos;s not already available and watch it within
                          minutes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="container-fluid pe-none fixed-bottom">
        <div
          style={{ fontSize: '0.8rem' }}
          className="alert alert-dark alert-dismissible pe-auto cookies fade d-none"
          id="cookies"
          role="alert"
        >
          <i className="fas fa-info-circle fa-lg" aria-hidden="true"></i>
          <span className="text-purple">Nickflix</span>TV uses cookies for
          personalization, ease of access, and for other purposes.{' '}
          <a className="alert-link" target="_blank" href="/help/privacy">
            Learn more.
          </a>{' '}
          <span className="text-purple">Nickflix</span>TV supports the Digital
          Advertising Alliance principles. By interacting with this site, you
          agree to our use of cookies.
          <button
            type="button"
            id="cookiesClose"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
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
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
        integrity="sha256-gOQJIa9+K/XdfAuBkg2ONAdw5EnQbokw/s2b8BqsRFg="
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Setup;
