import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import styles from "./MypageList.module.scss";

import AlertIcon from "@/assets/icons/error-warning-line.svg?react";

function MypageList() {
  const [alertOn, setAlertOn] = useState(
    Notification.permission === "granted" ? true : false,
  );
  const navigate = useNavigate();

  const onClickAlert = () => {
    if (Notification.permission === "denied") {
      return;
    }

    setAlertOn(!alertOn);
  };

  return (
    <ul className={styles.container}>
      <li
        onClick={() => {
          navigate("/user/privacy");
        }}
      >
        <div>계정 관리</div>
        <RiArrowRightSLine size="24" />
      </li>

      <li className={styles.alert}>
        <div className={styles.alert__left}>
          알림
          <div className={styles.alert__left__tooltip}>
            <button type="button">
              <AlertIcon />
            </button>

            <ul className={styles.tooltipList}>
              <li>
                <span>
                  구글 크롬(Chrome) 브라우저에 최적화 되어 있어 크롬 브라우저
                  사용을 권장합니다.
                </span>
              </li>
              <li>
                <span>
                  브라우저의 알림 설정을 켜주셔야 서비스 알림을 받을 수
                  있습니다.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={onClickAlert}
          className={`${styles.alert__button} ${
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
  );
}

export default MypageList;
