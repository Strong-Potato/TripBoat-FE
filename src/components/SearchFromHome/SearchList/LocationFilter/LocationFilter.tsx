import {useEffect, useState} from 'react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';

import styles from './LocationFilter.module.scss';

import LocationFliterPage from './LocationFliterPage/LocationFliterPage';

import {ForSearchType} from '@/types/home';
import {WishFilterType} from '@/types/wish';

interface PropsType {
  forSearch?: ForSearchType | undefined;
  wishesFilter?: WishFilterType | undefined;
}

function LocationFilter({forSearch = undefined, wishesFilter = undefined}: PropsType) {
  const [click, setClick] = useState(true);
  const [buttonName, setButtonName] = useState('전체 지역');

  function handleClick() {
    setClick((prev) => !prev);
  }

  useEffect(() => {
    let locationData: string[] | undefined;
    if (forSearch) {
      locationData = forSearch.location.split(' ');
    } else {
      locationData = wishesFilter?.location.split(' ');
    }
    if (locationData) {
      if (locationData[0] === '전국') {
        setButtonName('전체 지역');
      } else {
        setButtonName(locationData[0]);
      }
    }
  }, [forSearch?.location, wishesFilter?.location]);

  return (
    <>
      <div
        className={styles.container}
        onClick={handleClick}
        style={{
          backgroundColor: buttonName === '전체 지역' ? '#fff' : '#d4e8ff',
          color: buttonName === '전체 지역' ? 'rgba(35, 39, 47, 1)' : '#2388ff',
          border: buttonName === '전체 지역' ? '1px solid #CDCFD0' : '1px solid #2388ff',
        }}
      >
        <span style={{userSelect: 'none'}}>{buttonName}</span>
        <MdOutlineKeyboardArrowDown className={styles.icon} />
      </div>
      <LocationFliterPage click={click} forSearch={forSearch} wishesFilter={wishesFilter} handleClick={handleClick} />
    </>
  );
}

export default LocationFilter;
