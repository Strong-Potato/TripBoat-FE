import {Button} from '@chakra-ui/react';
import {ReactNode, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './Vote.module.scss';

import {useGetVotesInfo} from '@/hooks/Votes/vote';

import BottomSlide from '@/components/BottomSlide/BottomSlide';
import AddCandidate from '@/components/Vote/VoteBottomSlideContent/AddCandidate/AddCandidate';
import VoteMeatball from '@/components/Vote/VoteBottomSlideContent/VoteMeatball/VoteMeatball';
import VoteContent from '@/components/Vote/VoteContent/VoteContent';
import VoteContentEmpty from '@/components/Vote/VoteContent/VoteContentEmpty/VoteContentEmpty';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';

import {isCandidateSelectingState} from '@/recoil/vote/alertModal';
import {isBottomSlideOpenState} from '@/recoil/vote/bottomSlide';
import {selectedCandidatesState} from '@/recoil/vote/candidateList';
import {showResultsState} from '@/recoil/vote/showResults';

import {VoteInfo} from '@/types/vote';

const Vote = () => {
  const {id: voteId} = useParams();
  const data = useGetVotesInfo(Number(voteId));
  const voteInfo = data.data?.data;

  console.log('voteInfo', voteInfo);

  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [isCandidateSelecting, setIsCandidateSelecting] = useRecoilState(isCandidateSelectingState);
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const [showResults, setShowResults] = useRecoilState(showResultsState);
  const [bottomSlideContent, setBottomSlideContent] = useState<ReactNode | null>(null);

  const isZeroCandidates = voteInfo.candidates.length === 0;

  function areAllCandidatesNotVoted(voteInfo: VoteInfo): boolean {
    return voteInfo.candidates.every((candidate) => !candidate.amIVoted);
  }
  const allCandidatesNotVoted = areAllCandidatesNotVoted(voteInfo);

  // console.log()

  useEffect(() => {
    if (voteInfo.voteStatus === '결정완료') {
      setShowResults(true);
    }
    setIsCandidateSelecting(false);
    setSelectedCandidates(new Set());
  }, []);

  const BottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    document.body.style.overflow = 'hidden';
    setIsBTOpen(true);
    setSelectedCandidates(new Set());
    setIsCandidateSelecting(false);
  };

  const handleShowResultsClick = () => {
    BottomSlideOpen(<AddCandidate />);
    // if (isZeroCandidates) {
    //   return '후보 추가하기'; 후보 추가 연결
    // } else if (showResults) {
    //   return '다시 투표하기'; //리셋 mutate
    // } else {
    //   return '결과보기'; //결과보기 api연결
    // }
    // setShowResults(!showResults);
    // console.log('showResults', showResults);
  };

  const getButtonStatus = () => {
    if (isZeroCandidates) {
      return '후보 추가하기';
    } else if (showResults) {
      return '다시 투표하기';
    } else {
      return '결과보기';
    }
  };

  return (
    <div className={styles.container}>
      <VoteHeader
        isZeroCandidates={isZeroCandidates}
        title={voteInfo.title}
        onBottomSlideOpen={() =>
          BottomSlideOpen(
            <VoteMeatball
              state={voteInfo.voteStatus}
              title={voteInfo.title}
              isZeroCandidates={isZeroCandidates}
              allCandidatesNotVoted={allCandidatesNotVoted}
            />,
          )
        }
      />

      {isZeroCandidates ? (
        <VoteContentEmpty />
      ) : (
        <VoteContent
          data={voteInfo}
          onBottomSlideOpen={BottomSlideOpen}
          isZeroCandidates={isZeroCandidates}
          showResults={voteInfo.voteStatus === '결정완료' ? true : showResults}
        />
      )}
      {!isCandidateSelecting && voteInfo.voteStatus === 'VOTING' && (
        <Button
          variant='CTAButton'
          onClick={handleShowResultsClick}
          isDisabled={!isZeroCandidates && allCandidatesNotVoted}
        >
          {getButtonStatus()}
          {/* {showResults ? '다시 투표하기' : '결과보기'} */}
        </Button>
      )}
      <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={bottomSlideContent} />
    </div>
  );
};

export default Vote;
