import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./SearchBar.module.scss";

interface PropsType {
  set: React.Dispatch<React.SetStateAction<string | undefined>>;
  keyword: string;
}

function SearchBar({ set, keyword }: PropsType) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue(keyword);
  }, [keyword]);

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function search() {
    set(inputValue);
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
          />
        </div>
        <Link to="/" className={styles.return}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15.8125 5.14237V3.30659C15.8125 3.14747 15.6507 3.0596 15.5415 3.15697L6.07093 11.5189C5.99047 11.5897 5.92536 11.6802 5.88057 11.7838C5.83578 11.8873 5.8125 12.001 5.8125 12.1162C5.8125 12.2314 5.83578 12.3452 5.88057 12.4487C5.92536 12.5522 5.99047 12.6428 6.07093 12.7135L15.5415 21.0755C15.6528 21.1728 15.8125 21.085 15.8125 20.9258V19.0901C15.8125 18.9737 15.7642 18.8621 15.6844 18.7908L8.12135 12.1174L15.6844 5.4416C15.7642 5.37036 15.8125 5.25874 15.8125 5.14237Z"
              fill="#23272F"
            />
          </svg>
        </Link>
        <p className={styles.enter} onClick={search}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.3187 20.0273L15.232 13.9406C16.1766 12.7195 16.6875 11.2266 16.6875 9.65625C16.6875 7.77656 15.9539 6.01406 14.6273 4.68516C13.3008 3.35625 11.5336 2.625 9.65625 2.625C7.77891 2.625 6.01172 3.35859 4.68516 4.68516C3.35625 6.01172 2.625 7.77656 2.625 9.65625C2.625 11.5336 3.35859 13.3008 4.68516 14.6273C6.01172 15.9562 7.77656 16.6875 9.65625 16.6875C11.2266 16.6875 12.7172 16.1766 13.9383 15.2344L20.025 21.3187C20.0428 21.3366 20.064 21.3508 20.0874 21.3604C20.1107 21.3701 20.1357 21.3751 20.1609 21.3751C20.1862 21.3751 20.2112 21.3701 20.2345 21.3604C20.2578 21.3508 20.279 21.3366 20.2969 21.3187L21.3187 20.2992C21.3366 20.2814 21.3508 20.2602 21.3604 20.2369C21.3701 20.2135 21.3751 20.1885 21.3751 20.1633C21.3751 20.138 21.3701 20.113 21.3604 20.0897C21.3508 20.0664 21.3366 20.0452 21.3187 20.0273ZM13.3688 13.3688C12.375 14.3602 11.0578 14.9063 9.65625 14.9063C8.25469 14.9063 6.9375 14.3602 5.94375 13.3688C4.95234 12.375 4.40625 11.0578 4.40625 9.65625C4.40625 8.25469 4.95234 6.93516 5.94375 5.94375C6.9375 4.95234 8.25469 4.40625 9.65625 4.40625C11.0578 4.40625 12.3773 4.95 13.3688 5.94375C14.3602 6.9375 14.9062 8.25469 14.9062 9.65625C14.9062 11.0578 14.3602 12.3773 13.3688 13.3688Z"
              fill="#23272F"
            />
          </svg>
        </p>
        <div className={styles.bottom_line} />
      </div>
    </div>
  );
}

export default SearchBar;
