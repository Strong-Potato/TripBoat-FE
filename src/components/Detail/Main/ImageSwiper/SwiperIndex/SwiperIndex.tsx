import styles from "./SwiperIndex.module.scss";

import { SwiperIndexPropsType } from "@/types/detail";

function SwiperIndex({ imageIndex, imageLength }: SwiperIndexPropsType) {
  return (
    <div className={styles.container}>
      <span>{imageIndex + 1}</span>
      <span>/</span>
      <span>{imageLength}</span>
    </div>
  );
}

export default SwiperIndex;
