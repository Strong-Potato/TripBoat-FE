import {HiOutlineTrash} from 'react-icons/hi';
import {IoMdClose} from 'react-icons/io';
import {useParams} from 'react-router-dom';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './DeleteCandidatesButton.module.scss';

import {useDeleteCandidates} from '@/hooks/Votes/vote';

import AlertModal from '@/components/AlertModal/AlertModal';

import {isCandidateSelectingState, isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';
import {selectedCandidatesState} from '@/recoil/vote/candidateList';

import {deleteCandidateContent} from '../VoteBottomSlideContent/VoteMeatball/modalContent';

const DeleteCandidatesButton = () => {
  const {id: voteId} = useParams();
  const [selectedCandidates, setSelectedCandidates] = useRecoilState(selectedCandidatesState);
  const [modalContent, setModalContent] = useRecoilState(modalContentState);
  const setIsCandidateSelecting = useSetRecoilState(isCandidateSelectingState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);

  const {mutateAsync: deleteCandidateMutateAsync} = useDeleteCandidates();

  const deleteCandidate = async () => {
    await deleteCandidateMutateAsync({voteId: Number(voteId), candidateIds: [...selectedCandidates]});
    setSelectedCandidates(new Set());
    setIsModalOpen(false);
    setIsCandidateSelecting(false);
  };

  const showDeleteCandidateModal = () => {
    setIsModalOpen(true);
    setModalContent({
      ...deleteCandidateContent,
      onClickAction: deleteCandidate,
    });
  };

  const cancelSelecting = () => {
    setIsCandidateSelecting(false);
    setSelectedCandidates(new Set());
  };

  return (
    <div className={styles.container}>
      <button className={styles.cancelButton} onClick={cancelSelecting}>
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
