import {useLocation} from 'react-router-dom';

import styles from './CandidatesMap.module.scss';

import {useGetVotesInfoQuery} from '@/hooks/Votes/vote';

import CandidatesMapBody from '@/components/CandidatesMap/CandidatesMapBody/CandidatesMapBody';
import CandidatesSlide from '@/components/CandidatesMap/CandidatesSlide/CandidatesSlide';
import VoteHeader from '@/components/Vote/VoteHeader/VoteHeader';

const CandidatesMap = () => {
  const location = useLocation();
  const voteId = location.pathname.split('/')[2];
  const {data: voteInfo} = useGetVotesInfoQuery(voteId);

  return (
    <>
      {voteInfo && (
        <div className={styles.container}>
          <VoteHeader title={voteInfo.title} />
          <CandidatesMapBody />
          <CandidatesSlide candidates={voteInfo.candidates} />
        </div>
      )}
    </>
  );
};

export default CandidatesMap;
