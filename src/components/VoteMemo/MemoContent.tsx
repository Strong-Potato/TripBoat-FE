import styles from './MemoContent.module.scss';

import MemoItem from './MemoItem/MemoItem';

import {SearchItemType} from '@/types/home';
import {TaglineType} from '@/types/vote';

const MemoContent = ({selectedPlaces}: {selectedPlaces: SearchItemType[]}) => {
  const getExistingTaglines = localStorage.getItem('recoil-persist');
  const existingTaglines: TaglineType[] = getExistingTaglines && JSON.parse(getExistingTaglines).selectedTaglineState;

  return (
    <div className={styles.container}>
      {selectedPlaces?.map((place) => (
        <MemoItem
          place={place}
          key={place.id}
          existingTagline={existingTaglines?.find((tagline) => tagline.id === place.id)}
        />
      ))}
    </div>
  );
};

export default MemoContent;
