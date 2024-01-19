import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import styles from "./User.module.scss";

import MapPin from "@/assets/icons/mapPin.svg?react";
import Pencil from "@/assets/icons/pencil.svg?react";
import Star from "@/assets/icons/star.svg?react";

const userInfo = {
  nickname: "개발토끼",
  image: "https://avatars.githubusercontent.com/u/100336573?v=4",
};

function User() {
  // const [userInfo, setUserInfo] = useState({
  //   nickname: "",
  //   profile: profileDefault,
  // });
  const [alertOn, setAlertOn] = useState(
    Notification.permission === "granted" ? true : false,
  );
  const navigate = useNavigate();

  const onClickAlert = () => {
    if (Notification.permission === "denied") {
      //브라우저 알림 설정이 해제되어있습니다 alert
      return;
    }

    setAlertOn(!alertOn);
  };

  return (
    <div className={styles.container}>
      <h1>마이페이지</h1>

      <section className={styles.profile}>
        <div
          className={styles.profile__image}
          style={{ backgroundImage: `url(${userInfo.image})` }}
        >
          <button
            className={styles.profile__image__edit}
            onClick={() => {
              navigate("/user/edit/profile");
            }}
          >
            <Pencil width={16} height={16} />
          </button>
        </div>

        <div className={styles.profile__userName}>{userInfo.nickname}</div>
      </section>

      <section className={styles.mywork}>
        <button className={styles.mywork__space}>
          <MapPin />
          <div className={styles.myworkTitle}>내 여행 스페이스</div>
        </button>

        <button className={styles.mywork__review}>
          <Star />
          <div className={styles.myworkTitle}>내 리뷰</div>
        </button>
      </section>

      <ul className={styles.infoDetail}>
        <li
          onClick={() => {
            navigate("/user/privacy");
          }}
        >
          <div>계정 관리</div>
          <RiArrowRightSLine size="24" />
        </li>

        <li>
          <div>알림</div>
          <button
            onClick={onClickAlert}
            className={`${styles.infoDetail__alert} ${
              alertOn ? styles.on : styles.off
            }`}
          >
            <div className={styles.alertState}></div>
          </button>
        </li>

        <li>
          <div>버전 정보</div>
          <div className={styles.version}>1.1.0</div>
        </li>
      </ul>
    </div>
  );
}

export default User;
