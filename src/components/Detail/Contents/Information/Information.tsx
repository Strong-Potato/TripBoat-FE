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
}

function Information({data, onOpen, reviewsRating}: InformationProps) {
  return (
    <div>
      <BasicInformation
        location={data.location}
        openTime={data.openTime}
        title={data.title}
        thumbnail={data.thumbnail}
        contentTypeId={data.contentTypeId}
      />
      <ShortReviews onOpen={onOpen} reviewsRating={reviewsRating} />
      <Others data={data} />
    </div>
  );
}

export default Information;
