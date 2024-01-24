import {CustomOverlayMap, Map, Polyline} from 'react-kakao-maps-sdk';

import styles from './MapInTrip.module.scss';

import MapPinCommon from '@/components/CandidatesMap/MapPins/MapPinCommon';

import {MapInTripProps} from '@/types/route';

function MapInTrip({mapRef, center}: MapInTripProps) {
  const linePath = [
    {lat: 37.76437082535426, lng: 128.87675285339355},
    {lat: 37.7911054, lng: 128.9149116},
    {lat: 37.6964635, lng: 128.890664},
  ];

  return (
    <Map className={styles.mapInTripContainer} center={center} level={10} ref={mapRef}>
      <Polyline path={linePath} strokeWeight={3} strokeColor='#3F444D' strokeOpacity={1} strokeStyle='dashed' />
      {linePath.map((item, index) => (
        <CustomOverlayMap position={item}>
          <div>
            <MapPinCommon number={index + 1} />
          </div>
        </CustomOverlayMap>
      ))}
    </Map>
  );
}

export default MapInTrip;
