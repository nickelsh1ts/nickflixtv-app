import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopBtn = () => {
  const [topButton, setShow] = useState(false);

  function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      // Show button
      setShow(false);
    } else {
      // Hide button
      setShow(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  });

  const scrollToTop = () => {
    // Scroll to top logic
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="container text-center mb-5">
        <button
          id="scrollToTopBtn"
          type="button"
          className={`btn btn-outline-purple m-auto ${topButton && 'd-none'}`}
          onClick={scrollToTop}
        >
          Back up top <FontAwesomeIcon icon={faLevelUpAlt} />
        </button>
      </div>
    </>
  );
};

export default ScrollToTopBtn;
