import { useEffect, useState } from "react";

import styles from "./MapItems.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import MapItem from "./MapItem/MapItem";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType[];
  categoryChange: boolean;
  setCurrentPin: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function MapItems({ data, categoryChange, setCurrentPin }: PropsType) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();
  const [throttle, setThrottle] = useState(false);
  const [firstPin, setFirstPin] = useState(true);

  function setCurrentIndex() {
    const criterion = document.querySelector("#map_slide_container");
    const elements = document.querySelectorAll("#map_slide");
    const childrenArray = Array.from(elements[0].children);

    for (const item of childrenArray) {
      const currentLeft =
        criterion &&
        item.getBoundingClientRect().x - criterion.getBoundingClientRect().x;
      if (currentLeft) {
        if (0 < currentLeft && currentLeft < 335) {
          const index = childrenArray.indexOf(item);
          setCurrentPin(index);
        }
      }
    }
  }

  const handleScroll = () => {
    if (throttle) return;
    if (!throttle) {
      setThrottle(true);
      setTimeout(async () => {
        setThrottle(false);
      }, 1000);
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
        setTimeout(() => {
          setCurrentPin(0);
        }, 200);
        setFirstPin(false);
      } else {
        setTimeout(() => {
          setCurrentIndex();
        }, 600);
      }
    }
  }, [slideLocation]);

  useEffect(() => {
    if (size.width < 449) {
      if (firstPin) {
        setTimeout(() => {
          setCurrentPin(0);
        }, 300);
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
