import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './Tab.module.scss';

import {translateCategoryToNum, translateCategoryToStr} from '@/utils/translateSearchData';

import {ForSearchType} from '@/types/home';
import {WishFilterType} from '@/types/wish';

interface PropsType {
  forSearch: ForSearchType | undefined;
  wishFilter: WishFilterType | undefined;
  thisCategory: string;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
}

function Tab({forSearch, thisCategory, wishFilter, setCategoryChange}: PropsType) {
  const [isSelect, setIsSelect] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (forSearch) {
      setIsSelect(translateCategoryToStr(forSearch.category) === thisCategory);
    } else if (wishFilter) {
      setIsSelect(translateCategoryToStr(wishFilter.category) === thisCategory);
    }
  }, [forSearch, wishFilter]);

  function handleCategory(key: number) {
    setCategoryChange(true);
    setTimeout(() => {
      setCategoryChange(false);
    }, 150);
    if (forSearch) {
      navigate(
        `/search?keyword=${forSearch.keyword}&category=${key}&map=${forSearch.map}&location=${forSearch.location}&sort=${forSearch.sort}&hot=${forSearch.hot}&placeID=${forSearch.placeID}&tripDate=${forSearch.tripDate}`,
      );
    } else if (wishFilter) {
      navigate(`/wishes?category=${key}&placeID=${wishFilter.placeID}&tripDate=${wishFilter.tripDate}`);
    }
  }

  return (
    <p
      className={styles.container}
      id={thisCategory}
      style={{
        color: isSelect ? '#1d2433' : '#cdcfd0',
        borderBottom: isSelect ? '2px solid #1d2433' : 'none',
      }}
      onClick={() => {
        handleCategory(translateCategoryToNum(thisCategory));
      }}
    >
      <span>{thisCategory}</span>
    </p>
  );
}

export default Tab;
