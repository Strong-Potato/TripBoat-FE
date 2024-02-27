import styles from './SearchHome.module.scss';

import AddToCandidateButton from '@/components/ButtonsInAddingCandidate/AddToCandidateButton/AddToCandidateButton';

import HotForTrip from './HotForTrip/HotForTrip';
import HotItems from './HotItems/HotItems';
import SearchKeyword from './SearchKeyword/SearchKeyword';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchHome({forSearch, setIsLoading}: PropsType) {
  return (
    <div className={styles.lists_box}>
      <div className={styles.column_4px}>
        <p className={styles.title}>인기 검색 키워드</p>
        <SearchKeyword forSearch={forSearch} setIsLoading={setIsLoading} />
      </div>
      {forSearch.placeID !== 'undefined' ? (
        <div className={styles.column_8px}>
          <p className={styles.title}>최근 30일간 인기 장소</p>
          <HotForTrip forSearch={forSearch} />
        </div>
      ) : (
        <>
          <div className={styles.column_8px}>
            <p className={styles.title}>최근 30일간 인기 장소</p>
            <HotItems type={12} />
          </div>
          <div className={styles.column_8px}>
            <p className={styles.title}>최근 30일간 인기 숙소</p>
            <HotItems type={32} />
          </div>
        </>
      )}
      {forSearch.placeID !== 'undefined' && <AddToCandidateButton />}
    </div>
  );
}

export default SearchHome;
