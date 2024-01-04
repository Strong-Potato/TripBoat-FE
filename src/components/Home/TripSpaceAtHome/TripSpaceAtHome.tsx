import styles from "./TripSpaceAtHome.module.scss";
import TripSpaceItem from "./TripSpaceItem/TripSpaceItem";

function TripSpaceAtHome() {
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

  return (
    <div className={styles.container}>
      {tripSpaceData.map((data, i) => (
        <TripSpaceItem data={data} key={data.tripTitle + i} />
      ))}
    </div>
  );
}

export default TripSpaceAtHome;
