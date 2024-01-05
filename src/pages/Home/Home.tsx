import VoteAtHome from "@/components/Home/VoteAtHome/VoteAtHome";
import styles from "./Home.module.scss";
import TripSpaceAtHome from "@/components/Home/TripSpaceAtHome/TripSpaceAtHome";
import RecommendedItemList from "@/components/Home/RecommendedItemList/RecommendedItemList";
import RecommendedLocationList from "@/components/Home/RecommendedLocationList/RecommendedLocationList";
import SearchBarAtHome from "@/components/Home/SearchBarAtHome/SearchBarAtHome";
import TabBar from "@/components/Home/TabBar/TabBar";

function Home() {
  return (
    <div className={styles.container}>
      <TabBar />
      <VoteAtHome />
      <SearchBarAtHome />
      <div className={styles.column_4px}>
        <p className={styles.title}>내 여행 일정</p>
        <TripSpaceAtHome />
      </div>
      <div className={styles.lists_box}>
        <div className={styles.column_8px}>
          <p className={styles.title}>지금 인기있는 여행지는?</p>
          <RecommendedLocationList />
        </div>
        <div className={styles.column_8px}>
          <p className={styles.title}>겨울에 어울리는 포근한 숙소</p>
          <RecommendedItemList apiNum={1} />
        </div>
        <div className={styles.column_8px}>
          <p className={styles.title}>겨울을 신나게 즐기는 쌈박한 방법!</p>
          <RecommendedItemList apiNum={2} />
        </div>
      </div>
    </div>
  );
}

export default Home;
