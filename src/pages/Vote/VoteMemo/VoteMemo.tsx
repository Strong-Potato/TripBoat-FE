import {Button} from '@chakra-ui/react';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilState, useRecoilValue} from 'recoil';

import styles from './VoteMemo.module.scss';

import {useGetVotesInfo} from '@/hooks/Votes/vote';

import BottomSlide from '@/components/BottomSlide/BottomSlide';
import AddCandidate from '@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';
import MemoContent from '@/components/VoteMemo/MemoContent';

import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {selectedCandidatesState} from '@/recoil/vote/candidateList';

const VoteMemo = () => {
  const {id: voteId} = useParams();
  const {data: voteInfo} = useGetVotesInfo(Number(voteId));
  const navigate = useNavigate();

  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const selectedCandidates = useRecoilValue(selectedCandidatesState);

  return (
    <div className={styles.container}>
      <VoteHeader title={voteInfo.title} onBottomSlideOpen={() => setIsBTOpen(true)} />
      <MemoContent data={voteInfo} />

      <Button
        variant='CTAButton'
        isDisabled={selectedCandidates.size === 0}
        onClick={() => navigate(`/vote/${voteInfo.id}`)}
      >
        {selectedCandidates.size}개 후보 등록하기
      </Button>

      <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={<AddCandidate />} />
    </div>
  );
};

export default VoteMemo;
