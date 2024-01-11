import { useState } from "react";

import styles from "./SearchFromHome.module.scss";

import SearchBar from "@/components/SearchFromHome/SearchBar/SearchBar";
import SearchHome from "@/components/SearchFromHome/SearchHome/SearchHome";
import SearchList from "@/components/SearchFromHome/SearchList/SearchList";

function SearchFromHome() {
  const [keyword, setKeyword] = useState<string>();

  return (
    <div className={styles.container}>
      <SearchBar set={setKeyword} keyword={keyword} />
      {!keyword ? (
        <SearchHome set={setKeyword} />
      ) : (
        <SearchList keyword={keyword} />
      )}
    </div>
  );
}

export default SearchFromHome;
