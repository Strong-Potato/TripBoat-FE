import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import styles from './SearchFromHome.module.scss';

import MapHeader from '@/components/SearchFromHome/MapHeader/MapHeader';
import SearchBar from '@/components/SearchFromHome/SearchBar/SearchBar';
import SearchHome from '@/components/SearchFromHome/SearchHome/SearchHome';
import SearchList from '@/components/SearchFromHome/SearchList/SearchList';

function SearchFromHome() {
  const [keyword, setKeyword] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');
  const [moveMap, setMoveMap] = useState('false');
  const [searchLocation, setSearchLocation] = useState('전국');
  const [sort, setSort] = useState('등록순');
  const [searchParams] = useSearchParams();
  const vh = window.innerHeight;

  useEffect(() => {
    const querystring = {
      keyword: searchParams.get('keyword'),
      category: searchParams.get('category'),
      map: searchParams.get('map'),
      location: searchParams.get('location'),
      sort: searchParams.get('sort'),
    };

    if (querystring.keyword) {
      setKeyword(querystring.keyword);
    }
    if (querystring.category) {
      setCategory(querystring.category);
    }
    if (querystring.map) {
      setMoveMap(querystring.map);
    }
    if (querystring.location) {
      setSearchLocation(querystring.location);
    }
    if (querystring.sort) {
      setSort(querystring.sort);
    }
  }, [searchParams]);

  return (
    <div
      className={styles.container}
      style={{
        height: `${vh}px`,
        gap: moveMap === 'true' ? '0' : '24px',
        paddingTop: moveMap === 'true' ? '0' : '16px',
      }}
    >
      {moveMap === 'true' ? (
        <MapHeader
          setMoveMap={setMoveMap}
          keyword={keyword}
          category={category}
          searchLocation={searchLocation}
          sort={sort}
        />
      ) : (
        <SearchBar
          setKeyword={setKeyword}
          keyword={keyword}
          category={category}
          searchLocation={searchLocation}
          sort={sort}
        />
      )}
      {keyword === '' ? (
        <SearchHome set={setKeyword} />
      ) : (
        <SearchList
          keyword={keyword}
          moveMap={moveMap}
          searchLocation={searchLocation}
          category={category}
          sort={sort}
          setMoveMap={setMoveMap}
          setCategory={setCategory}
          setSearchLocation={setSearchLocation}
          setSort={setSort}
        />
      )}
    </div>
  );
}

export default SearchFromHome;
