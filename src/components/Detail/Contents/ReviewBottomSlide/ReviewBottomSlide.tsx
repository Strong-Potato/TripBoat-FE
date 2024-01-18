import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { useRecoilValue } from "recoil";

import styles from "./ReviewBottomSlide.module.scss";

import CloseIcon from "@/assets/close.svg?react";
import { DatePickerIsValued } from "@/recoil/detail/detail";

import DateBottomSlide from "./DateBottomSlide/DateBottomSlide";
import DateScrollPicker from "./DateScrollPicker/DateScrollPicker";
import DateWrapper from "./DateWrapper/DateWrapper";
import ImagesWrapper from "./ImagesWrapper/ImagesWrapper";
import InputWrapper from "./InputWrapper/InputWrapper";
import StarsWrapper from "./StarsWrapper/StarsWrapper";

import { ReviewBottomSlideProps } from "@/types/detail";

function ReviewBottomSlide({ slideOnClose }: ReviewBottomSlideProps) {
  const [isValuedInput, setIsValuedInput] = useState<boolean>(false);
  const [isValuedCount, setIsValuedCount] = useState<boolean>(false);
  const isValuedDate = useRecoilValue<boolean>(DatePickerIsValued);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bottomSlideContent, setBottomSlideContent] =
    useState<ReactNode | null>(null);

  const onBottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    onOpen();
    document.body.style.overflow = "hidden";
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__top}>
        <button
          onClick={() => {
            slideOnClose();
            document.body.style.removeProperty("overflow");
          }}
          className={styles.container__top__icon}
        >
          <CloseIcon width="2rem" height="2rem" />
        </button>
        <div className={styles.container__top__title}>롯데시티 호텔</div>
      </div>
      <StarsWrapper setIsValuedCount={setIsValuedCount} />
      <DateWrapper
        onOpen={() =>
          onBottomSlideOpen(<DateScrollPicker slideOnClose={onClose} />)
        }
      />
      <InputWrapper setIsValuedInput={setIsValuedInput} />
      <ImagesWrapper />
      <button
        className={styles.container__addBtn}
        style={
          isValuedInput && isValuedCount && isValuedDate
            ? { backgroundColor: "#2388FF", color: "#FFFFFF" }
            : { backgroundColor: "#E3E5E5", color: "#979C9E" }
        }
      >
        리뷰 등록
      </button>
      <DateBottomSlide
        isOpen={isOpen}
        onClose={onClose}
        children={bottomSlideContent}
      />
    </div>
  );
}

export default ReviewBottomSlide;
