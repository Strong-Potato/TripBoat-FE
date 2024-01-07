import { useDisclosure } from "@chakra-ui/react";

import styles from "./Vote.module.scss";

import BottomSlide from "@/components/BottomSlide/BottomSlide";
// import CreatVoteTitleModal from "@/components/Vote/CreatVoteTitleModal/CreatVoteTitleModal";
import VoteBottomButton from "@/components/Vote/VoteBottomButton/VoteBottomButton";
import VoteHeader from "@/components/Vote/VoteHeader/VoteHeader";
import AddCandidate from "@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate";
import VoteContent from "@/components/Vote/VoteDetailsField/VoteContent";

const Vote = () => {
  const {
    isOpen: isBottomSlideOpen,
    onOpen: onBottomSlideOpen,
    onClose: onBottomSlideClose,
  } = useDisclosure();

  return (
    <div className={styles.container}>
      <VoteHeader />
      <VoteContent onClick={onBottomSlideOpen} />

      {/* 나중에 여행스페이스 메인에 옮겨야함 */}
      {/* <CreatVoteTitleModal /> */}
      <VoteBottomButton onClick={onBottomSlideOpen} title={"후보 추가하기"} />

      <BottomSlide
        isOpen={isBottomSlideOpen}
        onClose={onBottomSlideClose}
        children={<AddCandidate />}
      />
    </div>
  );
};

export default Vote;
