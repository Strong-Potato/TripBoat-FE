import {useEffect, useState} from 'react';
import {BsFilterLeft} from 'react-icons/bs';
import {useNavigate} from 'react-router-dom';

import styles from './DateFilter.module.scss';

import {ForSearchType} from '@/types/home';
import {WishFilterType} from '@/types/wish';

interface PropsType {
  forSearch?: ForSearchType | undefined;
  wishesFilter?: WishFilterType | undefined;
}

function DateFilter({forSearch = undefined, wishesFilter = undefined}: PropsType) {
  const [click, setClick] = useState(false);
  const filterData = ['등록순', '이름순', '인기순'];
  const navigate = useNavigate();
  const sort = forSearch ? forSearch.sort : wishesFilter?.sort;

  function handleModal() {
    setClick((prev) => !prev);
  }

  function selectSort(sort: string) {
    if (forSearch) {
      navigate(
        `/search?keyword=${forSearch.keyword}&category=${forSearch.category}&map=${forSearch.map}&location=${forSearch.location}&sort=${sort}&hot=${forSearch.hot}&placeID=${forSearch.placeID}&tripDate=${forSearch.tripDate}`,
      );
    }
    if (wishesFilter) {
      navigate(
        `/wish?category=${wishesFilter.category}&location=${wishesFilter.location}&placeID=${wishesFilter.placeID}&tripDate=${wishesFilter.tripDate}&sort=${sort}`,
      );
    }
  }

  useEffect(() => {
    setClick(false);
  }, [forSearch?.sort]);

  return (
    <div className={styles.container}>
      <p className={styles.button} onClick={handleModal}>
        <BsFilterLeft className={styles.icon} />
        <span style={{userSelect: 'none', whiteSpace: 'none'}}>{sort}</span>
      </p>
      <div
        className={styles.modal}
        style={{height: click ? '136px' : 0, opacity: click ? 1 : 0, padding: click ? '20px 32px' : 0}}
      >
        {filterData.map((data) => (
          <span
            style={{opacity: click ? 1 : 0, whiteSpace: 'none'}}
            onClick={() => {
              selectSort(data);
            }}
            key={data}
          >
            {data}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DateFilter;
