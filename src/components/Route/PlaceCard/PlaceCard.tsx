import styles from "./PlaceCard.module.scss";

import { PlaceCardProps } from "@/types/route";

function PlaceCard({ index, name, category, address }: PlaceCardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.numberContainer}>{index}</div>
      <div className={styles.placeContainer}>
        <h1>{name}</h1>
        <h2>{category}</h2>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default PlaceCard;
