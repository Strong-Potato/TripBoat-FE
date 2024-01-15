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
  buttonSize,
}: SlideButtonPropsType) {
  return (
    <div
      className={styles.container}
      style={{ display: slideSize.width < 449 ? "none" : "block" }}
    >
      <LeftButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={itemWidth}
        flexGap={flexGap}
        buttonSize={buttonSize}
      />
      <RightButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={itemWidth}
        flexGap={flexGap}
        itemNumber={itemNumber}
        slideSize={slideSize}
        buttonSize={buttonSize}
      />
    </div>
  );
}

export default SlideButton;
