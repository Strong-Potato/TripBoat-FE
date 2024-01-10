import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

import styles from "./Detail.module.scss";

import BottomSlide from "@/components/BottomSlide/BottomSlide";
import BottomFixedBtn from "@/components/Detail/BottomFixedBtn/BottomFixedBtn";
import Contents from "@/components/Detail/Contents/Contents";
import Main from "@/components/Detail/Main/Main";
import MeatballBottomSlide from "@/components/Detail/Navigation/MeatballBottomSlide/MeatballBottomSlide";
import Navigation from "@/components/Detail/Navigation/Navigation";

function Detail() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bottomSlideContent, setBottomSlideContent] =
    useState<ReactNode | null>(null);
  //보트ID로 진입, 검색할때 투표갯수 X는거 확인
  //X -> 메인문구, 헤더에서미트볼 바꾸기
  //투표 확정 상태일때 바텀 시트 변경

  const onBottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    onOpen();
  };

  return (
    <div className={styles.container}>
      <Navigation onOpen={() => onBottomSlideOpen(<MeatballBottomSlide />)} />
      <Main />
      <Contents />
      <BottomFixedBtn />
      <BottomSlide
        isOpen={isOpen}
        onClose={onClose}
        children={bottomSlideContent}
      />
    </div>
  );
}

export default Detail;
