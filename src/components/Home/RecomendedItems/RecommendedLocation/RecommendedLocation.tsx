import styles from "./RecommendedLocation.module.scss";

interface PropsType {
  location: string;
}

function RecommendedLocation(location: PropsType) {
  return <div className={styles.container}>{location.location}</div>;
}

export default RecommendedLocation;
