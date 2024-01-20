import { useState } from "react";

import styles from "./PopularList.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

interface PropsType {
  setArea: React.Dispatch<React.SetStateAction<string>>;
  setSigungu: React.Dispatch<React.SetStateAction<string>>;
}

function PopularList({ setArea, setSigungu }: PropsType) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  const locations = ["제주", "부산", "강릉", "속초", "경주", "여수", "전주"];

  function setLocation(location: string) {
    if (location === "제주") {
      setArea("제주");
      setSigungu("전체");
    }
    if (location === "부산") {
      setArea("부산");
      setSigungu("전체");
    }
    if (location === "강릉") {
      setArea("강원");
      setSigungu("강릉시");
    }
    if (location === "속초") {
      setArea("강원");
      setSigungu("속초시");
    }
    if (location === "경주") {
      setArea("경북");
      setSigungu("경주시");
    }
    if (location === "여수") {
      setArea("전남");
      setSigungu("여수시");
    }
    if (location === "전주") {
      setArea("전북");
      setSigungu("전주시");
    }
  }

  return (
    <div className={styles.container}>
      <SlideButton
        slideLocation={slideLocation}
        setSlideLocation={setSlideLocation}
        itemWidth={58}
        flexGap={8}
        itemNumber={locations.length}
        slideSize={size}
        buttonSize={24}
      />
      <div
        className={styles.slide}
        ref={componentRef}
        style={{
          overflow: size.width < 449 ? "scroll" : "visible",
          left: slideLocation + "px",
        }}
      >
        {locations.map((location, i) => (
          <p
            id={location + i}
            onClick={() => {
              setLocation(location);
            }}
          >
            {location}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PopularList;
