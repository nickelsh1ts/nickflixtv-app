import PageTitle from '@app/components/Common/PageTitle';
import Footer from '@app/components/Footer';
import HelpBanner from '@app/components/Help/HelpBanner';
import HelpTopics from '@app/components/Help/HelpTopics';
import MoreHelp from '@app/components/Help/MoreHelp';
import PopularTopics from '@app/components/Help/PopularTopics';
import useSettings from '@app/hooks/useSettings';

const Help = () => {
  const settings = useSettings();
  const messages = {
    helpcentre: 'Help Centre',
    AppTitle: `${settings.currentSettings.applicationTitle}`,
  };

  return (
    <>
      <PageTitle title={messages.helpcentre} />
      <HelpBanner />
      <main className="container">
        <PopularTopics />
        <HelpTopics />
      </main>
      <MoreHelp />
      <Footer />
    </>
  );
};

export default Help;
