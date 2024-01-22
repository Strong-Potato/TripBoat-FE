import { useDisclosure } from "@chakra-ui/react";
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
import SlideModal from "../SlideModal/SlideModal";

const image =
  "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg";

function ImageSwiper() {
  const images = new Array(6).fill(image);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        className={styles.container}
        onActiveIndexChange={(swiperCore) => {
          setImageIndex(swiperCore.activeIndex);
        }}
      >
        {images.map((data) => (
          <SwiperSlide
            className={styles.container__swiperSlide}
            onClick={onOpen}
          >
            <img src={data} alt="#" />
          </SwiperSlide>
        ))}
        <SwiperButton imageIndex={imageIndex} imageLength={images.length} />
        <SwiperIndex imageIndex={imageIndex} imageLength={images.length} />
      </Swiper>
      <SlideModal
        isOpen={isOpen}
        onClose={onClose}
        images={images}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      />
    </>
  );
}

export default ImageSwiper;
