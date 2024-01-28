import {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import styles from './CandidatesMap.module.scss';

import {useGetVotesInfo, useGetVotesResults} from '@/hooks/Votes/vote';

import CandidatesMapBody from '@/components/CandidatesMap/CandidatesMapBody/CandidatesMapBody';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';

import {isShowResultsState} from '@/recoil/vote/showResults';

import {VoteInfo} from '@/types/vote';

const CandidatesMap = () => {
  const location = useLocation();
  const voteId = Number(location.pathname.split('/')[4]);
  const {data: voteInfoData} = useGetVotesInfo(voteId);
  const voteInfo = voteInfoData?.data as VoteInfo;
  const showResults = useRecoilValue(isShowResultsState(voteId));
  const resultsInfoData = useGetVotesResults(showResults, Number(voteId));
  const resultsInfo = resultsInfoData.data?.data;
  const [candidates, setCandidates] = useState(voteInfo.candidates);

  useEffect(() => {
    if (resultsInfo && showResults) {
      setCandidates(resultsInfo!.candidatesResponses);
    } else {
      setCandidates(voteInfo.candidates);
    }
  }, [resultsInfo, showResults]);

  if (!voteInfo) {
    return;
  }

  return (
    <div className={styles.container}>
      <VoteHeader title={voteInfo.title} />
      <CandidatesMapBody candidates={candidates} />
    </div>
  );
};

export default CandidatesMap;
