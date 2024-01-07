import styles from "./SlideButton.module.scss";

import LeftButton from "./LeftButton/LeftButton";
import RightButton from "./RightButton/RightButton";

import { SlideButtonPropsType } from "@/types/home";

function SlideButton({
  slideLocation,
  setSlideLocation,
  itemWidth,
  itemNumber,
  slideSize,
  flexGap,
}: SlideButtonPropsType) {
  return (
    <div
      className={styles.container}
      style={{ display: slideSize.width < 450 ? "none" : "block" }}
    >
      <LeftButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={itemWidth}
        flexGap={flexGap}
      />
      <RightButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={itemWidth}
        flexGap={flexGap}
        itemNumber={itemNumber}
        slideSize={slideSize}
      />
    </div>
  );
}

export default SlideButton;
