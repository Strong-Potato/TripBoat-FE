import {useState} from 'react';
import {RiCheckboxCircleFill as SelectedIcon} from 'react-icons/ri';

import styles from './DayMove.module.scss';

import {SelectedPlace} from '@/types/route';

interface DayMoveProps {
  selectedPlaces: SelectedPlace[];
}

function DayMove({selectedPlaces}: DayMoveProps) {
  const days = 5;
  const [selectedDays, setSelectedDays] = useState(Array(days).fill(false));

  const handleSelect = (index: number) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[index] = !updatedSelectedDays[index];
    setSelectedDays(updatedSelectedDays);

    // TODO: 선택된 장소 카드 선택한 날짜 동선으로 이동
    console.log(index + 1, '여기로 이것을 옮기겠다', selectedPlaces);
  };

  return (
    <div className={styles.DayMoveContainer}>
      <header>
        <h1>날짜 이동</h1>
      </header>
      <div>
        {Array.from({length: days}, (_, index) => (
          <div className={styles.dayContainer}>
            <p key={index}>DAY {index + 1}</p>
            <button onClick={() => handleSelect(index)}>
              {selectedDays[index] ? (
                <SelectedIcon size='2.4rem' color='#2388FF' />
              ) : (
                <SelectedIcon size='2.4rem' color='#E3E5E5' />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DayMove;
