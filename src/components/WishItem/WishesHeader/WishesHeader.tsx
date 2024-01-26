import styles from './WishesHeader.module.scss';

import BackIcon from '@/assets/homeIcons/search/backInHome.svg?react';

function WishesHeader() {
  function offMap() {
    history.back();
  }

  return (
    <button className={styles.container} onClick={offMap}>
      <BackIcon />
      <span>장소 검색</span>
    </button>
  );
}

export default WishesHeader;
