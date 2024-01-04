import Footer from '@app/components/Footer';
import BreadCrumbs from '@app/components/Help/BreadCrumbs';
import MoreHelp from '@app/components/Help/MoreHelp';
import PrintButton from '@app/components/PrintButton';
import ThinNav from '@app/components/ThinNav';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type LayoutProps = {
  children: React.ReactNode;
};

const HelpPages = ({ children }: LayoutProps) => {
  return (
    <>
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
      {children}
      <MoreHelp />
      <Footer />
    </>
  );
};

export default HelpPages;
