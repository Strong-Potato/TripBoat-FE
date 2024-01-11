import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

import styles from "./Detail.module.scss";

import BottomSlide from "@/components/BottomSlide/BottomSlide";
import BottomFixedBtn from "@/components/Detail/BottomFixedBtn/BottomFixedBtn";
import Contents from "@/components/Detail/Contents/Contents";
import Main from "@/components/Detail/Main/Main";
import MeatballBottomSlide from "@/components/Detail/Navigation/MeatballBottomSlide/MeatballBottomSlide";
import Navigation from "@/components/Detail/Navigation/Navigation";
import ToastPopup from "@/components/Modal/ToastPopup/ToastPopup";

function Detail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bottomSlideContent, setBottomSlideContent] =
    useState<ReactNode | null>(null);

  const onBottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    onOpen();
  };

  const [showAlert, setShowAlert] = useState({
    active: false,
    message: "",
  });

  const openToast = (text: string) => {
    setShowAlert({
      active: false,
      message: "",
    });

    const toastData = {
      active: true,
      message: text,
    };
    setShowAlert(toastData);
  };

  return (
    <div className={styles.container}>
      <Navigation
        onOpen={() =>
          onBottomSlideOpen(<MeatballBottomSlide openToast={openToast} />)
        }
      />
      <Main openToast={openToast} />
      <Contents />
      <BottomFixedBtn />
      <BottomSlide
        isOpen={isOpen}
        onClose={onClose}
        children={bottomSlideContent}
      />
      <ToastPopup status={showAlert} setFunc={setShowAlert} />
    </div>
  );
}

export default Detail;
