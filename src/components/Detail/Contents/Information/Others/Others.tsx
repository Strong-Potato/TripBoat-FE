import { useState } from "react";

import styles from "./Others.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

import SlideButton from "@/components/SlideButton/SlideButton";

import OtherCard from "./OtherCard/OtherCard";

function Others() {
  const [slideLocation, setSlideLocation] = useState<number>(0);
  const [componentRef, size] = useComponentSize();

  const othersData = [
    {
      image:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      name: "호텔 loft",
      location: "제주",
      point: "5.0",
      count: 803,
    },
    {
      image:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      name: "호텔 loft",
      location: "제주",
      point: "5.0",
      count: 803,
    },
    {
      image:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      name: "호텔 loft",
      location: "제주",
      point: "5.0",
      count: 803,
    },
    {
      image:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      name: "호텔 loft",
      location: "제주",
      point: "5.0",
      count: 803,
    },
    {
      image:
        "https://m.eejmall.com/web/product/big/201708/211_shop1_627935.jpg",
      name: "호텔 loft",
      location: "제주",
      point: "5.0",
      count: 803,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <h3>주변 다른 숙소</h3>
      </div>
      <div className={styles.container__slideContainer}>
        {othersData && (
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
            itemNumber={othersData.length}
            // 목록 전체 넓이
            slideSize={size}
          />
        )}
        <div
          className={styles.container__slideContainer__slide}
          ref={componentRef}
          style={{
            overflow: size.width < 410 ? "scroll" : "visible",
            left: slideLocation + "px",
          }}
        >
          {othersData.map((data) => (
            <OtherCard
              image={data.image}
              name={data.name}
              location={data.location}
              point={data.point}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Others;
