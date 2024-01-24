import {Navigation} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';

import styles from './VoteRecommendList.module.scss';

import VoteRecommendItem from './VoteRecommendItem/VoteRecommendItem';

// 후보지&여행지 X -> 상품 추천 없음

const VoteRecommendList = ({state, isCandidateSelecting}: {state: string; isCandidateSelecting: boolean}) => {
  return (
    <div className={styles.container}>
      {isCandidateSelecting && <div className={styles.dimmedOverlay} />}
      <p className={styles.container__title}>이런 카페는 어때요?</p>

      <Swiper slidesPerView={2} navigation={true} modules={[Navigation]} breakpoints={{400: {slidesPerView: 2.4}}}>
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
      </Swiper>
    </div>
  );
};

export default VoteRecommendList;
