import styles from "./SearchFromHome.module.scss";

import HotItems from "@/components/SearchFromHome/HotItems/HotItems";
import SearchBar from "@/components/SearchFromHome/SearchBar/SearchBar/SearchBar";
import SearchKeyword from "@/components/SearchFromHome/SearchKeyword/SearchKeyword";

function SearchFromHome() {
  return (
    <div className={styles.container}>
      <SearchBar />
      <div className={styles.lists_box}>
        <div className={styles.column_4px}>
          <p className={styles.title}>인기 검색 키워드</p>
          <SearchKeyword />
        </div>
        <div className={styles.column_8px}>
          <p className={styles.title}>최근 30일간 인기 장소</p>
          <HotItems type="place" />
        </div>
        <div className={styles.column_8px}>
          <p className={styles.title}>최근 30일간 인기 장소</p>
          <HotItems type="hotel" />
        </div>
      </div>
    </div>
  );
}

export default SearchFromHome;
