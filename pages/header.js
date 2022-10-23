import {FaSearch, FaAirbnb} from 'react-icons/fa';
import {GoThreeBars} from 'react-icons/go';
import {TbWorld} from 'react-icons/tb';
import {IoPersonCircle} from 'react-icons/io5';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Header({loading}) {
  return (
    <div className='navbar'>
      <div className='navbar-sm-screen'>
        <div className='navbar-search-bar'>
          <div className='navbar-search-input'>
            <FaSearch className='navbar-search-icon' />
            {loading ? (
              <Skeleton style={{width: '80px'}} />
            ) : (
              <div className='navbar-search-input-small'>
                <p className='navbar-search-title'>Where to?</p>
                <p className='navbar-search-subtitle'>
                  Anywhere <span>•</span> Any week <span>•</span> Add guests
                </p>
              </div>
            )}
          </div>
          <div className='navbar-filter-icon'>
            <img src='/images/filter.svg' height={12} alt='filter-icon' />
          </div>
        </div>
      </div>
      <div className='navbar-lg-screen'>
        <div className='navbar-logo pointer'>
          <FaAirbnb className='navbar-logo-icon' />
          <img
            alt='airbnb-logo'
            src='/images/Airbnb.png'
            width={90}
            className='navbar-logo-icon logo-full-icon'
          />
        </div>
        <div className='navbar-lg-search pointer'>
          <div className='search-bar-button search-bar-bold-button'>
            {loading ? (
              <Skeleton style={{width: '67px', margin: '0px 16px'}} />
            ) : (
              <p>Anywhere</p>
            )}
          </div>
          <div className='search-bar-button search-bar-bold-button'>
            {loading ? (
              <Skeleton style={{width: '67px', margin: '0px 16px'}} />
            ) : (
              <p>Any week</p>
            )}
          </div>
          <div className='search-bar-button'>
            {loading ? (
              <Skeleton style={{width: '75px', margin: '0px 16px'}} />
            ) : (
              <p>Add guests</p>
            )}
          </div>
          <div className='search-bar-button-icon'>
            <FaSearch className='search-icon' />
          </div>
        </div>
        <div
          className='navbar-lg-profile'
          style={{justifyContent: !loading ? 'space-between' : 'flex-end'}}
        >
          {!loading ? (
            <>
              <p className='navbar-lg-host pointer'>Become a Host</p>
              <TbWorld className='navbar-lg-world-icon pointer' />
            </>
          ) : null}
          <div className='navbar-lg-profile-user'>
            <GoThreeBars className='user-profile-bars' />
            <IoPersonCircle className='user-profile-icon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
