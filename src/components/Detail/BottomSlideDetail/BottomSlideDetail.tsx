import { Slide } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";

import styles from "./BottomSlideDetail.module.scss";

import { isModalOpenState, modalContentState } from "@/recoil/vote/alertModal";

import { BottomSlideDetailProps } from "@/types/detail";

function BottomSlideDetail({
  isOpen,
  onClose,
  children,
  isReviewModal,
}: BottomSlideDetailProps) {
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const setModalContent = useSetRecoilState(modalContentState);

  const checkBeforeExit = {
    title: "잠깐!",
    subText: "지금 나가면 작성내용이 전부 삭제돼요",
    cancelText: "마저 작성할게요",
    actionButton: "나갈래요",
    isSmallSize: true,
    onClickAction: () => {
      setIsModalOpen(false);
      onClose();
      document.body.style.removeProperty("overflow");
    },
  };

  const showCheckBeforeExitModal = () => {
    setIsModalOpen(true);
    setModalContent({ ...checkBeforeExit });
  };

  return (
    <>
      <div
        className={styles.slideContainer}
        style={{
          visibility: isOpen ? "visible" : "hidden",
        }}
        onClick={() => {
          if (isReviewModal) {
            showCheckBeforeExitModal();
          } else {
            onClose();
          }
          document.body.style.removeProperty("overflow");
        }}
      ></div>
      <Slide className={styles.slide} direction="bottom" in={isOpen}>
        <div className={styles.slide__content}>{children}</div>
      </Slide>
    </>
  );
}

export default BottomSlideDetail;
