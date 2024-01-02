const FAQSection = () => {
  return (
    <>
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
                        Max, and more, there&apos;s always something exciting to
                        watch. Watch the latest releases before anyone else.
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
                        TV is by invite only. Current active members can invite
                        up to 5 of their friends.
                      </p>
                      <p>
                        To invite a friend simply log into your account, select
                        options from the menu and click invite a friend. Share
                        the generated code with your friend and send them to{' '}
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
                        available via the Plex app on compatible mobile devices,
                        web browsers, game consoles, set-top boxes, and smart
                        TVs or at <span className="text-purple">Nickflix</span>
                        TV.com. For a complete list of supported and compatible
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
    </>
  );
};

export default FAQSection;
