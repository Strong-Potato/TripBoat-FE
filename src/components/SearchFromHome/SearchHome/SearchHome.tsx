import styles from './SearchHome.module.scss';

import HotItems from './HotItems/HotItems';
import SearchKeyword from './SearchKeyword/SearchKeyword';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  setForSearch: React.Dispatch<React.SetStateAction<ForSearchType>>;
}

function SearchHome({forSearch, setForSearch}: PropsType) {
  return (
    <div className={styles.lists_box}>
      <div className={styles.column_4px}>
        <p className={styles.title}>인기 검색 키워드</p>
        <SearchKeyword forSearch={forSearch} setForSearch={setForSearch} />
      </div>
      <div className={styles.column_8px}>
        <p className={styles.title}>최근 30일간 인기 장소</p>
        <HotItems type='place' />
      </div>
      <div className={styles.column_8px}>
        <p className={styles.title}>최근 30일간 인기 숙소</p>
        <HotItems type='hotel' />
      </div>
    </div>
  );
}

export default SearchHome;
