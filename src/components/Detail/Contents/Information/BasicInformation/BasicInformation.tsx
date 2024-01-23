import { AiOutlineLink } from "react-icons/ai";
import { FaRegClock } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdPlace } from "react-icons/md";

import styles from "./BasicInformation.module.scss";

import MapInDetail from "./MapInDetail/MapInDetail";

function BasicInformation() {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>기본정보</div>
      <MapInDetail />
      <div className={styles.container__contents}>
        <div className={styles.container__contents__item}>
          <MdPlace color="#979C9E" fontSize="2.4rem" />
          <span>경기도 양평군 양평읍 백안리 9 </span>
        </div>
        <div className={styles.container__contents__item}>
          <IoMdCall color="#979C9E" fontSize="2.4rem" />
          <span>031-771-1234</span>
        </div>
        <div className={styles.container__contents__item}>
          <AiOutlineLink color="#979C9E" fontSize="2.4rem" />
          <a href="#">공식 홈페이지 바로가기 </a>
        </div>
        <div className={styles.container__contents__item}>
          {/* 시계 아이콘 다름 */}
          <FaRegClock color="#979C9E" fontSize="2.4rem" />
          <span>매일 09:00~18:00</span>
        </div>
      </div>
    </div>
  );
}

export default BasicInformation;
