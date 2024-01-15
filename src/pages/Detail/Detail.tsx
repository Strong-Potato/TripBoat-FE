import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

import styles from "./Detail.module.scss";

import BottomFixedBtn from "@/components/Detail/BottomFixedBtn/BottomFixedBtn";
import RegistrationSlide from "@/components/Detail/BottomFixedBtn/RegistrationSlide/RegistrationSlide";
import BottomSlideDetail from "@/components/Detail/BottomSlideDetail/BottomSlideDetail";
import Contents from "@/components/Detail/Contents/Contents";
import ReviewBottomSlide from "@/components/Detail/Contents/ReviewBottomSlide/ReviewBottomSlide";
import Main from "@/components/Detail/Main/Main";
import MeatballBottomSlide from "@/components/Detail/Navigation/MeatballBottomSlide/MeatballBottomSlide";
import Navigation from "@/components/Detail/Navigation/Navigation";

function Detail() {
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
      <Navigation
        onOpen={() =>
          onBottomSlideOpen(<MeatballBottomSlide onClose={onClose} />)
        }
      />
      <Main />
      <Contents
        onOpen={() =>
          onBottomSlideOpen(<ReviewBottomSlide onClose={onClose} />)
        }
      />
      <BottomFixedBtn
        onOpen={() =>
          onBottomSlideOpen(<RegistrationSlide onClose={onClose} />)
        }
      />
      <BottomSlideDetail
        isOpen={isOpen}
        onClose={onClose}
        children={bottomSlideContent}
      />
    </div>
  );
}

export default Detail;
