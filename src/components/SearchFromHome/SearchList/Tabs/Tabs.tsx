import {useEffect, useState} from 'react';

import styles from './Tabs.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import {translateCategoryToStr} from '@/utils/translateSearchData';

import Tab from './Tab/Tab';

import {ForSearchType, SearchItemType} from '@/types/home';
import {WishFilterType} from '@/types/wish';

interface PropsType {
  data: SearchItemType[] | undefined;
  forSearch?: ForSearchType | undefined;
  wishFilter?: WishFilterType | undefined;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
}

function Tabs({data, forSearch = undefined, wishFilter = undefined, setCategoryChange}: PropsType) {
  const [category, setCategory] = useState<string[]>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  useEffect(() => {
    if (data) {
      const dataCategory: string[] = [];
      data.map((data) => {
        const categoryData = translateCategoryToStr(data.contentTypeId);
        if (categoryData !== '전체') {
          dataCategory.push(categoryData);
        }
      });
      const set = new Set(dataCategory);
      const push = ['전체', ...set];
      setCategory(push);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      {category && (
        <SlideButton
          slideLocation={slideLocation}
          setSlideLocation={setSlideLocation}
          itemWidth={90}
          flexGap={0}
          itemNumber={category?.length}
          slideSize={size}
          buttonSize={24}
        />
      )}
      <div
        className={styles.tabs}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? 'scroll' : 'visible',
          left: slideLocation + 'px',
        }}
      >
        {category &&
          category.map((thisCategory) => (
            <Tab
              forSearch={forSearch}
              wishFilter={wishFilter}
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
