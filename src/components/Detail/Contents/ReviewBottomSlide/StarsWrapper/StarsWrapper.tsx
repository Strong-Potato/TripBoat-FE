import {GoStarFill} from 'react-icons/go';

import styles from './StarsWrapper.module.scss';

import {starsWrapperProps} from '@/types/detail';

function StarsWrapper({starCount, setStarCount, setIsValuedCount}: starsWrapperProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container__stars}>
        <GoStarFill
          fontSize='3.2rem'
          color={starCount >= 1 ? '#FED600' : '#E3E5E5'}
          onClick={() => {
            setStarCount(1);
            setIsValuedCount(true);
          }}
        />
        <GoStarFill
          fontSize='3.2rem'
          color={starCount >= 2 ? '#FED600' : '#E3E5E5'}
          onClick={() => {
            setStarCount(2);
            setIsValuedCount(true);
          }}
        />
        <GoStarFill
          fontSize='3.2rem'
          color={starCount >= 3 ? '#FED600' : '#E3E5E5'}
          onClick={() => {
            setStarCount(3);
            setIsValuedCount(true);
          }}
        />
        <GoStarFill
          fontSize='3.2rem'
          color={starCount >= 4 ? '#FED600' : '#E3E5E5'}
          onClick={() => {
            setStarCount(4);
            setIsValuedCount(true);
          }}
        />
        <GoStarFill
          fontSize='3.2rem'
          color={starCount >= 5 ? '#FED600' : '#E3E5E5'}
          onClick={() => {
            setStarCount(5);
            setIsValuedCount(true);
          }}
        />
      </div>
      <div className={styles.container__information}>별점을 선택해주세요.</div>
    </div>
  );
}

export default StarsWrapper;
