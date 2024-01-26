import {Button} from '@chakra-ui/react';
import {useParams} from 'react-router-dom';

import styles from './AddPlaceFromVote.module.scss';

import useGoBack from '@/hooks/useGoBack';
import {useGetVoteListInfo} from '@/hooks/Votes/vote';

import CompletedVote from '@/components/Route/AddPlace/FromVote/CompletedVote/CompletedVote';
import InProgressVote from '@/components/Route/AddPlace/FromVote/InProgressVote/InProgressVote';

import BackIcon from '@/assets/back.svg?react';

export interface Vote {
  voteId: number;
  title: string;
  voteStatus: string;
}

function AddPlaceFromVote() {
  const goBack = useGoBack();
  const {id, journeyId} = useParams();
  const {data: voteData} = useGetVoteListInfo(Number(id));
  // const [inProgressVote, setInProgressVote] = useState<Vote[]>([]);
  // const [completedVote, setCompletedVote] = useState<Vote[]>([]);

  console.log(journeyId, '투표에서 불러오겠다', voteData);

  // const inProgressVotes = voteData.data.voteResponse.filter((vote:Vote) => vote.voteStatus === '진행 중');
  // console.log('In Progress Votes:', inProgressVotes);

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
