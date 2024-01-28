import {Link, useSearchParams} from 'react-router-dom';

import styles from './HotItem.module.scss';

import nullImg from '@/assets/homeIcons/search/nullImg.svg';
import areas from '@/utils/areas.json';
import titleCaseChange from '@/utils/titleCaseChange';
import {translateCategoryToStr} from '@/utils/translateSearchData';

import {SearchHotItemType} from '@/types/home';

interface PropsData {
  data: SearchHotItemType;
}

function HotItem({data}: PropsData) {
  const location = areas.filter((area) => area.areaCode === data.areaCode)[0].name;
  const category = translateCategoryToStr(data.contentTypeId);
  const title = titleCaseChange(data.title);
  const imgSrc = data.thumbnail ? data.thumbnail : nullImg;
  const [searchPrams] = useSearchParams();
  const tripId = searchPrams.get('placeID');
  const journyId = searchPrams.get('tripDate')?.split(' ')[1];
  const path = searchPrams.get('tripDate')?.split(' ')[0];
  const detailLink =
    path === 'trip'
      ? `/detail/${data.id} ${data.contentTypeId}?title=${data.title}&tripId=${tripId}&journyId=${journyId}`
      : `/detail/${data.id} ${data.contentTypeId}?title=${data.title}`;

  return (
    <Link to={detailLink} className={styles.container}>
      <img src={imgSrc} alt={`${data.title}의 사진`} style={{padding: data.thumbnail ? 0 : '30px'}} />
      <p className={styles.text_box}>
        <span className={styles.title}>{title}</span>
        <span className={styles.location}>
          {category} · {location}
        </span>
      </p>
    </Link>
  );
}

export default HotItem;
