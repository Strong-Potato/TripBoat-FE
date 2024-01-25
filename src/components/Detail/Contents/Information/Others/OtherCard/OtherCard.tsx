import {GoStarFill} from 'react-icons/go';

import styles from './OtherCard.module.scss';

import {OtherCardPropsType} from '@/types/detail';
import {Link} from 'react-router-dom';
import {translateCategoryToStr} from '@/utils/translateSearchData';

function OtherCard({image, name, point, id, contentTypeId}: OtherCardPropsType) {
  const categoryStr = translateCategoryToStr(contentTypeId);

  return (
    <Link className={styles.container} to={`/detail/${id} ${contentTypeId}`}>
      <div className={styles.container__image}>
        <img src={image} alt='#' />
      </div>
      <div className={styles.container__contents}>
        <h4>{name}</h4>
        <p>{categoryStr}</p>
        <div className={styles.container__contents__reviews}>
          <GoStarFill className={styles.container__contents__reviews__star} />
          <span className={styles.container__contents__reviews__point}>{point}</span>
        </div>
      </div>
    </Link>
  );
}

export default OtherCard;
