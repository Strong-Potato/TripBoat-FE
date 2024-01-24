import {useEffect} from 'react';

import styles from './SelectLocation.module.scss';

import Check from '@/assets/homeIcons/search/check.svg?react';
import data from '@/utils/areas.json';

interface AreaDataType {
  name: string;
  sigunguCode: number;
}

interface PropsType {
  area: string;
  areaData: AreaDataType[] | undefined;
  sigungu: string;
  setPick: React.Dispatch<React.SetStateAction<string>>;
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setAreaData: React.Dispatch<React.SetStateAction<AreaDataType[] | undefined>>;
  setSigungu: React.Dispatch<React.SetStateAction<string>>;
}

function SelectLocation({area, areaData, sigungu, setPick, setArea, setAreaData, setSigungu}: PropsType) {
  useEffect(() => {
    const filterData = data.filter((data) => data.name === area)[0];
    if (filterData.districts) {
      setAreaData(filterData.districts);
    }
  }, [area]);

  function CheckBox(name: string) {
    if (name === sigungu) {
      return <Check />;
    } else {
      return <span style={{width: '24px', height: '24px'}} />;
    }
  }

  return (
    <div className={styles.container} style={{height: `calc(${window.innerHeight}px - 228px)`}}>
      <div className={styles.area}>
        {data.map((location, i) => (
          <p
            className={styles.area__location}
            style={{
              backgroundColor: area === location.name ? '#fff' : '#F2F4F5',
            }}
            onClick={() => {
              setArea(location.name);
              setPick('');
              if (location.name === '전국') {
                setSigungu('전체 지역');
              } else {
                setSigungu('전체');
              }
            }}
            key={location.name + i}
          >
            {location.name}
          </p>
        ))}
      </div>
      <div className={styles.sigungu}>
        {areaData &&
          areaData.map((data, i) => (
            <p
              className={styles.sigungu__location}
              onClick={() => {
                setSigungu(data.name);
                setPick('');
              }}
              key={data.name + i}
            >
              {CheckBox(data.name)}
              {data.name}
            </p>
          ))}
      </div>
    </div>
  );
}

export default SelectLocation;
