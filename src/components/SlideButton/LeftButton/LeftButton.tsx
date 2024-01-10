import { MdArrowBackIosNew } from "react-icons/md";

import styles from "./LeftButton.module.scss";

import { LeftButtonPropsType } from "@/types/home";

function LeftButton({
  slideLocation,
  setSlideLocation,
  itemWidth,
  flexGap,
  buttonSize,
}: LeftButtonPropsType) {
  const buttonsSize = buttonSize ? buttonSize : 40;
  const iconSize = buttonSize ? buttonSize / 3 : undefined;

  function handleButton() {
    if (-itemWidth < slideLocation) {
      setSlideLocation(0);
    } else {
      setSlideLocation(slideLocation + itemWidth + flexGap);
    }
  }

  return (
    <button
      className={styles.container}
      style={{
        display: slideLocation === 0 ? "none" : "block",
        width: buttonsSize,
        height: buttonsSize,
        fontSize: iconSize && iconSize,
      }}
      onClick={handleButton}
    >
      <MdArrowBackIosNew className={styles.container__icon} />
    </button>
  );
}

export default LeftButton;
