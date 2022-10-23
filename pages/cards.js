import {data} from '../public/data/airbnbData';
import {AiFillStar} from 'react-icons/ai';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination, Navigation} from 'swiper';
import {FiHeart} from 'react-icons/fi';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

function Cards({tabName, loading, imgRef, handleLoad}) {
  const [listings, setListings] = React.useState(data);

  function handleLike(index) {
    const specificLike = listings.map((item) => {
      if (item.id === index + 1) {
        return {...item, liked: !item.liked};
      }
      return item;
    });
    setListings(specificLike);
  }

  return (
    <div className='card-list-wrap'>
      <div className='card-list'>
        {listings.map((item, index) => (
          <React.Fragment key={'card-item' + index}>
            {item.outlet === tabName ? (
              <div className='card-list-item'>
                <div className='listing-images pointer'>
                  {!loading ? (
                    <div
                      className='listing-like'
                      onClick={() => handleLike(index)}
                    >
                      <FiHeart
                        className='bs-like-icon pointer'
                        style={{fill: item.liked ? '#FF5A5F' : '#3B4D60'}}
                      />
                    </div>
                  ) : null}
                  <Swiper
                    pagination={{
                      dynamicBullets: true,
                    }}
                    slidesPerView={1}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className='mySwiper'
                  >
                    {item.images.map((data, i) => (
                      <SwiperSlide key={'image' + i}>
                        {loading && (
                          <Skeleton
                            style={{
                              width: '100%',
                              height: '100%',
                              borderRadius: '12px',
                              top: '-2px',
                            }}
                          />
                        )}
                        <img
                          ref={imgRef}
                          src={loading ? '' : data}
                          alt='house-image'
                          onLoad={(e) => handleLoad(e)}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className='listing-content'>
                  <div className='listing-info'>
                    {loading ? (
                      <Skeleton style={{width: ' 200px'}} />
                    ) : (
                      <p className='listing-location pointer'>
                        {item.location}, {item.state}
                      </p>
                    )}
                    {loading ? (
                      <Skeleton style={{width: ' 40px'}} />
                    ) : (
                      <p className='listing-rating '>
                        <AiFillStar />
                        {item.rating}
                      </p>
                    )}
                  </div>

                  {loading ? (
                    <Skeleton style={{width: ' 100px'}} />
                  ) : (
                    <p className='listing-host'>Hosted by {item.first_name}</p>
                  )}
                  {loading ? (
                    <Skeleton count={2} style={{width: ' 65px'}} />
                  ) : (
                    <>
                      {' '}
                      <p className='listing-date'>
                        {item.month} {item.start_date} - {item.end_date}
                      </p>
                      <p className='listing-price'>
                        <span>${item.price}</span> night
                      </p>
                    </>
                  )}
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
      <div className='dummy-card-show-more'>
        <p>Continue exploring {tabName}</p>
        <button>Show more</button>
      </div>
    </div>
  );
}

export default Cards;
