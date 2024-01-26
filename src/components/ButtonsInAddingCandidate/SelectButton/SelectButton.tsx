import {useEffect, useState} from 'react';
import {useRecoilValue} from 'recoil';

import styles from './SelectButton.module.scss';

import useGetSelectedArray from '@/hooks/useGetSelectedArray';

import {selectedPlaceState} from '@/recoil/vote/selectPlace';

import {SearchItemType} from '@/types/home';

interface Propstype {
  data: SearchItemType;
}

const SelectButton = ({data}: Propstype) => {
  const [isClicked, setIsClicked] = useState(false);
  const selectedPlaces = useRecoilValue(selectedPlaceState);

  const {toggleItemInNewArray} = useGetSelectedArray(selectedPlaceState);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsClicked((prev) => !prev);
    toggleItemInNewArray(data);
  };

  useEffect(() => {
    selectedPlaces.map((selectData) => {
      if (selectData.id === data.id) {
        setIsClicked(true);
      }
    });
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
