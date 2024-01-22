import { useNavigate } from "react-router-dom";

import styles from "./Mywork.module.scss";

import MapPin from "@/assets/icons/mapPin.svg?react";
import Star from "@/assets/icons/star.svg?react";

function Mywork() {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <button
        onClick={() => {
          navigate("/user/myspace");
        }}
      >
        <MapPin />
        <div className={styles.title}>내 여행 스페이스</div>
      </button>

      <div className={styles.colBar}></div>

      <button
        onClick={() => {
          navigate("/user/myreview");
        }}
      >
        <Star />
        <div className={styles.title}>내 리뷰</div>
      </button>
    </section>
  );
}

export default Mywork;
