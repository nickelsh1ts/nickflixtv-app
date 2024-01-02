const FooterHelp = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li className="mb-3">
          <a className="link-secondary text-decoration-none" href="/help/">
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
          <a className="link-secondary text-decoration-none" href="/admin">
            Admin Centre
          </a>
        </li>
      </ul>
    </>
  );
};

export default FooterHelp;
