import styles from "./SwiperIndex.module.scss";

import { SwiperIndexPropsType } from "@/types/detail";

function SwiperIndex({ imageIndex, imageLength }: SwiperIndexPropsType) {
  return (
    <div className={styles.container}>
      <span>{imageIndex}</span>
      <span>/</span>
      <span>{imageLength}</span>
    </div>
  );
}

export default SwiperIndex;
