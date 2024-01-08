import styles from "./SearchFromHome.module.scss";

import RecommendedItemList from "@/components/Home/RecommendedItemList/RecommendedItemList";
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
          <p className={styles.title}>겨울에 어울리는 포근한 숙소</p>
          <RecommendedItemList apiNum={1} />
        </div>
        <div className={styles.column_8px}>
          <p className={styles.title}>겨울을 신나게 즐기는 쌈박한 방법!</p>
          <RecommendedItemList apiNum={2} />
        </div>
      </div>
    </div>
  );
}

export default SearchFromHome;
