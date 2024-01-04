import RecomendedItem from "./RecommendedItem/RecommendedItem";
import styles from "./RecommendedItemList.module.scss";

function RecommendedItemList() {
  const recommendedData = [
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNum: "484",
    },
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNum: "484",
    },
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNum: "484",
    },
    {
      title: "호텔 loft",
      location: "제주",
      score: "4.4",
      reviewNum: "484",
    },
  ];

  return (
    <div className={styles.container}>
      {recommendedData.map((data, i) => (
        <RecomendedItem data={data} key={data.title + i} />
      ))}
    </div>
  );
}

export default RecommendedItemList;
