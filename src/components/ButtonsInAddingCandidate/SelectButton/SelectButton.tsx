import {useState} from 'react';
import {useRecoilValue} from 'recoil';

import styles from './SelectButton.module.scss';

import useGetSelectedArray from '@/hooks/useGetSelectedArray';

import {selectedPlaceState} from '@/recoil/vote/selectPlace';

// //"선택된 장소 객체"
const placeInfo = {
  placeId: 23,
  placeName: '안녕호텔',
  category: '호텔',
  location: '서울',
  placeImageURL: 'https://img-cf.kurly.com/shop/data/goodsview/20210218/gv30000159355_1.jpg',
  latlng: {lat: 33.450936, lng: 126.569477},
};

const SelectButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const selectedPlaces = useRecoilValue(selectedPlaceState);

  const {toggleItemInNewArray} = useGetSelectedArray(selectedPlaceState);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    toggleItemInNewArray(placeInfo);
  };

  console.log('선택한 배열', selectedPlaces);
  return (
    <button className={`${styles.container} ${isClicked ? styles.clicked : ''}`} onClick={handleClick}>
      {isClicked ? '선택됨' : '선택'}
    </button>
  );
};

export default SelectButton;
