import {RiCalendarCheckLine} from 'react-icons/ri';

import styles from './DateWrapper.module.scss';

interface DateWrapperProps {
  onOpen?: () => void;
  time: Date;
  isValued: boolean;
}

function DateWrapper({onOpen, time, isValued}: DateWrapperProps) {
  return (
    <>
      <div className={styles.container} onClick={onOpen}>
        <div className={styles.container__dateWrapper}>
          {isValued ? (
            <>
              <RiCalendarCheckLine fontSize='2.4rem' />
              <span>{`${time.getFullYear()}년 ${time.getMonth() + 1}월 방문`}</span>
            </>
          ) : (
            <>
              <RiCalendarCheckLine fontSize='2.4rem' color='#CDCFD0' />
              <span style={{color: '#CDCFD0'}}>언제 방문하셨나요?</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default DateWrapper;
