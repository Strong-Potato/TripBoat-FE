import {Icon} from '@chakra-ui/react';
import {useEffect, useState} from 'react';
import {GoDotFill} from 'react-icons/go';
import {IoMdCheckmark} from 'react-icons/io';
import {useLocation} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './VoteContent.module.scss';

import {useGetVotesResults} from '@/hooks/Votes/vote';

import {isCandidateSelectingState} from '@/recoil/vote/alertModal';
import {isShowResultsState} from '@/recoil/vote/showResults';

import CandidateList from './CandidateList/CandidateList';
import VoteRecommendList from './VoteRecommendList/VoteRecommendList';
import DeleteCandidatesButton from '../DeleteCandidatesButton/DeleteCandidatesButton';
import AddCandidate from '../VoteBottomSlideContent/AddCandidate/AddCandidate';

import {VoteContentProps} from '@/types/vote';

const VoteContent = ({onBottomSlideOpen, data, isZeroCandidates}: VoteContentProps) => {
  const location = useLocation();
  const voteId = Number(location.pathname.split('/')[4]);
  const [candidates, setCandidates] = useState(data!.candidates);
  const showResults = useRecoilValue(isShowResultsState(voteId));
  const isCandidateSelecting = useRecoilValue(isCandidateSelectingState);
  const resultsInfoData = useGetVotesResults(showResults, Number(voteId));
  const resultsInfo = resultsInfoData.data?.data;

  console.log('보트 컨텐트 showResults', showResults);
  console.log('resultsInfo', resultsInfo);

  useEffect(() => {
    if (resultsInfo && showResults) {
      setCandidates(resultsInfo!.candidatesResponses);
    } else {
      setCandidates(data.candidates);
    }
  }, [data.candidates, resultsInfo, showResults]);

  if (!candidates) {
    return;
  }

  return (
    <div className={styles.container}>
      <div className={styles.paddingBox}>
        <div className={styles.stateBar}>
          <div
            className={styles.stateBar__state}
            style={{color: data.voteStatus === '결정완료' ? '#979C9E' : '#2388FF'}}
          >
            {data.voteStatus === '결정완료' ? <Icon as={IoMdCheckmark} /> : <Icon as={GoDotFill} />}
            {data.voteStatus}
          </div>

        {!showResults && (
          <button
            disabled={isCandidateSelecting}
            onClick={() => onBottomSlideOpen(<AddCandidate />)}
            className={styles.container__stateBar__addCandidate}
          >
            + 후보 추가({candidates?.length}/15)
          </button>
        )}
      </div>

      <CandidateList
        candidates={candidates}
        onBottomSlideOpen={onBottomSlideOpen}
        isCandidateSelecting={isCandidateSelecting}
        showResults={showResults}
      />

      {!isZeroCandidates && (
        <VoteRecommendList
          state={data.voteStatus}
          isCandidateSelecting={isCandidateSelecting}
          categoryCode={data.candidates[0].placeInfo.category}
        />
      )}

      {isCandidateSelecting && <DeleteCandidatesButton />}
    </div>
  );
};
export default VoteContent;
