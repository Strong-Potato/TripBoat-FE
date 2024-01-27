import {AiOutlineBell} from 'react-icons/ai';
import {IoSearchSharp} from 'react-icons/io5';
import {Link} from 'react-router-dom';

import styles from './TabBar.module.scss';

import {useGetAlarm} from '@/hooks/Notification/useNotification';

import {Alarmprop} from '@/types/alarm';

function TabBar({onAlarmOpen}: Alarmprop) {
  const news = localStorage.getItem('news');
  const {data: Alarm} = useGetAlarm(true);
  if (Alarm?.data.data.notificationDetail[0].isRead === false) {
    localStorage.setItem('news', 'true');
  }

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Link to='/search'>
          <IoSearchSharp />
        </Link>
        <button onClick={onAlarmOpen} className={styles.icons__wrapper}>
          <AiOutlineBell />
          {news && <div className={styles.icons__wrapper__eclips} />}
        </button>
      </div>
    </div>
  );
}

export default TabBar;
