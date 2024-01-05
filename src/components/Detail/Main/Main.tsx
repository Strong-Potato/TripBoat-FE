import styles from "./Main.module.scss";

import Swiper from "./Swiper/Swiper";
import Title from "./Title/Title";

function Main() {
  return (
    <div className={styles.container}>
      <Swiper />
      <Title />
    </div>
  );
}

export default Main;
