// import { useState } from "react";
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './VoteMeatball.module.scss';

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

const VoteMeatball = ({state, title, isZeroCandidates}: VoteMeatballProps) => {
  const setIsCreateModalOpen = useSetRecoilState(isCreateModalOpenState);
  const setIsBTOpen = useSetRecoilState(isBottomSlideOpenState);
  const setIsModalOpen = useSetRecoilState(isModalOpenState);
  const [modalContent, setModalContent] = useRecoilState(modalContentState);
  const setIsCandidateSelecting = useSetRecoilState(isCandidateSelectingState);

  const modalConsole = () => {
    console.log('변경');
  };

  const showAlertModal = ({...content}: AlertModalProps) => {
    setIsModalOpen(true);
    setModalContent({...content});
    setIsBTOpen(false);
  };

  const changeToCandidateSelecting = () => {
    setIsCandidateSelecting(true);
    console.log('체체체체인지');
    setIsBTOpen(false);
  };

  const showEditTitleModal = () => {
    setIsBTOpen(false);
    setIsCreateModalOpen(true);
  };

  return (
    <div className={styles.container}>
      {state === '결정완료' ? (
        <button onClick={() => showAlertModal({onClickAction: modalConsole, ...retryVoteContent})}>
          <RepeatIcon />
          <p>투표 재진행</p>
        </button>
      ) : (
        <button
          disabled={isZeroCandidates}
          onClick={() =>
            showAlertModal({
              onClickAction: modalConsole,
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

      <button disabled={isZeroCandidates} onClick={changeToCandidateSelecting}>
        <TrashIcon />
        <p>후보 삭제</p>
      </button>

      <button onClick={() => showAlertModal({onClickAction: modalConsole, ...deleteVoteContent})}>
        <TrashIcon />
        <p>투표 전체 삭제</p>
      </button>

      <AlertModal {...modalContent} />
      <CreateVoteModal isEditMode={true} existingTitle={title} />
    </div>
  );
};

export default VoteMeatball;
