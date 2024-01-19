import {useState} from 'react';

import styles from './RecommendedLocationList.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import RecommendedLocation from './RecommendedLocation/RecommendedLocation';

import {LocationDataType} from '@/types/home';

function RecommendedLocationList() {
  const [data, setData] = useState<LocationDataType[]>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  const recommendedLocation = [
    {
      location: '제주',
      imageURL: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg',
    },
    {
      location: '부산',
      imageURL: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg',
    },
    {
      location: '강릉',
      imageURL: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg',
    },
    {
      location: '서울',
      imageURL: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg',
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
