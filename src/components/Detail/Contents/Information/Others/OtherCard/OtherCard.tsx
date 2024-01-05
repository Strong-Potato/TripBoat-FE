import { GoStarFill } from "react-icons/go";

import styles from "./OtherCard.module.scss";

import { OtherCardPropsType } from "@/types/Detail";

function OtherCard({
  image,
  name,
  location,
  point,
  count,
}: OtherCardPropsType) {
  return (
    <div className={styles.container}>
      <div className={styles.container__image}>
        <img src={image} alt="#" />
      </div>
      <div className={styles.container__contents}>
        <h4>{name}</h4>
        <p>{location}</p>
        <div className={styles.container__contents__reviews}>
          <GoStarFill className={styles.container__contents__reviews__star} />
          <span className={styles.container__contents__reviews__point}>
            {point}
          </span>
          <span className={styles.container__contents__reviews__reviewsCount}>
            ({count})
          </span>
        </div>
      </div>
    </div>
  );
}

export default OtherCard;
