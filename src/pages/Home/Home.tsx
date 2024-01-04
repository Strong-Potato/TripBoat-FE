import VoteAtHome from "@/components/Home/VoteAtHome/VoteAtHome";
import styles from "./Home.module.scss";
import RecommendedLocation from "@/components/Home/RecomendedItems/RecommendedLocation/RecommendedLocation";
import RecomendedItem from "@/components/Home/RecomendedItems/RecommendedItem/RecommendedItem";
import TripSpaceAtHome from "@/components/Home/TripSpaceAtHome/TripSpaceAtHome";

function Home() {
  const tripSpaceData = [
    {
      tripTitle: "아직 여행 일정이 없어요",
      tripDay: "새로운 여행 일정을 만들어보세요!",
      tripImg: "",
    },
    {
      tripTitle: "아직 여행 일정이 없어요",
      tripDay: "새로운 여행 일정을 만들어보세요!",
      tripImg: "",
    },
    {
      tripTitle: "아직 여행 일정이 없어요",
      tripDay: "새로운 여행 일정을 만들어보세요!",
      tripImg: "",
    },
  ];

  const recommendedLocation = ["제주", "부산", "강릉", "서울"];

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
  ];

  return (
    <div className={styles.container}>
      <VoteAtHome />
      <div className={styles.section}>
        <p className={styles.title}>내 여행 일정</p>
        <div className={styles.item_list_8px}>
          {tripSpaceData.map((data, i) => (
            <TripSpaceAtHome data={data} key={data.tripTitle + i} />
          ))}
        </div>
      </div>
      <div className={styles.lists_box}>
        <div className={styles.section}>
          <p className={styles.title}>지금 인기있는 여행지는?</p>
          <div className={styles.item_list_8px}>
            {recommendedLocation.map((data, i) => (
              <RecommendedLocation location={data} key={data + i} />
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>겨울에 어울리는 포근한 숙소</p>
          <div className={styles.item_list_16px}>
            {recommendedData.map((data, i) => (
              <RecomendedItem data={data} key={data.title + i} />
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <p className={styles.title}>겨울을 신나게 즐기는 쌈박한 방법!</p>
          <div className={styles.item_list_16px}>
            {recommendedData.map((data, i) => (
              <RecomendedItem data={data} key={data.title + i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
