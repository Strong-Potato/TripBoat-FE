import styles from './PlaceCard.module.scss';

import {PlaceCardProps} from '@/types/route';

function PlaceCard({order, name, category, address}: PlaceCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.placeInformationContainer}>
        <div className={styles.numberContainer}>{order}</div>
        <div className={styles.placeContainer}>
          <div className={styles.placeInformation}>
            <h1>{name}</h1>
            <h2>{category}</h2>
            <p>{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
