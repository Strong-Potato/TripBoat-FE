import { useEffect, useState } from "react";

import styles from "./TripSpaceAtHome.module.scss";

import { getData } from "@/mocks/handlers/home";

import TripSpaceItem from "./TripSpaceItem/TripSpaceItem";

import { TripSpaceDataType } from "@/types/home";

function TripSpaceAtHome() {
  const [data, setData] = useState<TripSpaceDataType[]>();

  const dataNull = {
    tripTitle: "아직 여행 일정이 없어요",
    tripDay: "새로운 여행 일정을 만들어보세요!",
    tripImg: "/tripVoteLogoHome.png",
    dDay: undefined,
  };

  useEffect(() => {
    getData<TripSpaceDataType[] | undefined>(`home/tripSpace`, setData);
  }, []);

  return (
    <div className={styles.container}>
      {data ? (
        data.map((data, i) => (
          <TripSpaceItem data={data} key={data.tripTitle + i} />
        ))
      ) : (
        <TripSpaceItem data={dataNull} key={dataNull.tripTitle} />
      )}
    </div>
  );
}

export default TripSpaceAtHome;
