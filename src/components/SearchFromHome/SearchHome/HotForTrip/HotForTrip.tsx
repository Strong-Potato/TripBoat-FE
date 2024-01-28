import {useEffect, useState} from 'react';

import styles from './HotForTrip.module.scss';

import {keywordSearch} from '@/api/search';

import SearchItem from '../../SearchList/SearchItem/SearchItem';

import {ForSearchType, SearchItemType} from '@/types/home';

interface PropsType {
  forSearch: ForSearchType;
}

function HotForTrip({forSearch}: PropsType) {
  const [data, setData] = useState<SearchItemType[]>();

  async function getData() {
    const fetchData = await keywordSearch('문화관광축제', '전국', '인기순', 1, 10);
    setData(fetchData);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      {data && data.map((data) => <SearchItem data={data} forSearch={forSearch} key={data.id} />)}
    </div>
  );
}

export default HotForTrip;
