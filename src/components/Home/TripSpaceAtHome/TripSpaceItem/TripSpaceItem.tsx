import {Link} from 'react-router-dom';

import styles from './TripSpaceItem.module.scss';

import {setSpaceDate_DOW} from '@/utils/formatDate';

import {TripSpaceData} from '@/types/home';

interface PropsData {
  data: TripSpaceData;
}

function TripSpaceItem({data}: PropsData) {
  const startDate = setSpaceDate_DOW(data.startDate, data.endDate);

  return (
    <Link to='/trip/1' className={styles.container}>
      <div className={styles.img_box}>
        <img className={styles.trip_img} src={data.thumbnail} alt={`${data.title}의 사진`} />
        {data.dueDate && (
          <>
            <div className={styles.text_wall} />
            <span className={styles.d_day}>{`D - ${data.dueDate}`}</span>
          </>
        )}
      </div>
      <p className={styles.text_box}>
        <span className={styles.trip_city}>{data.city}</span>
        <span className={styles.trip_day}>{startDate}</span>
        <span className={styles.trip_title}>{data.title}</span>
      </p>
    </Link>
  );
}

export default TripSpaceItem;
