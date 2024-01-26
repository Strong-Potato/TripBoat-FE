import {useDisclosure} from '@chakra-ui/react';
import {useRef} from 'react';

import styles from './MyReview.module.scss';

import {useInfiniteScroll} from '@/hooks/useInfiniteScroll';
import {useGetMyReview} from '@/hooks/User/useMyReview';

import Header from '@/components/Auth/Header/Header';
import BottomSlide from '@/components/BottomSlide/BottomSlide';
import ReviewImageSlider from '@/components/Detail/Contents/Review/ReviewImageSlider/ReviewImageSlider';
import ActionList from '@/components/MyReview/ActionList/ActionList';
import ObserveTarget from '@/components/Route/ObserveTarget/ObserveTarget';

import defaultImage from '@/assets/icons/city_default.svg';
import Meatball from '@/assets/icons/meatball.svg?react';
import Star from '@/assets/icons/star_fill.svg?react';
import {setMyReviewDate} from '@/utils/formatDate';

import {Reviews} from '@/types/myReview';

function MyReview() {
  const {isOpen: isBottomSlideOpen, onOpen: onBottomSlideOpen, onClose: onBottomSlideClose} = useDisclosure();
  const [reviews, hasNextData, inViewRef] = useInfiniteScroll(useGetMyReview);

  const clickedReviewId = useRef<number | undefined>();

  return (
    <div className={styles.container}>
      <Header content='내 리뷰' />

      <ul className={styles.myreview}>
        {reviews?.pages.map((page) =>
          page.data.reviews.map(({id, place, visitedAt, rating, content, images}: Reviews) => (
            <li key={id}>
              <div className={styles.myreview__header}>
                <div>
                  <div
                    className={`${styles.myreview__header__img} ${place.thumbnail || styles.default}`}
                    style={{
                      backgroundImage: `url(${place.thumbnail ? place.thumbnail : defaultImage})`,
                    }}
                  ></div>

                  <div className={styles.myreview__header__text}>
                    <div className={styles.myreview__header__text__title}>{place.title}</div>
                    <div className={styles.myreview__header__text__category}>{place.category}</div>
                  </div>
                </div>

                <button
                  className={styles.myreview__header__meatball}
                  onClick={() => {
                    clickedReviewId.current = place.id;
                    onBottomSlideOpen();
                  }}
                >
                  <Meatball />
                </button>
              </div>

              <small className={styles.myreview__info}>
                <div>
                  <Star />
                </div>
                <div>{rating}</div>

                <div className={styles.myreview__info__visited}>{`${setMyReviewDate(visitedAt)} 방문`}</div>
              </small>

              <p className={styles.myreview__content}>{content}</p>

              {images && <ReviewImageSlider images={images} />}
            </li>
          )),
        )}
      </ul>

      {hasNextData && <ObserveTarget inViewRef={inViewRef} />}

      <BottomSlide
        isOpen={isBottomSlideOpen}
        onClose={onBottomSlideClose}
        children={<ActionList reviewId={clickedReviewId} />}
      />
    </div>
  );
}

export default MyReview;
