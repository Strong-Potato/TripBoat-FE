import {FaStar} from 'react-icons/fa';
import {Link} from 'react-router-dom';

import styles from './RecommendedItem.module.scss';

import areas from '@/utils/areas.json';

import {RecommendedItemDataType} from '@/types/home';

interface PropsType {
  data: RecommendedItemDataType;
}

function RecommendedItem({data}: PropsType) {
  const location = areas.filter((area) => area.areaCode === data.areaCode)[0].name;
  return (
    <Link to={`/detail/${data.id}`} className={styles.container}>
      <img className={styles.item_img} src={data.thumbnail} alt={`${data.title}의 사진`} />
      <div className={styles.text_box}>
        <span className={styles.item_title}>{data.title}</span>
        <span className={styles.gray}>{location}</span>
        <div className={styles.item_score}>
          <p className={styles.score}>
            <span className={styles.star}>
              <FaStar />
            </span>
            <span>{data.rating}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default RecommendedItem;
