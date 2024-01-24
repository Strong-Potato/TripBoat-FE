import {GoStarFill} from 'react-icons/go';

import styles from './OtherCard.module.scss';

import {OtherCardPropsType} from '@/types/detail';
import {Link} from 'react-router-dom';

function OtherCard({image, name, category, point, id, contentTypeId}: OtherCardPropsType) {
  return (
    <Link className={styles.container} to={`/detail/${id} ${contentTypeId}`}>
      <div className={styles.container__image}>
        <img src={image} alt='#' />
      </div>
      <div className={styles.container__contents}>
        <h4>{name}</h4>
        <p>{category}</p>
        <div className={styles.container__contents__reviews}>
          <GoStarFill className={styles.container__contents__reviews__star} />
          <span className={styles.container__contents__reviews__point}>{point}</span>
        </div>
      </div>
    </Link>
  );
}

export default OtherCard;
