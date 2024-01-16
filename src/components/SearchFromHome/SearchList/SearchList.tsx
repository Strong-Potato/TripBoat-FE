import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import styles from "./SearchList.module.scss";

import { getData } from "@/mocks/handlers/home";

import DateFilter from "./DateFilter/DateFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import Map from "./Map/Map";
import MapButton from "./MapButton/MapButton";
import SearchItem from "./SearchItem/SearchItem";
import Tabs from "./Tabs/Tabs";

import { SearchItemType } from "@/types/home";

interface PropsType {
  keyword: string | undefined;
  moveMap: string;
  set: React.Dispatch<React.SetStateAction<string>>;
}

function SearchList({ keyword, set, moveMap }: PropsType) {
  const [data, setData] = useState<SearchItemType[]>();
  const [filterData, setFilterData] = useState<SearchItemType[]>();
  const [category, setCategory] = useState("전체");
  const [categoryChange, setCategoryChange] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getData<SearchItemType[] | undefined>("home/search/search", setData);

    const querystring = searchParams.get("category");
    if (querystring) {
      setCategory(querystring);
    }
  }, [keyword, searchParams]);

  useEffect(() => {
    if (data) {
      if (category !== "전체") {
        const filterData = data.filter((data) => data.category === category);
        setFilterData(filterData);
      } else {
        setFilterData(data);
      }
    }
  }, [data, category]);

  function onMap() {
    set("true");
    if (keyword) {
      navigate(`/home/search?keyword=${keyword}&map=true`);
    }
  }

  return (
    <div
      className={styles.container}
      style={{ height: moveMap === "true" ? "100%" : "calc(100% - 72px)" }}
    >
      <Tabs
        setCategory={setCategory}
        category={category}
        setCategoryChange={setCategoryChange}
        keyword={keyword}
      />
      {moveMap === "true" && filterData ? (
        <Map data={filterData} categoryChange={categoryChange} />
      ) : (
        <>
          <div className={styles.filter}>
            <LocationFilter />
            <DateFilter />
          </div>
          <ul className={styles.slide}>
            {filterData &&
              filterData.map((data, i) => (
                <SearchItem
                  data={data}
                  key={data.title + i}
                  categoryChange={categoryChange}
                />
              ))}
          </ul>
          <button onClick={onMap}>
            <MapButton />
          </button>
        </>
      )}
    </div>
  );
}

export default SearchList;
