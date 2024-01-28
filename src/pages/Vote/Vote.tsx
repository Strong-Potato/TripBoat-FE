import {Button} from '@chakra-ui/react';
import {ReactNode, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useRecoilState, useRecoilValue, useSetRecoilState} from 'recoil';

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
import {isShowResultsState, showResultIdsState} from '@/recoil/vote/showResults';

import {VoteInfo} from '@/types/vote';

const Vote = () => {
  const location = useLocation();
  const voteId = Number(location.pathname.split('/')[4]);

  const [isBTOpen, setIsBTOpen] = useRecoilState(isBottomSlideOpenState);
  const [isCandidateSelecting, setIsCandidateSelecting] = useRecoilState(isCandidateSelectingState);
  const setSelectedCandidates = useSetRecoilState(selectedCandidatesState);
  const showResultIds = useRecoilValue(showResultIdsState);
  const [showResults, setShowResults] = useRecoilState(isShowResultsState(voteId));
  const [bottomSlideContent, setBottomSlideContent] = useState<ReactNode | null>(null);
  const {data: voteInfoData} = useGetVotesInfo(voteId);
  const voteInfo = voteInfoData?.data;
  const isZeroCandidates = voteInfo?.candidates?.length === 0;

  const {mutateAsync: resetShowResultsMutateAsync} = useResetShowResults();

  function areAllCandidatesNotVoted(voteInfo: VoteInfo | undefined): boolean {
    return voteInfo?.candidates?.every((candidate) => !candidate.amIVote) ?? true;
  }
  const allCandidatesNotVoted = !showResults && areAllCandidatesNotVoted(voteInfo);

  useEffect(() => {
    const isShowResults = showResultIds.some((id) => id === voteId);
    setShowResults(isShowResults);
  }, []);

  useEffect(() => {
    if (voteInfo?.voteStatus === '결정완료') {
      setShowResults(true);
    }
    setIsCandidateSelecting(false);
    setSelectedCandidates(new Set());
  }, [setIsCandidateSelecting, setSelectedCandidates, voteInfo?.voteStatus]);

  const BottomSlideOpen = (content: ReactNode) => {
    setBottomSlideContent(content);
    document.body.style.overflow = 'hidden';
    setIsBTOpen(true);
    setSelectedCandidates(new Set());
    setIsCandidateSelecting(false);
  };

  const resetShowResults = async () => {
    await resetShowResultsMutateAsync(voteId);
    setShowResults(false);
  };

  const handleShowResultsClick = () => {
    if (isZeroCandidates) {
      BottomSlideOpen(<AddCandidate />);
    } else if (showResults) {
      resetShowResults();
      setShowResults(false);
    } else if (!showResults) {
      setShowResults(true);
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

      {isZeroCandidates ? <VoteContentEmpty /> : <VoteContent data={voteInfo} onBottomSlideOpen={BottomSlideOpen} />}
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
