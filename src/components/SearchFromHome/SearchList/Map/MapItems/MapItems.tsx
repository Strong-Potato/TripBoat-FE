import { useEffect, useState } from "react";

import styles from "./MapItems.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import MapItem from "./MapItem/MapItem";

import { SearchItemType } from "@/types/home";

interface PropsType {
  data: SearchItemType[];
  categoryChange: boolean;
}

function MapItems({ data, categoryChange }: PropsType) {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  useEffect(() => {
    if (size.width < 449) {
      componentRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      setSlideLocation(0);
    }
  }, [data, size, componentRef]);

  return (
    <div className={styles.container}>
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
        style={{
          overflow: size.width < 449 ? "scroll" : "visible",
          left: slideLocation + "px",
        }}
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
