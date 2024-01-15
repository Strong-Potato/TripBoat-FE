import { HiOutlineTrash } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useRecoilValue, useSetRecoilState } from "recoil";

import styles from "./DeleteCandidatesButton.module.scss";

import { isCandidateSelectingState } from "@/recoil/vote/alertModal";
import { selectedCandidatesState } from "@/recoil/vote/candidateList";

const DeleteCandidatesButton = () => {
  const selectedCandidates = useRecoilValue(selectedCandidatesState);
  const setIsCandidateSelecting = useSetRecoilState(isCandidateSelectingState);

  const showDeleteCandidateModal = () => {
    //삭제api
    console.log("삭제하기모달오픈");
    //삭제모달오픈, recoil로 다시 빼서 가져오기
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.cancelButton}
        onClick={() => setIsCandidateSelecting(false)}
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
    </div>
  );
};

export default DeleteCandidatesButton;
