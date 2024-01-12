import { useEffect, useState } from "react";

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
  moveMap: boolean;
  set: React.Dispatch<React.SetStateAction<boolean>>;
}

function SearchList({ keyword, set, moveMap }: PropsType) {
  const [data, setData] = useState<SearchItemType[]>();
  const [filterData, setFilterData] = useState<SearchItemType[]>();
  const [category, setCategory] = useState("전체");
  const [categoryChange, setCategoryChange] = useState(false);

  useEffect(() => {
    setCategory("전체");
    getData<SearchItemType[] | undefined>("home/search/search", setData);
  }, [keyword]);

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
    set(true);
  }

  return (
    <div className={styles.container}>
      <Tabs
        setCategory={setCategory}
        category={category}
        setCategoryChange={setCategoryChange}
      />
      {moveMap && filterData ? (
        <Map data={filterData} categoryChange={categoryChange} />
      ) : (
        <>
          <div className={styles.filter}>
            <LocationFilter />
            <DateFilter />
          </div>
          <ul>
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
