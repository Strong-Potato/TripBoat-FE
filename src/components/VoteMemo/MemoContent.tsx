import styles from './MemoContent.module.scss';

import MemoItem from './MemoItem/MemoItem';

import {TaglineType, VoteInfo} from '@/types/vote';

const MemoContent = ({data}: {data: VoteInfo}) => {
  const candidates = data.candidates;

  const getExistingTaglines = localStorage.getItem('recoil-persist');
  const existingTaglines: TaglineType[] = getExistingTaglines && JSON.parse(getExistingTaglines).selectedTaglineState;

  return (
    <div className={styles.container}>
      {candidates?.map((candidate) => (
        <MemoItem
          candidate={candidate}
          key={candidate.id}
          existingTagline={existingTaglines?.find((tagline) => tagline.placeId === candidate.placeInfo.placeId)}
        />
      ))}
    </div>
  );
};

export default MemoContent;
