import styles from "./TripSpaceItem.module.scss";
import defaultImg from "/tripVoteLogoHome.png";

interface Data {
  tripTitle: string;
  tripImg: string;
  tripDay: string;
}

interface PropsData {
  data: Data;
}

function TripSpaceItem(data: PropsData) {
  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultImg;
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.trip_img}
        src={data.data.tripImg}
        onError={onErrorImg}
      />
      <p className={styles.text_box}>
        <span className={styles.trip_title}>{data.data.tripTitle}</span>
        <span className={styles.trip_day}>{data.data.tripDay}</span>
      </p>
    </div>
  );
}

export default TripSpaceItem;
