import {inspirationTabHeaderNameData} from '../public/data/inspirationTabHeaderName';
import React from 'react';
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa';
import {inspirationSitesData} from '../public/data/inspirationSites';
import Skeleton from 'react-loading-skeleton';

function Inspiration({watchElement, loading}) {
  let scrollContainer = React.useRef(null);
  const [scrollNumber, setScrollNumber] = React.useState(0);
  const [scrollEnd, setScrollEnd] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const [outletName, setOutletName] = React.useState(
    'Destinations for arts & culture'
  );

  const [active, setActiveIndex] = React.useState(0);
  function handleActiveTabIndex(index, name) {
    setActiveIndex(index);
    setOutletName(name);
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
    <div className='inspiration-container' ref={watchElement}>
      <h4>Inspiration for future getaways</h4>
      <div className='inspiration-tab-container'>
        <div
          className={
            loading
              ? 'inspiration-tab-header loading'
              : 'inspiration-tab-header'
          }
        >
          {scrollNumber !== 0 && (
            <div className='inspiration-tab-scroll-left'>
              <div onClick={() => handleScroll(-200)}>
                <FaChevronLeft className='scroll-icon' />
              </div>
            </div>
          )}
          <div
            className='react-tabs'
            ref={scrollContainer}
            onScroll={scrollCheck}
          >
            <ul className='inspiration-tab-list'>
              {inspirationTabHeaderNameData.map((data, index) => (
                <li className='inspiration-tab-list-item' key={'tab' + index}>
                  <div
                    onClick={() => handleActiveTabIndex(index, data.name)}
                    className={
                      active === index
                        ? 'tab-link active pointer'
                        : 'tab-link pointer'
                    }
                    style={{
                      borderBottom: loading ? 'none' : '',
                    }}
                  >
                    {loading ? (
                      <Skeleton style={{width: '120px', marginRight: '12px'}} />
                    ) : (
                      <p
                        className={
                          active === index ? 'tab-title active' : 'tab-title'
                        }
                      >
                        {data.name}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {!scrollEnd && (
            <div className='inspiration-tab-scroll-right'>
              <div onClick={() => handleScroll(+200)}>
                <FaChevronRight className='scroll-icon' />
              </div>
            </div>
          )}
        </div>
        {inspirationSitesData[outletName].length > 11 && showMore ? (
          <div className='inspiration-tab-content'>
            {inspirationSitesData[outletName].map((item, index) => (
              <React.Fragment key={'inspiration' + index}>
                <div className='inspiration-tab-content-item'>
                  {loading ? (
                    <Skeleton style={{width: '60px'}} />
                  ) : (
                    <h6 className='pointer'>{item.title}</h6>
                  )}
                  {loading ? (
                    <Skeleton style={{width: '40px'}} />
                  ) : (
                    <p className='pointer'>{item.subtitle}</p>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        ) : (
          <div className='inspiration-tab-content'>
            {inspirationSitesData[outletName]
              .slice(0, 11)
              .map((item, index) => (
                <React.Fragment key={'inspiration-content' + index}>
                  <div className='inspiration-tab-content-item'>
                    {loading ? (
                      <Skeleton style={{width: '60px'}} />
                    ) : (
                      <h6 className='pointer'>{item.title}</h6>
                    )}
                    {loading ? (
                      <Skeleton style={{width: '40px'}} />
                    ) : (
                      <p className='pointer'>{item.subtitle}</p>
                    )}
                  </div>
                </React.Fragment>
              ))}

            {inspirationSitesData[outletName].length > 11 ? (
              <div
                onClick={() => setShowMore(true)}
                className='show-more-sites'
              >
                {loading ? (
                  <Skeleton style={{width: '40px'}} />
                ) : (
                  <p className='pointer'>Show More</p>
                )}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default Inspiration;
