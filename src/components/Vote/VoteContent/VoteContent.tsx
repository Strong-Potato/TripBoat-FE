import {Icon} from '@chakra-ui/react';
import {GoDotFill} from 'react-icons/go';
import {IoMdCheckmark} from 'react-icons/io';
import {useLocation} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './VoteContent.module.scss';

import {useGetVotesResults} from '@/hooks/Votes/vote';

import {isCandidateSelectingState} from '@/recoil/vote/alertModal';

import CandidateList from './CandidateList/CandidateList';
import VoteRecommendList from './VoteRecommendList/VoteRecommendList';
import DeleteCandidatesButton from '../DeleteCandidatesButton/DeleteCandidatesButton';
import AddCandidate from '../VoteBottomSlideContent/AddCandidate/AddCandidate';

import {VoteContentProps} from '@/types/vote';

const VoteContent = ({onBottomSlideOpen, data, isZeroCandidates, showResults}: VoteContentProps) => {
  const location = useLocation();
  const voteId = Number(location.pathname.split('/')[4]);

  const resultsInfoData = useGetVotesResults(showResults, Number(voteId));
  const resultsInfo = resultsInfoData.data?.data;

  console.log('보트 컨텐트', data);
  console.log('보트 컨텐트 showResults', showResults);
  console.log('resultsInfo', resultsInfo);

  const candidates = data!.candidates;
  const isCandidateSelecting = useRecoilValue(isCandidateSelectingState);

  // 결정완료 상태 -> stateBar 결정완료 / CTA버튼 삭제 / 추천슬라이드 후보추가->일정에담기
  // 결정완료는... voteData에서

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
              className={styles.stateBar__addCandidate}
            >
              + 후보 추가({candidates.length}/15)
            </button>
          )}
        </div>

        <CandidateList
          candidates={candidates}
          onBottomSlideOpen={onBottomSlideOpen}
          isCandidateSelecting={isCandidateSelecting}
        />
      </div>

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
