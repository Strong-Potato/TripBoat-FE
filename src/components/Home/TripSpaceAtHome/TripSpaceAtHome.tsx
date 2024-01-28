import {useEffect, useState} from 'react';
import {Cookies} from 'react-cookie';

import styles from './TripSpaceAtHome.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import {getHomeTripSpace} from '@/api/home';

import NullTrip from './NullTrip/NullTrip';
import TripSpaceItem from './TripSpaceItem/TripSpaceItem';

import {TripSpaceData} from '@/types/home';

function TripSpaceAtHome() {
  const [data, setData] = useState<TripSpaceData[]>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();
  const cookie = new Cookies().get('isLogin');

  useEffect(() => {
    if (cookie) {
      getHomeTripSpace(setData);
    }
  }, []);

  return (
    <div className={styles.container}>
      {data && (
        <SlideButton
          slideLocation={slideLocation}
          setSlideLocation={setSlideLocation}
          itemWidth={323}
          flexGap={8}
          itemNumber={data.length}
          slideSize={size}
        />
      )}
      <div
        className={styles.slide_box}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {data && data.length > 0 ? data.map((data) => <TripSpaceItem data={data} key={data.id} />) : <NullTrip />}
      </div>
    </div>
  );
}

export default TripSpaceAtHome;
