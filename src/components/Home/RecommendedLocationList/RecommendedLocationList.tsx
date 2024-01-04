import RecommendedLocation from "./RecommendedLocation/RecommendedLocation";
import styles from "./RecommendedLocationList.module.scss";

function RecommendedLocationList() {
  const recommendedLocation = ["제주", "부산", "강릉", "서울"];

  return (
    <div className={styles.container}>
      {recommendedLocation.map((data, i) => (
        <RecommendedLocation location={data} key={data + i} />
      ))}
    </div>
  );
}

export default RecommendedLocationList;
