import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import styles from "./Others.module.scss";

import useComponentSize from "@/hooks/useComponetSize";

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
        <button
          className={styles.container__slideContainer__leftBtn}
          style={{ display: slideLocation === 0 ? "none" : "block" }}
          onClick={() => {
            setSlideLocation(slideLocation + 160);
          }}
        >
          <AiOutlineLeft
            className={styles.container__slideContainer__leftBtn__icon}
          />
        </button>
        <button
          className={styles.container__slideContainer__rightBtn}
          style={{
            display: -slideLocation >= 160 * 4 - size.width ? "none" : "block",
          }}
          onClick={() => {
            setSlideLocation(slideLocation - 160);
          }}
        >
          <AiOutlineRight
            className={styles.container__slideContainer__rightBtn__icon}
          />
        </button>
        <div
          className={styles.container__slideContainer__slide}
          style={{ left: slideLocation + "px" }}
          ref={componentRef}
        >
          {othersData.map((data) => (
            <OtherCard
              image={data.image}
              name={data.name}
              location={data.location}
              point={data.point}
              count={data.count}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Others;
