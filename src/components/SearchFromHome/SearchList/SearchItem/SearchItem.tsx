import {Link} from 'react-router-dom';

import styles from './SearchItem.module.scss';

import SelectButton from '@/components/ButtonsInAddingCandidate/SelectButton/SelectButton';

import nullImg from '@/assets/homeIcons/search/nullImg.svg';
import areas from '@/utils/areas.json';
import titleCaseChange from '@/utils/titleCaseChange';
import {translateCategoryToStr} from '@/utils/translateSearchData';

import {ForSearchType, SearchItemType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  data: SearchItemType;
  categoryChange: boolean;
}

function SearchItem({forSearch, data, categoryChange}: PropsType) {
  const title = titleCaseChange(data.title);
  const location = areas.filter((area) => area.areaCode === data.location.areaCode)[0].name;
  const category = translateCategoryToStr(data.contentTypeId);
  const imgSrc = data.thumbnail ? data.thumbnail : nullImg;

  return (
    <Link to={`/detail/${data.id} ${data.contentTypeId}?title=${data.title}`} className={styles.container}>
      <div className={styles.itemBox}>
        <img
          src={imgSrc}
          alt={`${data.title}의 사진`}
          style={{opacity: categoryChange ? 0 : 1, padding: data.thumbnail ? 0 : '12px'}}
        />
        <div className={styles.text} style={{opacity: categoryChange ? 0 : 1}}>
          <span className={styles.title}>{title}</span>
          <span className={styles.info}>
            {category}·{location}
          </span>
        </div>
      </div>
      {forSearch.placeID !== 'undefined' && <SelectButton data={data} />}
    </Link>
  );
}

export default SearchItem;
