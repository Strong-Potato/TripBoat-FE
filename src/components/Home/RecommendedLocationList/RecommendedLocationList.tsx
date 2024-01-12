import { useEffect, useState } from "react";

import styles from "./RecommendedLocationList.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import { getData } from "@/mocks/handlers/home";

import RecommendedLocation from "./RecommendedLocation/RecommendedLocation";

import { LocationDataType } from "@/types/home";

function RecommendedLocationList() {
  const [data, setData] = useState<LocationDataType[]>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  useEffect(() => {
    getData<LocationDataType[] | undefined>(
      `home/recommendedLocation`,
      setData,
    );
  }, []);

  return (
    <div className={styles.container}>
      {data && (
        <SlideButton
          slideLocation={slideLocation}
          setSlideLocation={setSlideLocation}
          itemWidth={122}
          flexGap={8}
          itemNumber={data.length}
          slideSize={size}
        />
      )}
      <div
        className={styles.slide_box}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? "scroll" : "visible",
          left: slideLocation + "px",
        }}
      >
        {data &&
          data.map((data, i) => (
            <RecommendedLocation data={data} key={data.location + i} />
          ))}
      </div>
    </div>
  );
}

export default RecommendedLocationList;
