import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import styles from "./RecommendedItem.module.scss";

import { RecommendedItemDataType } from "@/types/home";

interface PropsType {
  data: RecommendedItemDataType;
}

function RecommendedItem(data: PropsType) {
  const linkURL = `/detail/${data.data.id}`;
  const imageAlt = `${data.data.title}의 사진`;

  return (
    <div className={styles.container}>
      <Link to={linkURL}>
        <img
          className={styles.item_img}
          src={data.data.imageURL}
          alt={imageAlt}
        />
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
            <span className={styles.gray}>({data.data.reviewNumber})</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RecommendedItem;
