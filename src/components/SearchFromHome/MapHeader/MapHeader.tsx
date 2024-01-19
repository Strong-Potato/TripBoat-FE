import {useNavigate} from 'react-router-dom';

import styles from './MapHeader.module.scss';

import BackIcon from '@/assets/homeIcons/search/backInHome.svg?react';

interface PropsType {
  keyword: string;
  category: string;
  searchLocation: string;
  sort: string;
  setMoveMap: React.Dispatch<React.SetStateAction<string>>;
}

function MapHeader({keyword, setMoveMap, category, searchLocation, sort}: PropsType) {
  const navigate = useNavigate();

  function offMap() {
    setMoveMap('false');
    navigate(`/home/search?keyword=${keyword}&category=${category}&map=false&location=${searchLocation}&sort=${sort}`);
  }

  return (
    <div className={styles.container}>
      <button onClick={offMap}>
        <BackIcon />
      </button>
      <span>{keyword}</span>
    </div>
  );
}

export default MapHeader;
