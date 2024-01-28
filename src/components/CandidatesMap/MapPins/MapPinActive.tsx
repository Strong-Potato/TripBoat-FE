import styles from './MapPinActive.module.scss';

import ActiveIcon from '@/assets/voteIcons/map_pin_active.svg?react';

const MapPinActive = ({number}: {number: number | undefined}) => {
  return (
    <div className={styles.container}>
      <ActiveIcon />
      {number && <p className={styles.number}>{number}</p>}
    </div>
  );
};

export default MapPinActive;
