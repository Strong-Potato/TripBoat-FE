import { TfiSearch as SearchIcon } from "react-icons/tfi";

import styles from "./NoSearchResult.module.scss";

function NoSearchResult() {
  return (
    <div className={styles.container}>
      <SearchIcon size="5rem" color="#CDCFD0" />
      <p>검색 결과가 없습니다.</p>
    </div>
  );
}

export default NoSearchResult;
