import Cards from './cards';
import Inspiration from './inspiration';
import Map from './map';

function Body({
  tabName,
  watchElement,
  loading,
  imgRef,
  handleLoad,
  isMapShowing,
}) {
  return (
    <div className='content'>
      {isMapShowing ? (
        <Map tabName={tabName} />
      ) : (
        <Cards
          tabName={tabName}
          loading={loading}
          imgRef={imgRef}
          handleLoad={handleLoad}
        />
      )}
      {!isMapShowing ? (
        <Inspiration watchElement={watchElement} loading={loading} />
      ) : null}
    </div>
  );
}

export default Body;
