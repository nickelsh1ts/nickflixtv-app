import PageTitle from '@app/components/Common/PageTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Footer from '@app/components/Footer';
import ThinNav from '@app/components/ThinNav';

const messages = {
  pagenotfound: 'Page Not Found',
};

const Custom404 = () => {
  const router = useRouter();

  return (
    <>
      <PageTitle title={messages.pagenotfound} />
      <ThinNav />
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="col text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center text-dark fw-bold">404</h1>
                </div>
                <div className="contant_box_404 text-dark">
                  <h2 className="lost-space">
                    LOST IN{' '}
                    <s className="ntv-purple">
                      <span className="text-dark">SPACE</span>
                    </s>
                    ?
                  </h2>
                  <p>Hmm, looks like that page doesn&apos;t exist.</p>
                  <>
                    <button
                      onClick={() => router.back()}
                      className="btn btn-outline-purple fw-bolder my-3 fs-5"
                    >
                      <span className="fs-5">
                        Let&apos;s Rewind <FontAwesomeIcon icon={faBackward} />
                      </span>
                    </button>
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Custom404;
