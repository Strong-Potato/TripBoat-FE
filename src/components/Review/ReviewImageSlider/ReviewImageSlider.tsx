import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from "./ReviewImageSlider.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

function ReviewImageSlider({ images }: { images: string[] }) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  return (
    <div className={styles.container}>
      <div
        className={styles.container__leftBtn}
        style={{ display: slideLocation === 0 ? "none" : "block" }}
        onClick={() => {
          setSlideLocation(slideLocation + 84);
        }}
      >
        <AiOutlineLeft className={styles.container__leftBtn__icon} />
      </div>
      <div
        className={styles.container__rightBtn}
        style={{
          display:
            -slideLocation >= 84 * images.length - 1 - size.width
              ? "none"
              : "block",
        }}
        onClick={() => {
          setSlideLocation(slideLocation - 84);
        }}
      >
        <AiOutlineRight className={styles.container__rightBtn__icon} />
      </div>
      <div
        className={styles.container__imgWrapper}
        style={{ left: slideLocation + "px" }}
        ref={componentRef}
      >
        {images.map((data) => (
          <img src={data} />
        ))}
      </div>
    </div>
  );
}

export default ReviewImageSlider;
