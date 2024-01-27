import {useLocation} from 'react-router-dom';

import styles from './CandidatesMap.module.scss';

import {useGetVotesInfo} from '@/hooks/Votes/vote';

import CandidatesMapBody from '@/components/CandidatesMap/CandidatesMapBody/CandidatesMapBody';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';

import {VoteInfo} from '@/types/vote';

const CandidatesMap = () => {
  const location = useLocation();
  const voteId = Number(location.pathname.split('/')[4]);

  const {data: voteInfoData} = useGetVotesInfo(voteId);
  const voteInfo = voteInfoData?.data as VoteInfo;

  if (!voteInfo) {
    return;
  }

  return (
    <div className={styles.container}>
      <VoteHeader title={voteInfo.title} />
      <CandidatesMapBody candidates={voteInfo.candidates} />
    </div>
  );
};

export default CandidatesMap;
