import styles from './MapPinActive.module.scss';

import ActiveIcon from '@/assets/voteIcons/map_pin_active.svg?react';

const MapPinActive = ({number}: {number: number}) => {
  return (
    <div className={styles.container}>
      <ActiveIcon />
      <p className={styles.number}>{number}</p>
    </div>
  );
};

export default MapPinActive;
