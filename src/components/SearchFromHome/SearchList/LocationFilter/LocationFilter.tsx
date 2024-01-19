import {useEffect, useState} from 'react';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';

import styles from './LocationFilter.module.scss';

import LocationFliterPage from './LocationFliterPage/LocationFliterPage';

interface PropsType {
  searchLocation: string;
  setSearchLocation: React.Dispatch<React.SetStateAction<string>>;
}

function LocationFilter({searchLocation, setSearchLocation}: PropsType) {
  const [click, setClick] = useState(true);
  const [buttonName, setButtonName] = useState('전체 지역');

  function handleClick() {
    setClick((prev) => !prev);
  }

  useEffect(() => {
    const datas = searchLocation.split(' ');
    if (datas[0] === '전국') {
      setButtonName('전체 지역');
    } else {
      setButtonName(datas[0]);
    }
  }, [searchLocation]);

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
      <LocationFliterPage
        click={click}
        searchLocation={searchLocation}
        handleClick={handleClick}
        setSearchLocation={setSearchLocation}
      />
    </>
  );
}

export default LocationFilter;
