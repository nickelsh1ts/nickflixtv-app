import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Custom404 = () => {
const router = useRouter();

  return (
    <div className="center">
    <div className="error-message">
      <div className="text-4xl">
        <p className="error-text">404</p>
      </div>
      <h2 className="lost-space">LOST IN <s className="ntv-purple"><span className="w-100">SPACE</span></s>?</h2>
      <div>
        <p className="mb-4">Hmm, looks like that page doesn&apos;t exist.</p>
      </div>
      <><button onClick={() => router.back()} className="mt-2 flex btn">
          <p className="me-2 fs-5">Let&apos;s Rewind &nbsp;
          <FontAwesomeIcon icon={faBackward} /></p>
      </button></>
    </div>
    </div>
  );
};

export default Custom404;
