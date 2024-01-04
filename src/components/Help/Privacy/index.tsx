import PageTitle from '@app/components/Common/PageTitle';
import Footer from '@app/components/Footer';
import BreadCrumbs from '@app/components/Help/BreadCrumbs';
import PrivacyStatement from '@app/components/Help/Privacy/PrivacyStatement';
import PrintButton from '@app/components/PrintButton';
import ThinNav from '@app/components/ThinNav';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const messages = {
  privacy: 'Privacy Statement',
};

const Privacy = () => {
  return (
    <>
      <PageTitle title={messages.privacy} />
      <ThinNav />
      <div className="d-flex flex-wrap mb-5 d-print-none">
        <BreadCrumbs
          separator={<FontAwesomeIcon icon={faChevronRight} />}
          activeClasses="link-secondary"
          listClasses="nav-link link-purple"
          capitalizeLinks
        />
        <PrintButton />
      </div>
      <PrivacyStatement />
      <Footer />
    </>
  );
};

export default Privacy;
