import {Link} from 'react-router-dom';

import styles from './RecommendedLocation.module.scss';

import {LocationDataType} from '@/types/home';

interface PropsType {
  data: LocationDataType;
}

function RecommendedLocation({data}: PropsType) {
  let location: string;

  switch (data.location) {
    case '제주':
      location = '제주 전체';
      break;
    case '부산':
      location = '부산 전체';
      break;
    case '강릉':
      location = '강원 강릉시';
      break;
    case '속초':
      location = '강원 속초시';
      break;
    case '경주':
      location = '경북 경주시';
      break;
    case '여수':
      location = '전남 여수시';
      break;
    case '전주':
      location = '전북 전주시';
      break;
    default:
      location = '전국';
  }

  return (
    <div className={styles.container}>
      <Link to={`/search?keyword=${data.location}&category=0&map=false&location=${location}&sort=등록순&hot=false`}>
        <img src={data.imageURL} alt={`${data.location}의 사진`}></img>
        <div className={styles.text_wall} />
        <span>{data.location}</span>
      </Link>
    </div>
  );
}

export default RecommendedLocation;
