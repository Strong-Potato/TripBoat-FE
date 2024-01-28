import {useParams} from 'react-router-dom';

import './MapZoomIn.module.scss';
import styles from './MapZoomIn.module.scss';

import {useGetJourneys, useGetSpace} from '@/hooks/Spaces/space';
import useGoBack from '@/hooks/useGoBack';

import RouteMapBody from '@/components/MapZoomIn/RouteMapBody/RouteMapBody';

import BackIcon from '@/assets/back.svg?react';

function MapZoomIn() {
  const goBack = useGoBack();
  const {id} = useParams();
  const {data: spaceData} = useGetSpace(Number(id));
  const {data: JourneyData} = useGetJourneys(Number(id));

  return (
    <div>
      <div className={styles.navigationTitleContainer}>
        <button onClick={goBack}>
          <BackIcon />
        </button>
        <h1>{spaceData?.data?.city} 여행</h1>
      </div>
      <RouteMapBody journeys={JourneyData?.data?.journeys} />
    </div>
  );
}

export default MapZoomIn;
