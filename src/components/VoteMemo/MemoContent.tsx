import styles from './MemoContent.module.scss';

import MemoItem from './MemoItem/MemoItem';

import {VoteInfo} from '@/types/vote';

const MemoContent = ({data}: {data: VoteInfo}) => {
  const candidates = data.candidates;

  return (
    <div className={styles.container}>
      {candidates?.map((candidate) => <MemoItem candidate={candidate} key={candidate.id} />)}
    </div>
  );
};

export default MemoContent;
