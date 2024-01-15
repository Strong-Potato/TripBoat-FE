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
      // slide 사이즈가 450이 아닌 경우가 있어 모바일 환경을 체크하기 위해 window의 width를 통해 버튼 보여짐
      style={{ display: window.innerWidth < 450 ? "none" : "block" }}
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
