import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const LoginButton = () => {
  return (
    <>
      <a href="/nextjs" id="login" className="align-self-center">
        <button
          type="button"
          className="btn btn-lg btn-purple me-md-2 text-uppercase vartext"
        >
          Log in <FontAwesomeIcon icon={faSignInAlt} />
        </button>
      </a>
    </>
  );
};

export default LoginButton;
