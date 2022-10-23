import {ImMap} from 'react-icons/im';
import {BiUserCircle, BiSearch} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import React from 'react';
import {TbWorld} from 'react-icons/tb';
import {FaChevronUp} from 'react-icons/fa';
import {data} from '../public/data/airbnbData';
import {BsListUl} from 'react-icons/bs';

function FixedContainerFooter({
  isShowing,
  hideArea,
  hideLargeFixedFooter,
  isMapShowing,
  setIsMapShowing,
  tabName,
  tabListingNumber,
  setTabListingNumber,
}) {
  const [active, setActive] = React.useState(0);

  function handleClick(index) {
    setActive(index);
  }

  function showMap() {
    setIsMapShowing(true);
    const numberOfListings = data.filter(
      (value) => value.outlet === tabName
    ).length;
    setTabListingNumber(numberOfListings);
  }

  function showList() {
    setIsMapShowing(false);
  }
  return (
    <>
      {!isMapShowing ? (
        <div className='fixed-footer'>
          <div
            style={{
              height: hideArea ? '0' : '40px',
              opacity: hideArea ? '0' : '1',
            }}
            className='map-footer map-footer-sm'
          >
            <div onClick={showMap} className='map-button'>
              <p>
                Map <ImMap className='map-icon' />
              </p>
            </div>
          </div>
          <div
            style={{
              height: hideLargeFixedFooter ? '0' : '40px',
              opacity: hideLargeFixedFooter ? '0' : '1',
            }}
            className='map-footer map-footer-lg'
          >
            <div onClick={showMap} className='map-button'>
              <p>
                Show Map <ImMap className='map-icon' />
              </p>
            </div>
          </div>

          <div
            style={{height: isShowing ? '72px' : '0'}}
            className='explore-footer explore-footer-sm'
          >
            <div
              style={{height: isShowing ? '100%' : '0'}}
              onClick={() => handleClick(0)}
              className={
                active === 0
                  ? 'explore-footer-item active'
                  : 'explore-footer-item'
              }
            >
              <BiSearch className='explore-footer-icon' />
              <p className='explore-footer-title'>Explore</p>
            </div>
            <div
              style={{height: isShowing ? '100%' : '0'}}
              onClick={() => handleClick(1)}
              className={
                active === 1
                  ? 'explore-footer-item active'
                  : 'explore-footer-item'
              }
            >
              <AiOutlineHeart className='explore-footer-icon' />
              <p className='explore-footer-title'>Wishlists</p>
            </div>
            <div
              style={{height: isShowing ? '100%' : '0'}}
              onClick={() => handleClick(2)}
              className={
                active === 2
                  ? 'explore-footer-item active'
                  : 'explore-footer-item'
              }
            >
              <BiUserCircle className='explore-footer-icon' />
              <p className='explore-footer-title'>Log in</p>
            </div>
          </div>
          <div
            style={{
              height: hideLargeFixedFooter ? '0px' : '72px',
              display: hideLargeFixedFooter ? 'none' : 'flex',
            }}
            className='explore-footer explore-footer-lg'
          >
            <div className='footer-copyright'>
              <p>© 2022 Airbnb, Inc.</p>
              <p className='pointer'>
                Privacy <span>.</span> Terms <span>.</span> Sitemap{' '}
                <span>.</span> Destinations
              </p>
            </div>
            <div className='footer-expand'>
              <div className='footer-bottom-language'>
                <span className='footer-bottom-bold-item pointer'>
                  <TbWorld className='footer-bottom-icon ' /> English (US)
                </span>
                <span className='footer-bottom-bold-item pointer'>$ USD</span>
                <span className='footer-bottom-bold-item pointer'>
                  Support & Resources{' '}
                  <FaChevronUp className='footer-bottom-icon' />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div onClick={showList} className='google-map-holder'>
            <div className='google-map-load-bar'></div>
            <p>
              {tabListingNumber} {tabName}
            </p>
          </div>
          <div className='google-map-footer'>
            <div onClick={showList} className='map-button'>
              <p>
                Show list <BsListUl className='map-icon' />
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FixedContainerFooter;
