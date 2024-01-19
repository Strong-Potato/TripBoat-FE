import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { useRecoilValue } from "recoil";

import styles from "./Detail.module.scss";

import AlertModal from "@/components/AlertModal/AlertModal";
import BottomFixedBtn from "@/components/Detail/BottomFixedBtn/BottomFixedBtn";
import RegistrationSlide from "@/components/Detail/BottomFixedBtn/RegistrationSlide/RegistrationSlide";
import BottomSlideDetail from "@/components/Detail/BottomSlideDetail/BottomSlideDetail";
import Contents from "@/components/Detail/Contents/Contents";
import ReviewBottomSlide from "@/components/Detail/Contents/ReviewBottomSlide/ReviewBottomSlide";
import Main from "@/components/Detail/Main/Main";
import MeatballBottomSlide from "@/components/Detail/Navigation/MeatballBottomSlide/MeatballBottomSlide";
import Navigation from "@/components/Detail/Navigation/Navigation";

import { modalContentState } from "@/recoil/vote/alertModal";

function Detail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bottomSlideContent, setBottomSlideContent] =
    useState<ReactNode | null>(null);
  const modalContent = useRecoilValue(modalContentState);

  const onBottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    onOpen();
    document.body.style.overflow = "hidden";
  };

  return (
    <div className={styles.container}>
      <Navigation
        onOpen={() =>
          onBottomSlideOpen(
            <MeatballBottomSlide
              onBottomSlideOpen={onBottomSlideOpen}
              onClose={onClose}
            />,
          )
        }
      />
      <Main />
      <Contents
        onOpen={() =>
          onBottomSlideOpen(<ReviewBottomSlide slideOnClose={onClose} />)
        }
      />
      <BottomFixedBtn
        onOpen={() =>
          onBottomSlideOpen(<RegistrationSlide slideOnClose={onClose} />)
        }
      />
      <BottomSlideDetail
        isOpen={isOpen}
        onClose={onClose}
        children={bottomSlideContent}
      />
      <AlertModal {...modalContent} />
    </div>
  );
}

export default Detail;
