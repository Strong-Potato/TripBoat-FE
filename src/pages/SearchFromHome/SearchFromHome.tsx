import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import styles from './SearchFromHome.module.scss';

import {search} from '@/hooks/Search/useSearch';

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
  });
  const [searchParams] = useSearchParams();
  const [kewordClick, setKeywordClick] = useState(false);
  const vh = window.innerHeight;

  useEffect(() => {
    const querystring = {
      keyword: searchParams.get('keyword'),
      category: searchParams.get('category'),
      map: searchParams.get('map'),
      location: searchParams.get('location'),
      sort: searchParams.get('sort'),
    };

    if (querystring.keyword && querystring.category && querystring.location && querystring.map && querystring.sort) {
      setForSearch({
        keyword: querystring.keyword,
        category: parseInt(querystring.category),
        map: querystring.map,
        location: querystring.location,
        sort: querystring.sort,
      });
      console.log(search(querystring.keyword, querystring.location, querystring.sort));
    }
  }, [searchParams]);

  return (
    <div
      className={styles.container}
      style={{
        height: `${vh}px`,
        gap: forSearch.map === 'true' ? '0' : '24px',
        paddingTop: forSearch.map === 'true' ? '0' : '16px',
      }}
    >
      {forSearch.map === 'true' ? (
        <MapHeader forSearch={forSearch} setForSearch={setForSearch} />
      ) : (
        <SearchBar forSearch={forSearch} setForSearch={setForSearch} />
      )}
      {forSearch.keyword === '' ? (
        <SearchHome setKeywordClick={setKeywordClick} />
      ) : (
        <SearchList forSearch={forSearch} keywordClick={kewordClick} />
      )}
    </div>
  );
}

export default SearchFromHome;
