import { useState } from "react";

import styles from "./ReviewBottomSlide.module.scss";

import CloseIcon from "@/assets/close.svg?react";

import DateWrapper from "./DateWrapper/DateWrapper";
import ImagesWrapper from "./ImagesWrapper/ImagesWrapper";
import InputWrapper from "./InputWrapper/InputWrapper";
import StarsWrapper from "./StarsWrapper/StarsWrapper";

import { ReviewBottomSlideProps } from "@/types/detail";

function ReviewBottomSlide({ onClose }: ReviewBottomSlideProps) {
  const [isValuedInput, setIsValuedInput] = useState<boolean>(false);
  const [isValuedCount, setIsValuedCount] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <button onClick={onClose} className={styles.container__top__icon}>
          <CloseIcon width="2rem" height="2rem" />
        </button>
        <div className={styles.container__top__title}>롯데시티 호텔</div>
      </div>
      <StarsWrapper setIsValuedCount={setIsValuedCount} />
      <DateWrapper />
      <InputWrapper setIsValuedInput={setIsValuedInput} />
      <ImagesWrapper />
      <button
        className={styles.container__addBtn}
        style={
          isValuedInput && isValuedCount
            ? { backgroundColor: "#2388FF", color: "#FFFFFF" }
            : { backgroundColor: "#E3E5E5", color: "#979C9E" }
        }
      >
        리뷰 등록
      </button>
    </div>
  );
}

export default ReviewBottomSlide;
