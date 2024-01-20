import {Button} from '@chakra-ui/react';
import {ReactNode, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './Vote.module.scss';

import {useGetVotesInfo} from '@/hooks/Votes/vote';

import BottomSlide from '@/components/BottomSlide/BottomSlide';
import VoteMeatball from '@/components/Vote/VoteBottomSlideContent/VoteMeatball/VoteMeatball';
import VoteContent from '@/components/Vote/VoteContent/VoteContent';
import VoteContentEmpty from '@/components/Vote/VoteContent/VoteContentEmpty/VoteContentEmpty';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';

import {isCandidateSelectingState} from '@/recoil/vote/alertModal';
import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {selectedCandidatesState} from '@/recoil/vote/candidateList';

const Vote = () => {
  const {id: voteId} = useParams();
  const {data: voteInfo} = useGetVotesInfo(Number(voteId));

  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [isCandidateSelecting, setIsCandidateSelecting] = useRecoilState(isCandidateSelectingState);
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const [showResults, setShowResults] = useState(false);
  const [bottomSlideContent, setBottomSlideContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    setIsCandidateSelecting(false);
    setShowResults(false);
    setSelectedCandidates(new Set());
  }, []);

  const BottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    setIsBTOpen(true);
    setSelectedCandidates(new Set());
    setIsCandidateSelecting(false);
  };

  const handleShowResultsClick = () => {
    setShowResults(!showResults);
  };

  return (
    <div className={styles.container}>
      <VoteHeader
        isNoCandidate={voteInfo.candidates.length === 0}
        title={voteInfo.title}
        onBottomSlideOpen={() =>
          BottomSlideOpen(
            <VoteMeatball
              state={voteInfo.voteStatus}
              title={voteInfo.title}
              isZeroCandidates={voteInfo.candidates.length === 0}
            />,
          )
        }
      />

      {voteInfo.candidates ? (
        <VoteContent data={voteInfo} onBottomSlideOpen={BottomSlideOpen} showResults={showResults} />
      ) : (
        <VoteContentEmpty />
      )}
      {!isCandidateSelecting && voteInfo.voteStatus === '진행 중' && (
        <Button variant='CTAButton' onClick={handleShowResultsClick} isDisabled={voteInfo.candidates.length === 0}>
          {showResults ? '다시 투표하기' : '결과보기'}
        </Button>
      )}
      <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={bottomSlideContent} />
    </div>
  );
};

export default Vote;
