import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import styles from './SearchFromHome.module.scss';

import MapHeader from '@/components/SearchFromHome/MapHeader/MapHeader';
import SearchBar from '@/components/SearchFromHome/SearchBar/SearchBar';
import SearchHome from '@/components/SearchFromHome/SearchHome/SearchHome';
import SearchList from '@/components/SearchFromHome/SearchList/SearchList';

function SearchFromHome() {
  const [forSearch, setForSearch] = useState({
    keyword: '',
    category: 0,
    map: 'false',
    location: '전국',
    sort: '등록순',
    hot: 'false',
    placeID: 'undefined',
    tripDate: 'undefined',
  });
  const [searchParams] = useSearchParams();
  const vh = window.innerHeight;

  useEffect(() => {
    const querystring = {
      keyword: searchParams.get('keyword') === '없음' ? '' : searchParams.get('keyword'),
      category: searchParams.get('category'),
      map: searchParams.get('map'),
      location: searchParams.get('location'),
      sort: searchParams.get('sort'),
      hot: searchParams.get('hot'),
      placeID: searchParams.get('placeID'),
      tripDate: searchParams.get('tripDate'),
    };
    if (
      querystring.keyword &&
      querystring.category &&
      querystring.location &&
      querystring.map &&
      querystring.sort &&
      querystring.hot
    ) {
      if (!querystring.placeID && !querystring.tripDate) {
        setForSearch({
          keyword: querystring.keyword,
          category: parseInt(querystring.category),
          map: querystring.map,
          location: querystring.location,
          sort: querystring.sort,
          hot: querystring.hot,
          placeID: 'undefined',
          tripDate: 'undefined',
        });
      }
      if (querystring.placeID && !querystring.tripDate) {
        setForSearch({
          keyword: querystring.keyword,
          category: parseInt(querystring.category),
          map: querystring.map,
          location: querystring.location,
          sort: querystring.sort,
          hot: querystring.hot,
          placeID: querystring.placeID,
          tripDate: 'undefined',
        });
      }
      if (querystring.placeID && querystring.tripDate) {
        setForSearch({
          keyword: querystring.keyword,
          category: parseInt(querystring.category),
          map: querystring.map,
          location: querystring.location,
          sort: querystring.sort,
          hot: querystring.hot,
          placeID: querystring.placeID,
          tripDate: querystring.tripDate,
        });
      }
    }
  }, [searchParams]);

  return (
    <div
      className={styles.container}
      style={{
        height: `${vh}px`,
        gap: forSearch.map === 'true' || forSearch.hot === 'true' ? '0' : '24px',
        paddingTop: forSearch.map === 'true' ? '0' : '16px',
      }}
    >
      {forSearch.map === 'true' ? (
        <MapHeader forSearch={forSearch} setForSearch={setForSearch} />
      ) : (
        <SearchBar forSearch={forSearch} setForSearch={setForSearch} />
      )}
      {forSearch.keyword === '' ? <SearchHome forSearch={forSearch} /> : <SearchList forSearch={forSearch} />}
    </div>
  );
}

export default SearchFromHome;
