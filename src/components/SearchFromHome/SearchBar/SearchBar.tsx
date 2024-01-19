import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './SearchBar.module.scss';

import BackIcon from '@/assets/homeIcons/search/backInHome.svg?react';
import SearchIcon from '@/assets/homeIcons/search/searchIcon.svg?react';

interface PropsType {
  keyword: string;
  category: string;
  searchLocation: string;
  sort: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
}

interface InputBarType extends HTMLInputElement {
  focus: () => void;
}

function SearchBar({setKeyword, keyword, category, searchLocation, sort}: PropsType) {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const inputBar = useRef<InputBarType | null>(null);

  useEffect(() => {
    setInputValue(keyword);
    if (inputBar.current) {
      inputBar.current.focus();
    }
  }, [keyword]);

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function search() {
    setKeyword(inputValue);
    navigate(
      `/home/search?keyword=${inputValue}&category=${category}&map=false&location=${searchLocation}&sort=${sort}`,
    );
  }

  function removeValue() {
    if (keyword === '') {
      navigate('/');
    } else {
      navigate('/home/search');
      setInputValue('');
      setKeyword('');
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
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
        <button className={styles.return} onClick={removeValue}>
          <BackIcon />
        </button>
        <button className={styles.enter} onClick={search}>
          <SearchIcon />
        </button>
        <div className={styles.bottom_line} />
      </div>
    </div>
  );
}

export default SearchBar;
