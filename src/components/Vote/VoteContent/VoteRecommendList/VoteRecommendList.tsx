import {useEffect, useState} from 'react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from './VoteRecommendList.module.scss';

import useComponentSize from '@/hooks/useComponetSize';

import SlideButton from '@/components/SlideButton/SlideButton';

import {keywordSearch} from '@/api/search';
import {translateCategoryName} from '@/utils/translateSearchData';

import VoteRecommendItem from './VoteRecommendItem/VoteRecommendItem';

import {SearchItemType} from '@/types/home';

interface PropsType {
  state: string;
  isCandidateSelecting: boolean;
  categoryCode: string;
}

const VoteRecommendList = ({state, isCandidateSelecting, categoryCode}: PropsType) => {
  const [data, setData] = useState<SearchItemType[] | undefined>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();
  const category = translateCategoryName(categoryCode);

  async function getData() {
    const fetchData = await keywordSearch(category, '전국', '인기순', 0, 5);
    setData(fetchData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {isCandidateSelecting && <div className={styles.dimmedOverlay} />}
      <p className={styles.container__title}>이런 {category} 어때요?</p>
      <div className={styles.slide}>
        {data && (
          <SlideButton
            slideLocation={slideLocation}
            setSlideLocation={setSlideLocation}
            flexGap={16}
            itemWidth={144}
            itemNumber={data.length}
            slideSize={size}
          />
        )}
        <div
          className={styles.slide__list}
          ref={componentRef}
          style={{
            overflow: size.width < 449 ? 'scroll' : 'visible',
            left: slideLocation + 'px',
          }}
        >
          {data && data.map((data) => <VoteRecommendItem data={data} state={state} key={data.id} />)}
        </div>
      </div>
    </div>
  );
};

export default VoteRecommendList;
