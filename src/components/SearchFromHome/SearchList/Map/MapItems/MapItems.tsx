import { useEffect, useState } from "react";

import styles from "./MapItems.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import MapItem from "./MapItem/MapItem";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType[];
  categoryChange: boolean;
  slideLocation: number;
  throttlePermission: boolean;
  setCurrentPin: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSlideLocation: React.Dispatch<React.SetStateAction<number>>;
}

function MapItems({
  data,
  categoryChange,
  slideLocation,
  throttlePermission,
  setCurrentPin,
  setSlideLocation,
}: PropsType) {
  const [componentRef, size] = useComponentSize();
  const [firstPin, setFirstPin] = useState(true);
  const [throttle, setThrottle] = useState(true);

  function setCurrentIndex() {
    const criterion = document.querySelector("#map_slide_container");
    const elements = document.querySelectorAll("#map_slide");
    const childrenArray = Array.from(elements[0].children);

    for (const item of childrenArray) {
      const currentLeft =
        criterion &&
        item.getBoundingClientRect().x - criterion.getBoundingClientRect().x;
      if (currentLeft) {
        if (0 < currentLeft && currentLeft < 150) {
          const index = childrenArray.indexOf(item);
          setCurrentPin(index);
        }
      }
    }
  }

  const handleScroll = () => {
    if (throttlePermission) {
      return;
    }
    if (throttle) {
      setThrottle(false);
    } else {
      setThrottle(true);
      setTimeout(async () => {
        setThrottle(false);
      }, 100);
    }
  };

  useEffect(() => {
    if (size.width < 449) {
      componentRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      setSlideLocation(0);
    }
  }, [data, size, componentRef]);

  useEffect(() => {
    if (size.width > 449) {
      if (firstPin) {
        setFirstPin(false);
      } else {
        setTimeout(() => {
          setCurrentIndex();
        }, 500);
      }
    }
  }, [slideLocation]);

  useEffect(() => {
    if (size.width < 449) {
      if (firstPin) {
        setFirstPin(false);
      } else {
        if (throttle) {
          setCurrentIndex();
        }
      }
    }
  }, [throttle]);

  return (
    <div className={styles.container} id="map_slide_container">
      {data && (
        <SlideButton
          // ref의 left값 state
          slideLocation={slideLocation}
          // left값 setState
          setSlideLocation={setSlideLocation}
          // 리스트 목록 아이템의 width
          itemWidth={335}
          // 리스트의 갭
          flexGap={8}
          // 아이템 갯수
          itemNumber={data.length}
          // 목록 전체 넓이
          slideSize={size}
        />
      )}
      <div
        className={styles.slide_box}
        ref={componentRef}
        id="map_slide"
        style={{
          overflow: size.width < 449 ? "scroll" : "visible",
          left: slideLocation + "px",
        }}
        onScroll={handleScroll}
      >
        {data &&
          data.map((data, i) => (
            <MapItem
              data={data}
              key={data.title + i}
              categoryChange={categoryChange}
            />
          ))}
      </div>
    </div>
  );
}

export default MapItems;
