import {useState} from 'react';

import styles from './DayNavigationBar.module.scss';

import {DayNavigationBarProps} from '@/types/route';

function DayNavigationBar({dateList, editMode, handleEditMode}: DayNavigationBarProps) {
  const [selectedDay, setSelectedDay] = useState(1);

  // TODO: 클릭 시 해당 day로 스크롤 이동
  const handleDayClick = (day: number) => {
    setSelectedDay(day);
  };

  return (
    <nav>
      <div className={styles.dayButtonContainer}>
        {dateList.map((_, index) => (
          <button
            key={index}
            className={index + 1 === selectedDay ? styles.activeButton : ''}
            onClick={() => handleDayClick(index + 1)}
          >
            Day {index + 1}
          </button>
        ))}
      </div>
      <div className={styles.wholeEditButtonContainer}>
        <button className={editMode ? styles.wholeCompleteButton : styles.wholeEditButton} onClick={handleEditMode}>
          {editMode ? '완료' : '편집'}
        </button>
      </div>
    </nav>
  );
}

export default DayNavigationBar;
