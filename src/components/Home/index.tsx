import { useEffect } from 'react';
import HomeNavbar from '@app/components/Home/HomeNavbar';
import PromoSection from '@app/components/Home/PromoSection';
import RequestSection from '@app/components/Home/RequestSection';
import WatchingSection from '@app/components/Home/WatchingSection';
import ServicesSection from '@app/components/Home/ServicesSection';
import DevicesSection from '@app/components/Home/DevicesSection';
import FAQSection from '@app/components/Home/FAQSection';
import Footer from '@app/components/Footer';
import CookiesBanner from '@app/components/CookiesBanner';

const Setup = () => {
  useEffect(() => {
    document.body.classList.add('body-purple');
  }, []);
  return (
    <>
      <HomeNavbar />
      <main className="m-0 p-0">
        <PromoSection />
        <RequestSection />
        <WatchingSection />
        <ServicesSection />
        <DevicesSection />
        <FAQSection />
      </main>
      <div className="container-fluid pe-none fixed-bottom">
        <CookiesBanner />
      </div>
      <Footer />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
        integrity="sha256-gOQJIa9+K/XdfAuBkg2ONAdw5EnQbokw/s2b8BqsRFg="
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default Setup;
