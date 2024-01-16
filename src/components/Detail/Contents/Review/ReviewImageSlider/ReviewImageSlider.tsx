import { useState } from "react";

import styles from "./ReviewImageSlider.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

function ReviewImageSlider({ images }: { images: string[] }) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  return (
    <div className={styles.container}>
      {images && (
        <SlideButton
          // ref의 left값 state
          slideLocation={slideLocation}
          // left값 setState
          setSlideLocation={setSlideLocation}
          // 리스트 목록 아이템의 width
          itemWidth={76}
          // 리스트의 갭
          flexGap={8}
          // 아이템 갯수
          itemNumber={images.length}
          // 목록 전체 넓이
          slideSize={size}
        />
      )}
      <div
        className={styles.container__imgWrapper}
        ref={componentRef}
        style={{
          overflow: window.innerWidth < 450 ? "scroll" : "visible",
          left: slideLocation + "px",
        }}
      >
        {images.map((data) => (
          <img src={data} />
        ))}
      </div>
    </div>
  );
}

export default ReviewImageSlider;
