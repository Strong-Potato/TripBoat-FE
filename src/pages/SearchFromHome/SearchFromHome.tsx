import { useState } from "react";

import styles from "./SearchFromHome.module.scss";

import MapHeader from "@/components/SearchFromHome/MapHeader/MapHeader";
import SearchBar from "@/components/SearchFromHome/SearchBar/SearchBar";
import SearchHome from "@/components/SearchFromHome/SearchHome/SearchHome";
import SearchList from "@/components/SearchFromHome/SearchList/SearchList";

function SearchFromHome() {
  const [keyword, setKeyword] = useState<string>();
  const [moveMap, setMoveMap] = useState(false);

  return (
    <div
      className={styles.container}
      style={{ height: moveMap ? "100vh" : "auto" }}
    >
      {moveMap ? (
        <MapHeader set={setMoveMap} keyword={keyword} />
      ) : (
        <SearchBar set={setKeyword} keyword={keyword} />
      )}
      {!keyword ? (
        <SearchHome set={setKeyword} />
      ) : (
        <SearchList keyword={keyword} moveMap={moveMap} set={setMoveMap} />
      )}
    </div>
  );
}

export default SearchFromHome;
