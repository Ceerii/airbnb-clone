import Body from './body';
import Footer from './footer';
import Header from './header';
import TabsComponent from './tabs';
import React from 'react';
import FixedContainerFooter from './fixedContainerFooter';
import {useInView} from 'react-intersection-observer';

function Home() {
  const [tabName, setTabName] = React.useState('OMG');
  const [scrollY, setScrollY] = React.useState(0);
  const [fixedBar, setFixedBar] = React.useState(true);
  const [isMapShowing, setIsMapShowing] = React.useState(false);
  const [hideArea, setHideArea] = React.useState(false);
  const [hideLargeFixedFooter, setHideLargeFixedFooter] = React.useState(false);
  const [tabListingNumber, setTabListingNumber] = React.useState(0);
  let scrollContainer = React.useRef(null);

  const [ref1, inView1] = useInView({
    threshold: 0,
  });
  const [ref2, inView2] = useInView({
    threshold: 0,
  });

  const imgRef = React.useRef(null);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    if (imgRef.current?.complete) {
      handleLoad();
    }
  }, []);

  function handleLoad(e) {
    setLoading(false);
  }

  function checkWindowScrolling() {
    setScrollY(scrollContainer.current.scrollTop);
    if (inView1 || inView2) {
      setHideArea(true);
      setHideLargeFixedFooter(true);
    } else {
      setHideArea(false);
      setHideLargeFixedFooter(false);
    }
    if (scrollContainer.current.scrollTop < scrollY) {
      if (scrollContainer.current.scrollTop === 0) {
        setHideArea(true);
      }
      setFixedBar(true);
    } else {
      setFixedBar(false);
    }
  }
  return (
    <div
      className='container'
      onScroll={checkWindowScrolling}
      ref={scrollContainer}
    >
      <FixedContainerFooter
        setIsMapShowing={setIsMapShowing}
        isMapShowing={isMapShowing}
        tabListingNumber={tabListingNumber}
        setTabListingNumber={setTabListingNumber}
        isShowing={fixedBar}
        hideArea={hideArea}
        hideLargeFixedFooter={hideLargeFixedFooter}
        tabName={tabName}
      />
      <div style={{position: 'relative'}}>
        <div className='container-top'>
          <Header loading={loading} />
          <TabsComponent
            setTabName={setTabName}
            loading={loading}
            setTabListingNumber={setTabListingNumber}
          />
        </div>
        <Body
          isMapShowing={isMapShowing}
          tabName={tabName}
          watchElement={ref1}
          loading={loading}
          handleLoad={handleLoad}
          imgRef={imgRef}
        />
      </div>
      <Footer watchElement={ref2} isMapShowing={isMapShowing} />
    </div>
  );
}

export default Home;
