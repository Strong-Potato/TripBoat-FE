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

import {ForSearchType, SearchItemType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  setForSearch: React.Dispatch<React.SetStateAction<ForSearchType>>;
}

function SearchList({forSearch, setForSearch}: PropsType) {
  const [data, setData] = useState<SearchItemType[]>();
  const [filterData, setFilterData] = useState<SearchItemType[]>();
  const [categoryChange, setCategoryChange] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getData<SearchItemType[] | undefined>('home/search/search', setData);

    const querystring = searchParams.get('category');
    const beforeData = forSearch;
    if (querystring) {
      beforeData.category = querystring;
      setForSearch(beforeData);
    }
  }, [searchParams]);

  useEffect(() => {
    if (data) {
      if (forSearch.category !== '전체') {
        let filterData;
        if (forSearch.category === '맛집') {
          filterData = data.filter((data) => data.category === '음식점' || data.category === '카페');
        } else {
          filterData = data.filter((data) => data.category === forSearch.category);
        }
        setFilterData(filterData);
      } else {
        setFilterData(data);
      }
    }
  }, [data, forSearch.category]);

  function onMap() {
    const beforeData = forSearch;
    beforeData.map = 'true';
    setForSearch(beforeData);
    navigate(
      `/home/search?keyword=${forSearch.keyword}&category=${forSearch.category}&map=true&location=${forSearch.location}&sort=${forSearch.sort}`,
    );
  }

  return (
    <div className={styles.container} style={{height: forSearch.map === 'true' ? '100%' : 'calc(100% - 72px)'}}>
      <Tabs forSearch={forSearch} setForSearch={setForSearch} setCategoryChange={setCategoryChange} />
      {forSearch.map === 'true' && filterData ? (
        <Map data={filterData} categoryChange={categoryChange} />
      ) : (
        <>
          <div className={styles.filter}>
            <LocationFilter forSearch={forSearch} setForSearch={setForSearch} />
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
