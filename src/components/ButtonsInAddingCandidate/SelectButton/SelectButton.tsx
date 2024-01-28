import {useEffect, useState} from 'react';
import {useRecoilValue, useSetRecoilState} from 'recoil';

import styles from './SelectButton.module.scss';

import useGetSelectedArray from '@/hooks/useGetSelectedArray';

import {selectedPlaceState, selectedTripPlaceState} from '@/recoil/vote/selectPlace';

import {SearchItemType} from '@/types/home';

interface Propstype {
  data: SearchItemType;
}

const SelectButton = ({data}: Propstype) => {
  const [isClicked, setIsClicked] = useState(false);
  const queryParams = new URLSearchParams(location.search);
  const tripDateParam = queryParams.get('tripDate');
  const voteIdArray = tripDateParam?.split(' ') as string[]; // 띄어쓰기를 기준으로 문자열 분할
  const isInVote = voteIdArray[0] === 'vote';
  const selectedPlaces = useRecoilValue(selectedPlaceState);
  const selectedTripPlaces = useRecoilValue(selectedTripPlaceState);
  const setRecoil = useSetRecoilState(selectedTripPlaceState);
  const {toggleItemInNewArray} = useGetSelectedArray(selectedPlaceState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(selectedTripPlaces);

    e.preventDefault();
    setIsClicked((prev) => !prev);
    if (isInVote) {
      toggleItemInNewArray(data);
    } else {
      setRecoil((currentArray) => {
        const index = currentArray.findIndex((item) => item === data.id);

        if (index !== -1) {
          const newArray = [...currentArray.slice(0, index), ...currentArray.slice(index + 1)];
          console.log('newArray:', newArray);
          return newArray;
        } else {
          const newArray = [...currentArray, data.id];
          console.log('newArray:', newArray);
          return newArray;
        }
      });
    }
  };

  useEffect(() => {
    if (isInVote) {
      selectedPlaces.map((selectData) => {
        if (selectData.id === data.id) {
          setIsClicked(true);
        }
      });
    } else {
      selectedTripPlaces.map((selectData) => {
        if (selectData === data.id) {
          setIsClicked(true);
        }
      });
    }
  }, [data]);

  return (
    <button
      className={`${styles.container} ${isClicked ? styles.clicked : ''}`}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {isClicked ? '선택됨' : '선택'}
    </button>
  );
};

export default SelectButton;
