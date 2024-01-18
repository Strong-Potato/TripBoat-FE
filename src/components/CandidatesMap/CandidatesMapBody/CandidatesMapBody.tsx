import {useEffect, useRef, useState} from 'react';
import {CustomOverlayMap, Map} from 'react-kakao-maps-sdk';

import styles from './CandidatesMapBody.module.scss';

import CandidatesSlide from '../CandidatesSlide/CandidatesSlide';
import MapPinActive from '../MapPins/MapPinActive';
import MapPinNumber from '../MapPins/MapPinNumber';

import {CandidatesInfo, Latlng} from '@/types/vote';

const CandidatesMapBody = ({candidates}: {candidates: CandidatesInfo[]}) => {
  const [centerMarker, setCenterMarker] = useState(candidates[0].latlng);
  const [selectedPinIndex, setSelectedPinIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    setCenterMarker(candidates[0].latlng);
  }, []);

  const handleMapMarkerClick = (latlng: Latlng, i: number) => {
    setCenterMarker(latlng);
    swiperRef.current?.swiper.slideTo(i);
    setSelectedPinIndex(i);
  };

  return (
    <div className={styles.container}>
      <Map className={styles.map} center={centerMarker}>
        {candidates.map((candidate, i) => (
          <CustomOverlayMap key={`${candidate.placeName}-${candidate.latlng}-${i}`} position={candidate.latlng}>
            <div
              className={`pin ${selectedPinIndex === i ? 'active' : ''}`}
              onClick={() => handleMapMarkerClick(candidate.latlng, i)}
            >
              {selectedPinIndex === i ? <MapPinActive number={i + 1} /> : <MapPinNumber number={i + 1} />}
            </div>
          </CustomOverlayMap>
        ))}
      </Map>
      <CandidatesSlide candidates={candidates} setCenterMarker={setCenterMarker} swiperRef={swiperRef} />
    </div>
  );
};

export default CandidatesMapBody;
