import ScrollToTopBtn from '@app/components/ScrollToTopBtn';
import FooterAbout from '@app/components/Footer/FooterAbout';
import FooterHelp from '@app/components/Footer/FooterHelp';
import FooterThanks from '@app/components/Footer/FooterThanks';
import FooterBrand from '@app/components/Footer/FooterBrand';
import FooterSocials from '@app/components/Footer/FooterSocials';

const dateYear = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <footer
        id="footer"
        className="footer mt-auto py-3 no-print"
        style={{ background: 'rgba(8,0,17,1)' }}
      >
        <ScrollToTopBtn />
        <FooterSocials />
        <div className="container text-muted text-white-50">
          <div className="row">
            <FooterBrand />
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 col-lg-8 offset-lg-1">
              <FooterAbout />
              <FooterHelp />
              <FooterThanks />
            </div>
          </div>
          <p style={{ fontSize: '0.8rem' }}>© {dateYear} Nickelsh1ts.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
