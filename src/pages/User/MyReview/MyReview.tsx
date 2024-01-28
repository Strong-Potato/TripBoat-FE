import {useDisclosure} from '@chakra-ui/react';
import {ReactNode, useRef, useState} from 'react';

import styles from './MyReview.module.scss';

import {useInfiniteScroll} from '@/hooks/useInfiniteScroll';
import {useGetMyReview} from '@/hooks/User/useMyReview';

import Header from '@/components/Auth/Header/Header';
import BottomSlide from '@/components/BottomSlide/BottomSlide';
import ReviewImageSlider from '@/components/Detail/Contents/Review/ReviewImageSlider/ReviewImageSlider';
import ActionList from '@/components/MyReview/ActionList/ActionList';
import ObserveTarget from '@/components/Route/ObserveTarget/ObserveTarget';

import Meatball from '@/assets/icons/meatball.svg?react';
import Star from '@/assets/icons/star_fill.svg?react';
import {setMyReviewDate} from '@/utils/formatDate';

import {Reviews} from '@/types/myReview';

const defaultThumbnail = '/city_default.svg';

function MyReview() {
  const {isOpen: isBottomSlideOpen, onOpen: onBottomSlideOpen, onClose: onBottomSlideClose} = useDisclosure();
  const [reviews, hasNextData, inViewRef] = useInfiniteScroll(useGetMyReview);
  const [bottomSlideContent, setBottomSlideContent] = useState<ReactNode | null>(null);

  const clickedReviewId = useRef<number | undefined>();

  function convertStringToDate(dateString: string) {
    // "yyyy-mm-dd" 형식의 문자열에서 연도, 월, 일 추출
    const parts = dateString.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // 월은 0부터 시작하므로 1을 빼줍니다.
    const day = parseInt(parts[2], 10);

    // Date 객체 생성
    const dateObject = new Date(year, month, day);

    return dateObject;
  }

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
                      backgroundImage: `url(${place.thumbnail ? place.thumbnail : defaultThumbnail})`,
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
                    console.log(page.rating);
                    setBottomSlideContent(
                      <ActionList
                        onBottomSlideOpen={onBottomSlideOpen}
                        setBottomSlideContent={setBottomSlideContent}
                        onBottomSlideClose={onBottomSlideClose}
                        reviewId={id}
                        starCountProps={rating}
                        textProps={content}
                        timeProps={convertStringToDate(visitedAt)}
                        imageUrlsProps={images}
                      />,
                    );
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

              <div style={{padding: '0 20px'}}>{images && <ReviewImageSlider images={images} />}</div>
            </li>
          )),
        )}
      </ul>

      {reviews && hasNextData && <ObserveTarget inViewRef={inViewRef} />}

      <BottomSlide
        isOpen={isBottomSlideOpen}
        onClose={onBottomSlideClose}
        children={bottomSlideContent}
        isCloseBtn={false}
      />
    </div>
  );
}

export default MyReview;
