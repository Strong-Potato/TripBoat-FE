import { useEffect, useState } from "react";

import styles from "./SearchList.module.scss";

import { getData } from "@/mocks/handlers/home";

import DateFilter from "./DateFilter/DateFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import MapButton from "./MapButton/MapButton";
import SearchItem from "./SearchItem/SearchItem";
import Tabs from "./Tabs/Tabs";

import { SearchItemType } from "@/types/home";

function SearchList({ keyword }: { keyword: string }) {
  const [data, setData] = useState<SearchItemType[]>();
  const [filterData, setFilterData] = useState<SearchItemType[]>();
  const [category, setCategory] = useState("전체");

  useEffect(() => {
    setCategory("전체");
    getData<SearchItemType[] | undefined>("home/search/search", setData);
  }, [keyword]);

  useEffect(() => {
    if (data && category !== "전체") {
      const filterData = data.filter((data) => data.category === category);
      setFilterData(filterData);
    } else {
      setFilterData(data);
    }
  }, [data, category]);

  return (
    <div className={styles.container}>
      <Tabs set={setCategory} category={category} />
      <div className={styles.filter}>
        <LocationFilter />
        <DateFilter />
      </div>
      <ul className={styles.list}>
        {filterData &&
          filterData.map((data, i) => (
            <SearchItem data={data} key={data.title + i} />
          ))}
      </ul>
      <MapButton />
    </div>
  );
}

export default SearchList;
