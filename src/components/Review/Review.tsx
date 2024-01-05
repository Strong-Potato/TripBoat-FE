import { Avatar } from "@chakra-ui/react";
import { GoStarFill } from "react-icons/go";

import styles from "./Review.module.scss";

import ReviewImageSlider from "./ReviewImageSlider/ReviewImageSlider";

interface ReviewProps {
  name: string;
  isGoogle: boolean;
  point: string;
  visitedAt: string;
  content: string;
  images: string[] | undefined;
}

function Review({
  name,
  isGoogle = false,
  point,
  visitedAt,
  content,
  images,
}: ReviewProps) {
  return (
    <div className={styles.container}>
      <div>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </div>
      <div className={styles.container__contentsBox}>
        <div className={styles.container__contentsBox__name}>
          <span>{name}</span>
          {isGoogle && <span>구글</span>}
        </div>
        <div className={styles.container__contentsBox__secondItems}>
          <GoStarFill
            className={styles.container__contentsBox__secondItems__star}
          />
          <span className={styles.container__contentsBox__secondItems__point}>
            {point}
          </span>
          <span
            className={styles.container__contentsBox__secondItems__visitedAt}
          >
            {visitedAt}
          </span>
        </div>
        <div className={styles.container__content}>{content}</div>
        {images && <ReviewImageSlider images={images} />}
      </div>
    </div>
  );
}

export default Review;
