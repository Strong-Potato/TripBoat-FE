import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './SearchBar.module.scss';

import BackIcon from '@/assets/homeIcons/search/backInHome.svg?react';
import SearchIcon from '@/assets/homeIcons/search/searchIcon.svg?react';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  setForSearch: React.Dispatch<React.SetStateAction<ForSearchType>>;
}

interface InputBarType extends HTMLInputElement {
  focus: () => void;
}

function SearchBar({forSearch, setForSearch}: PropsType) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const inputBar = useRef<InputBarType | null>(null);

  useEffect(() => {
    setInputValue(forSearch.keyword);
    if (inputBar.current) {
      inputBar.current.focus();
    }
  }, [forSearch.keyword]);

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function search() {
    navigate(
      `/search?keyword=${inputValue}&category=0&map=false&location=${forSearch.location}&sort=등록순&hot=false&placeID=${forSearch.placeID}&tripDate=${forSearch.tripDate}`,
    );
  }

  function removeValue() {
    if (forSearch.keyword === '') {
      navigate('/');
    } else {
      navigate('/search');
      setInputValue('');
      const beforeData = forSearch;
      beforeData.keyword = '';
      beforeData.hot = 'false';
      setForSearch(beforeData);
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.search_container}
        style={{padding: forSearch.placeID !== 'undefined' ? '5px 32px 8px 10px' : '5px 32px 8px 32px'}}
      >
        <div className={styles.searchBar}>
          <input
            type='text'
            placeholder='장소 이름이나 키워드를 입력해보세요'
            className={styles.searchBar__input}
            value={inputValue}
            onChange={handleInputValue}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                search();
              }
            }}
            ref={inputBar}
          />
        </div>
        {forSearch.placeID === 'undefined' && (
          <button className={styles.return} onClick={removeValue}>
            <BackIcon />
          </button>
        )}
        <button className={styles.enter} onClick={search}>
          <SearchIcon />
        </button>
        <div className={styles.bottom_line} />
      </div>
    </div>
  );
}

export default SearchBar;
