import {Button} from '@chakra-ui/react';
import {ReactNode, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useRecoilState, useSetRecoilState} from 'recoil';

import styles from './Vote.module.scss';

import {useGetVotesInfo, useResetShowResults} from '@/hooks/Votes/vote';

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
  // const {id: voteId} = useParams();
  const location = useLocation();
  const voteId = Number(location.pathname.split('/')[4]);

  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [isCandidateSelecting, setIsCandidateSelecting] = useRecoilState(isCandidateSelectingState);
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const [showResults, setShowResults] = useRecoilState(showResultsState);
  const [bottomSlideContent, setBottomSlideContent] = useState<ReactNode | null>(null);
  const {data: voteInfoData} = useGetVotesInfo(voteId);
  const voteInfo = voteInfoData?.data;

  const isZeroCandidates = voteInfo?.candidates.length === 0;
  // const resultsInfoData = useGetVotesResults(Number(voteId));
  // const resultsInfo = resultsInfoData.data?.data;
  const resetShowResultsMutation = useResetShowResults();

  function areAllCandidatesNotVoted(voteInfo: VoteInfo): boolean {
    return voteInfo?.candidates.every((candidate) => !candidate.amIVote);
  }
  const allCandidatesNotVoted = voteInfo && areAllCandidatesNotVoted(voteInfo);

  useEffect(() => {
    if (voteInfo?.voteStatus === '결정완료') {
      setShowResults(true);
    } else if (voteInfo?.voteStatus === '진행 중') {
      setShowResults(false);
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

  const resetShowResults = async () => {
    await resetShowResultsMutation.mutateAsync(voteId);
  };

  const handleShowResultsClick = () => {
    if (isZeroCandidates) {
      BottomSlideOpen(<AddCandidate />);
    } else if (showResults) {
      resetShowResults(); //리셋
    } else {
      //   resultsInfo
      // }
      // setShowResults(!showResults);
      // console.log('showResults', showResults);
    }
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

  if (!voteInfo) {
    return;
  }

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
      {!isCandidateSelecting && voteInfo.voteStatus === '진행 중' && (
        <Button
          variant='CTAButton'
          onClick={handleShowResultsClick}
          isDisabled={!isZeroCandidates && allCandidatesNotVoted}
        >
          {getButtonStatus()}
        </Button>
      )}
      <BottomSlide isOpen={isBTOpen} onClose={() => setIsBTOpen(false)} children={bottomSlideContent} />
    </div>
  );
};

export default Vote;
