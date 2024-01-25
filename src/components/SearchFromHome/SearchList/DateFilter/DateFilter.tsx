import {useEffect, useState} from 'react';
import {BsFilterLeft} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

import styles from './DateFilter.module.scss';

import {ForSearchType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
}

function DateFilter({forSearch}: PropsType) {
  const [click, setClick] = useState(false);
  const filterData = ['등록순', '이름순', '인기순'];
  const navigate = useNavigate();

  function handleModal() {
    setClick((prev) => !prev);
  }

  function selectSort(sort: string) {
    navigate(
      `/search?keyword=${forSearch.keyword}&category=${forSearch.category}&map=${forSearch.map}&location=${forSearch.location}&sort=${sort}&hot=${forSearch.hot}&placeID=${forSearch.placeID}&tripDate=${forSearch.tripDate}`,
    );
  }

  useEffect(() => {
    setClick(false);
  }, [forSearch.sort]);

  return (
    <div className={styles.container} onClick={handleModal}>
      <BsFilterLeft className={styles.icon} />
      <span style={{userSelect: 'none', whiteSpace: 'none'}}>{forSearch.sort}</span>
      <div className={styles.modal} style={{height: click ? '136px' : 0, opacity: click ? 1 : 0}}>
        {filterData.map((data) => (
          <span
            style={{opacity: click ? 1 : 0, whiteSpace: 'none'}}
            onClick={() => {
              selectSort(data);
            }}
          >
            {data}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DateFilter;
