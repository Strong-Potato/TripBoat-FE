import {useNavigate} from 'react-router-dom';

import styles from './Tab.module.scss';

import {translateCategoryToNum, translateCategoryToStr} from '@/hooks/Search/useSearch';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  thisCategory: string;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
}

function Tab({forSearch, thisCategory, setCategoryChange}: PropsType) {
  const navigate = useNavigate();

  function handleCategory(key: number) {
    setCategoryChange(true);
    setTimeout(() => {
      setCategoryChange(false);
    }, 150);
    navigate(
      `/home/search?keyword=${forSearch.keyword}&category=${key}&map=${forSearch.map}&location=${forSearch.location}&sort=${forSearch.sort}`,
    );
  }

  return (
    <p
      className={styles.container}
      id={thisCategory}
      style={{
        color: translateCategoryToStr(forSearch.category) === thisCategory ? '#1d2433' : '#cdcfd0',
        borderBottom: translateCategoryToStr(forSearch.category) === thisCategory ? '2px solid #1d2433' : 'none',
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
