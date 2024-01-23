import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useSwiper } from "swiper/react";

import styles from "./SwiperButton.module.scss";

import { SwiperButtonPropsType } from "@/types/detail";

function SwiperButton({ imageIndex, imageLength }: SwiperButtonPropsType) {
  const swiper = useSwiper();

  return (
    <div className={styles.container}>
      <button
        className={styles.container__prevBtn}
        onClick={() => {
          swiper.slidePrev();
        }}
        style={imageIndex <= 0 ? { display: "none" } : { display: "block" }}
      >
        <AiOutlineLeft className={styles.container__icon} />
      </button>
      <button
        className={styles.container__nextBtn}
        onClick={() => {
          swiper.slideNext();
        }}
        style={
          imageIndex >= imageLength - 1
            ? { display: "none" }
            : { display: "block" }
        }
      >
        <AiOutlineRight className={styles.container__icon} />
      </button>

      <div></div>
    </div>
  );
}

export default SwiperButton;
