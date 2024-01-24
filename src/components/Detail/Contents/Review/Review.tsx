import {GoStarFill} from 'react-icons/go';
import GoogleIcon from '@/assets/ic_google.svg?react';

import styles from './Review.module.scss';

import ReviewImageSlider from './ReviewImageSlider/ReviewImageSlider';

import {ReviewPropsTypes} from '@/types/detail';

function Review({name, isGoogle, rating, visitedAt, content, images, profileImage}: ReviewPropsTypes) {
  return (
    <div className={styles.container}>
      <div className={styles.container__imgWrapper}>
        <img src={profileImage} alt='#' referrerPolicy='no-referrer' />
      </div>
      <div className={styles.container__contentsBox}>
        <div className={styles.container__contentsBox__name}>
          <span>{name}</span>
          {isGoogle && <GoogleIcon className={styles.container__contentsBox__name__google} />}
        </div>
        <div className={styles.container__contentsBox__secondItems}>
          <GoStarFill className={styles.container__contentsBox__secondItems__star} />
          <span className={styles.container__contentsBox__secondItems__point}>{rating}</span>
          <span className={styles.container__contentsBox__secondItems__visitedAt}>{visitedAt}</span>
        </div>
        <div className={styles.container__contentsBox__content}>{content}</div>
        {images && <ReviewImageSlider images={images} />}
      </div>
    </div>
  );
}

export default Review;
