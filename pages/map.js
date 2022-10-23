import {useJsApiLoader, GoogleMap, InfoBox} from '@react-google-maps/api';
import Skeleton from 'react-loading-skeleton';
import {data} from '../public/data/airbnbData';

function Map({tabName}) {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  if (!isLoaded) {
    return <Skeleton />;
  }

  const center = {lat: 48.8584, lng: 2.2945};
  return (
    <GoogleMap
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullScreenControl: false,
      }}
      center={center}
      zoom={2}
      mapContainerStyle={{
        width: '100vw',
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
      }}
    >
      {data.map((val, index) => (
        <>
          {val.outlet === tabName ? (
            <InfoBox position={{lat: val.lat, lng: val.lng}}>
              <div
                style={{
                  backgroundColor: 'white',
                  padding: '0px 8px',
                  height: 28,
                  boxShadow:
                    'rgb(255 255 255 / 18%) 0px 0px 0px 1px inset, rgb(0 0 0 / 18%) 0px 2px 4px',
                  borderRadius: 28,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{fontSize: 14, fontColor: `#222222`, fontWeight: 800}}
                >
                  ${val.price}
                </div>
              </div>
            </InfoBox>
          ) : null}
        </>
      ))}
    </GoogleMap>
  );
}

export default Map;
