import {InfiniteData, useInfiniteQuery} from '@tanstack/react-query';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import {useNavigate} from 'react-router-dom';

import styles from './SearchList.module.scss';

import AddToCandidateButton from '@/components/ButtonsInAddingCandidate/AddToCandidateButton/AddToCandidateButton';
import ObserveTarget from '@/components/Route/ObserveTarget/ObserveTarget';

import {keywordSearch, search} from '@/api/search';
import SearchNull from '@/assets/homeIcons/search/searchNull.svg?react';

import DateFilter from './DateFilter/DateFilter';
import LocationFilter from './LocationFilter/LocationFilter';
import Map from './Map/Map';
import MapButton from './MapButton/MapButton';
import SearchItem from './SearchItem/SearchItem';
import Tabs from './Tabs/Tabs';

import {ForSearchType, SearchItemType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
}

function SearchList({forSearch}: PropsType) {
  const [filterData, setFilterData] = useState<SearchItemType[] | undefined>();
  const [isEnd, setIsEnd] = useState(false);
  const [categoryChange, setCategoryChange] = useState(false);
  const {ref: inViewRef, inView} = useInView({
    rootMargin: '100px 0px 0px 0px',
    threshold: 1,
  });
  const navigate = useNavigate();

  async function getData(page: number) {
    if (forSearch.hot === 'true') {
      const fetchData = await keywordSearch(forSearch.keyword, forSearch.location, forSearch.sort, page + 1);
      if (fetchData?.length === 0) {
        setIsEnd(true);
        return [];
      }
      return fetchData;
    } else {
      const fetchData = await search(forSearch.keyword, forSearch.location, forSearch.sort, page + 1);
      if (fetchData?.length === 0) {
        setIsEnd(true);
        return [];
      }
      return fetchData;
    }
  }

  const {data, fetchNextPage} = useInfiniteQuery<unknown, Error, InfiniteData<SearchItemType[], unknown>>({
    queryKey: [`${forSearch.keyword} ${forSearch.location} ${forSearch.sort} ${forSearch.hot}`],
    queryFn: ({pageParam = 0}) => getData(pageParam as number),
    initialPageParam: 0,
    refetchOnWindowFocus: false,
    getNextPageParam: (pageParam, allPage) => {
      if (!allPage) {
        return pageParam;
      }
      return allPage.length;
    },
  });

  useEffect(() => {
    console.log(isEnd);
    console.log(inView);

    if (!isEnd && inView) {
      console.log(1);

      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    console.log(data);

    if (data) {
      if (forSearch.category !== 0) {
        const filterData: SearchItemType[][] = [];
        if (forSearch.category === 14) {
          data.pages.map((data) => {
            const filter = data.filter((data) => data.contentTypeId === 14 || data.contentTypeId === 15);
            filterData.push(filter);
          });
        } else {
          data.pages.map((data) => {
            const filter = data.filter((data) => data.contentTypeId === forSearch.category);
            filterData.push(filter);
          });
        }
        setFilterData(filterData.flat());
      } else {
        setFilterData(data.pages.flat());
      }
    }
  }, [forSearch.category, data]);

  function onMap() {
    navigate(
      `/search?keyword=${forSearch.keyword}&category=${forSearch.category}&map=true&location=${forSearch.location}&sort=${forSearch.sort}&hot=${forSearch.hot}&placeID=${forSearch.placeID}&tripDate=${forSearch.tripDate}`,
    );
  }

  return (
    <div
      className={styles.container}
      style={{
        height: forSearch.map === 'true' ? '100%' : 'calc(100% - 72px)',
        paddingTop: forSearch.placeID !== 'undefinde' ? '24px' : 0,
      }}
    >
      {forSearch.hot === 'false' && (
        <Tabs data={data?.pages.flat()} forSearch={forSearch} setCategoryChange={setCategoryChange} />
      )}
      {forSearch.map === 'true' && filterData ? (
        <Map data={filterData} categoryChange={categoryChange} />
      ) : (
        <>
          <div className={styles.filter}>
            <LocationFilter forSearch={forSearch} />
            <DateFilter forSearch={forSearch} />
          </div>
          <ul className={styles.slide}>
            {filterData && filterData?.length > 0 ? (
              filterData.map((data, i) => (
                <SearchItem forSearch={forSearch} data={data} key={data.title + i} categoryChange={categoryChange} />
              ))
            ) : (
              <div className={styles.nullBox}>
                <SearchNull />
                <span>검색 결과가 없습니다.</span>
              </div>
            )}
            {filterData && filterData?.length > 0 && !isEnd && <ObserveTarget inViewRef={inViewRef} />}
          </ul>
          {forSearch.placeID !== 'undefined' ? (
            <AddToCandidateButton />
          ) : (
            <button onClick={onMap}>
              <MapButton />
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default SearchList;
