import {useState} from 'react';

import styles from './RecommendedLocationList.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import RecommendedLocation from './RecommendedLocation/RecommendedLocation';

function RecommendedLocationList() {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  const recommendedLocation = [
    {
      location: '제주',
      imageURL:
        'https://images.unsplash.com/photo-1579169326371-ccb4e63f7889?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      location: '부산',
      imageURL:
        'https://images.unsplash.com/photo-1578037571214-25e07ed4a487?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      location: '강릉',
      imageURL:
        'https://images.unsplash.com/photo-1621044332832-717d5d986ab7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      location: '속초',
      imageURL:
        'https://images.unsplash.com/photo-1663949405336-e142646d9fbd?q=80&w=2697&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      location: '경주',
      imageURL:
        'https://images.unsplash.com/photo-1656980593245-b54c8c0828f0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      location: '여수',
      imageURL:
        'https://images.unsplash.com/photo-1651375562199-65caae096ace?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      location: '전주',
      imageURL:
        'https://images.unsplash.com/photo-1544827503-673e2a2c4c00?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JUVDJUEwJTg0JUVDJUEzJUJDfGVufDB8fDB8fHww',
    },
  ];

  return (
    <div className={styles.container}>
      <SlideButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={122}
        flexGap={8}
        itemNumber={recommendedLocation.length}
        slideSize={size}
      />

      <div
        className={styles.slide_box}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {recommendedLocation.map((data, i) => (
          <RecommendedLocation data={data} key={data.location + i} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedLocationList;
