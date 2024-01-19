import {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from 'react-router-dom';

import styles from './SearchList.module.scss';

import {getData} from '@/mocks/handlers/home';

import DateFilter from './DateFilter/DateFilter';
import LocationFilter from './LocationFilter/LocationFilter';
import Map from './Map/Map';
import MapButton from './MapButton/MapButton';
import SearchItem from './SearchItem/SearchItem';
import Tabs from './Tabs/Tabs';

import {SearchItemType} from '@/types/home';

interface PropsType {
  keyword: string;
  category: string;
  moveMap: string;
  searchLocation: string;
  sort: string;
  setMoveMap: React.Dispatch<React.SetStateAction<string>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSearchLocation: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

function SearchList({
  keyword,
  moveMap,
  category,
  searchLocation,
  sort,
  setMoveMap,
  setCategory,
  setSearchLocation,
  setSort,
}: PropsType) {
  const [data, setData] = useState<SearchItemType[]>();
  const [filterData, setFilterData] = useState<SearchItemType[]>();
  const [categoryChange, setCategoryChange] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getData<SearchItemType[] | undefined>('home/search/search', setData);

    const querystring = searchParams.get('category');
    if (querystring) {
      setCategory(querystring);
    }
  }, [keyword, searchParams]);

  useEffect(() => {
    if (data) {
      if (category !== '전체') {
        let filterData;
        if (category === '맛집') {
          filterData = data.filter((data) => data.category === '음식점' || data.category === '카페');
        } else {
          filterData = data.filter((data) => data.category === category);
        }
        setFilterData(filterData);
      } else {
        setFilterData(data);
      }
    }
  }, [data, category]);

  function onMap() {
    setMoveMap('true');
    navigate(`/home/search?keyword=${keyword}&category=${category}&map=true&location=${searchLocation}&sort=${sort}`);
  }

  return (
    <div className={styles.container} style={{height: moveMap === 'true' ? '100%' : 'calc(100% - 72px)'}}>
      <Tabs
        setCategory={setCategory}
        category={category}
        setCategoryChange={setCategoryChange}
        keyword={keyword}
        moveMap={moveMap}
        searchLocation={searchLocation}
        sort={sort}
      />
      {moveMap === 'true' && filterData ? (
        <Map data={filterData} categoryChange={categoryChange} />
      ) : (
        <>
          <div className={styles.filter}>
            <LocationFilter
              keyword={keyword}
              moveMap={moveMap}
              category={category}
              searchLocation={searchLocation}
              sort={sort}
              setSearchLocation={setSearchLocation}
            />
            <DateFilter />
          </div>
          <ul className={styles.slide}>
            {filterData &&
              filterData.map((data, i) => (
                <SearchItem data={data} key={data.title + i} categoryChange={categoryChange} />
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
