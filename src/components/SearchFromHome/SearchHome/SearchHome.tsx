import styles from "./SearchHome.module.scss";

import HotItems from "./HotItems/HotItems";
import SearchKeyword from "./SearchKeyword/SearchKeyword";

interface PropsType {
  set: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function SearchHome({ set }: PropsType) {
  return (
    <div className={styles.lists_box}>
      <div className={styles.column_4px}>
        <p className={styles.title}>인기 검색 키워드</p>
        <SearchKeyword set={set} />
      </div>
      <div className={styles.column_8px}>
        <p className={styles.title}>최근 30일간 인기 장소</p>
        <HotItems type="place" />
      </div>
      <div className={styles.column_8px}>
        <p className={styles.title}>최근 30일간 인기 숙소</p>
        <HotItems type="hotel" />
      </div>
    </div>
  );
}

export default SearchHome;
