import styles from "./Main.module.scss";

import ImageSwiper from "./ImageSwiper/Swiper";
import Title from "./Title/Title";

import { MainProps } from "@/types/detail";

function Main({ openToast }: MainProps) {
  return (
    <div className={styles.container}>
      <ImageSwiper />
      <Title openToast={openToast} />
    </div>
  );
}

export default Main;
