import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import styles from './Wishes.module.scss';

import AddToCandidateButton from '@/components/ButtonsInAddingCandidate/AddToCandidateButton/AddToCandidateButton';
import Tabs from '@/components/SearchFromHome/SearchList/Tabs/Tabs';

import {getUserWishes} from '@/api/wishes';
import SearchNull from '@/assets/homeIcons/search/searchNull.svg?react';

import WishItem from '../../components/WishItem/WishItem';

import {SearchItemType} from '@/types/home';
import {Wishes} from '@/types/wish';

function Wishes() {
  const [data, setData] = useState<Wishes>();
  const [filterData, setFilterData] = useState<SearchItemType[] | undefined>();
  const [categoryChange, setCategoryChange] = useState(false);
  const [searchParams] = useSearchParams();
  const [filter, setFilter] = useState({
    category: 0,
    placeID: 'undefined',
    tripDate: 'undefinde',
  });

  useEffect(() => {
    const querystring = {
      placeID: searchParams.get('placeID'),
      tripDate: searchParams.get('tripDate'),
    };
    if (querystring.placeID && !querystring.tripDate) {
      setFilter({
        category: filter.category,
        placeID: querystring.placeID,
        tripDate: filter.tripDate,
      });
    }
    if (querystring.placeID && querystring.tripDate) {
      setFilter({
        category: filter.category,
        placeID: querystring.placeID,
        tripDate: querystring.tripDate,
      });
    }
  }, [searchParams]);

  useEffect(() => {
    getUserWishes(setData);
  }, []);

  useEffect(() => {
    if (data) {
      if (filter.category !== 0) {
        let filterData: SearchItemType[];
        if (filter.category === 14) {
          filterData = data.places.filter((data) => data.contentTypeId === 14 || data.contentTypeId === 15);
        } else {
          filterData = data.places.filter((data) => data.contentTypeId === filter.category);
        }
        setFilterData(filterData);
      } else {
        setFilterData(data.places);
      }
    }
  }, [data, filter.category]);

  return (
    <div className={styles.container}>
      <p className={styles.header}>
        <span>찜 목록</span>
      </p>
      {data && <Tabs data={data?.places} wishFilter={filter} setCategoryChange={setCategoryChange} />}
      <ul className={styles.slide}>
        {filterData && filterData?.length > 0 ? (
          filterData.map((data) => <WishItem filter={filter} data={data} categoryChange={categoryChange} />)
        ) : (
          <div className={styles.nullBox}>
            <SearchNull />
            <span>찜 목록이 비었습니다.</span>
          </div>
        )}
      </ul>
      {filter.placeID !== 'undefined' && <AddToCandidateButton />}
    </div>
  );
}

export default Wishes;
