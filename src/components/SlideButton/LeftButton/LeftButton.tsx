import { MdArrowBackIosNew } from "react-icons/md";

import styles from "./LeftButton.module.scss";

import { LeftButtonPropsType } from "@/types/home";

function LeftButton({
  slideLocation,
  setSlideLocation,
  itemWidth,
  flexGap,
}: LeftButtonPropsType) {
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
      style={{ display: slideLocation === 0 ? "none" : "block" }}
      onClick={handleButton}
    >
      <MdArrowBackIosNew className={styles.container__icon} />
    </button>
  );
}

export default LeftButton;
