import {GiRoundStar as CompletedIcon} from 'react-icons/gi';

import styles from './CompletedVote.module.scss';

import VoteCard from '@/components/Route/AddPlace/FromVote/VoteCard/VoteCard';

import {Votes} from '@/types/route';

function CompletedVote({votes}: Votes) {
  return (
    <div className={styles.completedVoteContainer}>
      <header>
        <div>
          <h2>결정 완료된 투표</h2>
          <CompletedIcon size='2.4rem' color='#FEE500' />
        </div>
      </header>
      <div className={styles.voteListContainer}>
        {votes?.length > 0 ? (
          votes?.map((vote) => <VoteCard id={vote.voteId} title={vote.title} />)
        ) : (
          <p>결정 완료된 투표가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default CompletedVote;
