import type { Undefinable } from '@app/utils/typeHelpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import type { NextPage } from 'next';
import Link from 'next/link';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {

  const getErrorMessage = (statusCode?: number) => {
    switch (statusCode) {
      case 500:
        return 'Internal Server Error';
      case 503:
        return 'Service Unavailable';
      default:
        return statusCode
          ? 'Something Went Wrong'
          : 'Oops';
    }
  };
  return (
    <div className="error-message">
      <div className="text-4xl">
        {statusCode
          ? "Error Message"
          : getErrorMessage(statusCode)}
      </div>
      <Link href="/" className="mt-2 flex">
          <p>Return Home</p>
          <FontAwesomeIcon icon={faCircleArrowRight} />
      </Link>
    </div>
  );
};

Error.getInitialProps = async ({ res, err }): Promise<ErrorProps> => {
  let statusCode: Undefinable<number>;
  if (res) {
    statusCode = res.statusCode;
  } else {
    statusCode = err ? err.statusCode : undefined;
  }

  return { statusCode };
};

export default Error;
