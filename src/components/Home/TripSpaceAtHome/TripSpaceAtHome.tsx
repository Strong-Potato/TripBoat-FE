import { useEffect, useState } from "react";

import styles from "./TripSpaceAtHome.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import { getData } from "@/mocks/handlers/home";

import TripSpaceItem from "./TripSpaceItem/TripSpaceItem";

import { TripSpaceDataType } from "@/types/home";

function TripSpaceAtHome() {
  const [data, setData] = useState<TripSpaceDataType[]>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

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
      {data && (
        <SlideButton
          slideLocation={slideLocation}
          setSlideLocation={setSlideLocation}
          itemWidth={323}
          flexGap={8}
          itemNumber={data.length}
          slideSize={size}
        />
      )}
      <div
        className={styles.slide_box}
        ref={componentRef}
        style={{
          overflow: size.width < 450 ? "scroll" : "visible",
          left: slideLocation + "px",
        }}
      >
        {data ? (
          data.map((data, i) => (
            <TripSpaceItem data={data} key={data.tripTitle + i} />
          ))
        ) : (
          <TripSpaceItem data={dataNull} key={dataNull.tripTitle} />
        )}
      </div>
    </div>
  );
}

export default TripSpaceAtHome;
