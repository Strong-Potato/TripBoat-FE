import {Button} from '@chakra-ui/react';
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import styles from './VoteMemo.module.scss';

import {useGetVotesInfo} from '@/hooks/Votes/vote';

import BottomSlide from '@/components/BottomSlide/BottomSlide';
import AddCandidate from '@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';
import MemoContent from '@/components/VoteMemo/MemoContent';

import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {selectedTaglineState} from '@/recoil/vote/voteMemo';

const VoteMemo = () => {
  const {id: voteId} = useParams();
  const {data: voteInfo} = useGetVotesInfo(Number(voteId));
  // const navigate = useNavigate();
  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [selectedTagline, setSelectedTagline] = useRecoilState(selectedTaglineState);

  const initializeTaglineState = () => {
    const initialTaglines = voteInfo.candidates.map((candidate) => ({
      placeId: candidate.placeInfo.placeId,
      tagline: '',
    }));
    setSelectedTagline(initialTaglines);
  };

  useEffect(() => {
    initializeTaglineState();
  }, []);

  const addNewCandidates = () => {
    console.log('최종 내용 : ', selectedTagline);
    //navigate(`/votes/${voteInfo.id}`)
  };

  return (
    <div className={styles.container}>
      <VoteHeader title={voteInfo.title} onBottomSlideOpen={() => setIsBTOpen(true)} />
      <MemoContent data={voteInfo} />

      <Button variant='CTAButton' isDisabled={selectedTagline.length === 0} onClick={addNewCandidates}>
        {selectedTagline.length}개 후보 등록하기
      </Button>

      <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={<AddCandidate />} />
    </div>
  );
};

export default VoteMemo;
