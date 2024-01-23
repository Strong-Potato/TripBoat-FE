import {placeInfoDataPlace} from '@/types/detail';
import BasicInformation from './BasicInformation/BasicInformation';
import Others from './Others/Others';
import ShortReviews from './ShortReveiws/ShortReviews';

export interface InformationProps {
  data: placeInfoDataPlace;
  onOpen: () => void;
}

function Information({data, onOpen}: InformationProps) {
  return (
    <div>
      <BasicInformation
        location={data.location}
        openTime={data.openTime}
        title={data.title}
        thumbnail={data.thumbnail}
        contentTypeId={data.contentTypeId}
      />
      <ShortReviews onOpen={onOpen} />
      <Others data={data} />
    </div>
  );
}

export default Information;
