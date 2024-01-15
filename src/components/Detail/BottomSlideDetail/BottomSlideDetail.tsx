import { Slide } from "@chakra-ui/react";
import { useRef } from "react";

import styles from "./BottomSlideDetail.module.scss";

import useOnClickOutside from "@/hooks/useOnClickOutside";

import { BottomSlideProps } from "@/types/bottomSlide";

function BottomSlideDetail({ isOpen, onClose, children }: BottomSlideProps) {
  const slideRef = useRef(null);
  useOnClickOutside(slideRef, onClose);

  return (
    <>
      <div
        className={styles.slideContainer}
        style={{
          visibility: isOpen ? "visible" : "hidden",
        }}
        onClick={() => {
          document.body.style.removeProperty("overflow");
        }}
      ></div>
      <Slide
        ref={slideRef}
        className={styles.slide}
        direction="bottom"
        in={isOpen}
      >
        <div className={styles.slide__content}>{children}</div>
      </Slide>
    </>
  );
}

export default BottomSlideDetail;
