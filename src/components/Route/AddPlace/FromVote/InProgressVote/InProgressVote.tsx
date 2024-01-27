import {AiOutlineComment as InProgressIcon} from 'react-icons/ai';

import styles from './InProgressVote.module.scss';

import VoteCard from '@/components/Route/AddPlace/FromVote/VoteCard/VoteCard';

import {Votes} from '@/types/route';

function InProgressVote({votes}: Votes) {
  return (
    <div className={styles.inProgressVoteContainer}>
      <header>
        <h2>진행 중인 투표</h2>
        <InProgressIcon size='2.4rem' color='#979C9E' />
      </header>
      <div className={styles.voteListContainer}>
        {votes?.length > 0 ? (
          votes?.map((vote) => <VoteCard key={vote.voteId} id={vote.voteId} title={vote.title} />)
        ) : (
          <p>진행 중인 투표가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default InProgressVote;
