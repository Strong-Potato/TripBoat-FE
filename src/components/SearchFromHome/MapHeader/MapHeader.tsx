import {useNavigate} from 'react-router-dom';

import styles from './MapHeader.module.scss';

import BackIcon from '@/assets/homeIcons/search/backInHome.svg?react';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
  setForSearch: React.Dispatch<React.SetStateAction<ForSearchType>>;
}

function MapHeader({forSearch, setForSearch}: PropsType) {
  const dataName = forSearch.placeID !== 'undefined' ? '장소 검색' : forSearch.keyword;
  const navigate = useNavigate();

  function offMap() {
    if (forSearch.placeID !== 'undefined') {
      history.back();
    } else {
      const before = forSearch;
      before.map = 'false';
      setForSearch(before);
      navigate(
        `/search?keyword=${forSearch.keyword}&category=${forSearch.category}&map=false&location=${forSearch.location}&sort=${forSearch.sort}&hot=${forSearch.hot}&placeID=${forSearch.placeID}&tripDate=${forSearch.tripDate}`,
      );
    }
  }

  return (
    <button className={styles.container} onClick={offMap}>
      <BackIcon />
      <span>{dataName}</span>
    </button>
  );
}

export default MapHeader;
