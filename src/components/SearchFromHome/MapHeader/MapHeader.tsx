import {useNavigate} from 'react-router-dom';

import styles from './MapHeader.module.scss';

import BackIcon from '@/assets/homeIcons/search/backInHome.svg?react';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  setForSearch: React.Dispatch<React.SetStateAction<ForSearchType>>;
}

function MapHeader({forSearch, setForSearch}: PropsType) {
  const navigate = useNavigate();

  function offMap() {
    const before = forSearch;
    before.map = 'false';
    setForSearch(before);
    navigate(
      `/search?keyword=${forSearch.keyword}&category=${forSearch.category}&map=false&location=${forSearch.location}&sort=${forSearch.sort}`,
    );
  }

  return (
    <div className={styles.container}>
      <button onClick={offMap}>
        <BackIcon />
      </button>
      <span>{forSearch.keyword}</span>
    </div>
  );
}

export default MapHeader;
