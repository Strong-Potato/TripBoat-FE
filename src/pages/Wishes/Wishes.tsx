import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import styles from './Wishes.module.scss';

import AddToCandidateButton from '@/components/ButtonsInAddingCandidate/AddToCandidateButton/AddToCandidateButton';
import DateFilter from '@/components/SearchFromHome/SearchList/DateFilter/DateFilter';
import LocationFilter from '@/components/SearchFromHome/SearchList/LocationFilter/LocationFilter';
import Tabs from '@/components/SearchFromHome/SearchList/Tabs/Tabs';
import WishesHeader from '@/components/WishItem/WishesHeader/WishesHeader';

import {getUserWishes} from '@/api/wishes';
import SearchNull from '@/assets/homeIcons/search/searchNull.svg?react';
import {translateLocation} from '@/utils/translateSearchData';

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
    location: '전국',
    placeID: 'undefined',
    tripDate: 'undefinde',
    sort: '등록순',
  });

  useEffect(() => {
    const querystring = {
      category: searchParams.get('category'),
      location: searchParams.get('location'),
      placeID: searchParams.get('placeID'),
      tripDate: searchParams.get('tripDate'),
      sort: searchParams.get('sort'),
    };
    if (
      querystring.category &&
      querystring.placeID &&
      querystring.location &&
      querystring.sort &&
      !querystring.tripDate
    ) {
      setFilter({
        category: parseInt(querystring.category),
        location: querystring.location,
        sort: querystring.sort,
        placeID: querystring.placeID,
        tripDate: filter.tripDate,
      });
    }
    if (
      querystring.category &&
      querystring.placeID &&
      querystring.location &&
      querystring.sort &&
      querystring.tripDate
    ) {
      setFilter({
        category: parseInt(querystring.category),
        location: querystring.location,
        sort: querystring.sort,
        placeID: querystring.placeID,
        tripDate: querystring.tripDate,
      });
    }
  }, [searchParams]);

  useEffect(() => {
    getUserWishes(setData);
  }, []);

  function filterLocation(location: string, data: SearchItemType[]) {
    if (location.split(' ')[0] === '전국') {
      return data;
    }
    const currentLocation = translateLocation(location);
    const filterData: SearchItemType[] = [];
    data.map((data) => {
      console.log(
        data.location.areaCode,
        data.location.sigunguCode,
        currentLocation.areaCode,
        currentLocation.sigunguCode,
      );

      if (data.location.areaCode === currentLocation.areaCode) {
        if (currentLocation.sigunguCode === 0) {
          filterData.push(data);
        } else if (data.location.sigunguCode === currentLocation.sigunguCode) {
          filterData.push(data);
        }
      }
    });
    return filterData;
  }

  useEffect(() => {
    if (data) {
      if (filter.category !== 0) {
        let filterData: SearchItemType[];
        if (filter.category === 14) {
          filterData = data.places.filter((data) => data.contentTypeId === 14 || data.contentTypeId === 15);
        } else {
          filterData = data.places.filter((data) => data.contentTypeId === filter.category);
        }
        if (filter.location !== '전국') {
          filterData = filterLocation(filter.location, filterData);
        }
        setFilterData(filterData);
      } else {
        const filterData = filterLocation(filter.location, data.places);
        setFilterData(filterData);
      }
    }
  }, [data, filter.category, filter.location]);

  return (
    <div className={styles.container}>
      {filter.placeID === 'undefined' ? (
        <p className={styles.header}>
          <span>찜 목록</span>
        </p>
      ) : (
        <WishesHeader />
      )}
      {data && <Tabs data={data?.places} wishFilter={filter} setCategoryChange={setCategoryChange} />}
      <div className={styles.filter}>
        <LocationFilter wishesFilter={filter} />
        <DateFilter wishesFilter={filter} />
      </div>
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
