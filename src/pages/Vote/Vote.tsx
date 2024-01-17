import {Button} from '@chakra-ui/react';
import {ReactNode, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './Vote.module.scss';

import BottomSlide from '@/components/BottomSlide/BottomSlide';
import VoteMeatball from '@/components/Vote/VoteBottomSlideContent/VoteMeatball/VoteMeatball';
import VoteContent from '@/components/Vote/VoteContent/VoteContent';
import VoteContentEmpty from '@/components/Vote/VoteContent/VoteContentEmpty/VoteContentEmpty';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';

import {getVoteData} from '@/mocks/handlers/vote';
import {isCandidateSelectingState} from '@/recoil/vote/alertModal';
import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {selectedCandidatesState} from '@/recoil/vote/candidateList';

import {VoteInfo} from '@/types/vote';

const Vote = () => {
  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [isCandidateSelecting, setIsCandidateSelecting] = useRecoilState(isCandidateSelectingState);
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const [showResults, setShowResults] = useState(false);
  const [bottomSlideContent, setBottomSlideContent] = useState<ReactNode | null>(null);
  const [data, setData] = useState<VoteInfo>();
  const param = useParams().id as string;

  useEffect(() => {
    getVoteData(param, setData);
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
    <>
      {data && (
        <div className={styles.container}>
          <VoteHeader
            isNoCandidate={data.candidates.length === 0}
            title={data.title as string}
            onBottomSlideOpen={() =>
              BottomSlideOpen(<VoteMeatball state={data.voteStatus} isZeroCandidates={data.candidates.length === 0} />)
            }
          />

          {data.candidates ? (
            <VoteContent data={data} onBottomSlideOpen={BottomSlideOpen} showResults={showResults} />
          ) : (
            <VoteContentEmpty />
          )}
          {!isCandidateSelecting && data.voteStatus === '진행 중' && (
            <Button variant='CTAButton' onClick={handleShowResultsClick} isDisabled={data.candidates.length === 0}>
              {showResults ? '다시 투표하기' : '결과보기'}
            </Button>
          )}
          <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={bottomSlideContent} />
        </div>
      )}
    </>
  );
};

export default Vote;
