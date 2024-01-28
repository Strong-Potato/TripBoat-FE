import {placeInfoDataPlace} from '@/types/detail';
import BasicInformation from './BasicInformation/BasicInformation';
// import Others from './Others/Others';
import ShortReviews from './ShortReveiws/ShortReviews';
import Yanolja from '@/assets/logo_yanolja.svg?react';
import styles from './Information.module.scss';
import {AiOutlineRight} from 'react-icons/ai';
import {Link} from 'react-router-dom';

export interface InformationProps {
  data: placeInfoDataPlace;
  onOpen: () => void;
  reviewsRating: {
    rating: number;
    userRatingCount: number;
  };
  reviews: {
    content: string;
    images: string[];
    isGoogle: boolean;
    nickname: string;
    profileImage: string;
    rating: number;
    visitedAt: string;
  }[];
}

function Information({data, onOpen, reviewsRating, reviews}: InformationProps) {
  return (
    <div>
      <Link className={styles.linkContainer} to={`https://www.yanolja.com/search/${data.title}`} target='_blank'>
        <Yanolja />
        <div className={styles.linkContainer__text}>
          <span className={styles.linkContainer__text__sale}>할인가</span>
          <span className={styles.linkContainer__text__reserve}>예약하러 가기</span>
          <AiOutlineRight fontSize='2rem' className={styles.linkContainer__text__icon} />
        </div>
      </Link>
      <BasicInformation
        location={data.location}
        openTime={data.openTime}
        title={data.title}
        thumbnail={data.thumbnail}
        id={data.id}
        contentTypeId={data.contentTypeId}
      />
      <ShortReviews onOpen={onOpen} reviewsRating={reviewsRating} reviews={reviews} />
      {/* <Others data={data} /> */}
    </div>
  );
}

export default Information;
