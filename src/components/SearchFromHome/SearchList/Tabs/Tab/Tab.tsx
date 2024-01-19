import {useNavigate} from 'react-router-dom';

import styles from './Tab.module.scss';

interface PropsType {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
  category: string;
  thisCategory: string;
  keyword: string;
  moveMap: string;
  searchLocation: string;
  sort: string;
}

function Tab({
  setCategory,
  setCategoryChange,
  category,
  thisCategory,
  keyword,
  moveMap,
  sort,
  searchLocation,
}: PropsType) {
  const navigate = useNavigate();

  function handleCategory(key: string) {
    setCategoryChange(true);
    setTimeout(() => {
      setCategoryChange(false);
    }, 150);
    setCategory(key);
    navigate(`/home/search?keyword=${keyword}&category=${key}&map=${moveMap}&location=${searchLocation}&sort=${sort}`);
  }

  return (
    <p
      className={styles.container}
      id={thisCategory}
      style={{
        color: category === thisCategory ? '#1d2433' : '#cdcfd0',
        borderBottom: category === thisCategory ? '2px solid #1d2433' : 'none',
      }}
      onClick={() => {
        handleCategory(thisCategory);
      }}
    >
      <span>{thisCategory}</span>
    </p>
  );
}

export default Tab;
