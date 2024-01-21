import {useState} from 'react';

import styles from './Tabs.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import Tab from './Tab/Tab';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  setForSearch: React.Dispatch<React.SetStateAction<ForSearchType>>;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
}

function Tabs({forSearch, setForSearch, setCategoryChange}: PropsType) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();
  const thisCategory = ['전체', '맛집', '숙소', '관광지', '문화시설', '레포츠', '쇼핑'];

  return (
    <div className={styles.container}>
      <SlideButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={90}
        flexGap={0}
        itemNumber={thisCategory.length}
        slideSize={size}
        buttonSize={24}
      />
      <div
        className={styles.tabs}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {thisCategory.map((thisCategory) => (
          <Tab
            forSearch={forSearch}
            setForSearch={setForSearch}
            setCategoryChange={setCategoryChange}
            thisCategory={thisCategory}
            key={thisCategory}
          />
        ))}
      </div>
    </div>
  );
}

export default Tabs;
