import {CustomOverlayMap, Map, Polyline} from 'react-kakao-maps-sdk';

import styles from './MapInTrip.module.scss';

import MapPinCommon from '@/components/CandidatesMap/MapPins/MapPinCommon';

import {MapInTripProps} from '@/types/route';

function MapInTrip({mapRef, center, journeysData}: MapInTripProps) {
  // TODO: active day 동선 보여주기
  const linePath = journeysData?.journeys[0]?.places?.map((place) => ({
    lat: place.place.latitude,
    lng: place.place.longitude,
  }));

  return (
    <Map className={styles.mapInTripContainer} center={center} level={1} ref={mapRef}>
      <Polyline path={linePath} strokeWeight={3} strokeColor='#3F444D' strokeOpacity={10} strokeStyle='dashed' />
      {linePath?.map((item, index) => (
        <CustomOverlayMap key={journeysData?.journeys[index]?.journeyId} position={item}>
          <div>
            <MapPinCommon number={index + 1} />
          </div>
        </CustomOverlayMap>
      ))}
    </Map>
  );
}

export default MapInTrip;
