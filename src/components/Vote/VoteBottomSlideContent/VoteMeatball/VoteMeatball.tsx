// import { useState } from "react";
import {useParams} from 'react-router-dom';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './VoteMeatball.module.scss';

import {useChangeStatusComplete, useDeleteVote, useResetVoteStatus} from '@/hooks/Votes/vote';

import AlertModal from '@/components/AlertModal/AlertModal';

import CheckIcon from '@/assets/voteIcons/vote_check.svg?react';
import EditIcon from '@/assets/voteIcons/vote_edit.svg?react';
import RepeatIcon from '@/assets/voteIcons/vote_repeat.svg?react';
import TrashIcon from '@/assets/voteIcons/vote_trash.svg?react';
import {isCandidateSelectingState, isModalOpenState, modalContentState} from '@/recoil/vote/alertModal';
import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {isCreateModalOpenState} from '@/recoil/vote/createVoteTitleModal';

import {confirmVoteContent, deleteVoteContent, retryVoteContent} from './modalContent';
import CreateVoteModal from '../../CreateVoteModal/CreateVoteModal';

import {AlertModalProps, VoteMeatballProps} from '@/types/vote';

const VoteMeatball = ({state, title, isZeroCandidates, allCandidatesNotVoted}: VoteMeatballProps) => {
  const {id: voteId} = useParams();
  const setIsCreateModalOpen = useSetRecoilState(isCreateModalOpenState);
  const setIsBTOpen = useSetRecoilState(isBottomSlideOpenState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const [modalContent, setModalContent] = useRecoilState(modalContentState);
  const setIsCandidateSelecting = useSetRecoilState(isCandidateSelectingState);

  const deleteVoteMutation = useDeleteVote();
  const changeCompleteMutation = useChangeStatusComplete();
  const resetStatusMutation = useResetVoteStatus();

  const showAlertModal = ({...content}: AlertModalProps) => {
    setIsBTOpen(false);
    setIsModalOpen(true);
    setModalContent({...content});
  };

  const changeToCandidateSelecting = () => {
    setIsCandidateSelecting(true);
    setIsBTOpen(false);
  };

  const showEditTitleModal = () => {
    setIsBTOpen(false);
    setIsCreateModalOpen(true);
  };

  const handleDeleteVote = async () => {
    const res = await deleteVoteMutation.mutateAsync(Number(voteId));
    console.log('delete 리액트쿼리:', res);
  };

  const handleChangeComplete = async () => {
    const res = await changeCompleteMutation.mutateAsync(Number(voteId));
    console.log('결정완료 리액트쿼리:', res);
  };

  const handleResetStatus = async () => {
    const res = await resetStatusMutation.mutateAsync(Number(voteId));
    console.log('재진행 리액트쿼리:', res);
  };

  return (
    <div className={styles.container}>
      {state === '결정완료' ? (
        <button onClick={() => showAlertModal({onClickAction: handleResetStatus, ...retryVoteContent})}>
          <RepeatIcon />
          <p>투표 재진행</p>
        </button>
      ) : (
        <button
          disabled={isZeroCandidates || allCandidatesNotVoted}
          onClick={() =>
            showAlertModal({
              onClickAction: handleChangeComplete,
              ...confirmVoteContent,
            })
          }
        >
          <CheckIcon />
          <p>투표 확정</p>
        </button>
      )}

      <button onClick={showEditTitleModal}>
        <EditIcon />
        <p>투표 제목 수정</p>
      </button>

      <button disabled={isZeroCandidates || state === '결정완료'} onClick={changeToCandidateSelecting}>
        <TrashIcon />
        <p>후보 삭제</p>
      </button>

      <button onClick={() => showAlertModal({onClickAction: handleDeleteVote, ...deleteVoteContent})}>
        <TrashIcon />
        <p>투표 전체 삭제</p>
      </button>

      <AlertModal {...modalContent} />
      <CreateVoteModal isEditMode={true} existingTitle={title} />
    </div>
  );
};

export default VoteMeatball;
