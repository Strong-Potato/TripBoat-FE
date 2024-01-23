import {useParams} from 'react-router-dom';

import styles from './CandidatesMap.module.scss';

import {useGetVotesInfo} from '@/hooks/Votes/vote';

import CandidatesMapBody from '@/components/CandidatesMap/CandidatesMapBody/CandidatesMapBody';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';

const CandidatesMap = () => {
  const {id: voteId} = useParams();
  const {data: voteInfo} = useGetVotesInfo(Number(voteId));

  return (
    <div className={styles.container}>
      <VoteHeader title={voteInfo.title} />
      <CandidatesMapBody candidates={voteInfo.candidates} />
    </div>
  );
};

export default CandidatesMap;
