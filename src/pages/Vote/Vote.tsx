import { useDisclosure } from "@chakra-ui/react";

import styles from "./Vote.module.scss";

import BottomSlide from "@/components/BottomSlide/BottomSlide";
import VoteBottomButton from "@/components/Vote/VoteBottomButton/VoteBottomButton";
import AddCandidate from "@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate";
import VoteContent from "@/components/Vote/VoteDetailsField/VoteContent";
import VoteHeader from "@/components/Vote/VoteHeader/VoteHeader";
import { ReactNode, useState } from "react";
import VoteMeatball from "@/components/Vote/VoteBottomSlideContent/VoteMeatball/VoteMeatball";

const Vote = () => {
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
      <VoteHeader onOpen={() => onBottomSlideOpen(<VoteMeatball />)} />
      <VoteContent onClick={() => onBottomSlideOpen(<AddCandidate />)} />
      <VoteBottomButton
        onClick={() => onBottomSlideOpen(<AddCandidate />)}
        title={"후보 추가하기"}
      />
      <BottomSlide
        isOpen={isOpen}
        onClose={onClose}
        children={bottomSlideContent}
      />
    </div>
  );
};

export default Vote;
