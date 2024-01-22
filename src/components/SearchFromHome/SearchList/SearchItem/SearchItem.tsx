import {Link} from 'react-router-dom';

import styles from './SearchItem.module.scss';

import {translateCategoryToStr} from '@/hooks/Search/useSearch';

import nullImg from '@/assets/homeIcons/search/nullImg.svg';
import areas from '@/utils/areas.json';
import titleCaseChange from '@/utils/titleCaseChange';

import {SearchItemType} from '@/types/home';

interface PropsType {
  data: SearchItemType;
  categoryChange: boolean;
}

function SearchItem({data, categoryChange}: PropsType) {
  const title = titleCaseChange(data.title);
  const location = areas.filter((area) => area.areaCode === data.location.areaCode)[0].name;
  const category = translateCategoryToStr(data.contentTypeId);
  const imgSrc = data.thumbnail ? data.thumbnail : nullImg;

  return (
    <Link to={`/detail/${data.title}`} className={styles.container}>
      <img
        src={imgSrc}
        alt={`${data.title}의 사진`}
        style={{opacity: categoryChange ? 0 : 1, padding: data.thumbnail ? 0 : '12px'}}
      />
      <p className={styles.text} style={{opacity: categoryChange ? 0 : 1}}>
        <span className={styles.title}>{title}</span>
        <span className={styles.info}>
          {category}·{location}
        </span>
      </p>
    </Link>
  );
}

export default SearchItem;
