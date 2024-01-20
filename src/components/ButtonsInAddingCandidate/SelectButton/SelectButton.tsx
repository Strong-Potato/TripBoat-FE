import {useState} from 'react';

import styles from './SelectButton.module.scss';

const SelectButton = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button className={`${styles.container} ${isClicked ? styles.clicked : ''}`} onClick={handleClick}>
      {isClicked ? '선택됨' : '선택'}
    </button>
  );
};

export default SelectButton;
