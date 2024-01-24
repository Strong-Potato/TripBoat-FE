import {Button} from '@chakra-ui/react';

import styles from './AddPlaceFromVote.module.scss';

import useGoBack from '@/hooks/useGoBack';

import CompletedVote from '@/components/Route/AddPlace/FromVote/CompletedVote/CompletedVote';
import InProgressVote from '@/components/Route/AddPlace/FromVote/InProgressVote/InProgressVote';

import BackIcon from '@/assets/back.svg?react';

function AddPlaceFromVote() {
  const goBack = useGoBack();

  return (
    <div className={styles.FromVoteContainer}>
      <nav>
        <button onClick={goBack}>
          <BackIcon />
        </button>
        <h1>Day 1 일정 추가</h1>
      </nav>
      <CompletedVote />
      <InProgressVote />
      <Button isDisabled={true} variant='CTAButton'>
        장소를 선택해주세요
      </Button>
    </div>
  );
}

export default AddPlaceFromVote;
