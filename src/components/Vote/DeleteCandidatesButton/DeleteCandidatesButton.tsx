import { HiOutlineTrash } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useRecoilState, useSetRecoilState } from "recoil";

import styles from "./DeleteCandidatesButton.module.scss";

import AlertModal from "@/components/AlertModal/AlertModal";

// import useSetAlertModalContent from "@/hooks/useSetAlertModalContent";
import {
  isCandidateSelectingState,
  isModalOpenState,
  modalContentState,
} from "@/recoil/vote/alertModal";
import { selectedCandidatesState } from "@/recoil/vote/candidateList";

import { deleteCandidateContent } from "../VoteBottomSlideContent/VoteMeatball/modalContent";

const DeleteCandidatesButton = () => {
  const [selectedCandidates, setSelectedCandidates] = useRecoilState(
    selectedCandidatesState,
  );
  const setIsCandidateSelecting = useSetRecoilState(isCandidateSelectingState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const [modalContent, setModalContent] = useRecoilState(modalContentState);

  const showDeleteCandidateModal = () => {
    //삭제api
    console.log("삭제하기모달오픈");
    setIsModalOpen(true);
    setModalContent({
      ...deleteCandidateContent,
      onClickAction: () => console.log("삭제됨~~~", selectedCandidates),
    });
  };

  const cancelSelectingCandidate = () => {
    setIsCandidateSelecting(false);
    setSelectedCandidates(new Set());
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.cancelButton}
        onClick={cancelSelectingCandidate}
      >
        <IoMdClose /> 취소
      </button>
      <button
        className={styles.deleteButton}
        disabled={selectedCandidates.size === 0}
        onClick={showDeleteCandidateModal}
      >
        <HiOutlineTrash />
        삭제하기
      </button>
      <AlertModal {...modalContent} />
    </div>
  );
};

export default DeleteCandidatesButton;
