import { useDisclosure } from "@chakra-ui/react";

import styles from "./VoteDetail.module.scss";

import BottomSlide from "@/components/BottomSlide/BottomSlide";
// import CreatVoteTitleModal from "@/components/Vote/CreatVoteTitleModal/CreatVoteTitleModal";
import VoteDetailsBottomButton from "@/components/Vote/VoteDetailsBottomButton/VoteDetailsBottomButton";
import VoteDetailsField from "@/components/Vote/VoteDetailsField/VoteDetailsField";
import VoteDetailsHeader from "@/components/Vote/VoteDetailsHeader/VoteDetailsHeader";
import AddCandidateSlideContent from "@/components/Vote/AddCandidateSlideContent/AddCandidateSlideContent";

const VoteDetail = () => {
  const {
    isOpen: isBottomSlideOpen,
    onOpen: onBottomSlideOpen,
    onClose: onBottomSlideClose,
  } = useDisclosure();

  return (
    <div className={styles.container}>
      <VoteDetailsHeader />
      <VoteDetailsField />

      {/* 나중에 여행스페이스 메인에 옮겨야함 */}
      {/* <CreatVoteTitleModal /> */}
      <VoteDetailsBottomButton
        onClick={onBottomSlideOpen}
        title={"후보 추가하기"}
      />

      <BottomSlide
        isOpen={isBottomSlideOpen}
        onClose={onBottomSlideClose}
        children={<AddCandidateSlideContent />}
      />
    </div>
  );
};

export default VoteDetail;
