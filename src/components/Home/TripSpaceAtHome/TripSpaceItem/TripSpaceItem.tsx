import {Link} from 'react-router-dom';

import styles from './TripSpaceItem.module.scss';

import tripImg from '@/assets/homeIcons/home/tripHome.svg';
import {setSpaceDate_DOW} from '@/utils/formatDate';

import {TripSpaceData} from '@/types/home';

interface PropsData {
  data: TripSpaceData;
}

function TripSpaceItem({data}: PropsData) {
  const startDate: string = data.startDate ? setSpaceDate_DOW(data.startDate, data.endDate) : '여행 날짜를 정해주세요!';
  const imgSrc: string = data.thumbnail ? data.thumbnail : tripImg;
  const dDay = new Date(data.startDate) <= new Date() ? '여행 중' : `D - ${data.dueDate}`;
  return (
    <Link to='/trip/1' className={styles.container}>
      <div className={styles.img_box}>
        <img className={styles.trip_img} src={imgSrc} alt={`${data.title}의 사진`} />
        {data.dueDate !== null && (
          <>
            <div className={styles.text_wall} />
            <span className={styles.d_day}>{dDay}</span>
          </>
        )}
      </div>
      <p className={styles.text_box}>
        <span className={styles.trip_city}>{data.city ? data.city : '여행지 미정'}</span>
        <span className={styles.trip_day}>{startDate}</span>
        <span className={styles.trip_title}>{data.title}</span>
      </p>
    </Link>
  );
}

export default TripSpaceItem;
