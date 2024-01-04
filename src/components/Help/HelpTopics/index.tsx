import GettingStarted from '@app/components/Help/HelpTopics/GettingStarted';
import ManageAccount from '@app/components/Help/HelpTopics/ManageAccount';
import QuickLinks from '@app/components/Help/HelpTopics/QuickLinks';
import WatchingUs from '@app/components/Help/HelpTopics/WatchingUs';

const HelpTopics = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 mt-3 mb-5">
        <GettingStarted />
        <ManageAccount />
        <WatchingUs />
        <QuickLinks />
      </div>
    </>
  );
};

export default HelpTopics;
