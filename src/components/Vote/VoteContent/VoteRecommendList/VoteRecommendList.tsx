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

// 후보지&여행지 X -> 상품 추천 없음
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
  // 저 keyword자리에 A5480380 이런 것을 넣고 categorycode를 keywordSearch의 '카페'자리에 넣어주시고 title에 이런 ${category}는 어때요? 해주시면 완성되는 로직...
  // const categoryCode = translateCategoryName(keyword);

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
          {data && data.map((data) => <VoteRecommendItem data={data} state={state} />)}
        </div>
      </div>
      {/* <Swiper slidesPerView={2} navigation={true} modules={[Navigation]} breakpoints={{400: {slidesPerView: 2.4}}}>
        <SwiperSlide>
          <VoteRecommendItem state={state} />
        </SwiperSlide>
        <SwiperSlide>
          <VoteRecommendItem state={state} />
        </SwiperSlide>
        <SwiperSlide>
          <VoteRecommendItem state={state} />
        </SwiperSlide>
        <SwiperSlide>
          <VoteRecommendItem state={state} />
        </SwiperSlide>
      </Swiper> */}
    </div>
  );
};

export default VoteRecommendList;
