import {useState} from 'react';

import styles from './SelectButton.module.scss';

import useGetSelectedCandidates from '@/hooks/useGetSelectedCandidates';
const SelectButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const {addCandidateInSelectedList} = useGetSelectedCandidates();

  //"선택된 장소의 ID"
  const placeId = 22;

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    addCandidateInSelectedList(placeId);
  };

  return (
    <button className={`${styles.container} ${isClicked ? styles.clicked : ''}`} onClick={handleClick}>
      {isClicked ? '선택됨' : '선택'}
    </button>
  );
};

export default SelectButton;
