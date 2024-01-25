import {placeInfoDataPlace} from '@/types/detail';
import BasicInformation from './BasicInformation/BasicInformation';
import Others from './Others/Others';
import ShortReviews from './ShortReveiws/ShortReviews';

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
      <BasicInformation
        location={data.location}
        openTime={data.openTime}
        title={data.title}
        thumbnail={data.thumbnail}
        id={data.id}
        contentTypeId={data.contentTypeId}
      />
      <ShortReviews onOpen={onOpen} reviewsRating={reviewsRating} reviews={reviews} />
      <Others data={data} />
    </div>
  );
}

export default Information;
