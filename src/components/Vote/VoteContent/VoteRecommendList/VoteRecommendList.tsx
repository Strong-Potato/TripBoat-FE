import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";

import styles from "./VoteRecommendList.module.scss";

import VoteRecommendItem from "./VoteRecommendItem/VoteRecommendItem";

const VoteRecommendList = () => {
  return (
    <div className={styles.container}>
      <p className={styles.container__title}>이런 카페는 어때요?</p>

      <Swiper
        slidesPerView={2}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{ 400: { slidesPerView: 2.4 } }}
      >
        <SwiperSlide>
          <VoteRecommendItem />
        </SwiperSlide>
        <SwiperSlide>
          <VoteRecommendItem />
        </SwiperSlide>
        <SwiperSlide>
          <VoteRecommendItem />
        </SwiperSlide>
        <SwiperSlide>
          <VoteRecommendItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VoteRecommendList;
