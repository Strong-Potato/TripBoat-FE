import {useEffect, useState} from 'react';

import styles from './HotItems.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import {getPopularItem} from '@/api/search';

import HotItem from './HotItem/HotItem';

import {SearchHotItemType} from '@/types/home';

interface PropsType {
  type: number;
}

function HotItems({type}: PropsType) {
  const [data, setData] = useState<SearchHotItemType[] | undefined>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  useEffect(() => {
    getPopularItem(type, setData);
  }, [type]);
  return (
    <div className={styles.container}>
      {data && (
        <SlideButton
          slideLocation={slideLocation}
          setSlideLocation={setSlideLocation}
          itemWidth={106}
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
        {data && data.map((data, i) => <HotItem data={data} key={data.title + i} />)}
      </div>
    </div>
  );
}

export default HotItems;
