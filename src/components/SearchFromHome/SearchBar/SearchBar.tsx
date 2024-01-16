import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SearchBar.module.scss";

import BackIcon from "@/assets/homeIcons/search/backInHome.svg?react";
import SearchIcon from "@/assets/homeIcons/search/searchIcon.svg?react";

interface PropsType {
  set: React.Dispatch<React.SetStateAction<string | undefined>>;
  keyword: string | undefined;
}

interface InputBarType extends HTMLInputElement {
  focus: () => void;
}

function SearchBar({ set, keyword }: PropsType) {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const inputBar = useRef<InputBarType | null>(null);

  useEffect(() => {
    if (keyword) {
      setInputValue(keyword);
    }
    if (inputBar.current) {
      inputBar.current.focus();
    }
  }, [keyword]);

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function search() {
    set(inputValue);
    navigate(`/home/search?keyword=${inputValue}&category=전체`);
  }

  function removeValue() {
    if (!keyword) {
      navigate("/");
    } else {
      navigate("/home/search");
      setInputValue("");
      set(undefined);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.search_container}>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="장소 이름이나 키워드를 입력해보세요"
            className={styles.searchBar__input}
            value={inputValue}
            onChange={handleInputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
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
