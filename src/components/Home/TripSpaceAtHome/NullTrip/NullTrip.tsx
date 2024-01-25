import {MdArrowForwardIos} from 'react-icons/md';
import {Link} from 'react-router-dom';

import styles from './NullTrip.module.scss';

import tripImg from '@/assets/homeIcons/home/tripHome.svg';

function NullTrip() {
  const dataNull = {
    tripTitle: '아직 여행 일정이 없어요',
    tripDay: '새로운 여행 일정을 만들어보세요!',
  };

  return (
    <Link to='/auth/login' replace={true} className={styles.container}>
      <div className={styles.img_box}>
        <img className={styles.trip_img} src={tripImg} alt={'트립보트 사진'} />
      </div>
      <p className={styles.text_box}>
        <span className={styles.trip_title}>{dataNull.tripTitle}</span>
        <span className={styles.trip_day}>{dataNull.tripDay}</span>
      </p>
      <div className={styles.arrow}>
        <MdArrowForwardIos />
      </div>
    </Link>
  );
}

export default NullTrip;
