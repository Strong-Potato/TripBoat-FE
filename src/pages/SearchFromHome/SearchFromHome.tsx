import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./SearchFromHome.module.scss";

import MapHeader from "@/components/SearchFromHome/MapHeader/MapHeader";
import SearchBar from "@/components/SearchFromHome/SearchBar/SearchBar";
import SearchHome from "@/components/SearchFromHome/SearchHome/SearchHome";
import SearchList from "@/components/SearchFromHome/SearchList/SearchList";

function SearchFromHome() {
  const [keyword, setKeyword] = useState<string>();
  const [moveMap, setMoveMap] = useState("false");
  const [searchParams] = useSearchParams();
  const vh = window.innerHeight;
  console.log(window.innerHeight);

  useEffect(() => {
    const querystring = {
      keyword: searchParams.get("keyword"),
      map: searchParams.get("map"),
    };
    if (querystring.keyword) {
      setKeyword(querystring.keyword);
    }
    if (querystring.map) {
      setMoveMap(querystring.map);
    }
  }, [searchParams]);

  return (
    <div
      className={styles.container}
      style={{
        height: `${vh}px`,
        gap: moveMap === "true" ? "0" : "24px",
        paddingTop: moveMap === "true" ? "0" : "16px",
      }}
    >
      {moveMap === "true" ? (
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
