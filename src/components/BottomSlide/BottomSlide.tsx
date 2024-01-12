import { Slide } from "@chakra-ui/react";
import { useRef } from "react";

import styles from "./BottomSlide.module.scss";

import useOnClickOutside from "@/hooks/useOnClickOutside";

import CloseIcon from "@/assets/close.svg?react";

import { BottomSlideProps } from "../../types/bottomSlide";

function BottomSlide({ isOpen, onClose, children }: BottomSlideProps) {
  const containerStyle = {
    display: isOpen ? "block" : "none",
  };

  const slideRef = useRef(null);
  useOnClickOutside(slideRef, onClose);

  return (
    <div className={styles.slideContainer} style={containerStyle}>
      <Slide
        ref={slideRef}
        className={styles.slide}
        direction="bottom"
        in={isOpen}
      >
        <div className={styles.slide__content}>
          <div className={styles.closeButtonContainer}>
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </Slide>
    </div>
  );
}

export default BottomSlide;
