import {Button, Checkbox} from '@chakra-ui/react';

import styles from './AddToJourney.module.scss';

const AddToJourney = () => {
  const days = [1, 2, 3];

  return (
    <div className={styles.container}>
      {days.map((day, i) => (
        <label htmlFor={`${i + 1}`} className={styles.dayBox}>
          <span>DAY {day}</span>
          <Checkbox id={`${i + 1}`} variant='candidateCheckbox' boxSize='1.7rem' />
        </label>
      ))}
      <Button variant='CTAButton'>일정에 추가하기</Button>
    </div>
  );
};

export default AddToJourney;
