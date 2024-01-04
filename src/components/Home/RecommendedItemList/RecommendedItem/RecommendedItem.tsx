import { FaStar } from "react-icons/fa";

import styles from "./RecommendedItem.module.scss";

interface Data {
  title: string;
  location: string;
  score: string;
  reviewNum: string;
}

interface PropsType {
  data: Data;
}

function RecomendedItem(data: PropsType) {
  return (
    <div className={styles.container}>
      <img className={styles.item_img} />
      <div className={styles.text_box}>
        <span className={styles.item_title}>{data.data.title}</span>
        <span className={styles.gray}>{data.data.location}</span>
        <div className={styles.item_score}>
          <p className={styles.score}>
            <span className={styles.star}>
              <FaStar />
            </span>
            <span>{data.data.score}</span>
          </p>
          <span className={styles.gray}>({data.data.reviewNum})</span>
        </div>
      </div>
    </div>
  );
}

export default RecomendedItem;
