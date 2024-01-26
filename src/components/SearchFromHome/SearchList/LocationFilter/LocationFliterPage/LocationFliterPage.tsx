import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import styles from './LocationFliterPage.module.scss';

import BackIcon from '@/assets/homeIcons/search/backInHome.svg?react';

import PopularList from './PopularList/PopularList';
import SelectLocation from './SelectLocation/SelectLocation';

import {ForSearchType} from '@/types/home';
import {WishFilterType} from '@/types/wish';

interface PropsType {
  click: boolean;
  forSearch: ForSearchType | undefined;
  wishesFilter?: WishFilterType | undefined;
  handleClick: () => void;
}

interface AreaDataType {
  name: string;
  sigunguCode: number;
}

function LocationFliterPage({forSearch, wishesFilter, click, handleClick}: PropsType) {
  const [area, setArea] = useState('전국');
  const [areaData, setAreaData] = useState<AreaDataType[]>();
  const [sigungu, setSigungu] = useState('전체 지역');
  const [pick, setPick] = useState('');
  const navigate = useNavigate();

  const vh = window.innerHeight / 100;

  useEffect(() => {
    if (forSearch) {
      const locationData = forSearch.location.split(' ');
      if (locationData[0] === '전국') {
        setArea('전국');
        setSigungu('전체 지역');
      } else {
        setArea(locationData[0]);
        setSigungu(locationData[1]);
      }
    }
    if (wishesFilter) {
      const locationData = wishesFilter.location.split(' ');
      if (locationData[0] === '전국') {
        setArea('전국');
        setSigungu('전체 지역');
      } else {
        setArea(locationData[0]);
        setSigungu(locationData[1]);
      }
    }
  }, [forSearch?.location, wishesFilter?.location]);

  function submit() {
    if (forSearch) {
      navigate(
        `/search?keyword=${forSearch.keyword}&category=${forSearch.category}&map=${forSearch.map}&location=${area} ${sigungu}&sort=${forSearch.sort}&hot=${forSearch.hot}&placeID=${forSearch.placeID}&tripDate=${forSearch.tripDate}`,
      );
    }
    console.log(wishesFilter);

    if (wishesFilter) {
      navigate(
        `/wishes?category=${wishesFilter.category}&location=${area} ${sigungu}&placeID=${wishesFilter.placeID}&tripDate=${wishesFilter.tripDate}&sort=${wishesFilter.sort}`,
      );
    }
    handleClick();
  }

  return (
    <div
      className={styles.container}
      style={{
        position: window.innerWidth > 450 ? 'absolute' : 'fixed',
        top: 0,
        right: click ? '-100%' : 0,
        height: `${vh * 100}px`,
      }}
    >
      <div className={styles.exitSection}>
        <button
          onClick={() => {
            handleClick();
            let locationData: string[] | undefined;
            if (forSearch) {
              locationData = forSearch.location.split(' ');
            } else {
              locationData = wishesFilter?.location.split(' ');
            }
            if (locationData) {
              if (locationData[0] === '전국') {
                setArea('전국');
                setSigungu('전체 지역');
              } else {
                setArea(locationData[0]);
                setSigungu(locationData[1]);
              }
            }
          }}
        >
          <BackIcon />
        </button>
      </div>
      <p className={styles.title}>지역을 선택해주세요</p>
      <div className={styles.popularSection}>
        <p>인기 지역</p>
      </div>
      <PopularList pick={pick} setPick={setPick} setArea={setArea} setSigungu={setSigungu} />
      <div style={{marginTop: '24px'}}>
        <SelectLocation
          area={area}
          areaData={areaData}
          sigungu={sigungu}
          setPick={setPick}
          setArea={setArea}
          setAreaData={setAreaData}
          setSigungu={setSigungu}
        />
      </div>
      <div className={styles.submitBox}>
        <button className={styles.submitButton} onClick={submit}>
          선택 완료
        </button>
      </div>
    </div>
  );
}

export default LocationFliterPage;
