import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styles from "./Swiper.module.scss";

import SwiperButton from "./SwiperButton/SwiperButton";
import SwiperIndex from "./SwiperIndex/SwiperIndex";

const image =
  "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg";

function ImageSwiper() {
  const images = new Array(6).fill(image);
  const [imageIndex, setImageIndex] = useState<number>(1);

  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      className={styles.container}
      onActiveIndexChange={(swiper) => {
        setImageIndex(swiper.activeIndex + 1);
      }}
    >
      {images.map((data) => (
        <SwiperSlide className={styles.container__swiperSlide}>
          <img src={data} alt="#" />
        </SwiperSlide>
      ))}
      <SwiperButton
        setImageIndex={setImageIndex}
        imageIndex={imageIndex}
        imageLength={images.length}
      />
      <SwiperIndex imageIndex={imageIndex} imageLength={images.length} />
    </Swiper>
  );
}

export default ImageSwiper;
