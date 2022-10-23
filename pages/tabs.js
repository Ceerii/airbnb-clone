import {tabHeaderNameData} from '../public/data/tabHeaderName';
import React from 'react';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';
import {data} from '../public/data/airbnbData';

function TabsComponent({setTabName, loading, setTabListingNumber}) {
  let scrollContainer = React.useRef(null);
  const [scrollNumber, setScrollNumber] = React.useState(0);
  const [scrollEnd, setScrollEnd] = React.useState(false);

  const [active, setActiveIndex] = React.useState(0);
  function handleActiveTabIndex(index, tabName) {
    const numberOfListings = data.filter(
      (value) => value.outlet === tabName
    ).length;
    setActiveIndex(index);
    setTabName(tabName);
    setTabListingNumber(numberOfListings);
  }
  function handleScroll(amountToScroll) {
    scrollContainer.current.scrollLeft += amountToScroll;
    setScrollNumber(scrollNumber + amountToScroll);

    if (
      Math.floor(
        scrollContainer.current.scrollWidth - scrollContainer.current.scrollLeft
      ) <= scrollContainer.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  }

  function scrollCheck() {
    setScrollNumber(scrollContainer.current.scrollLeft);
    if (
      Math.floor(
        scrollContainer.current.scrollWidth - scrollContainer.current.scrollLeft
      ) <= scrollContainer.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  }

  return (
    <div className='tab-container'>
      <div className={loading ? 'tab-header loading' : 'tab-header'}>
        {scrollNumber !== 0 && (
          <div className='tab-scroll-left'>
            <div onClick={() => handleScroll(-200)} className='pointer'>
              <FaChevronLeft className='scroll-icon' />
            </div>
          </div>
        )}
        <div
          className='react-tabs'
          ref={scrollContainer}
          onScroll={scrollCheck}
        >
          <ul className='react-tabs__tab-list'>
            {tabHeaderNameData.map((data, index) => (
              <li key={'tab' + index}>
                <div
                  style={{borderBottom: loading ? 'none' : ''}}
                  onClick={() => handleActiveTabIndex(index, data.type)}
                  className={active === index ? 'tab-link active' : 'tab-link '}
                >
                  {loading ? (
                    <Skeleton
                      circle={true}
                      style={{
                        width: '28px',
                        height: '28px',
                        marginBottom: '4px',
                      }}
                    />
                  ) : (
                    <img
                      alt='header-image'
                      className='pointer'
                      src={
                        active === index ? data.activeIcon : data.inactiveIcon
                      }
                    />
                  )}
                  {loading ? (
                    <Skeleton style={{width: '40px'}} />
                  ) : (
                    <p
                      className={
                        active === index
                          ? 'tab-title active pointer'
                          : 'tab-title pointer'
                      }
                    >
                      {data.type}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {!scrollEnd && (
          <div className='tab-scroll-right'>
            <div onClick={() => handleScroll(+200)} className='pointer'>
              <FaChevronRight className='scroll-icon' />
            </div>
          </div>
        )}
      </div>
      <div className='tab-button'>
        <div className='filter-button pointer'>
          <img src='/images/filter.svg' height={10.5} alt='filter-icon' />
          {loading ? (
            <Skeleton style={{width: '40px', marginLeft: '8px'}} />
          ) : (
            <p>Filters</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabsComponent;
