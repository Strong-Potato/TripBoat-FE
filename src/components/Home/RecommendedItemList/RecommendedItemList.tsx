import { useEffect, useState } from "react";

import styles from "./RecommendedItemList.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import { getData } from "@/mocks/handlers/home";

import RecommendedItem from "./RecommendedItem/RecommendedItem";

import { RecommendedItemDataType } from "@/types/home";

interface PropsType {
  apiNum: number;
}

function RecommendedItemList(apiNum: PropsType) {
  const [data, setData] = useState<RecommendedItemDataType[]>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  useEffect(() => {
    getData<RecommendedItemDataType[] | undefined>(
      `home/recommendedItem/${apiNum.apiNum}`,
      setData,
    );
  }, [apiNum]);

  return (
    <div className={styles.container}>
      {data && (
        <SlideButton
          // ref의 left값 state
          slideLocation={slideLocation}
          // left값 setState
          setSlideLocation={setSlideLocation}
          // 리스트 목록 아이템의 width
          itemWidth={144}
          // 리스트의 갭
          flexGap={16}
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
            <RecommendedItem data={data} key={data.title + i} />
          ))}
      </div>
    </div>
  );
}

export default RecommendedItemList;
