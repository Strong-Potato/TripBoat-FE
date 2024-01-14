import styles from "./Main.module.scss";

import ImageSwiper from "./ImageSwiper/Swiper";
import Title from "./Title/Title";

function Main() {
  return (
    <div className={styles.container}>
      <ImageSwiper />
      <Title />
    </div>
  );
}

export default Main;
