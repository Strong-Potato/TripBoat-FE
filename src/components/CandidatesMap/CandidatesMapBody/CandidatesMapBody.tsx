import {useEffect, useRef, useState} from 'react';
import {CustomOverlayMap, Map} from 'react-kakao-maps-sdk';
import {SwiperRef} from 'swiper/react';

import styles from './CandidatesMapBody.module.scss';

import CandidatesSlide from '../CandidatesSlide/CandidatesSlide';
import MapPinActive from '../MapPins/MapPinActive';
import MapPinCommon from '../MapPins/MapPinCommon';

import {CandidatesMapBodyProps, LatLng} from '@/types/vote';

const CandidatesMapBody = ({candidates}: CandidatesMapBodyProps) => {
  const [centerMarker, setCenterMarker] = useState<LatLng>(candidates[0].placeInfo.latLng);
  const [selectedPinIndex, setSelectedPinIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    setCenterMarker(candidates[0].placeInfo.latLng);
  }, [candidates]);

  const handleMapMarkerClick = (latLng: LatLng, i: number) => {
    setCenterMarker(latLng);
    swiperRef.current?.swiper.slideTo(i);
    setSelectedPinIndex(i);
  };

  return (
    <div className={styles.container}>
      <Map className={styles.map} center={centerMarker} level={2}>
        {candidates.map((candidate, i) => (
          <CustomOverlayMap
            key={`${candidate.placeInfo.placeName}-${candidate.placeInfo.latLng}-${i}`}
            position={candidate.placeInfo.latLng}
          >
            <div
              className={`pin ${selectedPinIndex === i ? 'active' : ''}`}
              onClick={() => handleMapMarkerClick(candidate.placeInfo.latLng, i)}
            >
              {selectedPinIndex === i ? (
                <MapPinActive number={candidate.rank} />
              ) : (
                <MapPinCommon number={candidate.rank} />
              )}
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
      <CandidatesSlide
        candidates={candidates}
        setSelectedPinIndex={setSelectedPinIndex}
        setCenterMarker={setCenterMarker}
        swiperRef={swiperRef}
      />
    </div>
  );
};

export default CandidatesMapBody;
