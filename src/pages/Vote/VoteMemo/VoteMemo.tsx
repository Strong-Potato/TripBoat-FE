import {Button} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilState} from 'recoil';

import styles from './VoteMemo.module.scss';

import BottomSlide from '@/components/BottomSlide/BottomSlide';
import AddCandidate from '@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';
import MemoContent from '@/components/VoteMemo/MemoContent';

import {getVoteData} from '@/mocks/handlers/vote';
import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {selectedCandidatesState} from '@/recoil/vote/candidateList';

import {VoteInfo} from '@/types/vote';

const VoteMemo = () => {
  const param = useParams().id as string;
  const navigate = useNavigate();
  const [data, setData] = useState<VoteInfo>();
  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [selectedCandidates, setSelectedCandidates] = useRecoilState(selectedCandidatesState);

  useEffect(() => {
    getVoteData(param, setData);
  }, []);

  return (
    <>
      {data && (
        <div className={styles.container}>
          <VoteHeader title={data.title} onBottomSlideOpen={() => setIsBTOpen(true)} />
          <MemoContent data={data} />

          <Button
            variant='CTAButton'
            isDisabled={selectedCandidates.size === 0}
            onClick={() => navigate(`/vote/${data.id}`)}
          >
            {selectedCandidates.size}개 후보 등록하기
          </Button>

          <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={<AddCandidate />} />
        </div>
      )}
    </>
  );
};

export default VoteMemo;
