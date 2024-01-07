import { MdArrowForwardIos } from "react-icons/md";

import styles from "./TripSpaceItem.module.scss";

import { TripSpaceDataType } from "@/types/home";

interface PropsData {
  data: TripSpaceDataType;
}

function TripSpaceItem(data: PropsData) {
  const imageAlt = `${data.data.tripTitle}의 사진`;
  return (
    <div className={styles.container}>
      <div className={styles.img_box}>
        <img
          className={styles.trip_img}
          src={data.data.tripImg}
          alt={imageAlt}
        />
        {data.data.dDay && <div className={styles.text_wall} />}
        <span className={styles.d_day}>{data.data.dDay}</span>
      </div>
      <p className={styles.text_box}>
        <span className={styles.trip_title}>{data.data.tripTitle}</span>
        <span className={styles.trip_day}>{data.data.tripDay}</span>
      </p>
      {!data.data.dDay && (
        <div className={styles.arrow}>
          <MdArrowForwardIos />
        </div>
      )}
    </div>
  );
}

export default TripSpaceItem;
