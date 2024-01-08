import { useEffect, useState } from "react";

import styles from "./SearchKeyword.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import { getData } from "@/mocks/handlers/home";

function SearchKeyword() {
  const [data, setData] = useState<string[] | undefined>();
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  useEffect(() => {
    getData<string[] | undefined>("home/search/keyword", setData);
  }, []);

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
          overflow: size.width < 450 ? "scroll" : "visible",
          left: slideLocation + "px",
        }}
      >
        {data ? (
          data.map((keyword, i) => <p key={keyword + i}>{keyword}</p>)
        ) : (
          <p>키워드가 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default SearchKeyword;
